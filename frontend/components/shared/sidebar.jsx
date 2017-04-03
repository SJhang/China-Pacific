import React from 'react';
import { Link, withRouter } from 'react-router';
import SessionButtonContainer from '../session/session_button_container';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  redirectToHome(e) {
    if (this.props.router.location.pathname !== '/') {
      this.toggleDeactive();
      this.props.router.push('/');
    }
  }

  redirectToAbout(e) {
    if (this.props.router.location.pathname !== '/about') {
      this.toggleDeactive();
      this.toggleActive(e);
      this.props.router.push('/about');
    }
  }

  redirectToMenu(e) {
    if (this.props.router.location.pathname !== '/menu') {
      this.toggleDeactive();
      this.toggleActive(e);
      this.props.router.push('/menu');
    }
  }

  redirectToLocation(e) {
    if (this.props.router.location.pathname !== '/location') {
      this.toggleDeactive();
      this.toggleActive(e);
      this.props.router.push('/location');
    }
  }

  redirectToContact(e) {
    if (this.props.router.location.pathname !== '/contact') {
      this.toggleDeactive();
      this.toggleActive(e);
      this.props.router.push('/contact');
    }
  }

  redirectToPress(e) {
    if (this.props.router.location.pathname !== '/press') {
      this.toggleDeactive();
      this.toggleActive(e);
      this.props.router.push('/press');
    }
  }

  yelpLink() {
    window.open('https://www.yelp.com/biz/china-pacific-austin');
  }

  facebookLink() {
    window.open('https://www.facebook.com/Chinapacificaustin/?hc_ref=SEARCH');
  }

  toggleActive (e) {
    $(e.target).addClass("sidebar-active");
  }

  toggleDeactive () {
    let parentDOM = document.getElementById('sidebar-options')
    let activatedMenu = parentDOM.getElementsByClassName("sidebar-active");

    if (activatedMenu.length) {
      for (var i = 0; i < activatedMenu.length; i++) {
        $(activatedMenu[i]).removeClass("sidebar-active");
      }
    }
  }

  render () {
    return (
      <header className="sidebar">
        <div className="sidebar-logo">
          <a onClick={(e) => this.redirectToHome(e)}>
            <span>China Pacific</span>
            <span>Restaurant</span>
          </a>

        </div>
        <div className="sidebar-menu" id="sidebar-options">
          <div>
            <span>
              <a
                className="about"
                id="about"
                onClick={(e) => this.redirectToAbout(e)}>ABOUT
              </a>
            </span>
          </div>
          <div>
            <span>
              <a
                className="menu"
                id="menu"
                onClick={(e) => this.redirectToMenu(e)}>MENU
              </a>
            </span>
          </div>
          <div>
            <span>
              <a
                className="location"
                id="location"
                onClick={(e) => this.redirectToLocation(e)}>LOCATION
              </a>
            </span>
          </div>
          <div>
            <span>
              <a
                className="contact"
                id="contact"
                onClick={(e) => this.redirectToContact(e)}>CONTACT
              </a>
            </span>
          </div>
          <div>
            <span>
              <a
                className="press"
                id="press"
                onClick={(e) => this.redirectToPress(e)}>PRESS
              </a>
            </span>
          </div>
        </div>
        <div className="sns">
          <a className="instagram">
            <i className="fa fa-instagram fa-2x" aria-hidden="true"></i>
          </a>
          <a
            className="facebook"
            onClick={() => this.facebookLink()}>
            <i className="fa fa-facebook-official fa-2x" aria-hidden="true"></i>
          </a>
          <a
            className="yelp"
            onClick={() => this.yelpLink()}>
            <i className="fa fa-yelp fa-2x" aria-hidden="true"></i>
          </a>
        </div>
        <SessionButtonContainer />
      </header>
    )
  }
}
// <a className="google">
//   <i className="fa fa-google fa-2x" aria-hidden="true"></i>
// </a>

export default withRouter(Sidebar);
