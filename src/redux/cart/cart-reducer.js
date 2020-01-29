import {increaseQuantity, decreaseQuantity, removeItem} from './cart-utils'
import cartTypes from './cart-types';

const INITIAL_STATE = {
  cartItems: []
}

const cartReducer = (state=INITIAL_STATE,action) => {
  switch(action.type) {
    case cartTypes.ADD_ITEM:
    case cartTypes.INCREASE_QUANTITY:
      return increaseQuantity(action.payload);
    case cartTypes.REMOVE_ITEM:
      return removeItem(state, action.payload);
    case cartTypes.DECREASE_QUANTITY:
      return decreaseQuantity(state, action.payload);
    default:
      return state;
  }
}

export default cartReducer;