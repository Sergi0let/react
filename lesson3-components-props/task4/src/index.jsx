import React from 'react';
import ReactDOM from 'react-dom';

import Greeting from './Greeting.jsx';
import './index.scss';

const rootElement = document.querySelector('#root');

ReactDOM.render(
  <Greeting
    firstName="Joe"
    lastName="Doe"
    birthDate={new Date('2005-01-01T11:11:11.819Z')}
  />,
  rootElement
);
