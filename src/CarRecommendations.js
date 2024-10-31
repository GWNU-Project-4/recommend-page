// src/CarRecommendations.js
import React from 'react';
import './CarRecommendations.css';

function CarRecommendations() {
  return (
    <div className="CarRecommendations">
      <h1>자동차 추천</h1>
      <ul>
        <li>
          <strong>자동차 명칭:</strong> Tesla Model 3
          <p>추천 이유: 전기차 중에서 가장 효율적이고 인기 있는 모델입니다.</p>
        </li>
      </ul>
    </div>
  );
}

export default CarRecommendations;
