import { BsCheck, BsCheckAll } from "react-icons/bs";

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
