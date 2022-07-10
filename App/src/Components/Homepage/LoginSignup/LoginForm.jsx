import React from "react";
import { useState } from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";
import "./style.css";

const LoginForm = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [isAdmin, SetIsAdmin] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [dataAdmin, setDataAdmin] = useState({
    username: "",
    password: "",
  });
  let name, value;
  const adminCheckHandler = (e) => {
    SetIsAdmin(e.target.value);
  };
  const onChangeHandler = (e) => {
    if (isAdmin) {
      if (e.target.name === "email") name = "username";
      else name = e.target.name;

      value = e.target.value;
      setDataAdmin({ ...dataAdmin, [name]: value });
    } else {
      name = e.target.name;
      value = e.target.value;
      setData({ ...data, [name]: value });
    }
  };

  const onClickHandler = async (e) => {
    e.preventDefault();
    let res;
    if(isAdmin)
    {
      const { username, password } = dataAdmin;
      res = await fetch("/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });
    }  
    else{
      const { email, password } = data;
      res = await fetch("/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
    }
    
    
    if (res.status === 204) {
      setShow(true);
      return;
    }
    const msg = await res.json();
    if (res.status === 200 && msg.message !== null) {
      if (isAdmin) {
        navigate("/admin");
      }
      navigate("/user");
    }
  };

  return (
    <>
      <main className="form-signin text-center mt-5 w-50 m-auto">
        <form method="POST">
          <i className="bi bi-person-circle mb-4 text-warning login-icon"></i>
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

          <div className="form-floating mt-3">
            <input
              type="email"
              className="form-control"
              name="email"
              value={isAdmin ? dataAdmin.username : data.email}
              onChange={onChangeHandler}
              id="user-name"
              placeholder="name@example.com"
              required
            />
            <label for="floatingInput">User Name</label>
          </div>
          <div className="form-floating mt-3">
            <input
              type="password"
              className="form-control"
              name="password"
              value={isAdmin ? dataAdmin.password : data.password}
              onChange={onChangeHandler}
              id="userPassword"
              placeholder="Password"
              required
            />
            <label for="userPassword">Password</label>
          </div>
          <div class="form-check mt-3 fw-bold">
            <label class="form-check-label" for="flexCheckDefault">
              <input
                class="form-check-input"
                type="checkbox"
                name="adminCheck"
                id="flexCheckDefault"
                value={isAdmin}
                onChange={adminCheckHandler}
              />
              Sign In as Admin
            </label>
          </div>
          <button
            className="w-100 mt-3 btn btn-lg btn-outline-warning"
            name="action"
            value="signIn"
            type="submit"
            onClick={onClickHandler}
          >
            Sign in
          </button>
          <div className="mb-3 mt-4">
            <label>
              Don't have an account <NavLink to="/signup">sign up</NavLink>
            </label>
          </div>
        </form>

        <Alert
          show={show}
          variant="danger"
          onClose={() => setShow(false)}
          dismissible
        >
          Credentials Error. Please check.
        </Alert>
      </main>
      <Outlet />
    </>
  );
};

export default LoginForm;
