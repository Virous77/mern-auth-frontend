import React, { useRef } from "react";

const ForgetPass = () => {
  const emailRef = useRef();

  const handleForgetPass = () => {
    console.log(emailRef.current.value);
  };

  return (
    <section className="login boxShadow">
      <h1>Forget Password</h1>

      <form onClick={(e) => e.preventDefault()}>
        <input type="text" placeholder="Enter Email" ref={emailRef} />
        <button className="onClick" type="button" onClick={handleForgetPass}>
          Get Reset Email
        </button>
      </form>
    </section>
  );
};

export default ForgetPass;
