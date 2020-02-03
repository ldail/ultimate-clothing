import {all, call, put, takeLatest} from 'redux-saga/effects';
import { collectionTypes } from './collections-types';
import {fetchCollectionsFailure, fetchCollectionsSuccess} from './collections-actions';
import {firestore} from '../../firebase/firebase.utils';


export function* fetchCollections() {
  try {
    const collectionRef = yield firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    let collectionNames = yield snapshot.docs;
    let mappedCollectionData = yield [];
    yield collectionNames.forEach(doc => {
      mappedCollectionData.push(doc.data());
    });
    yield put(fetchCollectionsSuccess(mappedCollectionData))
  } catch(error) {
    yield put(fetchCollectionsFailure(error.message))
  }
}

export function* fetchCollectionsAsyncStart() {
  yield takeLatest(collectionTypes.GET_COLLECTION_START, fetchCollections)
}

export function* collectionsSagas() {
  yield all([call(fetchCollectionsAsyncStart)])
}