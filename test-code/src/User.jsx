import React from 'react';

export default ({ name, age }) => (
  <li className="user">
    <span className="user__name">{name}</span>
    <span className="user__age">{age}</span>
  </li>
);
