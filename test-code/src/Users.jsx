import React, { useState } from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import User from './User.jsx';
import { getUserData } from './user.gateway.js';

export default function Users({ match }) {
  const [userInfo, setUserInfo] = useState([]);
  const { path } = match;

  const fetchUserData = (userId) =>
    getUserData(userId).then((userData) => setUserInfo(userData));

  return (
    <div className="page__content">
      <h1>Users</h1>
      <ul className="navigation">
        <li className="navigation__item">
          <Link to={`${path}/github`} onClick={() => fetchUserData('github')}>
            Github
          </Link>
        </li>
        <li className="navigation__item">
          <Link
            to={`${path}/facebook`}
            onClick={() => fetchUserData('facebook')}
          >
            Facebook
          </Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/users">
          <span>Select a user please</span>
        </Route>
        <Route path="/users/:userId">
          <User {...userInfo} />
        </Route>
      </Switch>
    </div>
  );
}
