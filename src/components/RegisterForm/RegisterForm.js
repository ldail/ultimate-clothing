import React, { useState } from 'react';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { registerStart } from '../../redux/user/user-actions';
import './RegisterForm.css';
import { createStructuredSelector } from 'reselect';
import { checkUserErrorSelector } from '../../redux/user/user-selector';


const RegisterForm = ({signIn, history, register, checkUserError}) => {

  let [userInfo, setUserInfo] = useState({
    displayName: null,
    password: null,
    confirmPassword: null,
    username: null,
    email: null,
    confirmEmail: null
  });
  const [error, setError] = useState(false);

  let {form} = checkUserError;

  const handleSubmit = async (e) => {
    let {password, confirmPassword, email, confirmEmail, displayName} = userInfo;
    e.preventDefault();
    if (password !== confirmPassword || email !== confirmEmail) {
      setError(`Your fields don't match!`)
      return;
    }

    if (!error) {
      try {
        register(userInfo);
  
      }catch (error) {
        console.error(error);
        setError(`Error in registering. Try again. ${error.message}`);
      }
    }
  }

  const handleChange = (e) => {
    setError(false);
    setUserInfo({...userInfo, [e.target.name]: e.target.value})
  }
  
  return (
    <form id="register" onSubmit={(e) => handleSubmit(e)}>
      <legend>Register</legend>
      {form === 'Register' ? <h3>Could not submit: {checkUserError?.error?.message}</h3> : ''}
      <label htmlFor="displayName">display name</label>
      <input type="text" name="displayName" id="displayName" onChange={(e) => {handleChange(e)}} value={userInfo.displayName} required/>
      <label htmlFor="username">username</label>
      <input type="text" name="username" id="username" onChange={(e) => {handleChange(e)}} value={userInfo.username} required />
      <label htmlFor="password">password</label>
      <input type="password" name="password" id="password" onChange={(e) => {handleChange(e)}} value={userInfo.password} required />
      <label htmlFor="confirmPassword">confirm password</label>
      <input type="password" name="confirmPassword" id="confirmPassword" onChange={(e) => {handleChange(e)}} value={userInfo.confirmPassword} required />
      <label htmlFor="email">email</label>
      <input type="text" name="email" id="email" onChange={(e) => {handleChange(e)}} value={userInfo.email} required/>
      <label htmlFor="confirmEmail">confirm email</label>
      <input type="text" name="confirmEmail" id="confirmEmail" onChange={(e) => {handleChange(e)}} value={userInfo.confirmEmail} required />
      <button type="submit">Register</button>
    </form>
  );
};

const mapStateToProps = createStructuredSelector({
  checkUserError: checkUserErrorSelector
})

const mapDispatchToProps = dispatch => ({
  register: (userInfo) => dispatch(registerStart(userInfo))
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(RegisterForm));