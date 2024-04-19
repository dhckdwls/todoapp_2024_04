'use client';
import React, { useState, useRef } from 'react';
import RootTheme from './theme';
import connection from './db';

import classNames from 'classnames';

import {
  AppBar,
  Toolbar,
  Box,
  BottomNavigation,
  BottomNavigationAction,
  TextField,
  Button,
} from '@mui/material';

import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function App() {
  const [value, setValue] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    // formData에서 제목과 내용을 추출합니다.
    const title = formData.get('title');
    const content = formData.get('content');

    // 서버에 데이터를 전송합니다.
    fetch('/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, content }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to insert post into database');
        }
        console.log('게시물이 성공적으로 추가되었습니다.');
        setFiles([]); // 파일 목록 초기화
      })
      .catch((error) => {
        console.error('게시물 삽입 중 오류 발생:', error);
      });
  };
  return (
    <>
      <AppBar position="fixed">
        <Toolbar />
      </AppBar>
      <Toolbar />

      <div>
        <form onSubmit={handleSubmit} className="tw-flex tw-flex-col tw-p-4 tw-gap-2">
          <TextField name="title" autoComplete="off" label="제목을 입력해주세요" />

          <TextField
            minRows={3}
            maxRows={10}
            multiline
            name="content"
            autoComplete="off"
            label="내용을 입력해주세요"
          />
          <Button variant="contained" className="tw-font-bold" type="submit">
            작성하기
          </Button>
          <Button variant="contained" className="tw-font-bold" type="submit">
            작성취소
          </Button>
        </form>
      </div>

      <BottomNavigation />
      <Box sx={{ position: 'fixed', bottom: 0, left: 0, width: '100%' }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}>
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
          <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
        </BottomNavigation>
      </Box>
    </>
  );
}

export default function themeApp() {
  const theme = RootTheme();

  return <App />;
}
