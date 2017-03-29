import React from 'react';

const MenuItem = ({menuType}) => {
  const parseMenuItemName = (str) => {
    return str.join(" ")
  }

  return (
    <div className="menu-item">
      <img className="thumbnail"></img>
      <div className="item-desc">
        <div className="item-top">
          <div className="item-name"></div>
          <div className="item-price"></div>
        </div>
        <div className="item-mid">
          <div className="specifics"></div>
        </div>
        <div className="item-bottom">
          <a className="more-pics">
            <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default MenuItem;
