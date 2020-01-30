import { combineReducers } from "redux";
import cartReducer from './cart/cart-reducer';
import userReducer from "./user/user-reducer";
import collectionsReducer from "./collections/collections-reducer";


const rootReducer = combineReducers({cart: cartReducer, user: userReducer, collection: collectionsReducer})

export default rootReducer;