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

      {projects.map((project, index) => (
        <div className="relative mb-16" key={project.id}>
          <div
            className="flex flex-col sm:flex-row border-b-1 border-gray-500 p-8 rounded-lg shadow-lg mb-8"
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
            onMouseMove={(e) => handleMouseMove(e, index)}
          >
            <div className="text-2xl text-gray-600 font-medium sm:mr-4 mb-4 sm:mb-0">
              {String(project.id).padStart(2, "0")}
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-center w-full">
              <div className="text-6xl font-semibold mb-2 sm:mb-0">
                {project.title}
              </div>
              <div className="text-base text-gray-600 sm:ml-4">
                {project.description}
              </div>
            </div>
          </div>

          {hoverIndex === index && (
            <div
              ref={(el) => (imageRefs.current[index] = el)}
              className="absolute pointer-events-none"
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
