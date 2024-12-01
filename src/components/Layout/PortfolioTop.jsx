import React from "react";
import { FaMobileAlt, FaDesktop } from "react-icons/fa";
import { HeroPortfolio, Iphone } from "../Pages";
import { useAppContext } from "../../context/AppContext";

const PortfolioTop = () => {
  const { toggleView, viewState, windowWidth } = useAppContext();

  return (
    <div className="flex bg-black">
      {windowWidth < 1760 ? (
        <>
          {viewState.showPhone && (
            <div className="x:px-12 sm:w-1/3 w-full mx-auto">
              <Iphone />
            </div>
          )}
          {viewState.showPortfolio && (
            <section className="relative mx-auto">
              <HeroPortfolio />
            </section>
          )}
        </>
      ) : (
        <>
          <div className="x:px-12 sm:w-1/3 w-full mx-auto">
            <Iphone />
          </div>

          {viewState.showPortfolio && (
            <section className="relative px-12 2xl:p-0">
              <HeroPortfolio />
            </section>
          )}
        </>
      )}

      <button
        className="absolute z-10 bottom-4 right-4 text-white bg-gradient-to-r from-violet-500 to-purple-700 rounded-full p-3 sm:p-4 text-2xl sm:text-3xl shadow-2xl transition-all duration-300 ease-in-out hover:rotate-12 hover:scale-110 animate-bounce"
        onClick={toggleView}
      >
        {viewState.showPhone ? <FaMobileAlt /> : <FaDesktop />}
      </button>
    </div>
  );
};

export default PortfolioTop;
