import {
FETCHING_FRIENDS_START,
FETCHING_FRIENDS_SUCCESS,
FETCHING_FRIENDS_FAIL
} from "../actions";

const initialState = {
  friends: [],
  isFetchingFriends: false,
  err: null
};

export const friendReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_FRIENDS_START:
      return{
        ...state,
        isLogingIn: true
      }
    case FETCHING_FRIENDS_SUCCESS:
      return{
        ...state,
        isLogingIn: false,
        friends: action.payload
      }
    case FETCHING_FRIENDS_FAIL:
      return{
        ...state,
        isLogingIn: false,
        err: action.payload
      }
    default:
      return state;
  }
};
