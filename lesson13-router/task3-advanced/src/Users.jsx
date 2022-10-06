import React, { useState } from 'react';
import { Link, Route } from 'react-router-dom';

import User from './User.jsx';
import { getUserData } from './user.gateway.js';

export default function Users() {
  const [userObject, setUserObject] = useState([]);

  const handleSelectUser = (userId) =>
    getUserData(userId).then((userData) => setUserObject(userData));

  return (
    <div className="page__content">
      <h1>Users</h1>
      <ul className="navigation">
        <li className="navigation__item">
          <Link to="/users/github" onClick={() => handleSelectUser('github')}>
            Github
          </Link>
        </li>
        <li className="navigation__item">
          <Link
            to="/users/facebook"
            onClick={() => handleSelectUser('facebook')}
          >
            Facebook
          </Link>
        </li>
      </ul>
      <Route exact path="/users">
        <span>Select you user!!!!!</span>
      </Route>
      <Route path="/users/:usersId">
        <User {...userObject} />
      </Route>
    </div>
  );
}
