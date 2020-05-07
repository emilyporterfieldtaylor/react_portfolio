import React from 'react';
import './App.css';
import Header from "../src/Components/Header/Header"
import Index from '../src/Components/Index/index';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>  
    <Header/>
    <Switch>
    {/* this ensures that either / or home can be used to bring up homepage w/o breaking*/}
    <Route exact path={["/", "/index"]}><Index /></Route>
    </Switch>
  </Router>
  )
}

export default App;
