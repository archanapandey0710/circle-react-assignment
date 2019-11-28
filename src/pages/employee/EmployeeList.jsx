import React, { Component } from "react";
import { connect } from "react-redux";
import * as employeeAction from "../../store/actions/employeeAction";
import * as loginAction from "../../store/actions/loginAction";
import TableData from "../../components/TableData";
import SearchBar from "../../components/SearchBar";
import Filter from "../../components/Filter";
import SortIcon from "../../components/SortIcon";
import { sortData } from "../../utils/app-utils";

class EmployeeList extends Component {
  state = {
    empList: [],

    filterItems: [
      { text: "All", value: "all" },
      { text: "Active", value: "active" },
      { text: "Inactive", value: "inactive" }
    ],

    tableHeader: [
      { text: "Name", value: "name" },
      { text: "Date of Birth", value: "dob" },
      { text: "Age", value: "age" },
      { text: "Salary", value: "salary" },
      { text: "Status", value: "status" }
    ],

    defaultFilterItem: "all",

    sortColName: "name",

    sortOrder: "asc"
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
    let sortedEmployeeList = sortData(
      filteredEmployeeList,
      this.state.sortColName,
      this.state.sortOrder
    );
    this.setState({ empList: sortedEmployeeList });
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
      let sortedEmployeeList = sortData(
        filteredEmployeeList,
        this.state.sortColName,
        this.state.sortOrder
      );
      this.setState({
        defaultFilterItem: filterValue,
        empList: sortedEmployeeList
      });
    }
  };

  sortTable = (sortColName, sortOrder) => {
    if (this.state.empList.length > 0) {
      let sortedEmployeeList = sortData(
        this.state.empList,
        sortColName,
        sortOrder
      );
      this.setState({
        empList: sortedEmployeeList,
        sortColName: sortColName,
        sortOrder: this.getOrderName(sortOrder)
      });
    }
  };

  getOrderName = sortOrder => {
    let order = "asc";
    if (sortOrder.toString() === "asc") {
      order = "desc";
    } else if (sortOrder.toString() === "desc") {
      order = "asc";
    }
    return order;
  };

  renderTableHeader = () => {
    return this.state.tableHeader.map(item => (
      <th key={item.value}>
        {item.text}{" "}
        {item.value.toString() === "status" ? null : (
          <SortIcon
            value={item.value}
            sortColName={this.state.sortColName}
            sortOrder={this.state.sortOrder}
            handleSortTable={this.sortTable}
          ></SortIcon>
        )}
      </th>
    ));
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div>
            <h2>
              <span className="floatLeft">Employee List</span>
            </h2>
            <button className="logout" onClick={() => this.props.onLogout()}>
              Logout
            </button>
          </div>
          <br /> <br />
          <div>
            <span className="width50per">
              <SearchBar handleQuickSearch={this.handleQuickSearch}></SearchBar>
            </span>
            <span className="width50per">
              <label className="marginLeft20px">Filter By:</label>{" "}
              <Filter
                data={this.state.filterItems}
                handleFilter={this.filterByStatus}
              ></Filter>
            </span>
          </div>
          <div>
            <table>
              <thead>
                <tr>{this.renderTableHeader()}</tr>
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
    onGetEmployeeList: () => dispatch(employeeAction.getAllEmployeeList()),
    onLogout: () => dispatch(loginAction.logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeList);
