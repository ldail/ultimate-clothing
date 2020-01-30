import { collectionTypes } from "./collections-types"

const INITIAL_STATE = ({
  items: []
})

const collectionsReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case collectionTypes.ADD_ITEMS:
      return {
        ...state,
        items: action.payload
      }
    default:
      return state;
  }
}

export default collectionsReducer;