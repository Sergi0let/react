import React from 'react';

export default ({ numbers }) => (
  <ul>
    {numbers.map((num) => (
      <li key={num}>{num}</li>
    ))}
  </ul>
);
