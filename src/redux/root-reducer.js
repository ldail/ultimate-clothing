import { combineReducers } from "redux";
import cartReducer from './cart/cart-reducer';
import userReducer from "./user/user-reducer";
import collectionsReducer from "./collections/collections-reducer";
import navigationReducer from "./navigation/navigation-reducer";


const rootReducer = combineReducers({cart: cartReducer, user: userReducer, collections: collectionsReducer, navigation: navigationReducer})

export default rootReducer;