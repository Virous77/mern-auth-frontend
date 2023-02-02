import React from "react";
import "./Auth.css";
import { Link } from "react-router-dom";
import Password from "./Password";
import ValidatePassword from "./ValidatePassword";

const Auth = ({
  title,
  handleChange,
  loginData,
  name,
  handleFormSave,
  name2,
  passLength,
  char,
  number,
  caseL,
}) => {
  return (
    <>
      <div className="overLay" />
      <section className="login">
        <h1>{title}</h1>

        <form onSubmit={(e) => e.preventDefault()}>
          {title === "Sign Up" && (
            <input
              type="text"
              placeholder="Enter Full Name"
              value={loginData.name}
              name="name"
              onChange={handleChange}
            />
          )}

          <input
            type="text"
            placeholder="Enter Email"
            value={loginData.email}
            name="email"
            onChange={handleChange}
          />

          <Password
            placeholder="Enter Password"
            onChange={handleChange}
            value={loginData.password}
            name={name}
          />

          {title === "Sign Up" && (
            <Password
              placeholder="Confirm Password"
              onChange={handleChange}
              value={loginData.confirmPassword}
              name={name2}
            />
          )}
          <ValidatePassword
            char={char}
            number={number}
            passLength={passLength}
            caseL={caseL}
          />

          {title === "Login" && (
            <span className="forgetPass">
              <Link to="/forget">Forget Password?</Link>
            </span>
          )}

          <button className="onClick" type="button" onClick={handleFormSave}>
            {title}
          </button>
        </form>

        <p className="haveAcc">
          {title === "Sign Up"
            ? "Already have an account?"
            : "Don't have an account?"}
          <span>{title === "Sign Up" ? " Login" : " Register"}</span>
        </p>
      </section>
    </>
  );
};

export default Auth;
