import React from 'react';
import CheckoutItem from '../components/CheckoutItem/CheckoutItem';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../redux/cart/cart-selector';

const Checkout = ({cartItems}) => {

  let total = 0;
  cartItems.forEach(item => {
    total += item.price * item.quantity
  })
  return (
    <main id="Checkout">
      <ul className="columns">
        <li>Product</li>
        <li>Description</li>
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
      <p>*Please use the following test credit card for payments*</p>

      <p>4242 4242 4242 4242 - exp: 01/20 - CVV: 123</p>
      <button type="button" className="stripeButton">Pay now</button>
    </main>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

export default connect(mapStateToProps, null)(Checkout);