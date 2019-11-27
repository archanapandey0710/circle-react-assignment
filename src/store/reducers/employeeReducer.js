import * as actionTypes from "../actions/actionTypes";

const initialState = {
  employeeList: []
};

const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_EMPLOYEES_LIST:
      return executeEmployeeList(state, action);
    default:
      return state;
  }
};

const executeEmployeeList = (state, action) => {
  return {
    ...state,
    employeeList: action.employeeList
  };
};

export default employeeReducer;
