import React from 'react';
import moment from 'moment';
import ReactDOM from 'react-dom';

import Greeting from './Greeting.jsx';
import './index.scss';

const rootElement = document.querySelector('#root');

const formatDate = (date) =>
  moment(date).format('YYYY') - moment().format('YYYY');

ReactDOM.render(
  <Greeting
    firstName="Joe"
    lastName="Doe"
    birthDate={formatDate(new Date('2001-01-01T11:11:11.819Z'))}
  />,
  rootElement
);
