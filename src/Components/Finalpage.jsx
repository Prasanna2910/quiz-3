import React from 'react';
import './Homepage.css';
import { Link } from 'react-router-dom';

function Final() {
  return (
    <div className="final">
      <h4
        style={{
          color: 'yellow',
          position: 'absolute',
          top: '-8px',
          left: '530px',
        }}
      >
        Result
      </h4>
      <div className="main">
        <h5 style={{ color: 'black' }}>You need more practice!</h5>
        <h2
          style={{
            color: 'Blue',
          }}
        >
          Your score is 20%
        </h2>
        <div className="line1">
          <p style={{ color: 'black' }}>Total number of questions</p>
          <p style={{ color: 'black' }}>15</p>
        </div>
        <div className="line2">
          <p style={{ color: 'black' }}>Number of attempted questions</p>
          <p style={{ color: 'black' }}>{localStorage.getItem('score')}</p>
        </div>
        <div className="line3">
          <p style={{ color: 'black' }}>Number of correct answers</p>
          <p style={{ color: 'black' }}>{localStorage.getItem('crt')}</p>
        </div>
        <div className="line4">
          <p style={{ color: 'black' }}>Number of wrong answers</p>
          <p style={{ color: 'black' }}>{localStorage.getItem('wro')}</p>
        </div>
      </div>
      <Link to="/Quizpage">
        <button
          style={{
            color: 'rgb(85, 31, 162)',
            position: 'absolute',
            top: '380px',
            left: '460px',
          }}
        >
          Play Again
        </button>
      </Link>
      <Link to="/">
        <button
          style={{
            color: 'green',
            position: 'absolute',
            top: '380px',
            left: '590px',
          }}
        >
          Back to home
        </button>
      </Link>
    </div>
  );
}
export default Final;
