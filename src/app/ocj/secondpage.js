// SecondPage 컴포넌트
import React from 'react';
import { useNavigate } from 'react-router-dom';

function SecondPage() {
  const navigate = useNavigate();

  return (
    <>
      <h1>두번째페이지</h1>
      <button onClick={() => navigate('/')}>첫번째페이지로 이동</button>
      <button onClick={() => navigate('/third')}>세번째페이지로 이동</button>
      <button onClick={() => navigate(-1)}>뒤로가기</button>
    </>
  );
}

export default SecondPage;
