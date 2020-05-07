import React from 'react';
import './App.css';
import Header from "../src/Components/Header/Header"
import Index from '../src/Components/Index/index';
import Contact from '../src/Components/Contact/Contact';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>  
    <Header/>
    <Switch>
    {/* this ensures that either / or home can be used to bring up homepage w/o breaking*/}
    <Route exact path={["/", "/index"]}><Index /></Route>
    <Route exact path={ "/contact"}><Contact /></Route>
    </Switch>
  </Router>
  )
}

export default App;
