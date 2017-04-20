import React from 'react';
import { Link, withRouter } from 'react-router';
import SessionButtonContainer from '../session/session_button_container';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  redirectTo(path, e) {
    if (path === "home") {
      if (this.props.router.location.pathname !== '/') {
        this.toggleDeactive();
        this.props.router.push('/');
      }
    } else {
      if (this.props.router.location.pathname !== path) {
        this.toggleDeactive(e);
        this.toggleActive(e);
        this.props.router.push(path);
      }
    }
  }

  yelpLink() {
    window.open('https://www.yelp.com/biz/china-pacific-austin');
  }

  facebookLink() {
    window.open('https://www.facebook.com/Chinapacificaustin/?hc_ref=SEARCH');
  }

  toggleActive (e) {
    $(e.target.parentNode).addClass("menu-active");
  }

  toggleDeactive (e) {
    let parentDOM = document.getElementsByClassName("menu-active");

    if (parentDOM.length) {
      for (var i = 0; i < parentDOM.length; i++) {
        $(parentDOM[i]).removeClass("menu-active");
      }
    }
  }

  render () {
    return (
      <ul id="sidebar">
        <li
          className="sidebar-logo"
          data-parent="#sidebar">
          <a onClick={(e) => this.redirectTo("home", e)}>
            <i className="material-icons">home</i>
            <span>China Pacific</span>
            <span>Restaurant</span>
          </a>
        </li>
        <li id="menu-list-item">
          <a
            className="about"
            id="list-item"
            onClick={(e) => this.redirectTo("about", e)}>
            <i className="material-icons">store_mall_directory</i>
            <span>ABOUT</span>
          </a>
        </li>
        <li id="menu-list-item">
          <a
            className="menu"
            id="list-item"
            onClick={(e) => this.redirectTo("menu", e)}>
            <i className="material-icons">restaurant_menu</i>
            <span>MENU</span>
          </a>
        </li>
        <li id="menu-list-item">
          <a
            className="location"
            id="list-item"
            onClick={(e) => this.redirectTo("location", e)}>
            <i className="material-icons">place</i>
            <span>LOCATION</span>
          </a>
        </li>
        <li id="menu-list-item">
          <a
            className="contact"
            id="list-item"
            onClick={(e) => this.redirectTo("contact", e)}>
            <i className="material-icons">contacts</i>
            <span>CONTACT</span>
          </a>
        </li>
        <li id="menu-list-item">
          <a
            className="press"
            id="list-item"
            onClick={(e) => this.redirectTo("press", e)}>
            <i className="material-icons">message</i>
            <span>PRESS</span>
          </a>
        </li>
        <li className="sns" data-parent="#sidebar">
          <a className="instagram">
            <i className="fa fa-instagram fa-1x" aria-hidden="true"></i>
          </a>
          <a
            className="facebook"
            onClick={() => this.facebookLink()}>
            <i className="fa fa-facebook-official fa-1x" aria-hidden="true"></i>
          </a>
          <a
            className="yelp"
            onClick={() => this.yelpLink()}>
            <i className="fa fa-yelp fa-1x" aria-hidden="true"></i>
          </a>
        </li>
        <SessionButtonContainer />
      </ul>
    );
  }
}

export default withRouter(Sidebar);
