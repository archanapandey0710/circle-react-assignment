import React, { Component } from "react";
import "./App.css";
import Routes from "../router";
import Login from "../components/Login";
import { connect } from "react-redux";

class App extends Component {
  renderContent = () => {
    if (this.props.isLoggedIn === true) {
      return (
        <div className="App">
          <Routes></Routes>
        </div>
      );
    } else {
      return (
        <div className="App">
          <Login />
        </div>
      );
    }
  };
  render() {
    return <React.Fragment>{this.renderContent()}</React.Fragment>;
  }
}
const mapStateToProps = state => {
  return {
    isLoggedIn: state.loginReducer.isLoggedIn
      ? state.loginReducer.isLoggedIn
      : []
  };
};
const mapDispatchToProps = dispatch => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
