import React, { useState, useRef, useCallback, useEffect } from "react";
import { gsap } from "gsap";
import { ProjectModal } from "../Layout";
import { projects } from "../../constants/constant";

const Projects = () => {
  const [hoverIndex, setHoverIndex] = useState(null);
  const imageRefs = useRef([]);
  const [isModalOpen, setProjectModalVisible] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

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

  const handleResize = () => {
    setIsLargeScreen(window.innerWidth >= 1024);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleProjectClick = (project) => {
    if (isLargeScreen) {
      setHoverIndex(null);
      setActiveProject(project);
      setProjectModalVisible(true);
    } else {
      window.open(project.link, "_blank");
    }
  };

  return (
    <div className="relative min-h-screen h-auto w-full overflow-y-auto">
      {!isModalOpen && (
        <div className="h-full mx-auto py-8 px-4 sm:p-14 max-w-[1400px]">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl mb-6 sm:mb-14 text-left text-black leading-tight">
            My <span className="text-violet-500 font-semibold">Projects</span>
          </h1>
          {projects.map((project, index) => (
            <div className="relative mb-16" key={project.id}>
              <div
                className="flex flex-row border-b-1 border-gray-500 sm:p-8 p-2 rounded-lg shadow-lg mb-8"
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
                onMouseMove={(e) => handleMouseMove(e, index)}
                onClick={() => handleProjectClick(project)}
              >
                <div className="text-sm sm:text-sm md:text-base lg:text-xl text-gray-600 font-medium sm:mr-4 mb-4">
                  {String(project.id).padStart(2, "0")}
                </div>
                <div className="flex justify-start sm:justify-between items-center w-full flex-col sm:flex-row">
                  <div className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-2 sm:mb-0">
                    {project.title}
                  </div>
                  <div className="sm:text-xs md:text-sm lg:text-base sm:ml-4 text-gray-600 text-center">
                    {project.description}
                  </div>
                </div>
              </div>

              {hoverIndex === index && !isModalOpen && (
                <div
                  ref={(el) => (imageRefs.current[index] = el)}
                  className="absolute top-10 left-40 pointer-events-none sm:block hidden"
                  style={{
                    width: "18rem",
                    height: "11rem",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full rounded-lg shadow-lg"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {isModalOpen && activeProject && (
        <ProjectModal
          isModalOpen={isModalOpen}
          setProjectModalVisible={(isVisible) => {
            if (!isVisible) setHoverIndex(null);
            setProjectModalVisible(isVisible);
          }}
          activeProject={activeProject}
        />
      )}
    </div>
  );
};

export default Projects;
