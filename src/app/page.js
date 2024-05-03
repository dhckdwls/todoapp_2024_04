'use client';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import RootTheme from './theme';
import Detail from './Recipe/detail';

function App() {
  const navigate = useNavigate();

  return (
    <>
      <div>앱꺼 테스트</div>
      {/* 버튼을 클릭하면 '/Recipe/detail' 경로로 이동하도록 설정합니다. */}
      <button
        className="tw-btn tw-btn-sm tw-btn-outline"
        onClick={() => navigate('/Recipe/detail')}>
        디테일로 이동
      </button>
      <Routes>
        <Route path="/Recipe/detail" element={<Detail />} />
      </Routes>
    </>
  );
}

export default function themeApp() {
  const theme = RootTheme();

  return (
    <Router>
      {' '}
      {/* 이 부분에서 BrowserRouter를 직접 사용합니다. */}
      <App />
    </Router>
  );
}
