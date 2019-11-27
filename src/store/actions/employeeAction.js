import { GET_EMPLOYEES_LIST } from "./actionTypes";
import api from "../../utils/backend-rest-api";
// import {
//   setLoader,
//   sendSuccessNotice,
//   sendErrorNotice,
//   closeNotice
// } from "./apiResponseAction";

const setEmployeeList = employeeList => {
  return {
    type: GET_EMPLOYEES_LIST,
    employeeList: employeeList
  };
};

export const getAllEmployeeList = () => {
  return dispatch => {
    //  dispatch(setLoader(true));
    return new Promise((resolve, reject) => {
      api()
        .get("employee")
        .then(response => {
          debugger;
          dispatch(setEmployeeList(response.data));
          //  dispatch(setLoader(false));
          resolve(response);
        })
        .catch(error => {
          debugger;
          //dispatch(setLoader(false));
          // dispatch(sendErrorNotice("Error!!!"));
          //   setTimeout(() => {
          //     dispatch(closeNotice(1000));
          //   }, 1000);
          reject(error);
        });
    });
  };
};
