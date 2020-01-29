import userTypes from './user-types';

export const signIn = (user) => ({
  type: userTypes.SIGN_IN,
  payload: user
})

export const signOut = () => ({
  type: userTypes.SIGN_OUT
})