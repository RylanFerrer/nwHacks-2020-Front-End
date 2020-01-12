import React from 'react';
import {Switch,Route} from 'react-router-dom'
import Home from './Components/Pages/Home'
import Details from './Components/Pages/Details'
import './App.css';
import "./Styles/main.css"
function App() {
  return(
  <Switch>
    <Route exact path = "/" component = {Home}/>
    <Route path = "/details" component = {Details}/>
  </Switch>
  )

}

export default App;
