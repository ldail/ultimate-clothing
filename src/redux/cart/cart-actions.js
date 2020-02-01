import cartTypes from './cart-types';

export const addItem = (item) => ({
  type: cartTypes.ADD_ITEM,
  payload: item
});

export const removeItem = (item) => ({
  type: cartTypes.REMOVE_ITEM,
  payload: item
});

export const increaseQuantity = (item) => ({
  type: cartTypes.INCREASE_QUANTITY,
  payload: item
});

export const decreaseQuantity = (item) => ({
  type: cartTypes.DECREASE_QUANTITY,
  payload: item
});

export const getTotal = () => ({
  type: cartTypes.GET_TOTAL
})

export const getItemCount = () => ({
  type: cartTypes.GET_ITEM_COUNT
})