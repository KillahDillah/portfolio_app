import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import BaseLayout from './BaseLayout';
import Home from "./Home";
import About from "./About";
import Portfolio from './Portfolio';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <BaseLayout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/portfolio" component={Portfolio} />
            </Switch>
          </BaseLayout>
        </div>
      </Router>
    );
  }
}

export default App;
