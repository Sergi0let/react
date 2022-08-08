import React from 'react';

export default ({ onLogout }) => (
  <button onClick={onLogout} className="btn logout">
    Logout
  </button>
);
