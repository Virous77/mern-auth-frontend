import React from "react";
import "./Notification.css";
import { AiOutlineClose } from "react-icons/ai";
import { useGlobalContext } from "../store/globalContext";

const Notification = () => {
  const { notification, handleNotification } = useGlobalContext();
  return (
    <p
      className={`notification ${
        notification.status === "error" ? "eNotification" : "sNotification"
      }`}
    >
      {notification.message}
      <AiOutlineClose cursor="pointer" onClick={() => handleNotification("")} />
    </p>
  );
};

export default Notification;
