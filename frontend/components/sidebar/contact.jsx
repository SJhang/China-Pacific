import React, { Component } from 'react';
import ContactForm from '../shared/contact_form';
import GoogleMap from '../shared/google_map';
import { withGoogleMap, Marker } from 'react-google-maps';

const Contact = (props) => {
  // const initGoogleMap = withGoogleMap(props => {
  //   let lat = 30.3653041;
  //   let lng = -97.9507103;
  //   debugger;
  //   return (
  //     <GoogleMap
  //       ref={props.onMapLoad}
  //       defaultZoom={3}
  //       defaultCenter={{lat, lng}}
  //       onClick={props.onMapClick}>
  //       {props.markers.map((marker, index) => {
  //         debugger;
  //         return (
  //           <Marker
  //             {...marker}
  //             onRightClick={() => props.onMarkerRightClick(index)} />
  //         )
  //       })}
  //     </GoogleMap>
  //   )
  // });

  return (
    <div className="contact-page">
      <div className="contact-wrap">
        <div className="contact-title">
          <h1>CONTACT</h1>
        </div>
        <div className="contact-desc">
          <ContactForm />
          <GoogleMap />
        </div>
      </div>
    </div>
  )
}

export default Contact;
