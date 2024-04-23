// src/app/lib/db.js

const mysql = require('mysql2/promise');

// MySQL 연결 설정
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '', // 패스워드 입력
  database: 'teamproject_24_04',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  port: 3306,
});

// 쿼리 실행 함수
async function query(sql, values) {
  const [rows, fields] = await pool.execute(sql, values);
  return rows;
}

module.exports = {
  query,
};
