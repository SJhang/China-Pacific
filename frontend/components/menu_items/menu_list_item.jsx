import React from 'react';
import { Link } from 'react-router';

const MenuListItem = ({options}) => {

  if (!options.thumbnail_url) {
    if (options.catagory === "appitizer") {
      options.thumbnail_url = "https://res.cloudinary.com/dvob94x30/image/upload/v1492617241/spring-rolls-2186506_1920_iavfzv.png";
    } else if (options.catagory === "soup") {
      options.thumbnail_url = "https://res.cloudinary.com/dvob94x30/image/upload/v1492617241/spring-rolls-2186506_1920_iavfzv.png";
    } else if (options.catagory === "entree") {
      options.thumbnail_url = "https://res.cloudinary.com/dvob94x30/image/upload/v1492617241/pork-barbecue-2098004_1920_updy8o.png";
    } else if (options.catagory === "chef") {
      options.thumbnail_url = "https://res.cloudinary.com/dvob94x30/image/upload/v1492617241/duck-2097959_1920_ty5gdp.png";
    }
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
      if (options.catagory === "soup") {
        if (key === "small") {
          tag = "S";
          price = options.prices.small;
          weight = 1;
        } else if (key === "medium") {
          tag = "M";
          price = options.prices.medium;
          weight = 2;
        } else if (key === "large") {
          tag = "L";
          weight = 3;
          price = options.prices.large;
        }
      } else if (options.catagory === "appitizer") {
        if (key === "main") {
          tag = "";
          price = options.prices.main;
          weight = 4;
        }
      } else if (options.catagory === "entree") {
        if (key === "sunset") {
          tag = "Sunset";
          price = options.prices.sunset;
          weight = 5;
        } else if (key === "lunch") {
          tag = "Lunch";
          price = options.prices.lunch;
          weight = 6;
        } else if (key === "dinner") {
          tag = "Dinner";
          price = options.prices.dinner;
          weight = 7;
        }
      } else if (options.catagory === "chef") {
        if (key === "dinner") {
          tag = "Dinner";
          price = options.prices.dinner;
          weight = 7;
        } else if (key === "lunch") {
          tag = "Lunch";
          price = options.prices.lunch;
          weight = 6;
        }
      }
      priceArr.push({tag, price, weight});
    }
    let sortedPriceArr = _.sortBy(priceArr, ["weight"]);

    return sortedPriceArr.map((p, idx) => (
      <span key={idx} className="price">
        <div>{p.tag}</div>
        <div>{`$ ${p.price}`}</div>
      </span>
    ));
  };

  return (
    <div className="menu-item">
      <img
        className="thumbnail"
        src={options.thumbnail_url}></img>
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
