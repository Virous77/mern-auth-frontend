import React, { useState } from "react";
import Auth from "./Auth";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleFormSave = () => {
    console.log(loginData);
  };

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
