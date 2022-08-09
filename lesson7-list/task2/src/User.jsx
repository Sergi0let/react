import React from 'react';

export default ({ name, age }) => {
  return (
    <li className="user">
      <span>{name}</span>
      <span className="user__age">{age}</span>
    </li>
  );
};
