import React from 'react';
import CartTitle from './CartTitle.jsx';
import ProductsList from './ProductsList.jsx';

export default class ShoppingCart extends React.Component {
  state = {
    cartItems: [
      {
        id: '1',
        name: 'iPhone 11',
        price: 999,
      },
      {
        id: '2',
        name: 'iPad Pro',
        price: 799,
      },
    ],
  };
  render() {
    const count = this.state.cartItems.length;
    return (
      <div className="column">
        <CartTitle userName={this.props.userData.firstName} count={count} />
        <ProductsList cartItems={this.state.cartItems} />
      </div>
    );
  }
}
