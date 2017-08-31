import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

class Contact extends Component {
  render() {
    return(
    <Router>
      <div>
        <h3> Contact</h3>
          <div className="contact">
            <img src="https://www.phactual.com/wp-content/uploads/2015/06/14344.jpeg" id="wes"/>
            <li><Link to="mailto:wes@anderson.com"> wes@anderson.com</Link></li>
            <li>555-5555 </li>
            <li><Link to="www.facebook.com"> Facebook</Link></li>
            <li><Link to="www.github.com"> GitHub</Link></li>
          </div>
      </div>
    </Router>
    )
  }
}

export default Contact  