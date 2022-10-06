import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Users from './Users.jsx';
import Home from './Home.jsx';

const App = () => {
  return (
    <div className="page">
      <BrowserRouter>
        <ul className="navigation">
          <li className="navigation__item">
            <Link to="/">Home</Link>
          </li>
          <li className="navigation__item">
            <Link to="/users">Users</Link>
          </li>
        </ul>
        <Route path="/users" component={Users} />
        <Route exact path="/" component={Home} />
      </BrowserRouter>
    </div>
  );
};

export default App;

/* 
<!-- App -->
<div className="page">
  <ul className="navigation">
    <li className="navigation__item"><a href="/">Home</a></li>
    <li className="navigation__item"><a href="/users">Users</a></li>
  </ul>

  <!-- Users -->
  <div className="page__content">
    <h1>Users</h1>
    <ul className="navigation">
      <li className="navigation__item">
        <a href="/users/github">Github</a>
      </li>
      <li className="navigation__item">
        <a href="/users/facebook">Facebook</a>
      </li>
    </ul>

    <!-- User -->
    <div className="user">
      <img alt="User Avatar" src="https://avatars1.githubusercontent.com/u/9919?v=4" className="user__avatar">
      <div className="user__info">
        <span className="user__name">GitHub</span>
        <span className="user__location">San Francisco,CA</span>
      </div>
    </div>
  </div>
</div>

<!-- Home -->
<div className="page__content">
  <h1>🏠</h1>
</div>
*/
