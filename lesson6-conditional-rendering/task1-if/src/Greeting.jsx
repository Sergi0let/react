import React from 'react';
import UserGreeting from './UserGreeting.jsx';
import GuestGreeting from './GuestGreeting.jsx';

const Greeting = (props) => {
  const onLogin = props.onLogin;
  if (onLogin) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
};

export default Greeting;
