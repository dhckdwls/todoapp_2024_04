'use client';
import React, { useState, useRef } from 'react';
import classNames from 'classnames';
import RootTheme from './theme';

import { Button, TextField } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FavoriteIcon from '@mui/icons-material/Favorite';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
function App() {
  return (
    <>
      <div className="tw-flex" style={{ border: '2px solid red' }}>
        <div style={{ width: '70%', border: '2px solid red' }}>
          <Button>
            <ArrowBackIcon />
            게시판으로 이동
          </Button>
        </div>
        <div style={{ width: '30%', border: '2px solid red' }}>
          <img
            style={{ height: '100px', width: '100px', borderRadius: '5%' }}
            src="https://picsum.photos/id/237/200/300"
          />
        </div>
      </div>

      <TextField></TextField>

      <div style={{ textAlign: 'center' }}>
        <h1>댓글</h1>
        <ul>
          <li className="tw-flex tw-items-center">
            <img
              style={{ width: '100px', height: '100px', borderRadius: '100%' }}
              src="https://picsum.photos/id/237/200/300"
            />
            <div style={{ border: '2px solid red', width: '70%' }}>
              <h1>회원1</h1>
              <h1>너무 맜있겟다</h1>
              <h1>2024.04.25 11:07</h1>
              <Button variant="contained">답글</Button>
              <Button variant="contained">수정</Button>
              <Button variant="contained">삭제</Button>
            </div>
          </li>
        </ul>
      </div>
      <div className="tw-flex">
        <form action="">
          <TextField id="outlined-basic" label="댓글 작성" />
          <Button variant="contained" type="submit">
            댓글작성
          </Button>
        </form>
      </div>
    </>
  );
}

export default function themeApp() {
  const theme = RootTheme();

  return <App />;
}
