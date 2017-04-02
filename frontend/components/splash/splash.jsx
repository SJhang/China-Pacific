import React from 'react';

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  redirectToLogin() {
    this.props.router.push('login');
  }

  render () {
    return (
      <div className="splash-page">
        <video playsInline autoPlay muted loop id="bgvid">
          <source
            src="https://res.cloudinary.com/dsetpdsls/video/upload/v1490753846/343379421_myyo4g.mp4"
            type="video/mp4">
          </source>
        </video>
      </div>
    )
  }
}

// <div className="splash-image">
//   <div className="overlay"></div>
// </div>

export default Splash;
