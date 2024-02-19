import { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './Components/Homepage';
import Quizpage from './Components/Quizpage';
import Finalpage from './Components/Finalpage';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <div>
        <Link to="/"></Link>
        <Link to="/Quizpage"></Link>
      </div> */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="Quiz" element={<Quizpage />}></Route>
        <Route path="Final" element={<Finalpage />}></Route>
      </Routes>
    </>
  );
}

export default App;
