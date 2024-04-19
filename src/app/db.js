// db.js

const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'teamproject_24_04',
});

module.exports = connection;

// 클라이언트 측에서는 아무런 코드를 export하지 않습니다.
