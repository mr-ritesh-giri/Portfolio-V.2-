import React from "react";
import Iphone from "./components/PortfolioContent/Iphone";
import HeroPortfolio from "./components/Pages/HeroPortfolio";

function App() {
  return (
    <div className="flex h-screen bg-black">
      {/* Left side: iPhone */}
      <div className="w-1/3 flex justify-center items-center">
        <Iphone />
      </div>

      {/* Right side: Main portfolio content */}
      <div className="w-2/3 p-8 flex items-center">
        <HeroPortfolio />
      </div>
    </div>
  );
}

export default App;
