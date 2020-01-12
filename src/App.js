import React from 'react';
import {Switch,Route} from 'react-router-dom'
import Home from './Components/Pages/Home'
import './App.css';
import "./Styles/main.css"
function App() {
  return(
  <Switch>
    <Route path = "/data" component = {Home}/>

  </Switch>
  )
}

export default App;
