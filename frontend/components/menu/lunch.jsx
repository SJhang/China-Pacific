import React from 'react';
import { withRouter } from 'react-router';
import MenuItem from './menu_item';

class Lunch extends React.Component {
  constructor(props) {
    super(props);

    this.renderPaths = this.renderPaths.bind(this);
  }
  componentWillMount() {
  }

  renderPaths() {
    this.props.routes.map((el, idx) => {
      if (el.path !== '/') {
        return (<span key={idx}>{el.path}</span>);
      }
    });
  }

  render () {
    return (
      <div
        className="lunch-container"
        id="lunch"
        onScroll={(e) => handleScroll(e)}>
        <div className="lunch-wrapper">
          <div className="lunch-headline">
            <h1>Lunch</h1>
            <ul>
              <li>11 A.M. - 3 P.M.</li>
              <li>Served with a Soup, an Egg Roll, and Fried Rice</li>
            </ul>
          </div>
          <div className="lunch-list"></div>
        </div>
      </div>
    )
  }
}

export default withRouter(Lunch);
