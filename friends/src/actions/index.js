import axios from 'axios'


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
}


/* --- Friends List Actions --- */
