import React, {useEffect,useState} from 'react'
import {Redirect} from 'react-router-dom'
import Chart from '../Charts/Chart'
import DistractionCharts from "../Charts/DistractionCharts";
import List from '../Todo List/List'
import SessionTimer from '../SessionTimer'
import AmbientLight from '../AmbientLight';
import AmbientNoise from '../AmbientNoise';
import NoiseAnalysis from '../NoiseAnalysis';
import axios from 'axios'
import Course from '../Course';
export default function Home() {
  const [isActive,setActive] = useState(false)
  const [data, setData] = useState( {distracted: {}, focused: {"visual studio code": 0.0, "task switching": 0.0, "chrome-work": 0.0},
  "noise": 55.96338602502391, "light": 40.700009765625005})
  const [isRedirect, setRedirect] = useState(false)
  const toggle  =  () => {
    setActive(!isActive);
  }
  const changePage = () => {
      setRedirect(true)
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
    const results = await axios.get("http://localhost:5000/data")
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

  if(isRedirect) {
      return <Redirect to = "/details"/>
  }
  return (
    <div className="App">
      <div className="top-container">
          <Course name="CS 213"/>
          <SessionTimer changePage = {changePage} toggleSession = {toggle} />
      </div>
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
    </div>
  );
}
