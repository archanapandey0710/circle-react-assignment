import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

//Import Pages
import EmployeeList from "./../pages/employee/EmployeeList";

const Routes = () => (
  <Router>
    <Route exact path="/" component={EmployeeList}></Route>
  </Router>
);
export default Routes;
