import React from 'react';
import ReactDOM from 'react-dom';
import Color from './Colors.jsx';

import './index.scss';

const rootElement = document.querySelector('#root');

const element = (
  <>
    <button>Push</button>
  </>
);

ReactDOM.render(<Color />, rootElement);
