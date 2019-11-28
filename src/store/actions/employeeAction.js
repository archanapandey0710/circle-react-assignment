import { GET_EMPLOYEES_LIST } from "./actionTypes";
import api from "../../utils/backend-rest-api";

const setEmployeeList = employeeList => {
  return {
    type: GET_EMPLOYEES_LIST,
    employeeList: employeeList
  };
};

export const getAllEmployeeList = () => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      api()
        .get("employee")
        .then(response => {
          dispatch(setEmployeeList(response.data));
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  };
};
