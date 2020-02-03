import { collectionTypes } from "./collections-types"

const INITIAL_STATE = ({
  items: [],
  error: false
})

const collectionsReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case collectionTypes.ADD_ITEMS:
      return {
        ...state,
        items: action.payload
      }
    case collectionTypes.GET_COLLECTION_FAILURE:
      return {
        ...state,
        error: action.payload
      }
    case collectionTypes.GET_COLLECTION_SUCCESS:
      return {
        ...state,
        items: action.payload,
        error: false
      }
    default:
      return state;
  }
}

export default collectionsReducer;