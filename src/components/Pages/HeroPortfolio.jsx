import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaRegCommentDots,
} from "react-icons/fa";
import "./HeroPortfolio.css";
import Spline from "@splinetool/react-spline";
import Button from "../Layout/Button";

const socialLinks = [
  {
    icon: <FaGithub />,
    name: "GitHub",
    link: "https://github.com/mr-ritesh-giri",
  },
  {
    icon: <FaLinkedin />,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/ritesh-giri-b8b770242/",
  },
  {
    icon: <FaTwitter />,
    name: "Twitter",
    link: "https://x.com/mr_riteshgiri",
  },
];

function HeroPortfolio() {
  return (
    <div className="w-full mx-auto px-2 lg:px-6 xl:px-0 flex justify-between items-center">
      {/* Gradient Blur */}
      <div className="absolute top-0 w-full h-[220px] inset-x-0 bg-gradient-to-r from-violet-600/70 via-blue-400/70 to-violet-600/70 blur-[130px] rounded-b-full"></div>
      <div className="w-full h-screen flex flex-col justify-center items-start text-white">
        <h2 className="text-4xl x:text-6xl sm:text-7xl md:text-8xl lg:text-7xl xl:text-8xl mb-8 xl:mb-10">
          👋I'm Ritesh
        </h2>

        <h1 className="text-3xl x:text-5xl sm:text-6xl md:text-7xl lg:text-6xl xl:text-7xl font-semibold text-transparent mb-10 xl:mb-14 bg-clip-text bg-gradient-to-r from-violet-500 via-gray-500 to-white animate-shinyText whitespace-nowrap">
          FrontEnd Developer
        </h1>

        <p className="text-xs x:text-sm md:text-base xl:text-lg text-gray-300">
          Welcome to my Digital Playground
        </p>
        <p className="text-xs x-470text-sm md:text-base xl:text-lg text-gray-300">
          Software Engineer by Day, UI/UX Enthusiast by Night
        </p>

        <div className="flex mt-8 space-x-4">
          {/* Contact Button */}
          <button className="px-2 x:px-4 py-1 x:py-2 border-2 border-violet-500 text-white text-sm md:text-lg xl:text-xl font-semibold hover:bg-violet-500 hover:text-white rounded-[30px] flex items-center gap-1 x:gap-2 transition duration-300 ease-in-out">
            Let’s Connect <FaRegCommentDots className="ml-2" />
          </button>

          {/* Social Media Icons */}
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                className="p-2 md:p-3 text-xl md:text-3xl border-violet-500 rounded-full hover:scale-110 transition ease-in-out"
                children={social.icon}
              />
            </a>
          ))}
        </div>
      </div>
      {/* Spline 3D Model */}
      <div className="hidden lg:flex justify-center items-center h-screen w-full x-w-[400px] xl:x-w-[500px] 2xl:x-w-[600px]">
        <Spline
          scene="https://prod.spline.design/DVe8fLgj4Kw25-rZ/scene.splinecode"
          className="w-full h-full"
        />
      </div>
      <div className="absolute bottom-0 right-0 w-full h-16 bg-black z-10"></div>
    </div>
  );
}

export default HeroPortfolio;
