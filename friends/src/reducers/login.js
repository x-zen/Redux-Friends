import {
LOGIN_START,
LOGIN_SUCCESS,
LOGIN_FAIL,
} from "../actions";

const initialState = {
  isLogingIn: false,
  err: null
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
  case LOGIN_START:
    return{
      ...state,
      isLogingIn: true
    }
  case LOGIN_SUCCESS:
    return{
      ...state,
      isLogingIn: false
    }
  case LOGIN_FAIL:
    return{
      ...state,
      isLogingIn: false,
      err: action.payload
    }
    default:
      return state;
  }
};
