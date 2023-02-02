import React, { useState } from "react";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";

const Password = ({ placeholder, value, onChange, name }) => {
  const [showPass, setShowPass] = useState(false);

  return (
    <div className="password">
      <input
        type={showPass ? "text" : "password"}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
      />

      <span>
        {showPass ? (
          <BsFillEyeSlashFill onClick={() => setShowPass(false)} />
        ) : (
          <BsFillEyeFill onClick={() => setShowPass(true)} />
        )}
      </span>
    </div>
  );
};

export default Password;
