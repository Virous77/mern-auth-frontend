import React, { useState } from "react";
import Password from "./Password";

const ResetPass = ({ title }) => {
  const [resetData, setResetData] = useState({
    password: "",
    confirmPassword: "",
    oldPass: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setResetData({ ...resetData, [name]: value });
  };

  const handlePasswordReset = () => {
    console.log(resetData);
  };

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
          Reset Password
        </button>
      </form>
    </section>
  );
};

export default ResetPass;
