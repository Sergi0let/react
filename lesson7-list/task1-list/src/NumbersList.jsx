import React from 'react';

export default ({ numbers }) => {
  return (
    <ul>
      {numbers.map((num) => (
        <li key={num}>{num}</li>
      ))}
    </ul>
  );
};
