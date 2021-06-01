import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Auxiliary from "../../hos/Auxiliary";

const Navbar = () => {
  return (
    <Auxiliary>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand text-secondary" href="/">
            Blog Town
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 mx-auto">

                <ul className="navbar-nav mb-2 mb-lg-0 text-center">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/categories">
                  
                  Categories
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sign-up">
                  
                  Sign up
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link dashboard btn btn-info"
                  to="/dashboard"
                >
                  
                  dashboard
                </Link>
              </li>
            </ul>
                </div>
              </div>
          
            </div>
          </div>
        </div>
      </nav>
    </Auxiliary>
  );
};

export default Navbar;
