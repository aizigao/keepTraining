var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '777888999',
  database: 'ANTI_PATTERNS'
});

connection.connect();


// var sql = 'SELECT * FROM users WHERE id = ' + connection.escape(userId);
var sql = `
CREATE TABLE Contacts (
  product_id BIGINT UNSIGNED NOT NULL,
  account_id BIGINT UNSIGNED NOT NULL,
  PRIMARY KEY (product_id, account_id),
  FOREIGN KEY (product_id) REFERENCES Products(product_id),
  FOREIGN KEY (account_id) REFERENCES Accounts(account_id)
);
`

connection.query(sql, function (error, results, fields) {
  if (error) throw error;
  // ...
});
connection.end();