import React from 'react';
import { Link, withRouter } from 'react-router';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  redirectToHome() {
    this.props.router.push('/');
  }

  redirectToAbout() {
    this.props.router.push('/about');
  }

  redirectToMenu() {
    this.props.router.push('/menu');
  }

  redirectToLocation() {
    this.props.router.push('/location');
  }

  redirectToContact() {
    this.props.router.push('/contact');
  }

  redirectToPress() {
    this.props.router.push('/press');
  }

  yelpLink() {
    window.open('https://www.yelp.com/biz/china-pacific-austin');
  }

  facebookLink() {
    window.open('https://www.facebook.com/Chinapacificaustin/?hc_ref=SEARCH');
  }
  render () {
    return (
      <header className="sidebar">
        <div className="sidebar-logo">
          <a onClick={() => this.redirectToHome()}>
            <span>China Pacific</span>
            <span>Restaurant</span>
          </a>

        </div>
        <ul className="sidebar-menu">
          <li><a
            className="about"
            onClick={() => this.redirectToAbout()}>ABOUT</a></li>
          <li><a
            className="menu"
            onClick={() => this.redirectToMenu()}>MENU</a></li>
          <li><a
            className="location"
            onClick={() => this.redirectToLocation()}>LOCATION</a></li>
          <li><a
            className="contact"
            onClick={() => this.redirectToContact()}>CONTACT</a></li>
          <li><a
            className="press"
            onClick={() => this.redirectToPress()}>PRESS</a></li>
        </ul>
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
          <a className="google">
            <i className="fa fa-google fa-2x" aria-hidden="true"></i>
          </a>
        </div>
      </header>
    )
  }
}

export default withRouter(Sidebar);
