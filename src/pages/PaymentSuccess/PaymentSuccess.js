import React, { useEffect } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { successReceiptSelector } from '../../redux/navigation/navigation-selector';
import { setSuccessReceipt } from '../../redux/navigation/navigation-actions';
import './PaymentSuccess.css'
import { withRouter } from 'react-router-dom';

const PaymentSuccess = ({succecssReceipt, setSuccessReceiptSrc, history}) => {

  useEffect(() => {
    if (succecssReceipt !== null) {
    window.open(succecssReceipt, "Payment Successful")
    setSuccessReceiptSrc(null);
    }
    else {
      history.push('/');
    }
  }, [])
  return (
    <main id="PaymentSuccess">
      <h2>Payment success!</h2>
      <p>Please check the popup or your email for a receipt!</p>
    </main>
  );
};

const mapStateToProps = createStructuredSelector({
  succecssReceipt: successReceiptSelector
})

const mapDispatchToProps = dispatch => ({
  setSuccessReceiptSrc: (src) => dispatch(setSuccessReceipt(src))
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(PaymentSuccess));