import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaRegEnvelope } from "react-icons/fa";
import "./HeroPortfolio.css";

function HeroPortfolio() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-start text-white p-6">
      <h1 className="text-8xl mb-5">👋I'm Ritesh</h1>

      <h1 className="text-7xl font-semibold text-transparent mb-8 bg-clip-text bg-gradient-to-r from-violet-500 via-gray-500 to-white animate-shinyText">
        FrontEnd Developer
      </h1>

      <p className="text-[20px] mb-2">Welcome to my Digital Playground</p>
      <p className="text-[20px]">
        Software Engineer by Day, UI/UX Enthusiast by Night
      </p>

      <div className="flex mt-7 space-x-6">
        {/* Contact Button */}
        <button className="px-6 py-2 border-2 border-violet-500 text-violet-500 hover:bg-violet-500 hover:text-white rounded-[30px] flex items-center gap-2 transition duration-300 ease-in-out">
          Contact <FaRegEnvelope className="text-violet-500 ml-2" />
        </button>

        {/* Social Media Icons */}
        <span className="flex items-center gap-2 text-white hover:text-gray-300 cursor-pointer transition duration-300">
          <FaGithub /> 
        </span>
        <span className="flex items-center gap-2 text-white hover:text-gray-300 cursor-pointer transition duration-300">
          <FaLinkedin /> 
        </span>
        <span className="flex items-center gap-2 text-white hover:text-gray-300 cursor-pointer transition duration-300">
          <FaTwitter /> 
        </span>
      </div>
    </div>
  );
}

export default HeroPortfolio;
