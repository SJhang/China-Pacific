import React from 'react';
import { Link } from 'react-router';

class Sidebar extends React.Component {
  render () {
    return (
      <header className="sidebar expanded">
        <a classNam="menu-button">
          <i className="fa fa-angle-left fa-3x" aria-hidden="true"}></i>
        </a>
        <div className="header-menu">
          <a className="about"></a>
          <a className="menu"></a>
          <a className="location"></a>
          <a className="contact"></a>
          <a className="press"></a>
        </div>
      </header>
    )
  }
}

export default Sidebar;
