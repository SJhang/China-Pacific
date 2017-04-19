import React from 'react';

const About = (props) => {
  return (
    <div className="about-page">
      <div className="about-wrap">
        <div className="about-title">
          <h1>About</h1>
          <div className="about-location">Lakeway, TX</div>
        </div>
        <div className="about-desc">
          <div className="about-pic">
            <img src="https://res.cloudinary.com/dvob94x30/image/upload/v1492617482/o_pvxkki.png"></img>
          </div>
          <div className="about-blurb">
            <p>
              China Pacific Restaurant serves chinese food with a focus on fresh ingredients.
              Known for locals of Lakeway as being the best chinese food around for the last decade.
              blah blah blah...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
