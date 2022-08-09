import React from 'react';

import UserGreeting from './UserGreeting.jsx';
import GuestGreeting from './GuestGreeting.jsx';

export default ({ isLoggedIn }) =>
  isLoggedIn ? <UserGreeting /> : <GuestGreeting />;
