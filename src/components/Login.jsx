import React, { Component } from "react";
import { connect } from "react-redux";
import logo from "./../logo.png";
import * as loginAction from "../store/actions/loginAction";

class Login extends Component {
  state = {
    username: "admin",
    password: "admin"
  };
  componentDidMount() {}
  login = () => {
    if (this.state.username === "admin" && this.state.password === "admin") {
      this.props.onLogin(true);
    } else {
      console.log("wrong username and password");
    }
  };
  render() {
    return (
      <React.Fragment>
        <div className="loginContainer">
          <div className="imgcontainer">
            <img src={logo} alt="Avatar" className="avatar" />
          </div>
          <div>
            <label class="headingLabel">User Name:</label>
            <input
              id="username"
              type="text"
              width="100px"
              value={this.state.username}
            />
          </div>
          <div>
            <label class="headingLabel">Password:</label>
            <input id="password" type="password" value={this.state.password} />
          </div>
          <div>
            <button onClick={() => this.login()}>Login</button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onLogin: data => dispatch(loginAction.login(data))
  };
};
export default connect(null, mapDispatchToProps)(Login);
