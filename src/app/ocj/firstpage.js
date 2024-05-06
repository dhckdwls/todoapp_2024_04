// FirstPage 컴포넌트
import React from 'react';
import { useNavigate } from 'react-router-dom';

function FirstPage() {
  const navigate = useNavigate();

  return (
    <>
      <h1>첫번째페이지</h1>
      <button onClick={() => navigate('/second')}>두번째페이지로 이동</button>
      <button onClick={() => navigate('/third')}>세번째페이지로 이동</button>
      <button onClick={() => navigate(-1)}>뒤로가기</button> {/* -1은 뒤로 가는 것을 의미합니다. */}
    </>
  );
}

export default FirstPage;
