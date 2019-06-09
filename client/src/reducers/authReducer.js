import _ from 'lodash';
import { SET_CURRENT_USER, ADD_ERROR, REMOVE_ERROR } from '../actions/types';

const initialState = {
  isAuthenticated: false,
  user: {},
  loginErrors: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    // Deals with SET_CURRENT_USER actions here
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !_.isEmpty(action.payload),
        user: action.payload // action.payload contains user's data
      };
    case ADD_ERROR:
      return {
        ...state,
        loginErrors: state.loginErrors.concat([action.payload])
      };
    case REMOVE_ERROR:
      return {
        ...state,
        loginErrors: []
      };

    default:
      return state;
  }
}
