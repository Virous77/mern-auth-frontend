import React from "react";
import { userRole } from "../../utils/function";
import { BsCheckCircleFill } from "react-icons/bs";

const UserRole = () => {
  return (
    <div className="role --flex-center">
      <select>
        {userRole.map((role) => (
          <option value={role.value} key={role.id}>
            {role.name}
          </option>
        ))}
      </select>
      <BsCheckCircleFill size={27} cursor="pointer" color="blueviolet" />
    </div>
  );
};

export default UserRole;
