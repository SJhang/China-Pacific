import React from 'react';

const Chef = (props) => {
  return (
    <div
      className="chef-container"
      id="chef"
      onScroll={(e) => handleScroll(e)}>
      <div className="chef-wrapper">
        <div className="chef-headline">
          <h1>Chef's Recommendation</h1>
        </div>
        <div className="chef-list"></div>
      </div>
    </div>
  )
}

export default Chef;
