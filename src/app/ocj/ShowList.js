import React, { useState, useRef, useEffect } from 'react';

import axios from 'axios';
import classNames from 'classnames';

const ShowList = ({ articlesStatus }) => {
  return (
    <>
      <div>안녕</div>
      <div>
        <h2>글 목록</h2>
        <ul>
          {articlesStatus.articles.map((article) => (
            <li key={article.id}>
              <h1>{article.id}</h1>
              <h1>{article.title}</h1>
              <h1>{article.content}</h1>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ShowList;
