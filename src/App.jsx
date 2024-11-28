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
  }, []);

  return (
    <div
      className="select-none relative flex flex-col h-screen bg-black"
      ref={containerRef}
    >
      {/* Left side: iPhone */}
      <div className="w-full h-screen flex items-center">
        {/* <div className="w-1/3">
          <Iphone />
        </div>
        <section className="w-2/3 flex items-center h-screen relative ml-10">
          <HeroPortfolio />
          <Spline scene="https://prod.spline.design/DVe8fLgj4Kw25-rZ/scene.splinecode" />
          <div className="absolute bottom-0 right-0 w-full h-16 bg-black z-10"></div>
        </section> */}
      </div>

      {/* Right side: Main portfolio content */}
      <div className="flex flex-col w-full">
        <section className="h-screen w-full flex items-center justify-center mx-auto bg-white">
          <Projects />
        </section>
        <section className="min-h-screen w-full flex items-center justify-center bg-black">
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
