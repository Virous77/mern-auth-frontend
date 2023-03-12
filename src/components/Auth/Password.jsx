import React, { useState } from "react";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { useGlobalContext } from "../store/globalContext";

const Password = ({ placeholder, value, onChange, name }) => {
  const [showPass, setShowPass] = useState(false);
  const { handleNotification } = useGlobalContext();

  return (
    <div className="password">
      <input
        type={showPass ? "text" : "password"}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        onPaste={(e) => {
          e.preventDefault();

          handleNotification({
            message: "Cannot paste into password fields!",
            status: "error",
          });
          return false;
        }}
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
