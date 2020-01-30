import { collectionTypes } from "./collections-types";

export const addItems = (items) => ({
  type: collectionTypes.ADD_ITEMS,
  payload: items
})