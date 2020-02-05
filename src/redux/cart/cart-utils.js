export const increaseQuantity = (state, addItem) => {
  let cartItems = [...state.cartItems];
  let find = cartItems.find(item => item.id === addItem.id);
  if (find) {
    find.quantity++;
    return {
      ...state,
      cartItems
    }
  }
  else {
    addItem.quantity = 1;
    return {
      ...state,
      cartItems: [...cartItems, addItem]
    }
  }
}

export const decreaseQuantity = (state, decreaseItem) => {
  let cartItems = [...state.cartItems];
  let find = cartItems.find(item => item.id === decreaseItem.id);
  if (find.quantity === 1) {
    return {
      ...state,
      cartItems: cartItems.filter(item => item.id !== decreaseItem.id)
    }
  }
  else {
    find.quantity--;
    return {
      ...state,
      cartItems
    }
  }
}

export const removeItem = (state, removeItem) => {
  let cartItems = [...state.cartItems];
  return {
    ...state,
    cartItems: cartItems.filter(item => item.id !== removeItem.id)
  }
}