import React, { useEffect } from "react";
import Lenis from "lenis";
import {
  About,
  HeroPortfolio,
  Iphone,
  Projects,
  Technologies,
} from "./components/Pages/index";
import { useAppContext } from "./context/AppContext";

function App() {
  const { viewState, windowWidth, toggleView } = useAppContext();

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
    <div className="select-none relative flex flex-col h-screen bg-black">
      <div className="relative w-full h-screen flex justify-center items-center">
        {/* Show mobile view (Iphone) for screen width < 1760px */}
        {windowWidth < 1760 && !viewState.showPhone && (
          <div className="min-w-[320px] sm:max-w-[640px] w-full mx-auto">
            <Iphone />
          </div>
        )}

        {/* Show Hero Portfolio when screen width >= 1760px */}
        {windowWidth >= 1760 && (
          <>
            <div className="w-1/3 mx-auto">
              <Iphone />
            </div>
            <section className="relative">
              <HeroPortfolio />
            </section>
          </>
        )}

        {/* Button to toggle between mobile and desktop views */}
        {windowWidth <= 1760 && (
          <button
            className="absolute z-10 bottom-4 right-4 text-white bg-gray-900 rounded-3xl p-4"
            onClick={toggleView}
          >
            {viewState.showPhone ? "Desktop View" : "Mobile View"}
          </button>
        )}
      </div>

      {/* Main portfolio content */}
      {viewState.showPortfolio && windowWidth >= 1760 && (
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
