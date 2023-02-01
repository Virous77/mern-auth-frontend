import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <h1>
        <Link to="/">Auth</Link>
      </h1>

      <ul>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>Login</li>
        <li>Logout</li>
      </ul>
    </nav>
  );
};

export default Navbar;
