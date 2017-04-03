import React from 'react';
import { Link, IndexLink, withRouter } from 'react-router';

const MenuHeader = (props) => {
  const location = (property) => {
    return `/menu/${property}`;
  };

  return (
    <header className="menu-header">
      <div className="menu-header-wrap">
        <div className="sides">
          <IndexLink
            to={location("sides")}
            activeClassName="header-active"
          >
            Sides
          </IndexLink>
        </div>
        <div className="lunch">
          <Link
            to={location("lunch")}
            activeClassName="header-active"
          >
            Lunch
          </Link>
        </div>
        <div className="sunset">
          <Link
            to={location("sunset")}
            activeClassName="header-active"
          >
            Sunset
          </Link>
        </div>
        <div className="dinner">
          <Link
            to={location("dinner")}
            activeClassName="header-active"
          >
            Dinner
          </Link>
        </div>
        <div className="chef">
          <Link
            to={location("chef")}
            activeClassName="header-active"
          >
            Chef's Choice
          </Link>
        </div>
      </div>
    </header>
  )
}

export default withRouter(MenuHeader);
