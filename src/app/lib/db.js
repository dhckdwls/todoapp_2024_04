import mysql from 'mysql';

// MySQL 연결 정보
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'teamproject_24_04',
});

// 연결 시작
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database: ', err);
    return;
  }
  console.log('Connected to the database.');
});

export default connection;
