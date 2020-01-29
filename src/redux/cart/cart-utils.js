export const increaseQuantity = (state, addItem) => {
  let newState = [...state];
  let find = newState.find(item => item.id === addItem.id)
  if (find) {
    find.quantity++;
    return newState;
  }
  else {
    return [...newState, addItem]
  }
}

export const decreaseQuantity = (state, decreaseItem) => {
  let newState = [...state];
  let find = newState.find(item => item.id === decreaseItem.id);
  if (find.quantity === 1) {
    return newState.filter(item => item.id !== decreaseItem.id)
  }
  else {
    find.quantity--;
    return newState;
  }
}

export const removeItem = (state, removeItem) => {
  let newState = [...state];
  return newState.filter(item => item.id !== removeItem.id);
}