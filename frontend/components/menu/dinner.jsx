import React from 'react';
import { withRouter } from 'react-router';
import MenuList from '../menu_items/menu_list';

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
          <MenuList name="dinner" />
         </div>
      </div>
    )
  }
}

export default withRouter(Dinner);
