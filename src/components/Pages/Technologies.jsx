import React, { useEffect } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { technologies } from "../../constants/constant";

gsap.registerPlugin(Draggable);

const Technologies = () => {
  useEffect(() => {
    let draggableInstances = [];

    const updateDraggable = () => {
      if (window.innerWidth >= 1040) {
        if (draggableInstances.length === 0) {
          draggableInstances = Draggable.create(".draggable", {
            bounds: ".container",
            inertia: true,
          });
        }
      } else {
        draggableInstances.forEach((instance) => instance.kill());
        draggableInstances = [];
      }
    };

    updateDraggable();

    window.addEventListener("resize", updateDraggable);

    return () => {
      window.removeEventListener("resize", updateDraggable);
      draggableInstances.forEach((instance) => instance.kill());
    };
  }, []);

  return (
    <div className="container min-h-screen max-w-[1400px] mx-auto px-2 py-8 sm:p-6 flex flex-col justify-start bg-black">
      {/* Heading Section */}
      <div className="mb-6 sm:mb-16">
        <h1 className="text-4xl sm:text-5xl xl:text-7xl mb-6 sm:mb-14 text-left text-white leading-tight">
          My <span className="text-violet-500 font-semibold">Technology</span>{" "}
          Skillset
        </h1>
        <p className="text-base sm:text-lg xl:text-xl text-gray-300 text-left">
          Here are the technologies I have hands-on experience with:
        </p>
      </div>

      {/* Skills Section */}
      <div className="flex-1 p-2 sm:p-6 rounded-lg shadow-lg overflow-hidden">
        <div className="grid x:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 sm:gap-6 gap-3">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="draggable flex items-center bg-gray-950 px-2 py-3 sm:p-4 xl:p-6 rounded-2xl shadow-md border border-gray-600 hover:shadow-xl hover:border-violet-500"
            >
              <div className="w-8 h-8 sm:w-12 sm:h-12 md:w-12 md:h-12 lg:w-16 lg:h-16 sm:mr-8 mr-4">
                <img
                  src={tech.img}
                  alt={`${tech.name} logo`}
                  loading="lazy"
                  className="w-full h-full"
                />
              </div>
              <div>
                <h3 className="text-base md:text-xl lg:text-2xl text-white">
                  {tech.name}
                </h3>
                <p className="text-base md:text-base lg:text-lg text-gray-400">
                  {tech.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden md:block text-center text-3xl xl:text-5xl text-violet-400 font-semibold mt-8 opacity-100">
        🏁 Drag Us!
      </div>
    </div>
  );
};

export default Technologies;
