import React from 'react';
import Links from './links';

class Footer extends React.Component {
  render () {
    return (
      <footer className="global-footer">
        <div>
          <section className="restaurant-info">
            <a>CONTACT US</a>
            <h3>China Pacific Restaurant</h3>
            <div className="social-media">
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </div>
          </section>
          <section>
            <h3>Designed and Developed by Sonik Jhang</h3>
            <Links />
          </section>
        </div>
      </footer>
    )
  }
}

export default Footer;
