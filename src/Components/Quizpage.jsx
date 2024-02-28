import React, { useState } from 'react';
import './Homepage.css';
import resources from './resources/quizQuestion';
import { Link, useNavigate } from 'react-router-dom';
import FinalPage from './Finalpage';
function Quiz() {
  const [state, setState] = useState(0);
  const [data, setData] = useState({
    attempted: 0,
    correct: 0,
    wrong: 0,
    score: 0,
  });
  const Navigate = useNavigate();
  const [score, setScore] = useState(0);
  const [crt, setCrt] = useState(0);
  const [wro, setWro] = useState(0);

  function next() {
    if (state == 14) {
      console.log('vamsi');
    } else {
      setState(state + 1);
    }
  }
  function prev() {
    if (state == 0) {
      setState(14);
      console.log('Jatin');
    } else {
      setState(state - 1);
    }
  }
  const handleChange = (event) => {
    const questionState = state;
    const choosedOption = event.target.innerHTML;
    const CrtAns = resources[questionState].answer;

    if (choosedOption == CrtAns) {
      setScore(score + 1);
      setCrt(crt + 1);
      alert('Correct Answer');
      setData({
        ...data,
        correct: data.correct + 1,
        attempted: data.attempted + 1,
        score: data.score - 1,
      });
      next();
    } else {
      setWro(wro + 1);
      alert('Wrong Answer');
      setData({
        ...data,
        wrong: data.wrong + 1,
        attempted: data.attempted + 1,
        score: data.score - 1,
      });
      next();
    }
  };
  localStorage.setItem('score', score);
  localStorage.setItem('crt', crt);
  localStorage.setItem('wro', wro);

  return (
    <div className="quizpg">
      <div className="maindiv">
        <h2 style={{ color: 'black' }}>Question</h2>
        <p style={{ color: 'black' }}>{state + 1}of 15</p>
        <p style={{ color: 'black' }}>{resources[state].question}</p>
        <div className="btnsdiv">
          <button className="btn1" onClick={(e) => handleChange(e)}>
            {resources[state].optionA}
          </button>
          <button className="btn2" onClick={(e) => handleChange(e)}>
            {resources[state].optionB}
          </button>
          <button className="btn3" onClick={(e) => handleChange(e)}>
            {resources[state].optionC}
          </button>
          <button className="btn4" onClick={(e) => handleChange(e)}>
            {resources[state].optionD}
          </button>
        </div>
        <div className="Finalbtns">
          <button className="Preview" onClick={prev}>
            Previous
          </button>
          <button className="Next" onClick={next}>
            Next
          </button>
          <button
            className="Quit"
            onClick={() => alert('Hey!!Are you sure to quit?')}
          >
            Quit
          </button>
          <button
            onClick={() => {
              Navigate('/FinalPage', { state: data });
            }}
            className="Finish"
          >
            Finish
          </button>
        </div>
      </div>
    </div>
  );
}
export default Quiz;
