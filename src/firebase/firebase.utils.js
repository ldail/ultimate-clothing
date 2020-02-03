import firebase from "firebase/app";
import firebaseConfig from './firebaseConfig';
import "firebase/auth";
import "firebase/firestore";

firebase.initializeApp(firebaseConfig);

const app = firebase.app();
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const {displayName, email, uid} = userAuth;

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

export const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export const addDocumentsToCollection = async (collectionKey, objectsToAdd) => {
  let newRef = firestore.collection(collectionKey);
  
  let batch = firestore.batch();
  
  objectsToAdd.forEach(obj => {
    let {title, items} = obj;
    let newDocRef = newRef.doc();
    batch.set(newDocRef, {title, items});
  })

  await batch.commit();
}

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    },reject)
  })
}

export default firebase;