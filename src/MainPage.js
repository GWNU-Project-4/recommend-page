// src/MainPage.js
import React from 'react';
import { Link } from 'react-router-dom';

function MainPage() {
  return (
    <div>
      <h1>메인 페이지</h1>
      <p>아래에서 선택하세요:</p>

      {/* 자동차 추천 페이지로 이동 */}
      <Link to="/car-recommendations">
        <button>자동차 추천</button>
      </Link>

      {/* 여행지 추천 페이지로 이동 */}
      <Link to="/travel-recommendations">
        <button>여행지 추천</button>
      </Link>
    </div>
  );
}

export default MainPage;
