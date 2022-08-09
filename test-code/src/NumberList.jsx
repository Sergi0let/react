import React from 'react';

export default ({ numbers }) => (
  <ul>
    {numbers.map((num) => (
      <li>{num}</li>
    ))}
  </ul>
);
