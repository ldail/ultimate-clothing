import userTypes from './user-types';

export const signIn = (user) => ({
  type: userTypes.SIGN_IN,
  payload: user
})

export const signOutStart = () => ({
  type: userTypes.SIGN_OUT_START
})

export const signOutSuccess = () => ({
  type: userTypes.SIGN_OUT_SUCCESS
})

export const signOutFailure = (error) => ({
  type: userTypes.SIGN_OUT_FAILURE,
  payload: error
})

export const checkUser = () => ({
  type: userTypes.CHECK_USER
})

export const googleSignInStart = () => ({
  type: userTypes.GOOGLE_SIGN_IN_START
})

export const googleSignInSuccess = (user) => ({
  type: userTypes.GOOGLE_SIGN_IN_SUCCESS,
  payload: user
})

export const googleSignInFailure = error => ({
  type: userTypes.GOOGLE_SIGN_IN_FAILURE,
  payload: error
})

export const emailSignInStart = (user) => ({
  type: userTypes.EMAIL_SIGN_IN_START,
  payload: user
})

export const emailSignInSuccess = (user) => ({
  type: userTypes.EMAIL_SIGN_IN_SUCCESS,
  payload: user
})

export const emailSignInFailure = error => ({
  type: userTypes.EMAIL_SIGN_IN_FAILURE,
  payload: error
})

export const registerStart = (user) => ({
  type: userTypes.REGISTER_START,
  payload: user
})

export const registerSuccess = (user) => ({
  type: userTypes.REGISTER_SUCCESS,
  payload: user
})

export const registerFailure = error => ({
  type: userTypes.REGISTER_FAILURE,
  payload: error
})