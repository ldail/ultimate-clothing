import navigationTypes from "./navigation-types"

const INITIAL_STATE = {
  sidebarHidden: true,
  dropdownHidden: true
}

const navigationReducer = (state=INITIAL_STATE,action) => {
  switch(action.type) {
    case navigationTypes.SIDEBAR_HIDDEN:
      let newDropdownState = state.dropdownHidden;
      if (!state.sidebarHidden) {
        newDropdownState = true
      }
      return {
        ...state,
        sidebarHidden: !state.sidebarHidden,
        dropdownHidden: newDropdownState
        }
    case navigationTypes.DROPDOWN_HIDDEN:
      return {
        ...state,
        dropdownHidden: !state.dropdownHidden
        }
      case navigationTypes.HIDE_DROPDOWN_AND_SIDEBAR:
        return {
          ...state,
          dropdownHidden: true,
          sidebarHidden: true
        }
    default:
      return state;
  }
}

export default navigationReducer;