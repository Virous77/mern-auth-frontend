import React, { useEffect, useState } from "react";
import Auth from "./Auth";
import { useGlobalContext } from "../store/globalContext";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../Redux/slices/authSlice/authThunk";
import { RESET } from "../Redux/slices/authSlice/authSlice";

const Register = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: "",
  });
  const { handleNotification } = useGlobalContext();
  const { isLoading, isLoggedIn, message, isError, user } = useSelector(
    (state) => state.auth
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  ////Password strength logic
  const number = loginData.password.match(/([0-9])/) !== null ? true : false;
  const caseL =
    loginData.password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/) !== null
      ? true
      : false;
  const char =
    loginData.password.match(/([!,%,&,@,#,$,^,*,?,_,~])/) !== null
      ? true
      : false;
  const passLength = loginData.password.length >= 8 ? true : false;

  //Register User Function
  const handleFormSave = () => {
    const { email, password, name, confirmPassword } = loginData;

    if (password !== confirmPassword) {
      handleNotification({
        message: "Password do not match,Try again",
        status: "error",
      });
      return;
    }

    if (!number || !caseL || !char || !passLength) {
      handleNotification({
        message: "Password must need to match the strength criteria!",
        status: "error",
      });
      return;
    }

    const userData = {
      name,
      email,
      password,
    };
    dispatch(registerUser(userData));
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

    if (user) {
      localStorage.setItem("authId", JSON.stringify(user._id));
    }
  }, [isLoggedIn, isError, dispatch, message, user]);

  return (
    <Auth
      title="Sign Up"
      name="password"
      name2="confirmPassword"
      loginData={loginData}
      handleChange={handleChange}
      handleFormSave={handleFormSave}
      caseL={caseL}
      number={number}
      passLength={passLength}
      char={char}
      status={isLoading}
    />
  );
};

export default Register;
