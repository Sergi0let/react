import React from 'react';
import ReactDOM from 'react-dom';
import Mailbox from './Mailbox.jsx';
import './index.scss';

const rootElement = document.querySelector('#root');

ReactDOM.render(<Mailbox unreadMessages={[1, 1]} />, rootElement);
