import React from 'react';
import MenuList from '../menu_items/menu_list';

const Sides = (props) => {
  return (
    <div
      className="sides-container"
      id="sides">
      <div className="sides-wrapper">
        <div className="sides-headline">
          <h1>Sides</h1>
        </div>
        <MenuList name="sides" />
      </div>
    </div>
  );
};

export default Sides;
