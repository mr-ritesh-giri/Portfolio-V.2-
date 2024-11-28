import React, { useState, useRef, useCallback } from "react";
import { gsap } from "gsap";

const Projects = () => {
  const [hoverIndex, setHoverIndex] = useState(null);
  const imageRefs = useRef([]);

  const projects = [
    {
      id: 1,
      title: "WarrantEase",
      description: "Front-End Development / Maintenance Tracking Tool",
      image: "/public/Project/WarrantEase.png",
      link: "https://warrantease.netlify.app/",
    },
    {
      id: 2,
      title: "Portfolio",
      description: "Front-End Development / Personal Portfolio",
      image: "/public/Project/Portfolio.png",
      link: "https://warrantease.netlify.app/",
    },
  ];

  const handleMouseMove = useCallback((e, index) => {
    const bounds = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - bounds.left;
    const y = e.clientY - bounds.top;

    gsap.to(imageRefs.current[index], {
      x: x - 100,
      y: y - 150,
      duration: 1.8,
      ease: "power3.out",
    });
  }, []);

  return (
    <div className="h-full p-4 sm:p-8 w-[1400px]">
      <h1 className="text-4xl md:text-5xl lg:text-7xl mb-8 sm:mb-12 md:mb-20">
        My <span className="text-violet-500 font-semibold">Projects</span>
      </h1>

      {projects.map((project, index) => (
        <div className="relative mb-16" key={project.id}>
          <div
            className="flex flex-row border-b-1 border-gray-500 sm:p-8 p-2 rounded-lg shadow-lg mb-8"
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
            onMouseMove={(e) => handleMouseMove(e, index)}
          >
            <div className="text-sm sm:text-sm md:text-base lg:text-2xl text-gray-600 font-medium sm:mr-4 mb-4">
              {String(project.id).padStart(2, "0")}
            </div>
            <div className="flex justify-start sm:justify-between items-center w-full flex-col sm:flex-row">
              <div className="text-xl sm:text-3xl md:text-4xl lg:text-6xl font-semibold mb-2 sm:mb-0">
                {project.title}
              </div>
              <div className="sm:text-xs md:text-sm lg:text-base sm:ml-4 text-gray-600 text-center">
                {project.description}
              </div>
            </div>
          </div>

          {hoverIndex === index && (
            <div
              ref={(el) => (imageRefs.current[index] = el)}
              className="absolute top-0 left-52 pointer-events-none sm:block hidden"
              style={{
                width: "18rem",
                height: "11rem",
                transform: "translate(-50%, -50%)",
              }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full rounded-lg shadow-lg"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Projects;
