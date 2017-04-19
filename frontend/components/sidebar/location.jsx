import React from 'react';

const Location = (props) => {
  return (
    <div className="location-page">
      <div className="location-wrap">
        <div className="location-title">
          <h1>Location</h1>
        </div>
        <div className="location-image">
          <div className="overlay"></div>
        </div>
        <div className="location-desc">
          <div className="location-specifics">
            <div className="physical-address animated zoomIn">
              <i className="fa fa-map-marker fa-4x" aria-hidden="true"></i>
              <p>
                Liberty Center<br/>
                107 Ranch Road 620 South, suite 107<br/>
                Lakeway, TX 78734
              </p>
            </div>
            <div className="phone-number animated zoomIn">
              <i className="fa fa-phone fa-4x" aria-hidden="true"></i>
              <p>
                <a href="tel:512-266-9328">512 266 - 9328</a>
              </p>
            </div>
            <div className="open-hours animated zoomIn">
              <i className="fa fa-clock-o fa-4x" aria-hidden="true"></i>
              <p>
                Hours of Operation<br/>
                Mon – Wed : 11:00AM – 09:30PM<br/>
                Thur & Fri : 11:00AM – 10:00PM<br/>
                Sat  & Sun : 11:30AM – 10:00PM<br/>
              </p>
            </div>
            <div className="appointments animated zoomIn">
              <i className="fa fa-cutlery fa-4x" aria-hidden="true"></i>
              <p>
                Party Room Available<br/>
                Delivery & Takeout available<br/>
                Daily Lunch and Dinner Specials
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
