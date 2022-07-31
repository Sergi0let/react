import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './Comment.jsx';

import './styles.scss';

const rootElement = document.querySelector('#root');

const userInfo = {
  author: 'Tom',
  avatarUrl: 'https://avatars1.githubusercontent.com',
};

ReactDOM.render(
  <Comment user={userInfo} text="Good job!" date={new Date()} />,
  rootElement
);