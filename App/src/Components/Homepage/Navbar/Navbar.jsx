import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './../../../res/logo.png';
import './Navbar.css';
import { Outlet, NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-homepage navbar-expand-lg navbar-light bg-light shadow p-3 bg-white rounded">
        <div className="container-fluid">
          <a className="navbar-brand" href={"/"}>
            <img src = {logo} className='brand-logo'/>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href={"#"}>
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href={"#about-us"}>
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={"#services"}>
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={"#contact-us"}>
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " to="/login">Login</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet/>
    </>
  );
};

export default Navbar;
