import React, { useEffect } from "react";
import Lenis from "lenis";
import { useAppContext } from "./context/AppContext";
import PortfolioTop from "./components/Layout/PortfolioTop";
import PortfolioBottom from "./components/Layout/PortfolioBottom";
import "./App.css";

function App() {
  const { viewState, windowWidth, toggleView } = useAppContext();
  const isMobile = windowWidth < 1760;
  const isDesktop = windowWidth >= 1760;

  // Handling smooth scroll (using Lenis)
  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", () => {});

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [viewState]);

  useEffect(() => {
    const blockActions = (event) => {
      if (
        event.key === "F12" ||
        ((event.ctrlKey || event.metaKey) &&
          event.shiftKey &&
          ["I", "J"].includes(event.key)) ||
        ((event.ctrlKey || event.metaKey) && event.key === "U")
      ) {
        event.preventDefault();
      }
    };

    const blockRightClick = (event) => {
      event.preventDefault();
    };

    const detectConsoleOpen = () => {
      const devtools = /./;
      devtools.toString = function () {
        console.clear();
        return "DevTools is blocked!";
      };
      console.log(devtools);
    };

    window.addEventListener("keydown", blockActions);
    window.addEventListener("contextmenu", blockRightClick);
    detectConsoleOpen();

    return () => {
      window.removeEventListener("keydown", blockActions);
      window.removeEventListener("contextmenu", blockRightClick);
    };
  }, []);

  return (
    <div className="select-none">
      <>
        <PortfolioTop />
        {viewState.showPortfolio && <PortfolioBottom />}
      </>
    </div>
  );
}

export default App;
