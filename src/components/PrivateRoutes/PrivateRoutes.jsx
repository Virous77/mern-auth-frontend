import React from "react";
import { useSelector } from "react-redux";
import { useSelectIsLoggedIn } from "../Redux/slices/authSlice/authSlice";

export const ProtectedUserLogin = ({ children }) => {
  const isLoggedIn = useSelector(useSelectIsLoggedIn);

  if (!isLoggedIn) return null;

  if (isLoggedIn) return children;
};

export const ProtectedUserLoggedIn = ({ children }) => {
  const isLoggedIn = useSelector(useSelectIsLoggedIn);

  if (isLoggedIn) return null;

  if (!isLoggedIn) return children;
};
