import React from 'react';
import './App.css';
import Header from "../src/Components/Header/Header"
import Index from '../src/Components/Index/index';
import Contact from '../src/Components/Contact/Contact';
import Portfolio from '../src/Components/Portfolio/Portfolio';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>  
    <Header/>
    <Switch>
    <Route exact path={["/", "react_portfolio/index"]}><Index /></Route>
    <Route exact path={ "react_portfolio/contact"}><Contact /></Route>
    <Route exact path={ "react_portfolio/portfolio"}><Portfolio /></Route>
    </Switch>
  </Router>
  )
}

export default App;
