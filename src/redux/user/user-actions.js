import userTypes from './user-types';

export const signIn = (user) => ({
  type: userTypes.SIGN_IN,
  payload: user
})

export const signOut = () => ({
  type: userTypes.SIGN_OUT
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

export const emailSignInStart = () => ({
  type: userTypes.EMAIL_SIGN_IN_START
})

export const emailSignInSuccess = (user) => ({
  type: userTypes.EMAIL_SIGN_IN_SUCCESS,
  payload: user
})

export const emailSignInFailure = error => ({
  type: userTypes.EMAIL_SIGN_IN_FAILURE,
  payload: error
})