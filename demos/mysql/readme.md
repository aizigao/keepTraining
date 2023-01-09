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

### 单纯的数
