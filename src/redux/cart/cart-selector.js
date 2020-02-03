import {createSelector} from 'reselect';

const selectCart = state => state.cart;

export const cartItemsSelector = createSelector(
  selectCart,
  cart => cart.cartItems
);