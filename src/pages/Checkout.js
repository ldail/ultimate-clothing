import React from 'react';
import CheckoutItem from '../components/CheckoutItem/CheckoutItem';

const Checkout = () => {
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
        <CheckoutItem />
      </ul>
      <span className="total">$180</span>
      <p>*Please use the following test credit card for payments*</p>

      <p>4242 4242 4242 4242 - exp: 01/20 - CVV: 123</p>
      <button type="button" className="stripeButton">Pay now</button>
    </main>
  );
};

export default Checkout;