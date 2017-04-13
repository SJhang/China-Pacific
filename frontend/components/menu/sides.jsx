import React from 'react';
import MenuList from './menu_item';

const Sides = (props) => {

  return (
    <div
      className="sides-container"
      id="sides">
      <div className="sides-wrapper">
        <div className="sides-headline">
          <h1>Sides</h1>
        </div>
        <div className="sides-list-wrapper">
          <MenuList menuType={"Chick Broccoli"}/>
          <MenuList />
          <MenuList />
        </div>
      </div>
    </div>
  );
};

export default Sides;
