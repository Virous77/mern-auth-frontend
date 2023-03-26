import React, { useEffect, useState } from "react";
import Password from "./Password";
import { useDispatch, useSelector } from "react-redux";
import {
  getChangePassword,
  getResetPassword,
} from "../Redux/slices/authSlice/authThunk";
import { getSendAutomatedEmail } from "../Redux/slices/emailSlice/emailThunk";
import { useGlobalContext } from "../store/globalContext";
import { useParams, useNavigate } from "react-router-dom";

const ResetPass = ({ title }) => {
  const initialState = {
    password: "",
    confirmPassword: "",
    oldPass: "",
  };
  const [resetData, setResetData] = useState(initialState);

  const { isLoading, message, user } = useSelector((state) => state.auth);
  const { message: emailMsg } = useSelector((state) => state.email);

  const dispatch = useDispatch();
  const { handleNotification } = useGlobalContext();
  const { id } = useParams();
  const navigate = useNavigate();

  ///Handle state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setResetData({ ...resetData, [name]: value });
  };

  ////Change password
  const handlePasswordReset = () => {
    if (resetData.password !== resetData.confirmPassword) {
      handleNotification({
        message: "New password don't match!",
        status: "error",
      });
      return;
    }

    const userData = {
      oldPassword: resetData.oldPass,
      password: resetData.password,
    };

    const emailData = {
      subject: "Password Changed! - Virous",
      send_to: user?.email,
      reply_to: "noreply@virous.com",
      template: "changePassword",
      url: "/forget",
    };

    dispatch(getChangePassword(userData));
    dispatch(getSendAutomatedEmail(emailData));
  };

  //////////Reset Password
  const handlePasswordReset2 = () => {
    if (!resetData.password || !resetData.confirmPassword) {
      handleNotification({
        message: "Password fields can't be empty!",
        status: "error",
      });
      return;
    }

    if (resetData.password !== resetData.confirmPassword) {
      handleNotification({
        message: "Password don't match!",
        status: "error",
      });
      return;
    }

    const userData = {
      password: resetData.password,
      resetToken: id,
    };

    dispatch(getResetPassword(userData));
  };

  ///Handle notification
  useEffect(() => {
    if (message) {
      handleNotification({
        message,
        status: message === "Old Password is incorrect!" ? "error" : "success",
      });
    }

    if (message === "Password changed successful") {
      setResetData(initialState);
    }

    if (message === "Password reset successful!") {
      setResetData(initialState);
      navigate("/profile");
    }

    if (emailMsg) {
      handleNotification({
        message: emailMsg,
        status: "success",
      });
    }
  }, [message, emailMsg]);

  return (
    <section className="login boxShadow">
      <h1>Reset Password</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        {title === "profile" && (
          <Password
            placeholder="Old Password"
            onChange={handleChange}
            value={resetData.oldPass}
            name="oldPass"
          />
        )}

        <Password
          placeholder="New Password"
          onChange={handleChange}
          value={resetData.password}
          name="password"
        />

        <Password
          placeholder="Confirm Password"
          onChange={handleChange}
          value={resetData.confirmPassword}
          name="confirmPassword"
        />
        <button
          className="onClick"
          type="button"
          onClick={
            title === "profile" ? handlePasswordReset : handlePasswordReset2
          }
        >
          {isLoading ? "Processing" : "Reset Password"}
        </button>
      </form>
    </section>
  );
};

export default ResetPass;
