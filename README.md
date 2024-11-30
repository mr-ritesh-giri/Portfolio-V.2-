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
import PortfolioBottom from "./components/Layout/PortfolioBottom";

function App() {
const { viewState, windowWidth, toggleView } = useAppContext();
const isMobile = windowWidth < 1760;
const isDesktop = windowWidth >= 1760;
const showMobileView = isMobile && !viewState.showPortfolio;
const showDesktopView = isDesktop || viewState.showPortfolio;

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
{/_ Show mobile view (Iphone) for screen width < 1760px _/}
{windowWidth < 1760 && !viewState.showPortfolio && (
<div className="min-w-[320px] sm:max-w-[640px] w-full mx-auto">
<Iphone />
</div>
)}
{viewState.showPortfolio && (
<>
<section className="relative">
<HeroPortfolio />
</section>
{/_ <PortfolioBottom /> _/}
</>
)}
{/_ Show Hero Portfolio when screen width >= 1760px _/}
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
      {viewState.showPortfolio &&
        !viewState.showPhone &&
        windowWidth >= 1760 && <PortfolioBottom />}
    </div>

);
}

export default App;
