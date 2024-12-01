import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

const projects = [
  {
    id: 1,
    title: "WarrantEase - Appliance Maintenance & Warranty Tracker",
    shortDes:
      "WarrantEase is a user-friendly application designed to help you keep track of your appliances' maintenance schedules and warranty periods. With this app, you can effortlessly store appliance details and receive timely reminders for upcoming maintenance tasks or warranty expirations.",
    features: [
      "<strong>Add Devices</strong>: Easily input your appliances' key information such as type, model, make, purchase date, and warranty period.",
      "<strong>Track Maintenance</strong>: Set reminders for upcoming maintenance and warranty expiration dates to keep your appliances in top condition.",
      "<strong>Service History</strong>: Maintain a detailed log of past services and repairs for better tracking and management.",
      "<strong>Reminders & Notifications</strong>: Receive timely alerts a week before your scheduled service or warranty expiration. Customizable notification settings available.",
    ],

    image: "/Project/WarrantEase.png",
    link: "https://warrantease.netlify.app/",
  },

  //

  //
  // {
  //   id: 2,
  //   title: "Portfolio",
  //   description: "Front-End Development / Personal Portfolio",
  //   image: "/Project/Portfolio.png",
  //   link: "https://warrantease.netlify.app/",
  // },
];

const Modal = ({ isModalOpen, setProjectModalVisible, className }) => {
  const [isFullScreen, setFullScreen] = useState(false);
  const modalRef = useRef(null);

  const toggleScreen = () => {
    setFullScreen((prevScreen) => !prevScreen);
  };

  // GSAP animation when the modal opens
  // useEffect(() => {
  //   if (isModalOpen) {
  //     gsap.fromTo(
  //       modalRef.current,
  //       {
  //         y: "100%", // Start from the bottom
  //         opacity: 0,
  //       },
  //       {
  //         y: "0%", // Move to its original position
  //         opacity: 1,
  //         duration: 0.6,
  //         ease: "power4.out",
  //       }
  //     );
  //   } else {
  //     gsap.to(modalRef.current, {
  //       y: "100%", // Animate back to the bottom
  //       opacity: 0,
  //       duration: 0.5,
  //       ease: "power3.in",
  //     });
  //   }
  // }, [isModalOpen]);

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
      {/* Close, Minimize, Maximize Buttons */}
      <div
        className={`${
          isFullScreen ? "text-white" : "text-black"
        } flex flex-col justify-center items-center text-4xl space-y-2 ${
          !isFullScreen ? "absolute top-4 -right-10" : "absolute top-6 right-6"
        }`}
      >
        <button
          className="hover:text-red-500 transition-colors duration-300"
          onClick={() => setProjectModalVisible(false)}
        >
          ✖
        </button>
        <button
          className="hover:text-yellow-400 transition-colors duration-300"
          onClick={() => toggleScreen()}
        >
          {isFullScreen ? "–" : "⛶"}
        </button>
      </div>

      {/* Modal Content */}
      {projects.map((project, index) => (
        <div key={index} className="max-w-[1400px] h-full p-10 mx-auto">
          {/* Main Portion */}
          <div className="flex justify-between items-center">
            <div className="max-w-[800px] w-full">
              <h1 className="text-4xl mb-6">{project.title}</h1>
              <p className="text-lg mb-6 text-gray-700">{project.shortDes}</p>
              <div className="space-x-3 text-white">
                <button className="py-3 px-5 text-lg rounded-3xl bg-black border-white border-2">
                  Github
                </button>
                <button className="py-3 px-5 text-lg rounded-3xl bg-black">
                  Live Link
                </button>
              </div>
            </div>
            <div className="w-96">
              <img
                src={project.image}
                alt="WarrantEase"
                className="w-full h-full"
              />
            </div>
          </div>
          {/* ScreenShots of the projects Here */}
          <div></div>
        </div>
      ))}
    </div>
  );
};

export default Modal;
