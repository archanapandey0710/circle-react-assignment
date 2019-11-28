import { LOGIN } from "./actionTypes";

const setIsLoggedIn = isLoggedIn => {
  return {
    type: LOGIN,
    isLoggedIn: isLoggedIn
  };
};

export const login = data => {
  return dispatch => {
    dispatch(setIsLoggedIn(data));
  };
};

export const logout = () => {
  return dispatch => {
    dispatch(setIsLoggedIn(false));
  };
};
