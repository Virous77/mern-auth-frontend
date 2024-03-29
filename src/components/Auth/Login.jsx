import React, { useState, useEffect } from "react";
import Auth from "./Auth";
import { useGlobalContext } from "../store/globalContext";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getSendLoginCode,
  loginUser,
} from "../Redux/slices/authSlice/authThunk";
import { RESET } from "../Redux/slices/authSlice/authSlice";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const { handleNotification } = useGlobalContext();
  const { isLoading, isLoggedIn, message, isError, user, twoFactor } =
    useSelector((state) => state.auth);
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
    }

    if (isError) {
      handleNotification({
        message,
        status: "error",
      });
      dispatch(RESET());
    }

    if (twoFactor) {
      dispatch(getSendLoginCode(loginData.email));
      navigate(`/login-with-code/${loginData.email}`);
    }

    const validate = `${new Date(Date.now() + 1000 * 86400).getTime()}${
      user?._id
    }`;

    if (user) {
      localStorage.setItem("authId", JSON.stringify(validate));
    }
  }, [isError, isLoggedIn, dispatch, message, user, twoFactor]);

  return (
    <Auth
      title="Login"
      loginData={loginData}
      handleChange={handleChange}
      handleFormSave={handleFormSave}
      name="password"
      status={isLoading}
    />
  );
};

export default Login;
