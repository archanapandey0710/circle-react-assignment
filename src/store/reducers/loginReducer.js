import * as actionTypes from "../actions/actionTypes";

const initialState = {
  isLoggedIn: false
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return executeLogin(state, action);
    default:
      return state;
  }
};

const executeLogin = (state, action) => {
  return {
    ...state,
    isLoggedIn: action.isLoggedIn
  };
};

export default loginReducer;
