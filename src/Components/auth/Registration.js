import React, { Component } from "react";
import axios from "axios";
import './Login.css'


class Registration extends Component {
    constructor(props) {
    super(props);

    this.state = {
      fullname : "",
      email: "",
      password: "",
      password_confirmation: "",
      registrationErrors: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    const {fullname, email, password, password_confirmation } = this.state;

    axios
      .post(
        "https://blogtown-vafadar.fandogh.cloud/register",
        {
          user: {
            fullname: fullname,
            email: email,
            password: password,
            password_confirmation: password_confirmation,
          },
        },
        { withCredentials: true }
      )
      .then((response) => {
        if (response.data.status === "created") {
          this.props.handleSuccessfulAuth(response.data);
        }
      })
      .catch((error) => {
        console.log("registration error", error);
      });
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mx-auto mt-5">
            <div className="card">
              <div className="card-body">
              <h4 className="text-primary fw-bold mt-3">Sign up</h4>
              
              <form onSubmit={this.handleSubmit}>
              <div className="mb-3 mt-4">
                  <label for="exampleInputEmail1" className="form-label">
                    Full name
                  </label>
                  <input
                    type="fullname"
                    name="fullname"


                    className="form-control border border-primary rounded-3"
                    placeholder="Full name"
                    value={this.state.fullname}
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="form-control border border-primary rounded-3"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    className="form-control border border-primary rounded-3"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    Password confirmation
                  </label>
                  <input
                    type="password"
                    className="form-control border border-primary rounded-3"
                    name="password_confirmation"
                    placeholder="Password confirmation"
                    value={this.state.password_confirmation}
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <button className="btn btn-primary mt-4" type="submit">
                  Register
                </button>
              </form>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Registration;