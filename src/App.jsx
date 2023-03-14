import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import {
  HomePage,
  LandingPage,
  ForgetPassPage,
  ResetPassPage,
  ProfilePage,
  VerifyPage,
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

const App = () => {
  const { notification, handleNotification } = useGlobalContext();
  const dispatch = useDispatch();
  const { isLoggedIn, message, isError } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getUserStatus());
  }, [isLoggedIn, message, isError]);

  return (
    <main className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="/forget" element={<ForgetPassPage />} />
        <Route path="/reset/:id" element={<ResetPassPage />} />
        <Route path="/*" element={<ProfilePage />} />
        <Route path="/verify/:id" element={<VerifyPage />} />
      </Routes>
      {notification && <Notification />}
      <Footer />
    </main>
  );
};

export default App;
