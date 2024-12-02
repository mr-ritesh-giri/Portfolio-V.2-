import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

const projects = [
  {
    id: 1,
    title: "WarrantEase - Appliance Maintenance & Warranty Tracker",
    shortDes:
      "WarrantEase is a user-friendly application designed to help you keep track of your appliances, maintenance schedules and warranty periods. With this app, you can effortlessly store appliance details and receive timely reminders for upcoming maintenance tasks or warranty expirations.",
    features: [
      "<strong>Add Devices</strong>: Easily input your appliances' key information such as type, model, make, purchase date, and warranty period.",
      "<strong>Track Maintenance</strong>: Set reminders for upcoming maintenance and warranty expiration dates to keep your appliances in top condition.",
      "<strong>Service History</strong>: Maintain a detailed log of past services and repairs for better tracking and management.",
      "<strong>Reminders & Notifications</strong>: Receive timely alerts a week before your scheduled service or warranty expiration. Customizable notification settings available.",
    ],
    image: "/Project/WarrantEase.png",
    screenshots: [
      "/ProjectPopup/wehome.png",
      "/ProjectPopup/addapp.png",
      "/ProjectPopup/viewapp.png",
      "/ProjectPopup/features.png",
    ],
    link: "https://warrantease.netlify.app/",
  },
];

const ProjectModal = ({ isModalOpen, setProjectModalVisible, className }) => {
  const [isFullScreen, setFullScreen] = useState(false);
  const modalRef = useRef(null);

  const toggleScreen = () => {
    setFullScreen((prevScreen) => !prevScreen);
  };

  // GSAP animation
  useEffect(() => {
    if (isModalOpen) {
      gsap.fromTo(
        modalRef.current,
        { y: "100%", opacity: 0 }, // Start animation
        { y: "0%", opacity: 1, duration: 0.6, ease: "power4.out" } // End animation
      );
    } else {
      gsap.to(modalRef.current, {
        y: "100%",
        opacity: 0,
        duration: 0.5,
        ease: "power3.in",
      });
    }
  }, [isModalOpen]);

  return (
    <div
      ref={modalRef}
      className={`${className} absolute top-0 left-0 right-0 bottom-0 transition-all duration-300 ease-in-out ${
        isModalOpen ? "block bg-gray" : "hidden"
      } ${
        isFullScreen
          ? "w-full h-full bg-black text-white shadow-2xl"
          : "max-w-[1400px] h-4/5 m-auto bg-white text-black shadow-2xl"
      }`}
    >
      {/* Close and Full-Screen Toggle Buttons */}
      <div
        className={`${
          isFullScreen ? "text-white" : "text-black"
        } flex flex-col justify-center items-center text-4xl space-y-2 ${
          !isFullScreen ? "absolute top-4 -right-10" : "absolute top-6 right-6"
        }`}
      >
        <button
          className="hover:text-red-500 transition-colors duration-300" // Close button styles
          onClick={() => setProjectModalVisible(false)} // Close modal
          aria-label="Close Modal"
        >
          ✖
        </button>
        <button
          className="hover:text-yellow-400 transition-colors duration-300" // Toggle full-screen button styles
          onClick={() => toggleScreen()}
          aria-label="Toggle Full Screen"
        >
          {isFullScreen ? "–" : "⛶"}
        </button>
      </div>

      {/* Modal Content */}
      {projects.map((project, index) => (
        <div
          key={index}
          className={`max-w-[1400px] mx-auto ${
            isFullScreen ? "bg-black text-white py-24" : "bg-white text-black p-10"
          }`}
        >
          {/* Main Content Section */}
          <div className="flex justify-between items-center h-full">
            {/* Text and Project Details */}
            <div className="max-w-[800px] w-full">
              <h1 className="text-4xl mb-6">{project.title}</h1>
              <p className="text-lg mb-6 text-gray-500">{project.shortDes}</p>
              <div className="space-x-3 text-white">
                {/* Buttons for GitHub and Live Link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    className={`py-3 px-5 text-lg rounded-3xl  border-2 transition-all duration-300 ${
                      isFullScreen
                        ? "bg-black border-white hover:bg-white hover:text-black"
                        : "bg-black border-black hover:bg-white hover:text-black"
                    }`}
                  >
                    Live Link
                  </button>
                </a>
                <button
                  className={`py-3 px-5 text-lg rounded-3xl  border-2 transition-all duration-300 ${
                    isFullScreen
                      ? "bg-black border-white hover:bg-white hover:text-black"
                      : "bg-black border-black hover:bg-white hover:text-black"
                  }`}
                >
                  GitHub
                </button>
              </div>
            </div>
            {/* Project Image */}
            <div className="w-96">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          {/* Divider */}
          <hr className="my-6 border-t-2 border-gray-900" />
          {/* Project Screenshots */}
          <div>
            <h1 className="text-3xl mb-4">Project Screenshots</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {project.screenshots.map((image, idx) => (
                <div className="w-full text-center">
                  <img
                    key={idx}
                    src={image}
                    alt={`Screenshot ${idx + 1}`}
                    className="w-full h-full object-cover rounded-lg shadow-lg mb-2"
                  />
                  <span>({idx + 1})</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectModal;
