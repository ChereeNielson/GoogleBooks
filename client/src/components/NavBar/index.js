import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./style.css";
const NavBar = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-light">
        <Link className="navbar-brand brand-titles" to="#">
          GOOGLE BOOKS
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link heading-titles" to="/search">
                SEARCH
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link heading-titles" to="/saved">
                LIBRARY
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;