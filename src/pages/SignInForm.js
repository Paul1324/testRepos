import React, { Component } from "react";
import { Link } from "react-router-dom";

class SignInForm extends Component {
  constructor() {
    super();

    this.state = {
      userName: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let target = event.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    console.log("The form was submitted with the following data:");
    console.log(this.state);
  }

  render() {
    return (
      <div className="formCenter">
        <form className="formFields" onSubmit={this.handleSubmit}>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="userName">
              Nume Utilizator
            </label>
            <input
              type="text"
              id="userName"
              className="formFieldInput"
              placeholder="Introduceti numele utilizatorului"
              name="username"
              value={this.state.userName}
              onChange={this.handleChange}
            />
          </div>

          <div className="formField">
            <label className="formFieldLabel" htmlFor="password">
              Parola
            </label>
            <input
              type="password"
              id="password"
              className="formFieldInput"
              placeholder="Introduceti o parola"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>

          <div className="formField">
            <button className="formFieldButton">Sign In</button>{" "}
            <Link to="/" className="formFieldLink">
              Creeați un cont nou
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default SignInForm;
