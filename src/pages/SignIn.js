import React from 'react';
import { signInWithGoogle } from '../firebase/firebase.utils';

const SignIn = () => {
  return (
    <main id="SignIn">
      <section>
        <form id="signIn">
          <legend>Sign In</legend>
          <label htmlFor="signIn-username">username</label>
          <input type="text" name="signIn-username" id="signIn-username" />
          <label htmlFor="signIn-password">password</label>
          <input type="text" name="signIn-password" id="signIn-password" />
          <button type="submit" className="shop">Sign In</button>
          <button type="button" className="shopInverted" onClick={() => signInWithGoogle()}>Sign In With Google</button>
        </form>
      </section>
      <section>
        <form id="register">
          <legend>Register</legend>
          <label htmlFor="register-displayName">display name</label>
          <input type="text" name="register-displayName" id="register-displayName" />
          <label htmlFor="register-username">username</label>
          <input type="text" name="register-username" id="register-username" />
          <label htmlFor="register-password">password</label>
          <input type="text" name="register-password" id="register-password" />
          <label htmlFor="register-confirmPassword">confirm password</label>
          <input type="text" name="register-confirmPassword" id="register-confirmPassword" />
          <label htmlFor="register-email">email</label>
          <input type="text" name="register-email" id="register-email" />
          <label htmlFor="register-confirmEmail">confirm email</label>
          <input type="text" name="register-confirmEmail" id="register-confirmEmail" />
          <button type="submit">Register</button>
        </form>
      </section>
    </main>
  );
};

export default SignIn;