import React from 'react';
import CartTitle from './CartTitle.jsx';
import ProductsList from './ProductsList.jsx';

class ShoppingCart extends React.Component {
  state = {
    cartItems: [],
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
export default ShoppingCart;
