'use client';
import React, { useState, useEffect, useRef } from 'react';
import { atom, useRecoilState, RecoilRoot } from 'recoil';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import axios from 'axios';
import dateToStr from './dateUtil';
import classNames from 'classnames';
import RootTheme from './theme';

import MyPage from './mypage/MyPage';
import RecipyList from './RecipyList/RecipyList';
import FreeBoard from '@/pages/FreeBoard/FreeBoard';
import Write from './recipy/Write';
import RecipyDetail from './recipy/recipyDetail';
import {
  AppBar,
  Toolbar,
  Box,
  BottomNavigation,
  BottomNavigationAction,
  Snackbar,
  Alert,
} from '@mui/material';

import {
  Person as PersonIcon,
  ShoppingBag as ShoppingBagIcon,
  Navigation as NavigationIcon,
  Forum as ForumIcon,
  Receipt as ReceiptIcon,
  Search as SearchIcon,
} from '@mui/icons-material';

//스낵바 알림창 시작
function NoticeSnackbar({ status }) {
  return (
    <>
      <Snackbar
        open={status.opened}
        autoHideDuration={status.autoHideDuration}
        onClose={status.close}>
        <Alert variant={status.variant} severity={status.severity}>
          {status.msg}
        </Alert>
      </Snackbar>
    </>
  );
}

function useNoticeSnackbarStatus() {
  const [opened, setOpened] = React.useState(false);
  const [autoHideDuration, setAutoHideDuration] = React.useState(null);
  const [variant, setVariant] = React.useState(null);
  const [severity, setSeverity] = React.useState(null);
  const [msg, setMsg] = React.useState(null);

  const open = (msg, severity = 'success', autoHideDuration = 3000, variant = 'filled') => {
    setOpened(true);
    setMsg(msg);
    setSeverity(severity);
    setAutoHideDuration(autoHideDuration);
    setVariant(variant);
  };

  const close = () => {
    setOpened(false);
  };

  return {
    opened,
    open,
    close,
    autoHideDuration,
    variant,
    severity,
    msg,
  };
}
//스낵바 알림창 여기까지

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
        const response = await axios.get('/api/getArticles');
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
      regDate: dateToStr(new Date()), // Assuming dateToStr is defined elsewhere
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

function App() {
  const [bottomValue, setBottomValue] = React.useState(0);
  const noticeSnackbarStatus = useNoticeSnackbarStatus();
  const articlesStatus = useArticlesStatus();

  return (
    <Router>
      <>
        <AppBar position="fixed">
          <Toolbar></Toolbar>
        </AppBar>
        <Toolbar />
        <NoticeSnackbar status={noticeSnackbarStatus} />

        {bottomValue == 0 && (
          <Write noticeSnackbarStatus={noticeSnackbarStatus} articlesStatus={articlesStatus} />
        )}
        {bottomValue == 1 && <RecipyList articlesStatus={articlesStatus} />}
        {bottomValue == 2 && <FreeBoard />}
        {bottomValue == 3 && <RecipyDetail noticeSnackbarStatus={noticeSnackbarStatus} />}
        {bottomValue == 4 && <MyPage />}

        <Routes>
          <Route
            path="/"
            element={
              <Write noticeSnackbarStatus={noticeSnackbarStatus} articlesStatus={articlesStatus} />
            }
          />
          <Route
            path="/RecipyList/RecipyList"
            element={<RecipyList articlesStatus={articlesStatus} />}
          />
          <Route path="/freeboard" element={<FreeBoard />} />
          <Route
            path="/recipy/recipydetail/:id"
            element={<RecipyDetail noticeSnackbarStatus={noticeSnackbarStatus} />}
          />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>

        <Box sx={{ height: '50px' }} />
        <Box sx={{ position: 'fixed', bottom: 0, left: 0, width: '100%' }}>
          <BottomNavigation
            showLabels
            value={bottomValue}
            onChange={(event, newValue) => {
              setBottomValue(newValue);
            }}>
            <BottomNavigationAction label="쇼핑" icon={<ShoppingBagIcon />} />
            <BottomNavigationAction label="레시피" icon={<ReceiptIcon />} />
            <BottomNavigationAction label="자유게시판" icon={<ForumIcon />} />
            <BottomNavigationAction label="길찾기" icon={<NavigationIcon />} />
            <BottomNavigationAction label="마이페이지" icon={<PersonIcon />} />
          </BottomNavigation>
        </Box>
      </>
    </Router>
  );
}

export default function themeApp() {
  const theme = RootTheme();

  return (
    <RecoilRoot>
      {' '}
      {/* 리코일 루트로 감싸기 */}
      <App />
    </RecoilRoot>
  );
}
