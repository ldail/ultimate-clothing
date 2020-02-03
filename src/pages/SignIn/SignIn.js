import React from 'react'

import SignInForm from '../../components/SignInForm/SignInForm';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { userSelector } from '../../redux/user/user-selector';
import { withRouter } from 'react-router-dom';
import './SignIn.css';

const SignIn = ({user, history}) => {
  if (user) history.push('/');
  return (
    <main id="SignIn">
      <div className="divider" />
      <div className="signInForms">
        <section>
          <SignInForm />
        </section>
        <section>
          <RegisterForm />
        </section>
      </div>
    </main>
  );
};

const mapStateToProps = createStructuredSelector({
  user: userSelector
})

export default withRouter(connect(mapStateToProps,null)(SignIn));