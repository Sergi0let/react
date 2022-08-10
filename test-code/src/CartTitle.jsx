import React from 'react';

const CartTitle = (props) => (
  <div className="cart-title">{`${props.userName}, you added ${props.count} items.`}</div>
);

export default CartTitle;
