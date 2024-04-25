// src/app/util/database.js
import { createConnection } from 'mysql2/promise';

const dbConnection = createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'teamProject_24_04',
  port: 3306,
});

export default dbConnection;
