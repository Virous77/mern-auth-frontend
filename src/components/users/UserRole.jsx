import React, { useEffect, useState } from "react";
import { userRole } from "../../utils/function";
import { BsCheckCircleFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useGlobalContext } from "../store/globalContext";
import {
  getUpdateUserRole,
  getAllUsers,
} from "../Redux/slices/authSlice/authThunk";
import { getSendAutomatedEmail } from "../Redux/slices/emailSlice/emailThunk";

const UserRole = ({ user }) => {
  const [activeUserRole, setUserRole] = useState(null);
  const { isLoading, message } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { handleNotification } = useGlobalContext();

  const updateUserRole = () => {
    if (!activeUserRole) {
      handleNotification({
        message: "Select user role the proceed!",
        status: "error",
      });
      return;
    }

    if (activeUserRole.role === activeUserRole.alreadyRole) {
      handleNotification({
        message: "This role is already set for this user!",
        status: "error",
      });
      return;
    }

    const userData = {
      id: activeUserRole?.id,
      role: activeUserRole?.role,
    };

    const emailData = {
      subject: "Account Role Changed! - Virous",
      send_to: activeUserRole?.email,
      reply_to: "noreply@virous.com",
      template: "changeRole",
    };

    dispatch(getUpdateUserRole(userData));
    dispatch(getSendAutomatedEmail(emailData));
  };

  useEffect(() => {
    if (message) {
      handleNotification({
        message,
        status: "success",
      });
      dispatch(getAllUsers());
    }
  }, [message]);

  return (
    <div className="role --flex-center">
      <select
        onChange={(e) => {
          if (e.target.value !== "") {
            return setUserRole({
              id: user?._id,
              role: e.target.value,
              alreadyRole: user?.role,
              email: user?.email,
            });
          } else {
            return setUserRole(null);
          }
        }}
      >
        {userRole?.map((role) => (
          <option value={role.value} key={role.id}>
            {role.name}
          </option>
        ))}
      </select>
      <BsCheckCircleFill
        size={27}
        cursor="pointer"
        color={
          isLoading && user?._id === activeUserRole?.id
            ? "green"
            : activeUserRole
            ? "blueviolet"
            : "black"
        }
        onClick={updateUserRole}
      />
    </div>
  );
};

export default UserRole;
