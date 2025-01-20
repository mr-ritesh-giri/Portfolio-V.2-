import React, { useState } from "react";
import {
  AboutMe,
  Skills,
  TicTacToe,
  Tools,
  Twitter,
  LinkedIn,
  PasswordGenerator,
  GitHub,
} from "../Mobile/index";
import { apps } from "../../constants/constant";

const Background = () => {
  const [activeApp, setActiveApp] = useState(null);

  const renderActiveApp = () => {
    switch (activeApp) {
      case 1:
        return <AboutMe />;
      case 2:
        return <Skills />;
      case 3:
        return <PasswordGenerator />;
      case 4:
        return <TicTacToe />;
      case 5:
        return <Tools />;
      case 6:
        return <GitHub />;
      case 7:
        return <Twitter />;
      case 8:
        return <LinkedIn />;
      default:
        return null;
    }
  };

  return (
    <div className="absolute inset-0 z-10">
      {/* Apps Grid */}
      <div className="x:p-4">
        {!activeApp && (
          <div className="grid grid-cols-4 gap-3 x:gap-5 mt-8">
            {apps.map((app) => (
              <div
                key={app.id}
                className="flex flex-col items-center hover:scale-105"
              >
                {/* Image (App Icon) */}
                <div
                  className="w-11 h-11 x:w-12 x:h-12 mb-2 bg-white flex justify-center items-center rounded-[12px] cursor-pointer"
                  onClick={() => setActiveApp(app.id)}
                >
                  <img
                    src={app.imgSrc}
                    alt={app.title}
                    loading="lazy"
                    className="w-full h-full object-cover rounded-lg p-1"
                  />
                </div>
                {/* App Title */}
                <span className="text-xs x:text-base text-center text-white">
                  {app.title}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Render Active App */}
        {activeApp && (
          <div className="absolute inset-0 z-20 h-full w-full">
            {/* App Window */}
            <div className="flex justify-between w-full px-5 py-2 bg-black text-white">
              {/* Header of the apps */}
              <div className="font-bold text-xl">
                {apps.find((app) => app.id === activeApp)?.title}
              </div>
              <div
                className="text-2xl text-red-500 font-semibold"
                onClick={() => setActiveApp(null)} // Close the app
              >
                ✕
              </div>
            </div>

            {/* Apps Content Here */}
            <div>{renderActiveApp()} </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Background;
