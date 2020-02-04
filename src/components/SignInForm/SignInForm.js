import React, { useState } from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {googleSignInStart, emailSignInStart} from '../../redux/user/user-actions'
import './SignInForm.css';
import { createStructuredSelector } from 'reselect';
import { checkUserErrorSelector } from '../../redux/user/user-selector';

const SignInForm = ({history, googleSignInStart, emailSignInStart, checkUserError}) => {

  let [userInfo, setUserInfo] = useState({email: '', password: ''})

  let {form} = checkUserError;

  const handleSubmit = async (e) => {
    e.preventDefault();
    let {email, password} = userInfo;
    emailSignInStart({email, password})
  }

  const handleChange = async (e) => {
    setUserInfo({...userInfo, [e.target.name]: e.target.value})
  }
  return (
    <form id="signIn" onSubmit={(e) => handleSubmit(e)}>
      <legend>Sign In</legend>
      {form === 'SignIn' ? <h3>Could not login: {checkUserError?.error?.message}</h3> : ''}
      <label htmlFor="email">email</label>
      <input type="text" name="email" id="email" onChange={(e) => handleChange(e)} value={userInfo.email} required />
      <label htmlFor="password">password</label>
      <input type="password" name="password" id="password" onChange={(e) => handleChange(e)} value={userInfo.password} required />
      <button type="submit" className="shop">Sign In</button>
      <button type="button" className="shopInverted" onClick={async () => {
        await googleSignInStart();
      }}>Sign In With Google</button>
    </form>
  );
};

const mapStateToProps = createStructuredSelector({
  checkUserError: checkUserErrorSelector
})

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart(email, password))
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignInForm));