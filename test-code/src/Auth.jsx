import React from 'react';
import Greeting from './Greeting.jsx';
import Login from './Login.jsx';
import Logout from './Logout.jsx';

export default class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  onLogout = () => {
    this.setState({ isLoggedIn: false });
  };
  onLogin = () => {
    this.setState({ isLoggedIn: true });
  };

  render() {
    const isLoggedIn = this.state.isLoggedIn;

    return (
      <div className="panel">
        <Greeting isLoggedIn={isLoggedIn} />
        {isLoggedIn ? (
          <Logout onLogout={this.onLogout} />
        ) : (
          <Login onLogin={this.onLogin} />
        )}
      </div>
    );
  }
}
