import React from 'react';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="contact-form-page">
        <div className="form-label">
          <h2>Email Us</h2>
          <h4>Contact us today, we'll get back to you soon</h4>
        </div>
        <form className="contact-form">
          <fieldset className="form-name">
            <input
              placeholder="Your name"
              type="text"
              tabIndex="1"
              required
              autoFocus></input>
          </fieldset>
          <fieldset className="form-email">
            <input
              placeholder="Your Email Address"
              type="email"
              tabIndex="2"
              required></input>
          </fieldset>
          <fieldset className="form-number">
            <input
              placeholder="Your Phone Number"
              type="tel"
              tabIndex="3"
              required></input>
          </fieldset>
          <fieldset className="form-message">
            <textarea
              placeholder="Type your Message here..."
              tabIndex="4"
              required></textarea>
          </fieldset>
          <button className="form-submit" type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default ContactForm;
