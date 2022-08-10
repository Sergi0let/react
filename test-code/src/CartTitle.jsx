import React from 'react';

export default ({ userName, count }) => (
  <div className="cart-title">{`${userName}, you added ${count} products.`}</div>
);
