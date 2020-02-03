import React from 'react';
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { cartItemsSelector } from '../../redux/cart/cart-selector';
import StripButtonCheckout from '../../components/StripeButtonCheckout/StripeButtonCheckout';
import './Checkout.css';

const Checkout = ({cartItems}) => {

  let total = 0;
  cartItems.forEach(item => {
    total += item.price * item.quantity
  })
  return (
    <main id="Checkout">
      <div className="divider" />
      <h2>CHECKOUT</h2>
      <ul className="columns">
        <li>Product</li>
        <li className="mobile-hidden">Description</li>
        <li>Quantity</li>
        <li>Price</li>
        <li>Remove</li>
      </ul>
      <ul className="items">
        {
        cartItems.map(item =>
          <CheckoutItem key={item.id} itemInfo={item} />
        )
        }
      </ul>
      <span className="total">${total}</span>
      <p className="devMessage">*Please use the following test credit card for payments*</p>

      <p className="devMessage">4242 4242 4242 4242 - exp: 02/20 - CVV: 123</p>
      <StripButtonCheckout price={total}/>
    </main>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: cartItemsSelector
})

export default connect(mapStateToProps, null)(Checkout);