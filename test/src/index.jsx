import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';
import App from './App.jsx';

const rootElement = document.querySelector('#root');

ReactDOM.render(<App />, rootElement);

const Greeting = (props) => {
  return (
    <div className="greeting">
      My name is {props.firstName} {props.lastName}. I'm {props.birthDate} years
      old
    </div>
  );
};

export default Greeting;
