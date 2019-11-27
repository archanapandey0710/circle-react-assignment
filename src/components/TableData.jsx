import React, { Component } from "react";
import { connect } from "react-redux";

class TableData extends Component {
  state = {};
  renderData = () => {
    return this.props.data.map(item => (
      <tr key={item.id}>
        <td>{item.name}</td>
        <td>{item.dob}</td>
        <td>{item.age}</td>
        <td>{item.salary}</td>
        <td>{item.isActive}</td>
      </tr>
    ));
  };
  render() {
    return (
      <React.Fragment>
        {this.props.data && this.props.data.length > 0
          ? this.renderData()
          : "No Data Found !!!"}
      </React.Fragment>
    );
  }
}
export default TableData;
