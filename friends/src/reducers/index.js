import { combineReducers } from 'redux';
import { loginReducer } from './login';
import { friendReducer } from './friend';

export default combineReducers({
  loginReducer,
  friendReducer
});
