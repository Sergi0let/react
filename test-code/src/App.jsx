import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

import Home from './Home.jsx';
import Users from './Users.jsx';

import './index.scss';

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
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
