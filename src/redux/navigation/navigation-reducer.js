import navigationTypes from "./navigation-types"

const INITIAL_STATE = {
  hidden: true
}

const navigationReducer = (state=INITIAL_STATE,action) => {
  switch(action.type) {
    case navigationTypes.SIDEBAR_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
        }
    default:
      return state;
  }
}

export default navigationReducer;