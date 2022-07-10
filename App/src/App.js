import { Routes, Route } from "react-router-dom";
import Main from "./Components/AdminDashboard/Main";
import UserMain from "./Components/UserDashboard/UserMain";
import DefaultComponents from "./Components/AdminDashboard/DefaultComponents";
import UserDefaultComponents from "./Components/UserDashboard/UserDefaultComponents";
import React from "react";
import Homepage from "./Components/Homepage/Homepage";
import LoginForm from "./Components/Homepage/LoginSignup/LoginForm";
import SignUpForm from "./Components/Homepage/LoginSignup/SignUpForm";
import NotFoundPage from "./NotFoundPage";
import { Authprovider } from "./Utillity/Auth";
import { UserRequireAuth, AdminRequireAuth, LoginSignUpAuth } from "./Utillity/RequireAuth";

function App() {
  return (
    <Authprovider>
      <Routes>
        <Route path="/*" element={<Homepage />} />
        <Route
          path="/admin/*"
          element={
            <AdminRequireAuth>
              <DefaultComponents />
              <Main />
            </AdminRequireAuth>
          }
        />
        <Route
          path="/user/*"
          element={
            <UserRequireAuth>
              <UserDefaultComponents />
              <UserMain />
            </UserRequireAuth>
          }
        />
        <Route
          path="/login"
          element={
            <LoginSignUpAuth>
              <LoginForm />
            </LoginSignUpAuth>
          }
        />
        <Route
          path="/signup"
          element={
            <LoginSignUpAuth>
              <SignUpForm />
            </LoginSignUpAuth>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Authprovider>
  );
}

export default App;
