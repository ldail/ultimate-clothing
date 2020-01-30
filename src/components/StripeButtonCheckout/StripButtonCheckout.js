import React from 'react';
import StripeCheckout from 'react-stripe-checkout'

const StripButtonCheckout = ({price}) => {

  const onToken = token => {
    console.log(token);
  }
  const centPrice = price * 100;
  const publishableKey = 'pk_test_1sfkoORkGAzykQQkTs6d0c1I0093c4Ehnb';
  return (
    <StripeCheckout
      label='Pay now'
      name='Ultimate Clothing Ltd.'
      billingAddress
      shippingAddress
      description={`Your total is ${price}`}
      panelLabel='Pay now'
      token={onToken}
      price={centPrice}
      stripeKey={publishableKey} />
  );
};

export default StripButtonCheckout;