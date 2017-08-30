import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class BaseLayout extends Component {
  render (){
    return(
        <div>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
            </ul>
          </nav>
          {this.props.children}
        </div>
    )
  }
}

export default BaseLayout;