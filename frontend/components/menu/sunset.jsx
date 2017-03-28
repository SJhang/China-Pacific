import React from 'react';

class Sunset extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="sunset-menu">
        <div className="menu-type-wrap">
          <h1 className="menu-title"></h1>
          <p className="menu-description"></p>
        </div>
      </div>
    )
  }
}

export default Sunset;
