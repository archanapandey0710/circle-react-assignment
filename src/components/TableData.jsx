import React, { Component } from "react";
import { getFormateDate } from "../utils/date-utils";
import { formateAmount, formateAge } from "../utils/app-utils";
import _ from "lodash";

class TableData extends Component {
  state = {
    status: [
      {
        text: "Active",
        status: true
      },
      {
        text: "Inactive",
        status: false
      }
    ]
  };

  getStatus = status => {
    let state = _.find(this.state.status, function(value) {
      return value.status === status;
    });
    if (state) {
      return state.text;
    }
  };

  renderData = () => {
    return this.props.data.map(item => (
      <tr key={item.id}>
        <td>{item.name}</td>
        <td className="numberStyle">
          {getFormateDate(item.dob, "YYYY-MM-DD")}
        </td>
        <td className="numberStyle">{formateAge(item.age)}</td>
        <td className="numberStyle">{formateAmount(item.salary)}</td>
        <td className={item.isActive ? "activeStatus" : "inactiveStatus"}>
          {this.getStatus(item.isActive)}
        </td>
      </tr>
    ));
  };

  render() {
    return (
      <React.Fragment>
        {this.props.data && this.props.data.length > 0
          ? this.renderData()
          : null}
      </React.Fragment>
    );
  }
}

export default TableData;
