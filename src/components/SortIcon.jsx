import React, { Component } from "react";

class SortIcon extends Component {
  state = {};

  isVisibleIcon = value => {
    if (this.props.sortColName.toString() === value.toString()) {
      return true;
    } else {
      return false;
    }
  };

  getIcon = () => {
    return this.props.sortOrder;
  };

  renderIcon = () => {
    if (this.props.value) {
      if (this.isVisibleIcon(this.props.value)) {
        return (
          <span>
            {this.getIcon().toString() === "asc" ? (
              <i
                className="fa fa-long-arrow-up"
                style={{ cursor: "pointer", width: "10px", height: "15px" }}
                aria-hidden="true"
                onClick={() =>
                  this.props.handleSortTable(this.props.value, "asc")
                }
              />
            ) : (
              <i
                className="fa fa-long-arrow-down"
                style={{ cursor: "pointer", width: "10px", height: "15px" }}
                aria-hidden="true"
                onClick={() =>
                  this.props.handleSortTable(this.props.value, "desc")
                }
              />
            )}
          </span>
        );
      } else {
        return (
          <i
            className="fa fa-long-arrow-down"
            aria-hidden="true"
            style={{ cursor: "pointer", width: "10px", height: "15px" }}
            onClick={() => this.props.handleSortTable(this.props.value, "desc")}
          />
        );
      }
    }
  };

  render() {
    return <React.Fragment>{this.renderIcon()}</React.Fragment>;
  }
}

export default SortIcon;
