import React, { Component } from 'react';

class Portfolio extends Component {
  

  render() {
    return(
      <div>
        <h3> Look at you </h3>
          <div className="port-wrap">
            <img src="https://www.fillmurray.com/g/200/300" />
            <img src="https://www.fillmurray.com/200/300" />
            <div className="text">
              <p> Best movie = Fantastic Mr. Fox</p>
            </div>
          </div>
      </div>
    )
  }
}

export default Portfolio