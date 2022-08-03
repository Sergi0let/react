import React, { Component } from 'react';
import Greeting from './Greeting.jsx';

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true,
    };
  }

  handleLogin = () => {
    this.setState({
      isLoggedIn: true,
    });
  };

  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  render() {
    return (
      <div className="panel">
        <Greeting isLoggedIn={this.state.isLoggedIn} />
        <div>
          {this.state.isLoggedIn ? (
            <button className="btn logout" onClick={this.handleLogout}>
              Logout
            </button>
          ) : (
            <button className="btn login" onClick={this.handleLogin}>
              Login
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default Auth;
