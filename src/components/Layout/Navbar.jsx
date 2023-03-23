import React, { useEffect } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../Redux/slices/authSlice/authThunk";
import { useGlobalContext } from "../store/globalContext";
import { RESET } from "../Redux/slices/authSlice/authSlice";

const Navbar = ({ isLoggedIn }) => {
  const { handleNotification } = useGlobalContext();
  const { message } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  useEffect(() => {
    if (message === "Logout successful") {
      localStorage.removeItem("authId");
      dispatch(RESET());
      navigate("/landing");
    }

    if (message) {
      handleNotification({
        message,
        status: message === "Logout successful" ? "success" : "error",
      });
      dispatch(RESET());
    }
  }, [dispatch, message]);

  return (
    <nav className="nav">
      <h1>
        <Link to="/">Auth</Link>
      </h1>

      <ul>
        {isLoggedIn && (
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        )}

        {!isLoggedIn && (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}

        {isLoggedIn && <li onClick={handleLogout}>Logout</li>}
      </ul>
    </nav>
  );
};

export default Navbar;
