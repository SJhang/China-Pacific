import React from 'react';
import { Link, hashHistory, withRouter } from 'react-router';
import MenuHeader from '../shared/menu_header';

class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      smaller: false
    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll);
  };

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll (e) {
    e.preventDefault();
    if (e.srcElement.body.scrollTop > 210) {
      $(document).find("#header").addClass("smaller");
    } else {
      $(document).find("#header").removeClass("smaller");
    }
  }

  render () {
    return (
      <div
        className="menu-page"
        id="top-menu"
        onScroll={this.handleScroll}>
        <MenuHeader />
        {this.props.children}
      </div>
    )
  }
}

export default withRouter(Menu);
