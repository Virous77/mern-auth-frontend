import { BsCheck, BsCheckAll } from "react-icons/bs";
import { HiOutlineUserGroup } from "react-icons/hi";
import { FaUserCheck, FaUserClock, FaUserAltSlash } from "react-icons/fa";

export const validateData = [
  {
    id: 1,
    name: "LowerCase & UpperCase",
    icon: <BsCheck color="red" size={19} />,
    icon2: <BsCheckAll color="green" size={19} />,
  },
  {
    id: 2,
    name: "Number (0-9)",
    icon: <BsCheck color="red" size={19} />,
    icon2: <BsCheckAll color="green" size={19} />,
  },
  {
    id: 3,
    name: "Special Character (!@#$%^&*)",
    icon: <BsCheck color="red" size={19} />,
    icon2: <BsCheckAll color="green" size={19} />,
  },
  {
    id: 4,
    name: "At least 8 Character",
    icon: <BsCheck color="red" size={19} />,
    icon2: <BsCheckAll color="green" size={19} />,
  },
];

export const profileNav = [
  {
    name: "Profile",
    link: "/profile",
    icon: "",
  },

  {
    name: "Change Password",
    link: "/reset",
    icon: "",
  },

  {
    name: "Users",
    link: "/users",
    icon: "",
  },
];

export const userStat = [
  {
    id: 1,
    name: "Total Users",
    icon: <HiOutlineUserGroup />,
  },
  {
    id: 2,
    name: "Verified Users",
    icon: <FaUserCheck />,
  },
  {
    id: 3,
    name: "Unverified Users",
    icon: <FaUserClock />,
  },
  {
    id: 4,
    name: "Suspended Users",
    icon: <FaUserAltSlash />,
  },
];

export const userRole = [
  {
    id: 1,
    name: "-- Select--",
    value: "",
  },
  {
    id: 2,
    name: "Admin",
    value: "admin",
  },
  {
    id: 3,
    name: "Subscriber",
    value: "subscriber",
  },
  {
    id: 5,
    name: "User",
    value: "user",
  },
  {
    id: 4,
    name: "Suspend",
    value: "suspend",
  },
];
