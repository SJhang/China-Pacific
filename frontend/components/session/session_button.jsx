import React from 'react';
import { withRouter } from 'react-router';
import SessionFormContainer from './session_form_container';

class SessionButton extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      action: ''
    };
  }

  toggleModal (action) {
    this.props.toggleModal();
    this.setState({ action });
  }

  logout () {
    this.props.logout();
  }

  render () {
    if (this.props.loggedIn) {
      return (
        <div className={`session-button`}>
          <a
            className="logout"
            onClick={() => this.logout()}
            >
            Log Out
          </a>
        </div>
      );
    } else {
      return (
        <div className={`session-button`}>
          <a
            className="admin-login"
            onClick={() => this.toggleModal("login")}
            >
            Admin
          </a>
          <SessionFormContainer
            closeModal={() => this.toggleModal()}
            settings={this.state}/>
        </div>
      );
    }
  }
}

export default withRouter(SessionButton);
