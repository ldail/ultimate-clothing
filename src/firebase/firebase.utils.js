import firebase from "firebase/app";
import firebaseConfig from './firebaseConfig';
import "firebase/auth";
import "firebase/firestore";

firebase.initializeApp(firebaseConfig);

const app = firebase.app();
export const auth = firebase.auth();
const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;