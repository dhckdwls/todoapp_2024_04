// ShowList 컴포넌트
import React from 'react';
import { Link } from 'react-router-dom';
import useArticlesStatus from '../RecipyStatus';

const ShowList = () => {
  const articlesStatus = useArticlesStatus();

  return (
    <div>
      <h2>글 목록</h2>
      <ul>
        {articlesStatus.articles.map((article) => (
          <li key={article.id}>
            {/* Link 컴포넌트를 사용하여 게시물 ID를 포함한 URL로 이동 */}
            <Link to={`/recipy/detail/${article.id}`}>
              <h1>{article.title}</h1>
              <p>{article.content}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowList;
