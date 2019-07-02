import { BrowserRouter as Router, Route } from "react-router-dom";
import React from 'react';
import './App.css';
import Home from './Components/Home'
import Country from './Components/Country'


function App() {
  return (
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/country/:name" component={Country} />
      </Router>
  );
}

export default App;
