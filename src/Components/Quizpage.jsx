import React, { useState } from 'react';
import './Homepage.css';
import resources from './resources/quizQuestion';
import { Link } from 'react-router-dom';
function Quiz() {
  const [state, setState] = useState(0);
  function next() {
    if (state == 14) {
      // setState(0)
      window.location.href = '/Final';
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
  return (
    <div className="quizpg">
      <div className="maindiv">
        <h2>Question</h2>
        <p>{resources[state].question}</p>
        <div className="btnsdiv">
          <button className="btn1">{resources[state].optionA}</button>
          <button className="btn2">{resources[state].optionB}</button>
          <button className="btn3">{resources[state].optionC}</button>
          <button className="btn4">{resources[state].optionD}</button>
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
        </div>
      </div>
    </div>
  );
}
export default Quiz;
