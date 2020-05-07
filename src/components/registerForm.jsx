import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import * as userService from "../services/userService";

class RegisterForm extends Form {
  state = {
    data: { email: "", username: "", password: "" },
    errors: {},
  };
  schema = {
    email: Joi.string().required().email().label("Email"),
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().min(5).label("Password"),
  };
  doSubmit = async () => {
    //await userService.register(this.state.data);
    const response = await userService.register(this.state.data);
    console.log("FOrm data", response);
  };

  render() {
    return (
      <div>
        <h1>Register Form </h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("email", "Email")}
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
