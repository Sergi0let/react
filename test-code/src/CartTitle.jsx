import React from 'react';

class CartTitle extends React.Component {
  render() {
    return (
      <div className="cart-title">{`${this.props.userName}, you added ${this.props.count} items.`}</div>
    );
  }
}

export default CartTitle;
// const CartTitle = ({ userName, count }) => (
//   <div className="cart-title">{`${userName}, you added ${count} items.`}</div>
// );
