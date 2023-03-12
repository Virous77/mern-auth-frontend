import { createContext, useState, useContext } from "react";

const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [notification, setNotification] = useState("");

  const handleNotification = (value) => {
    setNotification(value);

    setTimeout(() => {
      setNotification("");
    }, 3000);
  };

  return (
    <GlobalContext.Provider value={{ handleNotification, notification }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
export default GlobalContext;
