import React, { useEffect, useState } from "react";
import Password from "./Password";
import { useDispatch, useSelector } from "react-redux";
import { getChangePassword } from "../Redux/slices/authSlice/authThunk";
import { getSendAutomatedEmail } from "../Redux/slices/emailSlice/emailThunk";
import { useGlobalContext } from "../store/globalContext";

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setResetData({ ...resetData, [name]: value });
  };

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

  const { handleNotification } = useGlobalContext();

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
        <button className="onClick" type="button" onClick={handlePasswordReset}>
          {isLoading ? "Processing" : "Reset Password"}
        </button>
      </form>
    </section>
  );
};

export default ResetPass;
