import React from 'react';
import MenuListItem from './menu_list_item';

const MenuList = ({name}) => {
  const extractAsArray = (menuTitle) => {
    const dishState = store.getState().dishes;
    let _options = {};
    let extractedArray = [];

    for (var key in dishState) {
      _options = dishState[key];
      if (menuTitle === "sides") {
        if (_options.catagory === "appitizer") {
          extractedArray.push(_options);
        } else if (_options.catagory === "soup") {
          extractedArray.push(_options);
        }
      } else if (menuTitle === "chef") {
        if (_options.catagory === "chef") {
          extractedArray.push(_options);
        }
      } else if (menuTitle === "lunch") {
        if (_options.prices.lunch) {
          extractedArray.push(_options);
        }
      } else if (menuTitle === "sunset") {
        if (_options.prices.sunset) {
          extractedArray.push(_options);
        }
      } else if (menuTitle === "dinner") {
        if (_options.prices.dinner) {
          extractedArray.push(_options);
        }
      }
    }
    return extractedArray;
  }

  const renderMenuItem = () => {
    let extractedArray = extractAsArray(name);
    if (extractedArray.length) {
      return extractedArray.map(sideOptions => (
        <MenuListItem key={sideOptions.id} options={sideOptions}/>
      ));
    } else {
      return (
        <div>Loading</div>
      )
    }
  };

  return (
    <div className="menu-list-wrapper">
      {renderMenuItem()}
    </div>
  )
}

export default MenuList;
