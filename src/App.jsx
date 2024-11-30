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
