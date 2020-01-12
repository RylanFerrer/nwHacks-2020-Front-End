import React from 'react';
import Chart from './Components/Charts/Chart'
import DistractionCharts from "./Components/Charts/DistractionCharts";
import logo from './logo.svg';
import './App.css';
import "./Styles/main.css"
import DistractionBreakdown from './Components/DistractionBreakdown'
import SessionTimer from './Components/SessionTimer'
import Environment from './Components/Environment';

function App() {
  return (
    <div className="App">
      <h1>Hackathon </h1>
      <DistractionBreakdown />
      <div> 
      <Chart/>
      <DistractionCharts/>
      </div>
    
      <SessionTimer />
      <Environment img = "" title = "light" data = {19} />
    </div>
  );
}

export default App;
