import React, { Component } from "react";
import { connect } from "react-redux";
import * as employeeAction from "../../store/actions/employeeAction";
import TableData from "../../components/TableData";
import SearchBar from "../../components/SearchBar";
import Filter from "../../components/Filter";

class EmployeeList extends Component {
  state = {
    empList: [],
    filterItems: [
      { text: "All", value: "all" },
      { text: "Active", value: "active" },
      { text: "Inactive", value: "inactive" }
    ],
    defaultFilterItem: "all"
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
  handleQuickSearch = quickSearchText => {
    let filteredEmployeeList = undefined;
    switch (this.state.defaultFilterItem) {
      case "active":
        filteredEmployeeList = this.props.employeeList.filter(
          item =>
            item.name.toUpperCase().includes(quickSearchText.toUpperCase()) &&
            item.isActive === true
        );
        break;
      case "inactive":
        filteredEmployeeList = this.props.employeeList.filter(
          item =>
            item.name.toUpperCase().includes(quickSearchText.toUpperCase()) &&
            item.isActive === false
        );
        break;
      case "all":
        filteredEmployeeList = this.props.employeeList.filter(item =>
          item.name.toUpperCase().includes(quickSearchText.toUpperCase())
        );
        break;
      default:
        filteredEmployeeList = this.props.employeeList.filter(item =>
          item.name.toUpperCase().includes(quickSearchText.toUpperCase())
        );
        break;
    }
    this.setState({ empList: filteredEmployeeList });
  };
  filterByStatus = filterValue => {
    let filteredEmployeeList = undefined;
    if (filterValue) {
      switch (filterValue) {
        case "active":
          filteredEmployeeList = this.props.employeeList.filter(
            item => item.isActive === true
          );
          break;
        case "inactive":
          filteredEmployeeList = this.props.employeeList.filter(
            item => item.isActive === false
          );
          break;
        case "all":
          filteredEmployeeList = this.props.employeeList;
          break;
        default:
          filteredEmployeeList = this.props.employeeList;
      }
      this.setState({
        defaultFilterItem: filterValue,
        empList: filteredEmployeeList
      });
    }
  };
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div>
            <h2>
              <span style={{ float: "left" }}>Employee List</span>
              <button className="logout">Logout</button>
            </h2>
          </div>
          <br /> <br />
          <div>
            <span style={{ width: "50%" }}>
              <SearchBar handleQuickSearch={this.handleQuickSearch}></SearchBar>
            </span>
            <span style={{ width: "50%" }}>
              <label style={{ marginLeft: "20px" }}>Filter By:</label>{" "}
              <Filter
                data={this.state.filterItems}
                handleFilter={this.filterByStatus}
              ></Filter>
            </span>
          </div>
          <br />
          <div>
            <table>
              <thead>
                <th>Name</th>
                <th>Date of Birth</th>
                <th>Age</th>
                <th>Salary</th>
                <th>Status</th>
              </thead>
              <tbody>
                <TableData data={this.state.empList}></TableData>
              </tbody>
            </table>
          </div>
        </div>
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
