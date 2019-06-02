import { SET_CURRENT_USER } from './types';
import axios from 'axios';

// Register User
export const registerUser = (userData, history) => dispatch => {
  axios
    .post('/api/users/register', userData)
    .then(response => {
      // console.log(response.data);
      history.push('/');
    })
    .catch(err => console.log(err));
};

// Login User - Get User Token
export const loginUser = (userData, history) => dispatch => {
  axios
    .post(`/api/users/login`, userData)
    .then(response => {
      console.log(response.data);
      // const { token } = response.data;
      // Set token to local storage
      // localStorage.setItem('jwtToken', token);

      // Set token to Authorization header
      // setAuthToken(token);

      // Decode token to get user data
      // const decoded = jwt_decode(token);
      // Set current user
      // dispatch(setCurrentUser(userData));

      // send user to dashboard
      // history.push('/app');
    })
    .catch(err => console.log('errors', err));
};

// Set Authorization header
export const setAuthToken = token => {
  if (token) {
    // Apply to every request
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    // Delete auth header
    delete axios.defaults.headers.common['Authorization'];
  }
};

// Current User - testing a private API endpoint
export const currentUser = userData => dispatch => {
  axios.get(`/api/users/current`, {}).then(res => {
    const pay = {
      ...res.data.data
    };
    dispatch({
      type: SET_CURRENT_USER,
      payload: pay
    });
  });
  // .catch(err =>
  // 	dispatch({
  // 		type: SET_ERRORS,
  // 		payload: err.response.data
  // 	})
  // );
};

// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

// Log user out
export const logoutUser = () => dispatch => {
  // Remove token from localStorage
  localStorage.removeItem('jwtToken');
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};
