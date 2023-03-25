import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSendVerificationEmail } from "../Redux/slices/authSlice/authThunk";

const Verify = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);
  return (
    <section className="--flex-center --margin-top-one --justify-content --gap-two">
      <div>
        <h1>Message</h1>
        <p className="--font-sm">
          To verify your account, check your email for verification link!
        </p>
      </div>

      <button
        className=" --primary-font-color verify-button "
        onClick={() => dispatch(getSendVerificationEmail())}
      >
        {isLoading ? "Sending.." : "Resend Link"}
      </button>
    </section>
  );
};

export default Verify;
