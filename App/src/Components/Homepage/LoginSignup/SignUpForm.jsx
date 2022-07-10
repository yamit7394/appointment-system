import { Outlet, NavLink, useNavigate } from "react-router-dom";
import React from "react";
import {useState} from 'react';
import { Alert } from "react-bootstrap";
import "./style.css";

const SignUpForm = () => {

  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  })

  const [show, setShow] = useState(false);

  let name, value;
  const changeHandler = (e) => { 
    name = e.target.name;
    value = e.target.value;
    setData({ ...data, [name]: value });
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    const res = await fetch("/user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({  email, password }),
    });
    if(res.status === 203){
      setShow(true);
      return;
    }
    const msg = await res.json();
    if (res.status === 200 && msg.message !== null) {
      navigate("/user/dashboard");
    }
  }
  return (
    <>
      <main className="form-signin text-center w-50 m-auto">
        <form method="POST" onSubmit={submitHandler}>
          <i className="bi bi-person-circle mb-4 text-warning login-icon"></i>
          <h1 className="h3 mb-3 fw-normal">Please Sign Up</h1>
          <div className="form-floating mt-3">
            <input
              type="text"
              className="form-control"
              name="name"
              id="full-name"
              value={data.name}
              onChange={changeHandler}
              placeholder="name@example.com"
              required
            />
            <label for="floatingInput">Full Name</label>
          </div>
          <div className="form-floating mt-3">
            <input
              type="email"
              className="form-control"
              name="email"
              value={data.email}
              onChange={changeHandler}
              id="email"
              placeholder="name@example.com"
              required
            />
            <label for="floatingInput">Email</label>
          </div>
          <div className="form-floating mt-3">
            <input
              type="password"
              className="form-control"
              name="password"
              value={data.password}
              onChange={changeHandler}
              id="userPassword"
              placeholder="Password"
              required
            />
            <label for="userPassword">Password</label>
          </div>
          <button
            className="w-100 mt-3 btn btn-lg btn-outline-warning"
            name="action"
            type="submit"
          >
            Sign Up
          </button>
          <div className="mb-3 mt-4">
            <label>
              Already have an account <NavLink to="/login">sign in</NavLink>
            </label>
          </div>
          <a href="#">Forgot password</a>
        </form>
        <Alert
          show={show}
          variant="danger"
          onClose={() => setShow(false)}
          dismissible
        >
          Details not proper. Please try again
        </Alert>
      </main>
      <Outlet/>
    </>
  );
};

export default SignUpForm;
