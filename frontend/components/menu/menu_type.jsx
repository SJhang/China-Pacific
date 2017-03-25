import React from 'react';

const MenuType = ({menuType}) => {
  return (
    <div className={menuType}>
      <div className="menu-type-wrap">
        <h1 className="menu-title"></h1>
        <p className="menu-description"></p>
      </div>
    </div>
  )
}

export default MenuType;
