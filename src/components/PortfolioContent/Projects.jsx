import React, { useState, useRef, useCallback } from "react";
import { gsap } from "gsap";

const Projects = () => {
  const [isHover, setIsHover] = useState(false);
  const imageRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    const bounds = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - bounds.left;
    const y = e.clientY - bounds.top;

    gsap.to(imageRef.current, {
      x: x - 0,
      y: y - 260,
      duration: 1.8,
      ease: "power3.out",
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
            ref={imageRef}
            className="absolute pointer-events-none"
            style={{
              width: "18rem",
              height: "11rem",
              transform: "translate(-50%, -50%)",
            }}
          >
            <img
              src="/public/App/WarrantEase.png"
              alt="WarrantEase"
              className="w-full h-full rounded-lg shadow-lg"
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Projects;
