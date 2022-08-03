import React from 'react';
import GuestGreeting from './GuestGreeting.jsx';

const Logout = (props) => {
  return (
    <button className="btn logout" onClick={props.onClick}>
      Logout
    </button>
  );
};

export default Logout;
