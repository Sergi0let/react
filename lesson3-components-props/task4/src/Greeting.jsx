import React from 'react';
import './index.scss';

function Greeting(props) {
  return (
    <div className="greeting">{`My name is ${props.info.firstName} ${props.info.lastName}. I'm ${props.info.birthDate} years old`}</div>
  );
}

export default Greeting;
