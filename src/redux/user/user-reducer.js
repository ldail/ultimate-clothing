import userTypes from "./user-types"

const INITIAL_STATE = ({
  user: null
})

const userReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case userTypes.SIGN_IN:
      return state;
    case userTypes.SIGN_OUT:
      return state;
    default:
      return state;
  }
}

export default userReducer;