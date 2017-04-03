import React from 'react';
import { Link, hashHistory, withRouter } from 'react-router';
import MenuHeader from '../shared/menu_header';

class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.redirectToLunchPage = this.redirectToLunchPage.bind(this);
    this.redirectToSunsetPage = this.redirectToSunsetPage.bind(this);
    this.redirectToDinnerPage = this.redirectToDinnerPage.bind(this);
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

  openPdf () {
    window.open("assets/menu.pdf");
  };

  render () {
    return (
      <div className="menu-page">
        <MenuHeader />
        {this.props.children}
      </div>
    )
  }
}

export default withRouter(Menu);

//
// <div className="menu-page">
//   <div className="menu-wrap">
//     <div className="menu-title">
//       <h1>Menu</h1>
//       <i
//         className="fa fa-file-pdf-o fa-2x"
//         aria-hidden="true"
//         onClick={() => this.openPdf()}></i>
//     </div>
//     <div className="menu-types">
//       <div
//         className="lunch-div animated flipInX"
//         onClick={this.redirectToLunchPage}>
//         <h3>LUNCH SPECIAL</h3>
//         <div className="hours">
//           <p>
//             11 A.M. ~ 3 P.M.
//           </p>
//         </div>
//       </div>
//       <div
//         className="sunset-div animated flipInX"
//         onClick={this.redirectToSunsetPage}>
//         <h3>SUNSET SPECIAL</h3>
//         <div className="hours">
//           <p>3 P.M. ~ 6 P.M.</p>
//         </div>
//       </div>
//       <div
//         className="dinner-div animated flipInX"
//         onClick={this.redirectToDinnerPage}>
//         <h3>DINNER</h3>
//         <div className="hours">
//           <p>6 P.M. ~ 10 P.M.</p>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
