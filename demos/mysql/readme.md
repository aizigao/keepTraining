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