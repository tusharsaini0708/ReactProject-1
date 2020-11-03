import React, { Component } from "react";
import Input from "./comman/formInput";

class MovieDetails extends Component {
  state = {
    account: { username: "", password: "" },
    errors: {},
  };

  validate = () => {
    const errors = {};
    if (this.state.account.username.trim() === "")
      errors.username = "Username is Required";
    if (this.state.account.password.trim() === "")
      errors.password = "password is Required";

    console.log(errors);
    return Object.keys(errors).length === 0 ? {} : errors; // if we return null here it is going to throw a error.
  };

  validateOnChange = (input) => {
    if (input.name === "username")
      if (input.value.trim() === "") return "Username is required";
    if (input.name === "password")
      if (input.value.trim() === "") return "Password is required";
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors });
  };

  inputChange = (e) => {
    const account = { ...this.state.account };
    const errors = { ...this.state.errors };
    const errorMsg = this.validateOnChange(e.currentTarget);
    if (errorMsg) errors[e.currentTarget.name] = errorMsg;
    else delete errors[e.currentTarget.name];

    account[e.currentTarget.name] = e.currentTarget.value; //use bracket notation for dynamic thing
    this.setState({ account, errors });
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <Input
            value={this.state.account.username}
            name="username"
            label="Username"
            error={this.state.errors.username}
            onChange={this.inputChange}
          />
          <Input
            value={this.state.account.password}
            name="password"
            label="Password"
            error={this.state.errors.password}
            onChange={this.inputChange}
          />
          <button className="btn btn-primary ">Submit</button>
        </form>
      </div>
    );
  }
}

export default MovieDetails;
