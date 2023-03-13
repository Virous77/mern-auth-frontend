import React, { useState, useEffect } from "react";
import Auth from "./Auth";
import { useGlobalContext } from "../store/globalContext";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../Redux/slices/authSlice/authThunk";
import { RESET } from "../Redux/slices/authSlice/authSlice";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const { handleNotification } = useGlobalContext();
  const { isLoading, isLoggedIn, message, isError } = useSelector(
    (state) => state.auth
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleFormSave = () => {
    const { email, password } = loginData;
    const userData = {
      email,
      password,
    };

    dispatch(loginUser(userData));
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/profile");
      dispatch(RESET());
    }

    if (isError) {
      handleNotification({
        message,
        status: "error",
      });
      dispatch(RESET());
    }
  }, [isLoggedIn, isError, dispatch, message]);

  return (
    <Auth
      title="Login"
      loginData={loginData}
      handleChange={handleChange}
      handleFormSave={handleFormSave}
      name="password"
    />
  );
};

export default Login;
