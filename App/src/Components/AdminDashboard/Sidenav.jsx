import React from "react";

import { Outlet, NavLink } from "react-router-dom";
const SideNav = () => {
  const styles = {
    height: 100 + "vh",
    fontSize: 14 + "px",
  };
  return (
    <>
      <nav
        id="sidebarMenu"
        className="col-md-3 col-lg-2 d-md-block bg-dark sidebar fixed-top mt-5 collapse"
        style={styles}
      >
        <div className="position-sticky pt-3">
          <ul className="nav nav-pills flex-column mb-auto">
            <li>
              <NavLink
                activeClassName="active"
                to="dashboard"
                className="nav-link text-white"
              >
                <i
                  className="bi bi-speedometer2 text-warning mx-1"
                  width="16"
                  height="16"
                ></i>
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to="appointments"
                className="nav-link text-white"
              >
                <i
                  className="bi bi-table text-warning mx-1"
                  width="16"
                  height="16"
                ></i>
                Appointments
              </NavLink>
            </li>
            <li>
              <NavLink
                to="messages"
                className="nav-link text-white"
              >
                <i
                  className="bi bi-envelope-plus text-warning mx-1"
                  width="16"
                  height="16"
                ></i>
                Messages
              </NavLink>
            </li>
            <li>
              <NavLink
                to="update-appointments"
                className="nav-link text-white"
              >
                <i
                  className="bi bi-person-circle text-warning mx-1"
                  width="16"
                  height="16"
                ></i>
                Update Appointments
              </NavLink>
            </li>
            {/* <li>
              <NavLink to="users" className="nav-link text-white">
                <i
                  className="bi bi-person-circle text-warning mx-1"
                  width="16"
                  height="16"
                ></i>
                Customers
              </NavLink>
            </li> */}
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default SideNav;
