import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import {
  HomePage,
  LandingPage,
  ForgetPassPage,
  ResetPassPage,
  ProfilePage,
} from "./pages/index";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import LoginCode from "./components/Auth/LoginCode";
import Notification from "./components/notification/Notification";
import { useGlobalContext } from "./components/store/globalContext";
import { getUserStatus } from "./components/Redux/slices/authSlice/authThunk";
import { useSelector, useDispatch } from "react-redux";
import ProtectedUserLogin from "./components/PrivateRoutes/PrivateRoutes";
import VerifyUser from "./components/Auth/VerifyUser";

const App = () => {
  const { notification } = useGlobalContext();
  const dispatch = useDispatch();
  const { isLoggedIn, user } = useSelector((state) => state.auth);

  const validate = `${new Date(Date.now() + 1000 * 86400).getTime()}${
    user?._id
  }`;
  const expiry = localStorage.getItem("authId");
  const parseExpiry = expiry ? JSON.parse(expiry) : "";

  useEffect(() => {
    dispatch(getUserStatus());

    if (parseExpiry === validate) {
      localStorage.removeItem("authId");
    }
  }, [isLoggedIn]);

  return (
    <main className="app">
      <Navbar isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="/forget" element={<ForgetPassPage />} />
        <Route path="/reset/:id" element={<ResetPassPage />} />
        <Route
          path="/*"
          element={
            <ProtectedUserLogin>
              <ProfilePage />
            </ProtectedUserLogin>
          }
        />
        <Route path="/VERIFY/:id" element={<VerifyUser />} />
        <Route path="/login-with-code/:email" element={<LoginCode />} />
      </Routes>
      {notification && <Notification />}
      <Footer />
    </main>
  );
};

export default App;
