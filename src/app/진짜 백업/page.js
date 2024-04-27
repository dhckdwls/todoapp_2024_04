'use client';
import React, { useState, useRef } from 'react';
import classNames from 'classnames';
import RootTheme from './theme';
import MyPage from './mypage/MyPage';
import RecipyList from './RecipyList/RecipyList';
import FreeBoard from '@/pages/FreeBoard/FreeBoard';

import { AppBar, Toolbar, Box, BottomNavigation, BottomNavigationAction } from '@mui/material';

import {
  Person as PersonIcon,
  ShoppingBag as ShoppingBagIcon,
  Navigation as NavigationIcon,
  Forum as ForumIcon,
  Receipt as ReceiptIcon,
  Search as SearchIcon,
} from '@mui/icons-material';

function App() {
  const [bottomValue, setBottomValue] = React.useState(0);

  return (
    <>
      <AppBar position="fixed">
        <Toolbar></Toolbar>
      </AppBar>
      <Toolbar />

      {bottomValue == 0 && <div className="shopping">쇼핑</div>}
      {bottomValue == 1 && <RecipyList />}
      {bottomValue == 2 && <FreeBoard />}
      {bottomValue == 3 && <div className="navigation">길찾기</div>}
      {bottomValue == 4 && <MyPage />}

      <BottomNavigation />
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
