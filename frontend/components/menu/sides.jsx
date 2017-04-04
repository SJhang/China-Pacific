import React from 'react';

const Sides = (props) => {
  const handleScroll = (e) => {
    debugger;
  };

  return (
    <div
      className="sides-container"
      id="sides"
      onScroll={(e) => handleScroll(e)}>
      <div className="sides-wrapper">
        <div className="sides-headline">
          <h1>Sides</h1>
        </div>
        <div className="sides-list"></div>
      </div>
    </div>
  )
}

export default Sides;
