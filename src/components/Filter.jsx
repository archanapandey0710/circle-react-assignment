import React, { Component } from "react";

class Filter extends Component {
  state = {
    quickSearch: ""
  };

  onFilter = filterText => {
    this.setState({ quickSearch: filterText }, () => {
      this.props.handleFilter(filterText);
    });
  };

  renderData = () => {
    return this.props.data.map(item => (
      <option value={item.value}>{item.text}</option>
    ));
  };

  render() {
    return (
      <React.Fragment>
        <select
          style={{ width: "30%" }}
          onChange={event => this.onFilter(event.target.value)}
        >
          {this.props.data && this.props.data.length > 0
            ? this.renderData()
            : null}
        </select>
      </React.Fragment>
    );
  }
}
export default Filter;
