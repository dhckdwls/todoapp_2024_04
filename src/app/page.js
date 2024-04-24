// src/app/page.js
'use client';
import React, { useState, useEffect } from 'react';
import mysql from 'mysql';

const conn = {
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '', // Enter your password here
  database: 'teamProject_24_04',
};

const handleMysql = () => {
  return new Promise((resolve, reject) => {
    const connection = mysql.createConnection(conn);

    connection.connect((err) => {
      if (err) {
        reject(err);
        return;
      }

      let sql = 'SELECT * FROM article';
      connection.query(sql, (error, data, fields) => {
        if (error) {
          reject(error);
        } else {
          resolve(data);
        }
        connection.end();
      });
    });
  });
};

const App = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Call handleMysql and update state with the returned data
    handleMysql()
      .then((result) => {
        setArticles(result);
      })
      .catch((error) => {
        console.error(error); // Handle any errors
      });
  }, []); // Empty dependency array to ensure the effect runs only once

  return (
    <div>
      <h1>Articles</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <h2>{article.title}</h2>
            <p>{article.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
