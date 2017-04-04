import React from 'react';
import { withRouter } from 'react-router';

class Dinner extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div
        className="dinner-container"
        id="dinner"
        onScroll={(e) => handleScroll(e)}>
        <div className="dinner-wrapper">
          <div className="dinner-headline">
            <h1>Dinner</h1>
          </div>
          <div className="dinner-list"></div>
        </div>
      </div>
    )
  }
}

export default withRouter(Dinner);
