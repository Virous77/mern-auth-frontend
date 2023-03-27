import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getLoginWithCode,
  getSendLoginCode,
} from "../Redux/slices/authSlice/authThunk";
import { useGlobalContext } from "../store/globalContext";
import { useNavigate, useParams } from "react-router-dom";

const LoginCode = () => {
  const codeRef = useRef();
  const { isLoading, message, isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { handleNotification } = useGlobalContext();
  const navigate = useNavigate();
  const { email } = useParams();

  const handleCodeForm = () => {
    if (!codeRef.current.value) {
      handleNotification({
        message: "Cannot proceed without any code!",
        status: "error",
      });
      return;
    }

    const userData = {
      email,
      loginCode: codeRef.current.value,
    };
    dispatch(getLoginWithCode(userData));
  };

  useEffect(() => {
    if (message) {
      handleNotification({
        message,
        status: "error",
      });
    }

    if (isLoggedIn) {
      navigate("/profile");
    }
  }, [message, isLoggedIn]);

  return (
    <>
      <div className="overLay" />
      <section className="login">
        <h1>Access Code</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Enter Code" ref={codeRef} />
          <button className="onClick" type="button" onClick={handleCodeForm}>
            {isLoading ? "Processing" : "Proceed to Login"}
          </button>
          <p className="code">Check your Email for Login access code!</p>

          <span
            className="resend"
            onClick={() => dispatch(getSendLoginCode(email))}
          >
            Resend Code
          </span>
        </form>
      </section>
    </>
  );
};

export default LoginCode;
