import React from 'react';
import Chart from './Components/Charts/Chart'
import DistractionCharts from "./Components/Charts/DistractionCharts";
import List from './Components/Todo List/List'
import './App.css';
import "./Styles/main.css"
import SessionTimer from './Components/SessionTimer'
import AmbientLight from './Components/AmbientLight';
import AmibientNoise from './Components/AmbientNoise'

function App() {
  const data =  {distracted: {chromewhatsapp: 7.505834900000082}, focused: {"visual studio code": 0.0, "task switching": 0.0, "chrome-work": 0.0},
  "noise": 55.96338602502391, "light": 40.700009765625005}
  return (
    <div className="App">
      <SessionTimer />
      <div className = "middle-container">
        <div className = "middle-container__ambient">
        <AmbientLight data = {Math.floor(data.light)} />
        <AmibientNoise noiseData = {Math.floor(data.noise)}/>
        </div>
        <List/>
      </div>
      
      <div className = "chart__container"> 
      <Chart/>
      <DistractionCharts distractedData = {data.distracted}/>
      </div> 
  
     
    </div>
  );
}

export default App;
