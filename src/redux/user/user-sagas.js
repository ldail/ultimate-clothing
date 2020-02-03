import {put, all, call, takeLatest} from 'redux-saga/effects';
import userTypes from './user-types';
import {auth, provider, createUserProfileDocument} from '../../firebase/firebase.utils';
import {googleSignInSuccess, googleSignInFailure, emailSignInFailure, emailSignInSuccess} from './user-actions'

export function* userSagas() {
  yield all([call(onGoogleSignInStart)])
}

export function* signInWithGoogle() {
  try {
    const {user} = yield auth.signInWithPopup(provider);
    let userRef = yield call(createUserProfileDocument, user);
    const userSnapshot = yield userRef.get();
    yield put(googleSignInSuccess({id: userSnapshot.id, ...userSnapshot.data()}));
  } catch(error) {
    yield put(googleSignInFailure(error))
  }
}

export function* signInWithEmail({payload: {email, password}}) {
  try {
    const {user} = yield auth.signInWithEmailAndPassword(email,password);
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapshot = yield userRef.get();
    yield put(emailSignInSuccess({id: userSnapshot.id, ...userSnapshot.data()}))
  } catch(error) {
    yield put(emailSignInFailure(error))
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(userTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* onEmailSigninStart() {
  yield takeLatest(userTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}