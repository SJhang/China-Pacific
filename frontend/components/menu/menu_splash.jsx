import React from 'react';

const MenuSplash = (props) => {
  const redirectToSidePage = () => {
    props.router.push('/menu/sides');
  };

  const redirectToLunchPage = () => {
    props.router.push('/menu/lunch');
  };

  const redirectToSunsetPage = () => {
    props.router.push('/menu/sunset');
  };

  const redirectToDinnerPage = () => {
    props.router.push('/menu/dinner');
  };

  const redirectToChefPage = () => {
    props.router.push('/menu/chef');
  };

  const openPdf = () => {
    window.open("assets/menu.pdf");
  };

  return (
    <div className="menu-splash" id="menu-div">
      <div className="menu-wrap">
        <div className="menu-headline">
          <h1>Menu</h1>
          <i
            className="fa fa-file-pdf-o fa-2x"
            aria-hidden="true"
            onClick={() => openPdf()}></i>
        </div>
        <div className="menu-types">
          <div
            className="sides-div animated flipInX"
            onClick={() => redirectToSidePage()}>
            <h3>SIDES</h3>
            <div className="hours">
              <p>
                11 A.M. ~ 3 P.M.
              </p>
            </div>
          </div>
          <div
            className="lunch-div animated flipInX"
            onClick={() => redirectToLunchPage()}>
            <h3>LUNCH SPECIAL</h3>
            <div className="hours">
              <p>
                11 A.M. ~ 3 P.M.
              </p>
            </div>
          </div>
          <div
            className="sunset-div animated flipInX"
            onClick={() => redirectToSunsetPage()}>
            <h3>SUNSET SPECIAL</h3>
            <div className="hours">
              <p>3 P.M. ~ 6 P.M.</p>
            </div>
          </div>
          <div
            className="dinner-div animated flipInX"
            onClick={() => redirectToDinnerPage()}>
            <h3>DINNER</h3>
            <div className="hours">
              <p>6 P.M. ~ 10 P.M.</p>
            </div>
          </div>
          <div
            className="chef-div animated flipInX"
            onClick={() => redirectToChefPage()}>
            <h3>Chef's Choice</h3>
            <div className="hours">
              <p>6 P.M. ~ 10 P.M.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default MenuSplash;
