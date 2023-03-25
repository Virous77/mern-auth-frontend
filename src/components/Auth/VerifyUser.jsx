import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVerifyUser } from "../Redux/slices/authSlice/authThunk";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../store/globalContext";

const VerifyUser = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { isLoading, message } = useSelector((state) => state.auth);

  const { handleNotification } = useGlobalContext();

  const verificationToken = id;

  useEffect(() => {
    if (message) {
      handleNotification({
        message,
        status: "success",
      });
    }
  }, [message]);

  return (
    <section className="--flex-center --margin-top-one --justify-content --gap-two">
      <div>
        <h1>Account Verification</h1>
        <p className="--font-sm">To verify your account, Click the button...</p>
      </div>

      <button
        className=" --primary-font-color verify-button "
        onClick={() => dispatch(getVerifyUser(verificationToken))}
      >
        {isLoading ? "Processing.." : "Verify Account"}
      </button>
    </section>
  );
};

export default VerifyUser;
