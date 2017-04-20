import React from 'react';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      phone: "",
      message: ""
    };
  }

  componentDidMount() {
  }

  handleChange(e) {
    const name = e.target.name;

    this.setState({[name]: e.target.value});
  }

  hangleSubmit(e) {
    e.preventDefault();
    alert("message sent!");
  }

  render () {
    return (
      <div className="contact-form-page">
        <div className="form-label">
          <h2>Email Us</h2>
          <h4>Contact us today, we'll get back to you soon</h4>
        </div>
        <form
          className="contact-form"
          action={`mailto:`}
          method="post"
          encType="text/plain">
          <fieldset className="form-name">
            <input
              placeholder="Your name"
              type="text"
              tabIndex="1"
              required
              name="name"
              onChange={e => this.handleChange(e)}></input>
          </fieldset>
          <fieldset className="form-email">
            <input
              placeholder="Your Email Address"
              type="email"
              tabIndex="2"
              required
              name="email"
              onChange={e => this.handleChange(e)}></input>
          </fieldset>
          <fieldset className="form-number">
            <input
              placeholder="Your Phone Number"
              type="tel"
              tabIndex="3"
              required
              name="phone"
              onChange={e => this.handleChange(e)}></input>
          </fieldset>
          <fieldset className="form-message">
            <textarea
              placeholder="Type your Message here..."
              tabIndex="4"
              required
              name="message"
              onChange={e => this.handleChange(e)}></textarea>
          </fieldset>
          <button
            className="form-submit"
            type="submit"
            value="Submit"
            onSubmit={e => this.handleSubmit(e)}
            tabIndex="5"
          >Submit
          </button>

        </form>
      </div>
    )
  }
}

export default ContactForm;
