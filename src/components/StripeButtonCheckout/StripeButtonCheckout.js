import React from 'react';
import StripeCheckout from 'react-stripe-checkout'
import config from '../../config';

const StripButtonCheckout = ({price}) => {

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
      .then(resJson => alert('Payment success!'))
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

export default StripButtonCheckout;