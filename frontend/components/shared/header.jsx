import React from 'react';

class Header extends React.Component {
  toggle() {
    $(document).click(e => {
      e.stopPropagation();
      let parentDiv = e.target.parentElement.parentElement;

      if ($(parentDiv).hasClass("collapsed")) {
        $(parentDiv).removeClass("collapsed").addClass("expanded");
      } else if ($(parentDiv).hasClass("expanded")){
        $(parentDiv).removeClass("expanded").addClass("collapsed");
      }
    })
  }

  render () {
    return (
      <header className="global-header">
        <div className="header-wrap collapsed">
          <a
            className="menu-button"
            onClick={() => this.toggle()}>
            <i className="fa fa-bars fa-3x" aria-hidden="true"></i>
          </a>
          <a className="header-logo">
            <img
              src="https://res.cloudinary.com/dsetpdsls/image/upload/c_scale,w_311/v1490328608/china_gate_zdxbsi.png"></img>
            <h2>China Pacific</h2>
          </a>
        </div>
      </header>
    )
  }
}

export default Header;
