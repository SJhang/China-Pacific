import React from 'react';

class Lunch extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="lunch-menu">
        <div className="menu-type-wrap">
          <h1 className="menu-title"></h1>
          <p className="menu-description"></p>
        </div>
      </div>
    )
  }
}

export default Lunch;
