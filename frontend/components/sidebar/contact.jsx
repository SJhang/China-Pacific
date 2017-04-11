import React, { Component } from 'react';
import ContactForm from '../shared/contact_form';
import GoogleMap from '../shared/google_map';
import { withGoogleMap, Marker } from 'react-google-maps';

const Contact = (props) => {
  return (
    <div className="contact-page">
      <div className="contact-wrap">
        <div className="contact-title">
          <h1>Contact</h1>
        </div>
        <div className="contact-desc">
          <ContactForm />
          <GoogleMap />
        </div>
      </div>
    </div>
  );
};

export default Contact;
