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
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {

  }

  handleScroll (e) {
    e.preventDefault();
    if (e.srcElement.body.scrollTop > 210) {
      $(document).find("#menu-header").addClass("smaller");
    } else {
      $(document).find("#menu-header").removeClass("smaller");
    }
  }

  render () {
    return (
      <div
        className="row"
        id="top-menu"
        onScroll={this.handleScroll}>
        <MenuHeader />
        {this.props.children}
      </div>
    );
  }
}

export default withRouter(Menu);
