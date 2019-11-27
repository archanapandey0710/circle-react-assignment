import { combineReducers } from "redux";

//import Reducers
import employeeReducer from "./employeeReducer";
const reducers = combineReducers({ employeeReducer });

export default reducers;
