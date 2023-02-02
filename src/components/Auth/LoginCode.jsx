import React, { useRef } from "react";

const LoginCode = () => {
  const codeRef = useRef();

  const handleCodeForm = () => {};

  return (
    <>
      <div className="overLay" />
      <section className="login">
        <h1>Access Code</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Enter Code" ref={codeRef} />
          <button className="onClick" type="button" onClick={handleCodeForm}>
            Proceed to Login
          </button>
          <p className="code">Check your Email for Login access code</p>
        </form>
      </section>
    </>
  );
};

export default LoginCode;
