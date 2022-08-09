import React from 'react';

export default ({ name, age }) => (
  <li className="user">
    <span>{name}</span>
    <span className="user__age">{age}</span>
  </li>
);
