import React from 'react';
import moment from 'moment';
import ReactDOM from 'react-dom';

import Greeting from './Greeting.jsx';
import './index.scss';

const rootElement = document.querySelector('#root');

const formatDate = (date) =>
  moment().format('YYYY') - moment(date).format('2005');

const userInfo = {
  firstName: 'Joe',
  lastName: 'Doe',
  birthDate: formatDate(),
};

ReactDOM.render(<Greeting info={userInfo} />, rootElement);
