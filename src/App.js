import React, {useEffect,useState} from 'react';
import Chart from './Components/Charts/Chart'
import DistractionCharts from "./Components/Charts/DistractionCharts";
import List from './Components/Todo List/List'
import './App.css';
import "./Styles/main.css"
import SessionTimer from './Components/SessionTimer';
import AmbientLight from './Components/AmbientLight';
import AmbientNoise from './Components/AmbientNoise';
import NoiseAnalysis from './Components/NoiseAnalysis';
import StudyGraph from './Components/StudyGraph'
import axios from 'axios'
function App() {
  const [isActive,setActive] = useState(false)
  const [data, setData] = useState( {distracted: {chromewhatsapp: 7.505834900000082}, focused: {"visual studio code": 0.0, "task switching": 0.0, "chrome-work": 0.0},
  "noise": 55.96338602502391, "light": 40.700009765625005})
  const toggle  =  () => {
    setActive(!isActive);
  }
  const tick = async() => {
    for(let item in data.distracted) {
        if(item in productivityData)
        {
         productivityData[item] += data.distracted[item]
        } else {
          productivityData = {...productivityData, [item]:data.distracted[item] }
        }
    } 
    const results = await axios.get("http://localhost:5000/")
    setData(results.data)
  }
  useEffect(() => {
    let interval = null;
    if(isActive) {
      interval = setInterval(tick, 10000)
    } else if (!isActive) {
      clearInterval(interval);
    } 
    return () => clearInterval(interval);

  }, [isActive,tick])
  let productivityData = {}

  return (
    <div className="App">
      <SessionTimer  sessionToggle = {toggle}/>
      <div className = "chart__container"> 
      <Chart data = {data}/>
      <DistractionCharts distractedData = {data.distracted}/>
      </div> 
      <div className = "middle-container">
        <div className = "middle-container__ambient">
        <AmbientLight data = {Math.floor(data.light)} />
        <AmbientNoise noiseData = {Math.floor(data.noise)}/>
        </div>
        <List/>
      </div>
      <NoiseAnalysis />
      <StudyGraph/>
    </div>
  );
}

export default App;
