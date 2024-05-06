import React from 'react';
import { Link } from 'react-router-dom'; // Link를 import 해주세요.

export default function ZeroPage() {
  return (
    <>
      <h1>메인페이지</h1>
      <div>
        {/* Link 컴포넌트를 사용하여 각 페이지로 이동할 수 있는 링크를 만듭니다. */}
        <Link to="/first">
          <button>1페이지로 이동</button>
        </Link>
        <Link to="/second">
          <button>2페이지로 이동</button>
        </Link>
        <Link to="/third">
          <button>3페이지로 이동</button>
        </Link>
      </div>
    </>
  );
}
