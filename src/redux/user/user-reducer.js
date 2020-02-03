import userTypes from "./user-types"

const INITIAL_STATE = ({
  user: null,
  error: false
})

const userReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case userTypes.GOOGLE_SIGN_IN_SUCCESS:
    case userTypes.EMAIL_SIGN_IN_SUCCESS:
      return {
        ...state, 
        user: action.payload,
        error: false
      };
    case userTypes.GOOGLE_SIGN_IN_FAILURE:
    case userTypes.EMAIL_SIGN_IN_FAILURE:
      return {
        ...state,
        error: action.payload
      }
    case userTypes.SIGN_OUT:
      return state;
    default:
      return state;
  }
}

export default userReducer;