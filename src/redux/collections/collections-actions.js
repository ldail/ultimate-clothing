import { collectionTypes } from "./collections-types";

export const addItems = (items) => ({
  type: collectionTypes.ADD_ITEMS,
  payload: items
})

export const fetchCollectionsFailure = (error) => ({
  type: collectionTypes.GET_COLLECTION_FAILURE,
  payload: error
})

export const fetchCollectionsSuccess = (collections) => ({
  type: collectionTypes.GET_COLLECTION_SUCCESS,
  payload: collections
})

export const fetchCollectionsStart = () => ({
  type: collectionTypes.GET_COLLECTION_START
})