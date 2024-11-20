import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaRegCommentDots,
} from "react-icons/fa";
import "./HeroPortfolio.css";

const socialLinks = [
  { icon: <FaGithub />, name: "GitHub" },
  { icon: <FaLinkedin />, name: "LinkedIn" },
  { icon: <FaTwitter />, name: "Twitter" },
];

function HeroPortfolio() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-start text-white">
      <h1 className="text-8xl mb-10">👋I'm Ritesh</h1>

      <h1 className="text-7xl font-semibold text-transparent mb-14 bg-clip-text bg-gradient-to-r from-violet-500 via-gray-500 to-white animate-shinyText whitespace-nowrap">
        FrontEnd Developer
      </h1>

      <p className="text-[18px] text-gray-300">
        Welcome to my Digital Playground
      </p>
      <p className="text-[18px] text-gray-300">
        Software Engineer by Day, UI/UX Enthusiast by Night
      </p>

      <div className="flex mt-8 space-x-4">
        {/* Contact Button */}
        <button className="px-4 py-2 border-2 text-lg border-violet-500 text-white font-semibold hover:bg-violet-500 hover:text-white rounded-[30px] flex items-center gap-2 transition duration-300 ease-in-out">
          Let’s Connect <FaRegCommentDots className="ml-2" />
        </button>

        {/* Social Media Icons */}
        {socialLinks.map((social, index) => (
          <span
            key={index}
            className="flex items-center justify-center w-12 h-12 text-3xl gap-2 border border-violet-500 rounded-full p-2 text-white hover:text-gray-300 hover:scale-110 cursor-pointer transition duration-300"
          >
            {social.icon}
          </span>
        ))}
      </div>
    </div>
  );
}

export default HeroPortfolio;
