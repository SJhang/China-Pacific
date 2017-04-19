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
      <div className="col-12">
        <video playsInline autoPlay muted loop id="bgvid">
          <source
            src="https://res.cloudinary.com/dvob94x30/video/upload/v1492617491/343379421_prpxp3.mp4"
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
