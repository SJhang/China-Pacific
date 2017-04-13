import React from 'react';

const MenuItem = ({menuType}) => {
  const parseMenuItemName = (str) => {
    return str.join(" ");
  };

  return (
    <div className="menu-item">
      <img className="thumbnail"></img>
      <div className="item-contents">
        <h4>{menuType}</h4>
        <div className="item-desc">
          <div className="descriptions">
            <span className="calories"></span>
            <span className="protein"></span>
          </div>
          <p className="ingredients"></p>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
