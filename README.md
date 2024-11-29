<<<<<<< HEAD
<<<<<<< HEAD
=======
 <div className="w-full h-screen flex items-center">
        <div className="w-1/3">
          <Iphone />
        </div>
        <section className="w-2/3 flex items-center h-screen relative ml-10">
          {/* Gradient Blur */}
          <div className="absolute top-0 w-full h-[220px] inset-x-0 bg-gradient-to-r from-violet-600/70 via-blue-400/70 to-violet-600/70 blur-[130px] rounded-b-full"></div>
=======
import "./App.css";
import Lenis from "lenis";
import React, { useEffect, useRef } from "react";
import Spline from "@splinetool/react-spline";
import Iphone from "./components/Pages/Iphone";
import HeroPortfolio from "./components/Pages/HeroPortfolio";
import Projects from "./components/Pages/Projects";
import Technologies from "./components/Pages/Technologies";
import About from "./components/Pages/About";

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
{/_ Mobile Phone _/}
<div className="w-full h-screen flex items-center">
<div className="w-1/3">
<Iphone />
</div>
<section className="w-2/3 flex items-center h-screen relative ml-10">
{/_ Gradient Blur _/}
<div className="absolute top-0 w-full h-[220px] inset-x-0 bg-gradient-to-r from-violet-600/70 via-blue-400/70 to-violet-600/70 blur-[130px] rounded-b-full"></div>
>>>>>>> responsive

          {/* Hero Portfolio */}
          <div className="w-full h-screen flex flex-col justify-center items-start text-white">
            <HeroPortfolio />
          </div>

          {/* Spline 3D Model */}
          <div className="flex justify-center items-center h-screen min-w-[600px]">
            <Spline
              scene="https://prod.spline.design/DVe8fLgj4Kw25-rZ/scene.splinecode"
              className="w-full h-full"
            />
          </div>
          <div className="absolute bottom-0 right-0 w-full h-16 bg-black z-10"></div>
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

          {/* Large Gradient Bottom-Left */}
          <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-gradient-to-br from-violet-400 via-blue-400 to-transparent opacity-50 blur-[120px] rounded-full"></div>

          {/* Large Gradient Bottom-Right */}
          <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-gradient-to-bl from-blue-400 via-violet-400 to-transparent opacity-50 blur-[120px] rounded-full"></div>
        </section>
<<<<<<< HEAD
>>>>>>> responsive
=======
      </div>
    </div>

);
}

export default App;
>>>>>>> responsive
