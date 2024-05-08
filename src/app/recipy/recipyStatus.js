// 경로 : src/app/recipy/recipyStatus/recipyStatus.js
'use client';
//리액트
import React, { useState, useEffect, useRef } from 'react';
//리코일
import { atom, useRecoilState, RecoilRoot } from 'recoil';
//db연결을 위한 axios
import axios from 'axios';
//날짜 유틸
import dateToStr from '@/app/Ut/dateUtil';

//article 관련 스테이터스
const articlesAtom = atom({
  key: 'app/articlesAtom',
  default: [],
});

function useArticlesStatus() {
  const [articles, setArticles] = useRecoilState(articlesAtom);

  useEffect(() => {
    // API 호출하여 글 목록을 가져옴
    const fetchArticles = async () => {
      try {
        const response = await axios.get('/api/recipy/getArticles');
        setArticles(response.data);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    fetchArticles();
  }, []); // 마운트될

  // 작성
  const articleWrite = (boardId, title, content) => {
    const id = articles.length + 1; // Get the new id based on the current length of the articles array
    const newArticle = {
      id,
      boardId,
      title,
      content,
      regDate: dateToStr(new Date()),
      updateDate: dateToStr(new Date()), // Assuming dateToStr is defined elsewhere
    };
    setArticles((prevArticles) => [newArticle, ...prevArticles]);
  };

  // 삭제
  const articleDelete = (id) => {
    setArticles((prevArticles) => prevArticles.filter((article) => article.id !== id));
  };

  //아티클의 인덱스를 아이디로 찾기
  const findArticleIndexById = (id) => {
    return articles.findIndex((article) => article.id === id);
  };
  //찾아온 인덱스로 아티클 찾기
  const findArticleById = (id) => {
    const index = findArticleIndexById(id);

    if (index === -1) {
      return null;
    }

    return articles[index];
  };

  return {
    articles,
    articleWrite,
    articleDelete,
    findArticleIndexById,
    findArticleById,
  };
}
//article 관련 스테이터스 끝

export default useArticlesStatus;
