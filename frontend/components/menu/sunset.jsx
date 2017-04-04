import React from 'react';
import { withRouter } from 'react-router';

class Sunset extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div
        className="sunset-container"
        id="sunset"
        onScroll={(e) => handleScroll(e)}>
        <div className="sunset-wrapper">
          <div className="sunset-headline">
            <h1>Sunset</h1>
            <ul>
              <li>3 pm - 6 pm</li>
              <li>Served with Soup and Egg Roll</li>
            </ul>
          </div>
          <div className="sunset-list"></div>
        </div>
      </div>
    )
  }
}

export default withRouter(Sunset);
