import { combineReducers } from "redux";

//import Reducers
import employeeReducer from "./employeeReducer";
import loginReducer from "./loginReducer";
const reducers = combineReducers({ employeeReducer, loginReducer });

export default reducers;
