import {put, all, call, takeLatest} from 'redux-saga/effects';
import userTypes from './user-types';
import {auth, provider, createUserProfileDocument, getCurrentUser} from '../../firebase/firebase.utils';
import {googleSignInSuccess, googleSignInFailure, emailSignInFailure, emailSignInSuccess, signOutSuccess, signOutFailure, registerFailure, registerSuccess} from './user-actions'

export function* userSagas() {
  yield all([call(onGoogleSignInStart), call(onEmailSigninStart), call(onCheckUser), call(onSignOut), call(onRegister)])
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
    const {user} = yield auth.signInWithEmailAndPassword(email, password);
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapshot = yield userRef.get();
    yield put(emailSignInSuccess({id: userSnapshot.id, ...userSnapshot.data()}))
  } catch(error) {
    yield put(emailSignInFailure(error))
  }
}

export function* checkUser() {
  try {
    const user = yield getCurrentUser();
    if (!user) return;
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapshot = yield userRef.get();
    yield put(emailSignInSuccess({id: userSnapshot.id, ...userSnapshot.data()}))
  } catch(error) {
    yield put (emailSignInFailure(error))
  }
}

export function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess())
  } catch(error) {
    yield put(signOutFailure(error))
  }
}

export function* register({payload: {email, password, displayName} }) {
  try {
    const {user} = yield auth.createUserWithEmailAndPassword(email, password);
    let userRef = yield call(createUserProfileDocument, user, {displayName});
    let snapshot = yield userRef.get()
    yield put(emailSignInSuccess({id: snapshot.id, ...snapshot.data()}))
  } catch(error) {
    yield put(registerFailure(error))
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(userTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* onEmailSigninStart() {
  yield takeLatest(userTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onCheckUser() {
  yield takeLatest(userTypes.CHECK_USER, checkUser)
}

export function* onSignOut() {
  yield takeLatest(userTypes.SIGN_OUT_START, signOut)
}

export function* onRegister() {
  yield takeLatest(userTypes.REGISTER_START, register)
}