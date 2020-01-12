import React from 'react';
import Chart from './Components/Charts/Chart'
import logo from './logo.svg';
import './App.css';
import "./Styles/main.css"
import DistractionBreakdown from './Components/DistractionBreakdown'
import SessionTimer from './Components/SessionTimer'

function App() {
  return (
    <div className="App">
      <h1>Hackathon </h1>
      <DistractionBreakdown />
      <Chart/>
      <SessionTimer />
    </div>
  );
}

export default App;
