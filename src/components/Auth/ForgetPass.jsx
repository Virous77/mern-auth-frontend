import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGlobalContext } from "../store/globalContext";
import { getForgetPassword } from "../Redux/slices/authSlice/authThunk";

const ForgetPass = () => {
  const emailRef = useRef();

  const { isLoading, message } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { handleNotification } = useGlobalContext();

  const handleForgetPass = () => {
    const email = {
      email: emailRef.current.value,
    };

    if (!email.email) {
      handleNotification({
        message: "Email filed can't be empty!",
        status: "error",
      });
      return;
    }

    dispatch(getForgetPassword(email));
  };

  useEffect(() => {
    if (message) {
      handleNotification({
        message,
        status: message === "No user with this email" ? "error" : "success",
      });
    }

    if (message === "Password reset email sent!") {
      emailRef.current.value = "";
    }
  }, [message]);

  return (
    <section className="login boxShadow">
      <h1>Forget Password</h1>

      <form onClick={(e) => e.preventDefault()}>
        <input type="text" placeholder="Enter Email" ref={emailRef} />
        <button className="onClick" type="button" onClick={handleForgetPass}>
          {isLoading ? "Processing" : "Get Reset Email"}
        </button>
      </form>
    </section>
  );
};

export default ForgetPass;
