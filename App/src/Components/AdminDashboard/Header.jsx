import Cookies from "js-cookie";
import React from "react";
import {useState} from "react";
import { useNavigate } from "react-router-dom";
import { Toast, ToastContainer } from "react-bootstrap";

const Header = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const logout = async () => {
    const auth_token = Cookies.get("ADMIN_APP_ID");
    const res = await fetch("/admin/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + auth_token,
      },
    });

    if (res.status === 200) {
      navigate('/login');
    } else {
      setShow(true);
    }
  };

  return (
    <header className="navbar sticky-top bg-dark flex-md-nowrap p-0 shadow">
      <a className="navbar-brand text-warning mx-2 fs-3">
        <i className="bi bi-clipboard-plus mx-2 text-warning"></i>
        Relax Physiotherapy
      </a>
      <button
        className="navbar-toggler position-absolute float-end d-md-none collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#sidebarMenu"
        aria-controls="sidebarMenu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="navbar-nav">
        <div className="nav-item text-nowrap">
          <button type='button' className="nav-link btn btn-warning text-dark px-3" onClick={logout}>
            Sign out
          </button>
        </div>
      </div>
      <ToastContainer position="top-end" className="p-3" >
        <Toast className="d-inline-block m-1" bg='danger' onClose={() => setShow(false)} show={show} delay={5000} autohide>
          <Toast.Header>
            <strong className="me-auto">Error</strong>
          </Toast.Header>
          <Toast.Body>Internal Server Error. Please try again Later.</Toast.Body>
        </Toast>
      </ToastContainer>
    </header>
  );
};

export default Header;
