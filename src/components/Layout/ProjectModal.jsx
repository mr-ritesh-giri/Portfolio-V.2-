import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import CustomButton from "../Buttons/CustomButton";

const ProjectModal = ({
  isModalOpen,
  setProjectModalVisible,
  className,
  activeProject,
}) => {
  const [isFullScreen, setFullScreen] = useState(false);
  const modalRef = useRef(null);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  const handleResize = () => {
    setIsLargeScreen(window.innerWidth >= 1024);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleScreen = () => {
    setFullScreen((prevScreen) => !prevScreen);
  };

  // GSAP animation
  useEffect(() => {
    if (isModalOpen && modalRef.current) {
      gsap.fromTo(
        modalRef.current,
        { y: "100%", opacity: 0 },
        { y: "0%", opacity: 1, duration: 0.6, ease: "power4.out" }
      );
    } else if (modalRef.current) {
      gsap.to(modalRef.current, {
        y: "100%",
        opacity: 0,
        duration: 0.5,
        ease: "power3.in",
      });
    }
  }, [isModalOpen]);

  if (!activeProject) return null;

  return (
    <div
      ref={modalRef}
      className={`absolute top-0 right-0 bottom-0 left-0 w-full transition-all duration-300 ease-in-out ${className} ${
        isModalOpen ? "block bg-gray" : "hidden"
      } ${
        isFullScreen
          ? "flex justify-center items-center w-full h-full px-5 bg-black text-white shadow-2xl pt-8 sm:pt-0"
          : "max-w-[230px] y:max-w-[300px] x:max-w-[360px] sm:max-w-[520px] md:max-w-[600px] lg:max-w-[850px] xl:max-w-[1200px] 2xl:max-w-[1400px] h-2/4 sm:h-3/4  md:h-4/5 m-auto bg-white text-black shadow-2xl"
      }`}
    >
      {/* Close and Full-Screen Toggle Buttons */}
      <div
        className={`${
          isFullScreen ? "text-white" : "text-black"
        } text-2xl  sm:text-4xl ${
          !isFullScreen
            ? "absolute top-2 md:top-4 -right-8 md:-right-10 gap-2 flex flex-col justify-center items-center"
            : "absolute top-6 right-6 gap-4 flex flex-row-reverse"
        }`}
      >
        <button
          className="hover:text-red-500 transition-colors duration-300"
          onClick={() => setProjectModalVisible(false)}
          aria-label="Close Modal"
        >
          ✖
        </button>
        <button
          className="hover:text-yellow-400 transition-colors duration-300"
          onClick={() => toggleScreen()}
          aria-label="Toggle Full Screen"
        >
          {isLargeScreen ? (isFullScreen ? "–" : "⛶") : null}
        </button>
      </div>

      {/* Modal Content */}
      <div
        className={`max-w-[1400px] mx-auto ${
          isFullScreen
            ? "bg-black text-white py-8 lg:py-24"
            : "bg-white text-black p-5 md:p-10"
        }`}
      >
        {/* Main Content Section */}
        <div className="flex flex-col-reverse lg:flex-row justify-between items-start h-full">
          {/* Text and Project Details */}
          <div className="max-w-[700px] xl:max-w-[800px] w-full">
            <h1 className="text-xl x:text-xl sm:base md:text-3xl lg:text-2xl xl:text-4xl mb-2 xl:mb-6">
              {activeProject.title}
            </h1>
            <p className="text-sm x:text-base md:text-lg lg:text-base xl:text-lg mb-3 xl:mb-6 text-gray-500">
              {activeProject.description || activeProject.shortDes}
            </p>
            <div className="space-x-3 mb-3 md:mb-0 text-white">
              <CustomButton
                text="Live Link"
                href={activeProject.link}
                isFullScreen={isFullScreen}
              />
              <CustomButton
                text="GitHub"
                href={activeProject.github || null}
                isFullScreen={isFullScreen}
              />
            </div>
          </div>
          {/* Project Image */}
          <div className="mb-2 lg:mb-0 w-full lg:w-96">
            <img
              src={activeProject.image}
              alt={activeProject.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        {/* Divider */}
        <hr className="hidden lg:block my-6 border-t-2 border-gray-900" />
        {/* Project Screenshots */}
        {activeProject.screenshots && activeProject.screenshots.length > 0 && (
          <div className={`${isFullScreen ? "block" : "hidden lg:block"}`}>
            <h1 className="text-2xl sm:text-3xl xl:text-3xl mb-4">
              Project Screenshots
            </h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {activeProject.screenshots.map((image, idx) => (
                <div key={idx} className="w-full text-center mb-4">
                  <img
                    src={image}
                    alt={`Screenshot ${idx + 1}`}
                    className="w-full h-full object-cover rounded-lg shadow-lg mb-2"
                  />
                  <span>({idx + 1})</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectModal;
