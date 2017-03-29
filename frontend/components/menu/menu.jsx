import React from 'react';
import { Link, hashHistory, withRouter } from 'react-router';
import Lunch from './lunch';
import Sunset from './sunset';
import Dinner from './dinner';

class Menu extends React.Component {
  constructor(props) {
    super(props);
  }

  redirectToLunchPage () {
    this.props.router.push('/menu/lunch');
  }

  redirectToSunsetPage () {
    this.props.router.push('/menu/sunset');
  }

  redirectToDinnerPage () {
    this.props.router.push('/menu/dinner');
  }

  render () {
    return (
      <div className="menu-page">
        <div className="overlay"></div>
        <div className="menu-wrap">
          <h1 className="menu-title">
            Choose Menu Type
          </h1>
          <div className="menu-types">
            <div
              className="lunch-div"
              onClick={() => this.redirectToLunchPage()}>
              <h3>LUNCH SPECIAL</h3>
              <div className="hours">
                <p>
                  11 A.M. ~ 3 P.M.
                </p>
              </div>
            </div>
            <div
              className="sunset-div"
              onClick={() => this.redirectToSunsetPage()}>
              <h3>SUNSET SPECIAL</h3>
              <div className="hours">
                <p>3 P.M. ~ 6 P.M.</p>
              </div>
            </div>
            <div
              className="dinner-div"
              onClick={() => this.redirectToDinnerPage()}>
              <h3>DINNER</h3>
              <div className="hours">
                <p>6 P.M. ~ 10 P.M.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

// <MenuList menuList={"appitizers"} />
// <MenuList menuList={"soups"} />
// <MenuList menuList={"house-specials"} />
// <MenuList menuList={"chicken"} />
// <MenuList menuList={"beef"} />
// <MenuList menuList={"shrimp"} />
// <MenuList menuList={"pork"} />
// <MenuList menuList={"vegetable"} />
// <MenuList menuList={"egg-fuyang"} />
// <MenuList menuList={"fried-rice"} />
// <MenuList menuList={"noodles"} />
// <MenuList menuList={"beverages"} />
export default withRouter(Menu);
