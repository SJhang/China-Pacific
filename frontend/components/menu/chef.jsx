import React from 'react';
import MenuList from '../menu_items/menu_list';

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
        <MenuList name="chef" />
      </div>
    </div>
  )
}

export default Chef;
