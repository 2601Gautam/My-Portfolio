﻿import { createContext, useState, useContext,useEffect } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [page, setPage] = useState("home");
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const val = {page, setPage, screenWidth, setScreenWidth};

    useEffect(() => {
    const timeinterval = setInterval(() => {
      console.log("Current screen width:", screenWidth);
      setScreenWidth(window.innerWidth);
    }, 1000);
    return () => clearInterval(timeinterval);
  },[screenWidth]);

  return (
    <AppContext.Provider value={val}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
