import React from 'react';
import StripeCheckout from 'react-stripe-checkout'
import config from '../../config';
import { clearCart } from '../../redux/cart/cart-actions';
import { connect } from 'react-redux';
import { setSuccessReceipt } from '../../redux/navigation/navigation-actions';
import {withRouter} from 'react-router-dom';

const StripButtonCheckout = ({price, clearCart, setSuccessReceiptSrc, history}) => {

  const centPrice = price * 100;
  const publishableKey = 'pk_test_1sfkoORkGAzykQQkTs6d0c1I0093c4Ehnb';

  const onToken = token => {
    const postBody = {token, amount: centPrice}
    fetch(config.stripeLocation, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postBody)
    })
      .then(res => res.json())
      .then(resJson => {
        alert('Payment success!');

        clearCart();
        setSuccessReceiptSrc(resJson.success.receipt_url);
        history.push('/checkout/success')
        })
      .catch(error => {
        console.error(error);
        alert('Payment failed!')
      });
    
  }
  
  return (
    <StripeCheckout
      label='Pay now'
      name='Ultimate Clothing Ltd.'
      billingAddress
      shippingAddress
      description={`Your total is $${price}`}
      panelLabel='Pay now'
      token={onToken}
      price={centPrice}
      stripeKey={publishableKey} />
  );
};

const mapDispatchToProps = dispatch => ({
  clearCart: () => dispatch(clearCart()),
  setSuccessReceiptSrc: (src) => dispatch(setSuccessReceipt(src))
})

export default withRouter(connect(null,mapDispatchToProps)(StripButtonCheckout));