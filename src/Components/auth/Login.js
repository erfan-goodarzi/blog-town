import React, { Component } from "react";
import axios from "axios";
import "./Login.css";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      loginErrors: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    const { email, password } = this.state;

    axios
      .post(
        "http://localhost:3000/login",
        {
          user: {
            email: email,
            password: password,
          },
        },
        { withCredentials: true }
      )
      .then((response) => {
        if (response.data.logged_in) {
          this.props.handleSuccessfulAuth(response.data);
        }
      })
      .catch((error) => {
        console.log("login error", error);
      });
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row mt-5">
            <div className="col-lg-4 mx-auto">
              <div className="card">
                
                <h4 className="text-primary fw-bold  ms-3 mt-3">Login</h4>
                <div className="card-body">
                  
                <form onSubmit={this.handleSubmit}>
                <div className="mb-3 mt-3">
                  <label for="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="form-control border border-primary"rounded-3
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">
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
                <button type="submit" className="btn btn-outline-primary">
                  login
                </button>
                <a className="btn btn-primary ms-4" href="/sign-up">Register</a>
              </form>
                </div>
                <svg id="wave" viewBox="0 0 1440 490" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(47, 128, 237, 1)" offset="0%"></stop><stop stop-color="rgba(47, 128, 237, 1)" offset="100%"></stop></linearGradient></defs><path  fill="url(#sw-gradient-0)" d="M0,294L80,310.3C160,327,320,359,480,310.3C640,261,800,131,960,122.5C1120,114,1280,229,1440,294C1600,359,1760,376,1920,343C2080,310,2240,229,2400,196C2560,163,2720,180,2880,228.7C3040,278,3200,359,3360,375.7C3520,392,3680,343,3840,285.8C4000,229,4160,163,4320,147C4480,131,4640,163,4800,204.2C4960,245,5120,294,5280,318.5C5440,343,5600,343,5760,334.8C5920,327,6080,310,6240,310.3C6400,310,6560,327,6720,285.8C6880,245,7040,147,7200,106.2C7360,65,7520,82,7680,114.3C7840,147,8000,196,8160,179.7C8320,163,8480,82,8640,49C8800,16,8960,33,9120,65.3C9280,98,9440,147,9600,212.3C9760,278,9920,359,10080,351.2C10240,343,10400,245,10560,228.7C10720,212,10880,278,11040,318.5C11200,359,11360,376,11440,383.8L11520,392L11520,490L11440,490C11360,490,11200,490,11040,490C10880,490,10720,490,10560,490C10400,490,10240,490,10080,490C9920,490,9760,490,9600,490C9440,490,9280,490,9120,490C8960,490,8800,490,8640,490C8480,490,8320,490,8160,490C8000,490,7840,490,7680,490C7520,490,7360,490,7200,490C7040,490,6880,490,6720,490C6560,490,6400,490,6240,490C6080,490,5920,490,5760,490C5600,490,5440,490,5280,490C5120,490,4960,490,4800,490C4640,490,4480,490,4320,490C4160,490,4000,490,3840,490C3680,490,3520,490,3360,490C3200,490,3040,490,2880,490C2720,490,2560,490,2400,490C2240,490,2080,490,1920,490C1760,490,1600,490,1440,490C1280,490,1120,490,960,490C800,490,640,490,480,490C320,490,160,490,80,490L0,490Z"></path></svg>
                
              </div>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}
