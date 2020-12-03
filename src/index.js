import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './home/home'
import Adeola from './adeola/adeola'
import Skills from './skills/skills'
import Portfolio from "./portfolio/portfolio";
import Contact from "./contact/contact";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div>
      <Route path="/" exact component= { Home }>
        <Home />
      </Route>
      <Route path="/adeola" component= { Adeola }>
        <Adeola />
      </Route>
      <Route path="/skills" component= { Skills }>
        <Skills />
      </Route>
      <Route path="/portfolio" component= { Portfolio }>
        <Portfolio />
      </Route>
      <Route path="/contact" component= { Contact }>
        <Contact />
      </Route>
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
