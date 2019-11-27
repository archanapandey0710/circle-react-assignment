import React, { Component } from "react";
import { connect } from "react-redux";
import * as employeeAction from "../../store/actions/employeeAction";

class EmployeeList extends Component {
  state = {
    empList: []
  };
  componentDidMount() {
    this.getEmployeeList();
  }
  getEmployeeList = () => {
    this.props.onGetEmployeeList().then(res => {
      this.setEmployeeList();
    });
  };
  setEmployeeList = () => {
    this.setState({
      empList: this.props.employeeList
    });
  };
  render() {
    return (
      <React.Fragment>
        <h1>hi</h1>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    employeeList: state.employeeReducer.employeeList
      ? state.employeeReducer.employeeList
      : []
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onGetEmployeeList: () => dispatch(employeeAction.getAllEmployeeList())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(EmployeeList);
