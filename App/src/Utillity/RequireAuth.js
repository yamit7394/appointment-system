import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const Validation = async (auth_token, path) => {
  const res = await fetch(path, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token: auth_token,
    }),
  });

  if (res.status === 200) {
    return true;
  }
  return false;
};

export const UserRequireAuth = ({ children }) => {
  const auth_token = Cookies.get("APP_ID");
  const path = "/admin/token-valiadate";
  if (!auth_token || !Validation(auth_token, path)) {
    return <Navigate to="/login" />;
  }
  return children;
};

export const AdminRequireAuth = ({ children }) => {
  const admin_auth_token = Cookies.get("ADMIN_APP_ID");
  const path = "/admin/token-valiadate";
  if (!admin_auth_token || !Validation(admin_auth_token, path)) {
    return <Navigate to="/login" />;
  }
  return children;
};

export const LoginSignUpAuth = ({ children }) => {
  const admin_auth_token = Cookies.get("ADMIN_APP_ID");
  const auth_token = Cookies.get("APP_ID");
  const user_path = "/user/token-valiadate";
  const admin_path = "/admin/token-valiadate";

  if (admin_auth_token !== undefined && Validation(admin_auth_token, admin_path)) {
    return <Navigate to="/admin/dashboard" />;
  } else if (auth_token !== undefined && Validation(auth_token, user_path)) {
    return <Navigate to="/user/appointments" />;
  } else {
    return children;
  }
};
