import React from 'react';
import Greeting from './Greeting.jsx';
import UserGreeting from './UserGreeting.jsx';

const Login = (props) => {
  return (
    <button className="btn login" onClick={props.onClick}>
      Login
    </button>
  );
};

export default Login;
