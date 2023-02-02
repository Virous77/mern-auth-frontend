import React, { useState } from "react";
import Auth from "./Auth";

const Register = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleFormSave = () => {
    console.log(loginData);
  };

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
    />
  );
};

export default Register;
