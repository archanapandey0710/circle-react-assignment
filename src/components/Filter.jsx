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
      <option key={item.value} value={item.value}>
        {item.text}
      </option>
    ));
  };

  render() {
    return (
      <React.Fragment>
        <select
          className="width30per"
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
