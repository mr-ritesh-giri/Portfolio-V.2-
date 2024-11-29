import "./App.css";
import React, { useState, useEffect } from "react";
import Lenis from "lenis";
import About from "./components/Pages/About";
import Iphone from "./components/Pages/Iphone";
import Projects from "./components/Pages/Projects";
import Technologies from "./components/Pages/Technologies";
import HeroPortfolio from "./components/Pages/HeroPortfolio";

function App() {
  const [viewState, setViewState] = useState({
    showPhone: true,
    showPortfolio: false,
  });

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  console.log(windowWidth);

  const toggleView = () => {
    setViewState((prevState) => ({
      showPhone: !prevState.showPhone,
      showPortfolio: !prevState.showPortfolio,
    }));
  };
  // Handling Width of the portfolio

  useEffect(() => {
    const handleWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWidth);
    return () => {
      window.removeEventListener("resize", handleWidth);
    };
  }, []);

  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", () => {});

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const handleResize = () => {
      setWindowWidth(window.innerWidth); // Update window width on resize
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [viewState]);

  return (
    <div className="select-none relative flex flex-col h-screen bg-black">
      <div className="relative w-full h-screen flex justify-center items-center">
        {/* Mobile Phone */}
        {windowWidth < 1760 && (
          <div className="min-w-[320px] sm:max-w-[640px] w-full mx-auto">
            <Iphone />
          </div>
        )}

        {/* Hero Portfolio */}
        {windowWidth >= 1760 ? (
          <>
            <div className="w-1/3 mx-auto">
              <Iphone />
            </div>
            <section className="relative">
              <HeroPortfolio />
            </section>
          </>
        ) : null}

        {/* Button to Toggle View */}
        {windowWidth <= 1760 && (
          <button
            className="absolute z-10 bottom-4 right-4 text-white bg-gray-900 rounded-3xl p-4"
            onClick={toggleView}
          >
            {viewState.showPhone ? "Desktop View" : "Mobile View"}
          </button>
        )}
      </div>

      {/* Right side: Main portfolio content */}
      {viewState.showPortfolio && (
        <div className="flex flex-col w-full">
          <section className="h-screen w-full flex items-center justify-center mx-auto bg-white">
            <Projects />
          </section>
          <section className="min-h-screen w-full flex items-center justify-center bg-black">
            <Technologies />
          </section>

          {/* About Section */}
          <section className="h-screen flex items-center justify-center relative overflow-hidden">
            <About />
          </section>
        </div>
      )}
    </div>
  );
}

export default App;
