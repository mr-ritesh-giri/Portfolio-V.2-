import React, { useCallback, useState } from "react";

const Projects = () => {
  const [isHover, setIsHover] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e) => {
    const bounds = e.currentTarget.getBoundingClientRect();

    setCursorPosition({
      x: e.clientX - bounds.left,
      y: e.clientY - bounds.top,
    });
  }, []);

  return (
    <div className="h-screen w-full p-8">
      <h1 className="text-7xl mb-20">
        My <span className="text-violet-500 font-semibold">Projects</span>
      </h1>
      <div className="relative">
        <div
          className="flex flex-col sm:flex-row bg-white text-black border-b-1 border-gray-500 p-8 rounded-lg shadow-lg mb-8"
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          onMouseMove={handleMouseMove}
        >
          <div className="text-2xl text-gray-600 font-medium sm:mr-4 mb-4 sm:mb-0">
            01
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center w-full">
            <div className="text-6xl font-semibold mb-2 sm:mb-0">
              WarrantEase
            </div>
            <div className="text-base text-gray-600 sm:ml-4">
              Front-End Development / Maintenance Tracking Tool
            </div>
          </div>
        </div>
        {isHover ? (
          <div
            className="absolute"
            style={{
              top: `${cursorPosition.y - 200}px`,
              left: `${cursorPosition.x - 150}px`,
              transition: "0.1s ease-out, left 0.1s ease-out",
            }}
          >
            <img
              src="\public\WarrantEase.png"
              alt="WarrantEase"
              className="w-72 h-44 rounded-lg shadow-lg"
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Projects;

// I will add some screenshots too here.So there will be a screen coming from the bottom which will contain all the info about the project like screnshots, description etc.
