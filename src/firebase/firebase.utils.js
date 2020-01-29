import firebase from "firebase/app";
import firebaseConfig from './firebaseConfig';
import "firebase/auth";
import "firebase/firestore";

firebase.initializeApp(firebaseConfig);

const app = firebase.app();
export const auth = firebase.auth();
const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const {displayName, email, uid} = userAuth;
  console.log(uid);

  const userRef = firestore.doc(`users/${uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch(error) {
      console.error('Could not add user');
    }
  }
  return userRef;
}

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;