import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import CarRecommendations from './CarRecommendations';
import TravelRecommendations from './TravelRecommendations';

function MainPage() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>메인 페이지</h1>
        <p>자동차와 여행지 추천을 확인해보세요!</p>
        <Link to="/car-recommendations">
          <button>자동차 추천</button>
        </Link>
        <Link to="/travel-recommendations">
          <button>여행지 추천</button>
        </Link>
      </header>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/car-recommendations" element={<CarRecommendations />} />
        <Route path="/travel-recommendations" element={<TravelRecommendations />} />
      </Routes>
    </Router>
  );
}

export default App;
