import React, { useEffect } from "react";
import Iphone from "./components/PortfolioContent/Iphone";
import HeroPortfolio from "./components/Pages/HeroPortfolio";
import Spline from "@splinetool/react-spline";

function App() {
  // useEffect(() => {
  //   const handleKeyPress = (e) => {
  //     if (e.key === "F12") {
  //       e.preventDefault();
  //     }
  //   };

  //   const handleRightClick = (e) => {
  //     e.preventDefault();
  //   };

  //   window.addEventListener("keydown", handleKeyPress);

  //   window.addEventListener("contextmenu", handleRightClick);

  //   return () => {
  //     window.removeEventListener("keydown", handleKeyPress);
  //     window.removeEventListener("contextmenu", handleRightClick);
  //   };
  // }, []);

  return (
    <div className="relative flex h-screen bg-black">
      {/* Left side: iPhone */}
      <div className="w-1/3 bg-black flex justify-center items-center fixed top-0 left-0">
        <Iphone />
      </div>

      {/* Right side: Main portfolio content */}
      <div className="w-2/3 flex flex-col absolute top-0 right-0 overflow-y-auto">
        <div className="flex items-center h-screen relative">
          <HeroPortfolio />
          <Spline scene="https://prod.spline.design/DVe8fLgj4Kw25-rZ/scene.splinecode" />
          <div className="absolute bottom-0 right-0 w-full h-16 bg-black z-10"></div>
        </div>
        <div className="bg-white h-[100vh] w-full"></div>
      </div>
    </div>
  );
}

export default App;
