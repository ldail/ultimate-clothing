import navigationTypes from "./navigation-types"

const INITIAL_STATE = {
  sidebarHidden: true,
  dropdownHidden: true,
  successReceipt: null
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
      case navigationTypes.SET_SUCCESS_RECEIPT_SRC:
        return {
          ...state,
          successReceipt: action.payload
        }
    default:
      return state;
  }
}

export default navigationReducer;