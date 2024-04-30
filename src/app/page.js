'use client';
import React, { useState, useRef } from 'react';
import classNames from 'classnames';
import RootTheme from './theme';
import MyPage from './mypage/MyPage';
import RecipyList from './RecipyList/RecipyList';
import FreeBoard from '@/pages/FreeBoard/FreeBoard';
import Write from './recipy/Write';

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

function App() {
  const [bottomValue, setBottomValue] = React.useState(0);
  const noticeSnackbarStatus = useNoticeSnackbarStatus();
  return (
    <>
      <AppBar position="fixed">
        <Toolbar></Toolbar>
      </AppBar>
      <Toolbar />
      <NoticeSnackbar status={noticeSnackbarStatus} />

      {bottomValue == 0 && <Write noticeSnackbarStatus={noticeSnackbarStatus} />}
      {bottomValue == 1 && <RecipyList />}
      {bottomValue == 2 && <FreeBoard />}
      {bottomValue == 3 && <div className="navigation">길찾기</div>}
      {bottomValue == 4 && <MyPage />}

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
  );
}

export default function themeApp() {
  const theme = RootTheme();

  return <App />;
}
