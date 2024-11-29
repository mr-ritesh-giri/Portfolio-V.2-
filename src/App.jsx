import "./App.css";
import Lenis from "lenis";
import React, { useEffect } from "react";
import About from "./components/Pages/About";
import Iphone from "./components/Pages/Iphone";
import Projects from "./components/Pages/Projects";
import Technologies from "./components/Pages/Technologies";
import HeroPortfolio from "./components/Pages/HeroPortfolio";

function App() {
  // Lenis here and Preventing F12 and Right-click

  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", () => {});

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Prevent F12 and right-click

    // const handleKeyDown = (e) => {
    //   if (
    //     (e.ctrlKey &&
    //       e.shiftKey &&
    //       (e.key === "I" || e.key === "J" || e.key === "C")) ||
    //     e.key === "F12" || // F12
    //     (e.ctrlKey && e.key === "U") //
    //   ) {
    //     e.preventDefault();
    //     alert("This action is disabled.");
    //   }
    // };

    // // Block right-click
    // const handleContextMenu = (e) => {
    //   e.preventDefault();
    //   alert("Right-click is disabled.");
    // };

    // // Override `console` methods
    // const disableConsole = () => {
    //   const disabledConsoleMethods = [
    //     "log",
    //     "warn",
    //     "error",
    //     "info",
    //     "debug",
    //     "table",
    //   ];
    //   disabledConsoleMethods.forEach((method) => {
    //     console[method] = () => {
    //       alert(`Console access is disabled.`);
    //     };
    //   });
    // };

    // // Add event listeners
    // window.addEventListener("keydown", handleKeyDown);
    // window.addEventListener("contextmenu", handleContextMenu);

    // // Disable console methods
    // disableConsole();

    // return () => {
    //   // Cleanup event listeners
    //   window.removeEventListener("keydown", handleKeyDown);
    //   window.removeEventListener("contextmenu", handleContextMenu);
    // };
  }, []);

  return (
    <div className="select-none relative flex flex-col h-screen bg-black">
      {/* Mobile Phone */}
      <div className="w-full h-screen flex items-center">
        <div className="w-1/3">
          <Iphone />
        </div>

        {/* Hero Portfolio */}
        <section className="w-2/3 flex items-center h-screen relative ml-10">
          <HeroPortfolio />
        </section>
      </div>

      {/* Right side: Main portfolio content */}
      <div className="flex flex-col w-full">
        <section className="h-screen w-full flex items-center justify-center mx-auto bg-white">
          <Projects />
        </section>
        <section className="min-h-screen w-full flex items-center justify-center bg-black">
          <Technologies />
        </section>

        {/* About Section  */}

        <section className="h-screen flex items-center justify-center relative overflow-hidden">
          <About />
        </section>
      </div>
    </div>
  );
}

export default App;
