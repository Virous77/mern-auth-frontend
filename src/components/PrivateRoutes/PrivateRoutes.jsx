import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedUserLogin = ({ children }) => {
  const t = localStorage.getItem("authId");

  if (t) {
    return children;
  } else {
    return <Navigate to="/landing" />;
  }
};

export default ProtectedUserLogin;
