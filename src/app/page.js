// 경로 src/app/page.js
'use client';
//리액트
import React, { useState, useEffect, useRef } from 'react';
//리코일
import { atom, useRecoilState, RecoilRoot } from 'recoil';
//리액트 라우터 돔
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
//db연결을 위한 axios
import axios from 'axios';
//날짜 변환 유틸

import classNames from 'classnames';
//테마 입히는거
import RootTheme from './theme';

import FirstPage from './ocj/firstpage';
import SecondPage from './ocj/secondpage';
import ThirdPage from './ocj/thirdpage';
import ZeroPage from './ocj/zeroPage';

function App() {
  return (
    <>
      <a href="/test">ㅈㅂㄷㄱ</a>

      <Router>
        <Routes>
          <Route path="/" element={<ZeroPage />} />
          <Route path="/first" element={<FirstPage />} />
          <Route path="/second" element={<SecondPage />} />
          <Route path="/third" element={<ThirdPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default function ThemeApp() {
  const theme = RootTheme();

  return (
    <RecoilRoot>
      <App />
    </RecoilRoot>
  );
}
