import axios from 'axios'
import axiosAuth from './axiosAuth'


/* --- Authentication Actions --- */
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const logingIn = creds => dispatch => {
  dispatch({ type: LOGIN_START })
  return axios
    .post('http://localhost:5000/api/login', creds)
    .then(res => {
      localStorage.setItem('token', res.data.token)
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload })
    })
    .catch(err => {
      dispatch({ type: LOGIN_FAIL, payload: err })
    })
} //Logs in a user with valid creds


/* --- Friends List Actions --- */
export const FETCHING_FRIENDS_START = 'FETCHING_FRIENDS_START'
export const FETCHING_FRIENDS_SUCCESS = 'FETCHING_FRIENDS_SUCCESS'
export const FETCHING_FRIENDS_FAIL = 'FETCHING_FRIENDS_FAIL'
export const fetchingFriends = () => dispatch => {
  dispatch({ type: FETCHING_FRIENDS_START })
  axios
    .get('http://localhost:5000/api/friends')
    .then(res => {
      dispatch({ type: FETCHING_FRIENDS_SUCCESS , payload: res.data })
    })
    .catch(err => {
      dispatch({ type: FETCHING_FRIENDS_FAIL , payload: err })
    })
} //Fetches all friends
