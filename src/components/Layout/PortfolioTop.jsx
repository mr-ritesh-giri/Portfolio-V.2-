import React from "react";
import { HeroPortfolio, Iphone } from "../Pages";
import { useAppContext } from "../../context/AppContext";

const PortfolioTop = () => {
  const { toggleView, viewState, windowWidth } = useAppContext();

  return (
    <div className="flex bg-black">
      {windowWidth < 1760 ? (
        <>
          {viewState.showPhone && (
            <div className="w-full max-w-[1240px] mx-auto">
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
          <div className="max-w-[1240px] w-full mx-auto">
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
        className="absolute z-10 bottom-4 right-4 text-white bg-gray-900 rounded-3xl p-3 text-base min:p-4 min:text-lg"
        onClick={toggleView}
      >
        {viewState.showPhone ? "Desktop View" : "Mobile View"}
      </button>
    </div>
  );
};

export default PortfolioTop;
