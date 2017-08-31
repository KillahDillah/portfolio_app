import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import References from './components/References';

ReactDOM.render(
    <Router>
        <div className="App">
          <div>
          <nav>
            <ul>
              <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
              <li><NavLink activeClassName="active" to="/about">About</NavLink></li>
              <li><NavLink activeClassName="active" to="/portfolio">Portfolio</NavLink></li>
              <li><NavLink activeClassName="active" to="/contact">Contact</NavLink></li>
              <li><NavLink activeClassName="active" to="/references">References</NavLink></li>
            </ul>
          </nav>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/portfolio" component={Portfolio} />
              <Route path="/contact" component={Contact} />
              <Route path="/references" component={References} />
            </Switch>
          </div>
        </div>
      </Router>
  , document.getElementById('root'));
registerServiceWorker();





