## 前言

1. 表名 首字母大写 Accounts BugsProducts
2. 列 小写下划线 account_name

![](images/2023-01-09-15-17-12.png)

![](images/2023-01-09-15-28-33.png)

## 逻辑型反模式

### 乱穿马路

逗号表达式

查询指定产品帐号

```sql
SELECT * FROM Products As p JOIN Accounts AS a
  ON p.account_id REGEXP '[[:<:]]' || a.account_id || '[[:>:]]'
WHERE p.product_id = 123;
```

![](images/2023-01-09-18-06-35.png)

===> 交叉表

```sql
CREATE TABLE Contacts (
  product_id BIGINT UNSIGNED NOT NULL,
  account_id BIGINT UNSIGNED NOT NULL,
  PRIMARY KEY (product_id, account_id),
  FOREIGN KEY (product_id) REFERENCES Products(product_id),
  FOREIGN KEY (account_id) REFERENCES Accounts(account_id)
);
```

指定帐号的产品的所有属性

```sql
SELECT * from Products as p JOIN Contacts as c
  ON (p.account_id = c.account_id)
  WHERE c.product_id = 34;
```

帐号细节

```sql
SELECT a.*
FROM Accounts AS a JOIN Contacts AS c
ON (a.account_id = c.account_id)
WHERE c.product_id = 34;
```

每个产品下的帐号数量

```sql
SELECT product_id, COUNT(*) AS accounts_per_product
FROM Contacts
GROUP BY product_id;
```

每个帐号下产品数

```sql
SELECT account_id, COUNT(*) AS accounts_per_product
FROM Contacts
GROUP BY account_id;
```

关联帐号最多产品

```sql
SELECT product_id, COUNT(*) AS accounts_per_product
FROM Contacts
GROUP BY product_id;
```

帐号最多的产品 TODO:xxx

```sql
SELECT c.product_id, c.account_per_product

FROM (
  SELECT product_id, COUNT(*) AS accounts_product
  FROM Contacts
  GROUP BY product_id
) as c
HAVING c.accounts_per_product = MAX(c.accounts_per_product);
```

更新指定产品的相关联系人

```sql
INSERT INTO Contacts (product_id, account_id) VALUES (456,34);
DELETE FROM Contacts WHERE product_id = 456 AND account_id = 34;
```

### 单纯的树

评论可以评论原文， 相互评论

反

检索回复会很长

```sql
CREATE TABLE Comments(
  comment_id SERIAL PRIMARY KEY,
  parent_id BIGINT UNSIGNED,
  comment TEXT NOT NULL,
  FOREIGN KEY (parent_id) REFERENCES Comments(comment_id)
)
```

**名词**

- root
- leaf
- nonleaf

**[反] 总是依赖父节点**

邻接表
![](images/2023-01-10-11-00-11.png)
![](images/2023-01-10-11-02-08.png)

使用邻接表查询所有后代

查询两层

```sql
SELECT c1.*, c2.*
FROM Comments c1 LEFT OUTER JOIN Comments c2
  ON c2.parent_id = c1.comment_id;

```

笨拙，count() 困难

```sql
SELECT c1.*, c2.*, c3.*, c4.*
  FROM Comments c1 -- 1st level
    LEFT OUTER JOIN Comments c2
      ON c2.Parent_id =  c1.Comment_id -- 2nd level
    LEFT OUTER JOIN Comments c3
      ON c3.Parent_id c2.Comment_id -- 3rd level
    LEFT OUTER JOIN Comments c4
      ON c4.Parent_id c3.Comment_id; -- 4th level
```

一些情况下邻接表比较方便, 增加节点

```sql
UPDATE INTO Comments (bug_id, parent_id, author, comment)
  VALUES (1234, 7, 'Kukla', 'thanks')
```

更新节点位置

```sql
UPDATE SET parent_id = 3 WHERE comment_id = 6;
```

删除节点会很复杂, 目标删除 4，保证外键完整要查找所有子节点

```sql
SELECT comment_id FROM Comments WHERE parent_id = 4; -- 5,6
SELECT comment_id FROM Comments WHERE parent_id = 5; -- none
SELECT comment_id FROM Comments WHERE parent_id = 6; -- 7
SELECT comment_id FROM Comments WHERE parent_id = 7; -- none

DELETE FROM Comments WHERE comment_id IN (7);
DELETE FROM Comments WHERE comment_id IN (5,6);
DELETE FROM Comments WHERE comment_id = 4;
```

**[方案] 使用其他树模型**

目前的 MySQL、MariaDB 和主流数据库都支持 CTE 递归查询了

```sql
-- 表结构
CREATE TABLE Comments (
  comment_id SERIAL PRIMARY KEY,
  parent_id BIGINT UNSIGNED,
  author VARCHAR(20),
  content VARCHAR(255)
);

-- 插入数据
INSERT INTO Comments (comment_id, parent_id, author, content) VALUES
(1, null, 'Fran', '这个Bug的成因是什么'),
(2, 1, 'Ollie', '我觉得是一个空指针'),
(3, 2, 'Fran', '不，我查过了'),
(4, 1, 'Kukla', '我们需要查无效输入'),
(5, 4, 'Ollie', '是的，那是个问题'),
(6, 4, 'Fran', '好，查一下吧'),
(7, 6, 'Kukla', '解决了'),
(8, 7, 'Fran', '非常棒');

-- 递归查找评论id为4的所有子评论
WITH RECURSIVE cte AS (
  SELECT * FROM Comments WHERE comment_id = 4    -- 条件：评论id = 4
  UNION                                          -- 递归：父评论id为此评论id的评论
  SELECT c.* FROM Comments c JOIN cte t WHERE c.parent_id = t.comment_id
)
SELECT * FROM cte;
```

- 路径枚举
- 嵌套表
- 闭包表

**路径枚举**

邻接表从树中获取一个给定节点的所有祖先开销大， 路径枚举所有祖先联合为一个字符串

```sql
CREATE TABLE Comments (
  comment_id SERIAL PRIMARY KEY,
  path VARCHAR(1000),
  parent_id BIGINT UNSIGNED,
  author VARCHAR(20),
  comment VARCHAR(255)
  comment_date DATETIME NOT NULL,
);
```

![](images/2023-01-10-15-07-03.png)

找到评论 7 的祖先

```sql

select *
from Comments As c
where '1/4/6/7/' like c.path || '%' -- 1/4/6/% , 1/4/% 1/%
```

找到评论 4 的后代

```sql
select *
from Comments As c
where c.path like '1/4/' || '%'
```

评论 4 下的每个用户的评论数量

```sql
select COUNT(*)
From Comments as c Where c.path like '1/4' || '%'
Group By c.author
```

insert

```sql
INSERT INTO Comments(author, comment) VALUES ('Ollie', 'Good Job!');

UPDATE Comments
  Set path = (Select path From Comments Where comment_id = 7)
    || LAST_INSERT_ID() || '/'
  Where comment_id = LAST_INSERT_ID()
```

存在乱穿马路的问题

**嵌套集**

```sql
CREATE TABLE Comments (
  comment_id SERIAL PRIMARY KEY,
  nsleft INTEGER NOT NULL,
  nsright INTEGER NOT NULL,
  parent_id BIGINT UNSIGNED,
  author VARCHAR(20),
  comment VARCHAR(255)
  comment_date DATETIME NOT NULL,
);
```

nsleft 的数值小于节点的所有后代 id， nsright 大于节点的所有后代

深度递归，进入时分配 nsleft, 返回时分配 nsright

![](images/2023-01-10-15-45-32.png)
![](images/2023-01-10-15-47-08.png)

查找 #4 及其后代

```sql
SELECT c2.*
FROM Comments As c1
  JOIN Comments As c2
  ON c2.nsleft BETWEEN c1.nsleft AND c1.nsright
WHERE c1.comment_id = 4;
```

查找 #6 及其祖先

```sql
SELECT c2.*
FROM Comments As c1
  JOIN Comments As c2
  ON c1.nsleft BETWEEN c2.nsleft AND c2.nsright
WHERE c1.comment_id = 6;
```

当你要删除一个非叶子节点时，他的后代会自动代替被删除的节点，成为直接祖先的直接后代

![](images/2023-01-10-16-03-01.png)

**闭包表**

```sql
CREATE TABLE Comments (
  comment_id SERIAL PRIMARY KEY,
  parent_id BIGINT UNSIGNED,
  author VARCHAR(20),
  comment VARCHAR(255)
  comment_date DATETIME NOT NULL,
);

CREATE TABLE TreePaths (
  ancestor BIGINT UNSIGNED NOT NULL,
  descendant BIGINT UNSIGNED NOT NULL,
  PRIMARY KEY (ancestor, descendant),
  FOREIGN KEY (ancestor) REFERENCES Comments(comment_id),
  FOREIGN KEY (descendant) REFERENCES Comments(comment_id)
);
```

![](images/2023-01-10-16-07-31.png)

**\#4 的后代**

```sql

select c.*
from comments as c
  JOIN TreePaths as t ON c.comment_id = t.descendant
Where t.ancestor = 4
```

**\#6 的后代**

```sql
select c.*
from comments as c
  JOIN TreePaths as t ON c.comment_id = t.ancestor
Where t.descendant = 6
```

**insert**

为 5 增加一个子节点

```sql
INSERT INTO TreePaths (ancestor, descendant)
  select t.ancestor, 8
  from TreePaths as t
  where t.descendant = 5
  union all
  select 8, 8;
```

删除 7

```sql
delete from TreePaths where descendant = 7;
```

删除 4 及后代

```sql
Delete from TreePaths
Where descendant in (
  Select descendant
  From TreePaths
  Where ancestor = 4
);
```

![](images/2023-01-10-16-20-06.png)

---

### 需要 ID

```sql

create table ArticleTags (
  id SERIAL primary key,
  article_id BIGINT UNSIGNED NOT NULL,
  tag_id BIGINT UNSIGNED NOT NULL,
  FOREIGN KEY (article_id) REFERENCES Articles(id)
  FOREIGN KEY (tag_id) REFERENCES Tags(id)
)


-- 查询 327 下的文章数量, 数量不对，重复关联了

Select tag_id, COUNT(*) As article_per_tag
From ArticleTags Where tag_id = 327;
```

![](images/2023-01-10-17-32-42.png)