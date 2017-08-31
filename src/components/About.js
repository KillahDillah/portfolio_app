import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class About extends Component {
  
  render() {
    return(
      <div>
        <h3> You're too cool </h3>
        <img src="https://www.fillmurray.com/200/300" />
          <div className="home-form">
            <form onSubmit={this.onClick}>
              <Link to="./portfolio"><button type="submit" className="submit">Portfolio</button>
            </Link></form>
          </div>
      </div>
    )
  }
}

export default About;