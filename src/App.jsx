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
  const containerRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", () => {});

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Prevent F12 and right-click

    // const handleKeyPress = (e) => {
    //   if (e.key === "F12") {
    //     e.preventDefault();
    //   }
    // };

    // const handleRightClick = (e) => {
    //   e.preventDefault();
    // };

    // window.addEventListener("keydown", handleKeyPress);

    // window.addEventListener("contextmenu", handleRightClick);

    // return () => {
    //   window.removeEventListener("keydown", handleKeyPress);
    //   window.removeEventListener("contextmenu", handleRightClick);
    // };
  }, []);

  return (
    <div
      className="select-none relative flex h-screen bg-black"
      ref={containerRef}
    >
      {/* Left side: iPhone */}
      <div className="w-1/3 bg-black flex justify-center items-center fixed top-0 left-0">
        <Iphone />
      </div>

      {/* Right side: Main portfolio content */}
      <div className="w-2/3 flex flex-col absolute top-0 right-0">
        <section className="flex items-center h-screen relative">
          <HeroPortfolio />
          <Spline scene="https://prod.spline.design/DVe8fLgj4Kw25-rZ/scene.splinecode" />
          <div className="absolute bottom-0 right-0 w-full h-16 bg-black z-10"></div>
        </section>
        <section className="h-screen flex items-center justify-center">
          <Projects />
        </section>
        <section className="h-screen flex items-center justify-center">
          <Technologies />
        </section>
        <section className="h-screen flex items-center justify-center">
          <About />
        </section>
      </div>
    </div>
  );
}

export default App;
