import { LOGIN } from "./actionTypes";
import api from "../../utils/backend-rest-api";

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
