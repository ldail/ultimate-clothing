import {all, call} from 'redux-saga/effects';

import {userSagas} from './user/user-sagas';
import {collectionsSagas} from './collections/collections-sagas';
// import {cartSagas} from './cart/cart-sagas';

export default function* rootSaga() {
  yield all([
    call(userSagas),
    call(collectionsSagas),
    // call(cartSagas)
  ])
}