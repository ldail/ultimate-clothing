import React, { useState } from 'react';
import {signInWithGoogle, auth} from '../../firebase/firebase.utils'
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {googleSignInStart, emailSignInStart} from '../../redux/user/user-actions'
import './SignInForm.css';

const SignInForm = ({history, googleSignInStart, emailSignInStart}) => {

  let [error, setError] = useState(null);
  let [userInfo, setUserInfo] = useState({email: '', password: ''})

  const handleSubmit = async (e) => {
    e.preventDefault();
    let {email, password} = userInfo;
    console.log(email, ' ', password);
    try {
      emailSignInStart({email, password})

    }
    catch (error) {
      setError(error);
    }
  }

  const handleChange = async (e) => {
    setUserInfo({...userInfo, [e.target.name]: e.target.value})
  }
  return (
    <form id="signIn" onSubmit={(e) => handleSubmit(e)}>
      <legend>Sign In</legend>
      {error ? <h3>Could not login: {error.message}</h3> : ''}
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

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart(email, password))
})


export default withRouter(connect(null, mapDispatchToProps)(SignInForm));