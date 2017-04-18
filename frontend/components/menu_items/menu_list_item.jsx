import React from 'react';
import { Link } from 'react-router';

const MenuListItem = ({options}) => {

  if (!options.thumbnail_url) {

  };

  let currentUser = store.getState().session.currentUser.username;

  const renderEditButton = () => {
    const currentLocation = location.hash.split("#")[1];

    if (currentUser) {
      return (
        <Link to={`${currentLocation}/${options.id}`}>Edit</Link>
      )
    }
  };

  const renderSpiciness = () => {
    if (options.spiciness) {
      return (
        <i className="fa fa-fire" aria-hidden="true"></i>
      )
    }
  };

  const renderSauce = () => {
    if (options.sauce) {
      return (
        <span className="sauce">{options.sauce}</span>
      )
    }
  }

  const renderPrice = () => {
    let tag, price, weight, priceArr = [];

    for (var key in options.prices) {
      if (key === "small") {
        tag = "S";
        price = options.prices[key];
        weight = 1;
      } else if (key === "medium") {
        tag = "M";
        price = options.prices[key];
        weight = 2;
      } else if (key === "large") {
        tag = "L";
        weight = 3;
        price = options.prices[key];
      } else if (key === "main") {
        tag = "";
        price = options.prices[key];
        weight = 0;
      } else if (key === "lunch") {
        tag = "Lunch"
        price = options.prices[key];
        weight = 5;
      } else if (key === "dinner") {
        tag = "Dinner";
        price = options.prices[key];
        weight = 4;
      } else if (key === "sunset") {
        tag = "Sunset";
        price = options.prices[key];
        weight = 6;
      }
      priceArr.push([tag, price, weight]);
    }

    // _.sortBy(priceArr, ['weight']);

    return priceArr.map((p, idx) => (
      <span key={idx} className="price">
        <div>{p[0]}</div>
        <div>{`$ ${p[1]}`}</div>
      </span>
    ))
  };

  return (
    <div className="menu-item">
      <img
        className="thumbnail"></img>
      <div className="item-contents">
        <h4 id="item-name">{options.name}&nbsp;{renderSpiciness()}</h4>
        <div className="item-desc">
          <div className="properties">
            {renderSauce()}
          </div>
          <p className="ingredients">{options.ingredient}</p>
          <div className="descriptions">
            {renderPrice()}
          </div>
        </div>
      </div>
      {renderEditButton()}
    </div>
  );
};

export default MenuListItem;
