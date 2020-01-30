import navigationTypes from "./navigation-types"

const INITIAL_STATE = {
  sidebarHidden: true,
  dropdownHidden: true
}

const navigationReducer = (state=INITIAL_STATE,action) => {
  switch(action.type) {
    case navigationTypes.SIDEBAR_HIDDEN:
      return {
        ...state,
        sidebarHidden: !state.sidebarHidden
        }
    case navigationTypes.DROPDOWN_HIDDEN:
      return {
        ...state,
        dropdownHidden: !state.dropdownHidden
        }
    default:
      return state;
  }
}

export default navigationReducer;