import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer'; 
import Navig from './components/Navig';
import Card from './components/CardComponent';
import {About} from './components/About';

import Container from './components/Container';

export default function App() {
  return (
    <Router>
      <div>
        
        <Navig /> 
        

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
         
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/card-component">
            <Card />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
