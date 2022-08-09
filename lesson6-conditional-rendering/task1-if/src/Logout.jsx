import React from 'react';

export default ({ onLogout }) => (
  <button className="btn logout" onClick={onLogout}>
    Logout
  </button>
);
