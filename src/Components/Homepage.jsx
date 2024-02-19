import React from 'react';
import './Homepage.css';
import Quizpage from './Quizpage';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="Page">
      <h1>Quiz</h1>
      <Link to="/Quiz">
        <button className="playbtn">Play</button>
      </Link>
    </div>
  );
}
export default HomePage;
