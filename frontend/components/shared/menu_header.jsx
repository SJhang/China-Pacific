import React from 'react';
import { Link, IndexLink, withRouter } from 'react-router';

const MenuHeader = (props) => {
  const location = (property) => {
    return `/menu/${property}`;
  };

  if (props.location.pathname.split("/").length === 3) {
    $("#top-menu").addClass("on-splash");
  } else {
    $("#top-menu").removeClass("on-splash");
  }

  return (
    <header className="fixed-top menu-header" id="menu-header">
      <div className="menu-header-wrap">
        <div className="sides animated pulse">
          <IndexLink
            to={location("sides")}
            activeClassName="header-active"
          >
            Sides
          </IndexLink>
        </div>
        <div className="lunch animated pulse">
          <Link
            to={location("lunch")}
            activeClassName="header-active"
          >
            Lunch
          </Link>
        </div>
        <div className="sunset animated pulse">
          <Link
            to={location("sunset")}
            activeClassName="header-active"
          >
            Sunset
          </Link>
        </div>
        <div className="dinner animated pulse">
          <Link
            to={location("dinner")}
            activeClassName="header-active"
          >
            Dinner
          </Link>
        </div>
        <div className="chef animated pulse">
          <Link
            to={location("chef")}
            activeClassName="header-active"
          >
            Chef's Choice
          </Link>
        </div>
      </div>
    </header>
  );
};

export default withRouter(MenuHeader);
