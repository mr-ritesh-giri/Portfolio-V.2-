import React, { createContext, useState, useContext, useEffect } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [viewState, setViewState] = useState({
    showPhone: false,
    showPortfolio: true,
  });

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Toggle between mobile view and portfolio view
  const toggleView = () => {
    setViewState((prevState) => ({
      showPhone: !prevState.showPhone,
      showPortfolio: !prevState.showPortfolio,
    }));
  };

  return (
    <AppContext.Provider
      value={{
        viewState,
        setViewState,
        windowWidth,
        setWindowWidth,
        toggleView,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
