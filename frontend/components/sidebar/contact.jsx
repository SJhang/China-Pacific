import React from 'react';
import ContactForm from '../shared/contact_form';

const Contact = (props) => {
  return (
    <div className="contact-page">
      <div className="contact-wrap">
        <div className="contact-title">
          <h1>CONTACT</h1>
        </div>
        <div className="contact-desc">
          <ContactForm />
          <div className="contact-map"></div>
        </div>
      </div>
    </div>
  )
}

export default Contact;
