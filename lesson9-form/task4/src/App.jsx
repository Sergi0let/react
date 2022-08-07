import React from 'react';

import UsersList from './UsersList.jsx';
import './index.scss';

const users = [
  { age: 160, name: 'Shang Thsung', id: 1 },
  { age: 12, name: 'Barraka', id: 2 },
  { age: 62, name: 'Raiden', id: 3 },
  { age: 24, name: 'Liu Kang', id: 4 },
];

const App = () => <UsersList users={users} />;

export default App;
