import UserActionTypes from "./userTypes";

const INITiAL_STATE = {
  currentUser: null,
  errorMessage: null,
  signUpErrorMessage: null,
  emailForSignUp: "",
  choseProfile: null,
  myList: null,
  profiles: null,
};

const userReducer = (state = INITiAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        errorMessage: null,
        signUpErrorMessage: null,
      };
    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        errorMessage: null,
      };
    case UserActionTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        signUpErrorMessage: null,
      };
    case UserActionTypes.SIGN_IN_FAILURE:
    case UserActionTypes.SIGN_OUT_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
      };
    case UserActionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        signUpErrorMessage: action.payload,
      };
    case UserActionTypes.SET_EMAIL_FOR_SIGN_UP:
      return {
        ...state,
        emailForSignUp: action.payload,
      };
    case UserActionTypes.SET_CHOSE_PROFILE:
      return {
        ...state,
        choseProfile: action.payload,
      };
    case UserActionTypes.SET_MY_LIST:
      return {
        ...state,
        myList: action.payload,
      };
    case UserActionTypes.SET_PROFILES:
      return {
        ...state,
        profiles: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
