import React from 'react';
import moment from 'moment';
import ReactDOM from 'react-dom';

import Greeting from './Greeting.jsx';
import './index.scss';

const rootElement = document.querySelector('#root');

const formatDate = (date) => moment().format('YYYY') - date;

ReactDOM.render(
  <Greeting firstName="Joe" lastName="Doe" birthDate={formatDate(2005)} />,
  rootElement
);
