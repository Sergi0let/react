import React from 'react';

const CartTitle = ({ userName, count }) => {
  let item;
  if (count > 1) {
    item = 'items';
  } else {
    item = 'item';
  }
  return (
    <div className="cart-title">{`${userName}, you added ${count} ${item}.`}</div>
  );
};

export default CartTitle;
