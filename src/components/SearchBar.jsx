import React, { Component } from "react";
import { connect } from "react-redux";

class SearchBar extends Component {
  state = {
    quickSearch: ""
  };
  onSeacrh = quickSearchText => {
    this.setState({ quickSearch: quickSearchText }, () => {
      this.props.handleQuickSearch(quickSearchText);
    });
  };
  render() {
    return (
      <React.Fragment>
        <input
          type="text"
          value={this.state.quickSearch}
          placeholder="Search By Name..."
          className="searchTextBox"
          onChange={event => this.onSeacrh(event.target.value)}
        ></input>
      </React.Fragment>
    );
  }
}
export default SearchBar;
