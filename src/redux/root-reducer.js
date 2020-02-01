import { combineReducers } from "redux";
import cartReducer from './cart/cart-reducer';
import userReducer from "./user/user-reducer";
import collectionsReducer from "./collections/collections-reducer";
import navigationReducer from "./navigation/navigation-reducer";
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({cart: cartReducer, user: userReducer, collections: collectionsReducer, navigation: navigationReducer})

export default persistReducer(persistConfig,rootReducer);