import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//Import Pages
import EmployeeList from "./../pages/employee/EmployeeList";

const Routes = () => (
  <Router>
    <Route exact path="/" component={EmployeeList}></Route>
  </Router>
);
export default Routes;
