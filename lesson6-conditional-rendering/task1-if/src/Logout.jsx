import React from 'react';
import Greeting from './Greeting.jsx';

const Logout = (props) => {
  return (
    <>
      <Greeting isLoggedIn />
      <button className="btn logout" onClick={props.onClick}>
        Logout
      </button>
    </>
  );
};

export default Logout;
