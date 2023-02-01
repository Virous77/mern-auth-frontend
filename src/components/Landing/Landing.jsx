import React from "react";
import "./Landing.css";
import image from "../../assets/landing.svg";

const Landing = () => {
  return (
    <main className="landing">
      <section className="left-container">
        <h1>
          Ultimate MERN-STACK <br /> Authentication <br /> System{" "}
        </h1>

        <p>
          Learn and Master Authentication and Authorization using MERN-STACK.
        </p>
        <p>
          Implement User Registration Login, Password Reset, Social Login, User
          Permission Email Notification Etc.{" "}
        </p>

        <div className="landing-Action">
          <button style={{ background: "blueviolet" }}>Register</button>
          <button style={{ background: "black" }}>Login</button>
        </div>
      </section>
      <section className="right-container">
        <img src={image} alt="Auth" />
      </section>
    </main>
  );
};

export default Landing;
