import React from 'react';

import SignInForm from '../components/SignInForm/SignInForm';
import RegisterForm from '../components/RegisterForm/RegisterForm';

const SignIn = () => {
  return (
    <main id="SignIn">
      <section>
        <SignInForm />
      </section>
      <section>
        <RegisterForm />
      </section>
    </main>
  );
};

export default SignIn;