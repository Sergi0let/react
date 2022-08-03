import React, { Component } from 'react';

import Spinner from './Spinner.jsx';
import Login from './Login.jsx';
import Logout from './Logout.jsx';

class Auth extends Component {
  state = {
    isLoggedIn: false,
    showSpinner: false,
  };

  onLogin = () => {
    this.setState({ showSpinner: true });

    setTimeout(() => {
      this.setState({
        isLoggedIn: true,
        showSpinner: false,
      });
    }, 2000);
  };

  onLogout = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  render() {
    if (this.state.showSpinner) {
      return <Spinner size={'30px'} />;
    }

    return this.state.isLoggedIn ? (
      <Logout onClick={this.onLogout} />
    ) : (
      <Login onClick={this.onLogin} />
    );
  }
}
export default Auth;
