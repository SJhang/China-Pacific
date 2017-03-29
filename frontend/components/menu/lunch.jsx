import React from 'react';
import MenuItem from './menu_item';

class Lunch extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="lunch-menu">
        <div className="menu-type-wrap">
          <div className="lunch-wrap">
            <h1 className="menu-title">LUNCH SPECIAL</h1>
            <ul className="menu-description">
              <li>11 A.M. - 3 P.M.</li>
              <li>Served with a Soup, an Egg Roll, and Fried Rice</li>
              <li>(Brown Rice available for extra $.75)</li>
            </ul>
          </div>
          <div className="lunch-menu-list">
            <MenuItem menuType={"Buddha's Delight"} />
            <MenuItem menuType={"Broccoli with Hot Garlic Sauce"} />
            <MenuItem menuType={"Green Bean with Hot Garlic Sauce"} />
            <MenuItem menuType={"Snow Pea Supreme"} />
            <MenuItem menuType={"Sweet and Sour Chicken"} />
          </div>
        </div>
      </div>
    )
  }
}

export default Lunch;
