import React, { Component } from 'react';
import Greeting from './Greeting.jsx';
import Login from './Login.jsx';
import Logout from './Logout.jsx';

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onLogin: false,
    };
  }

  handleLogin = () => {
    this.setState({
      onLogin: true,
    });
  };

  handleLogout = () => {
    this.setState({
      onLogin: false,
    });
  };

  render() {
    const onLogin = this.state.onLogin;

    let button;

    if (onLogin) {
      button = <Logout onClick={this.handleLogout} />;
    } else {
      button = <Login onClick={this.handleLogin} />;
    }
    return (
      <div className="panel">
        <Greeting onLogin={this.state.onLogin} />
        {button}
      </div>
    );
  }
}

export default Auth;

/*
class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onLogin: false,
    };
  }

  handleLogin = () => {
    this.setState({
      onLogin: true,
    });
  };

  handleLogout = () => {
    this.setState({
      onLogin: false,
    });
  };

  render() {
    return (
      <div className="panel">
        <Greeting onLogin={this.state.onLogin} />
        <div>
          {this.state.onLogin ? (
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
*/
