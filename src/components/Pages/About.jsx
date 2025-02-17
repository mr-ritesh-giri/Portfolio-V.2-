import React from "react";
import { socialLinks } from "../../constants/constant";

const About = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen w-full bg-white text-black">
        <h1 className="text-xl x:text-2xl sm:text-3xl mb-5 text-left text-gray-500 leading-tight">
          Want to{" "}
          <span className="text-violet-500 font-semibold">Collaborate</span>?
        </h1>
        <h2 className="text-4xl x:text-5xl sm:text-7xl font-medium">
          Let's have a chat!
        </h2>
        <div className="flex my-28 ">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-start w-auto h-12 mx-1 sm:mx-3 px-3 sm:text-3xl gap-2 sm:gap-4 border border-gray-500 rounded-full p-2 text-black hover:scale-110 hover:border-violet-700 cursor-pointer transition duration-300"
            >
              <span className="flex items-center justify-center text-2xl sm:text-3xl">
                {<social.icon />}
              </span>
              <span className="text-xs sm:text-lg font-semibold">
                {social.name}
              </span>
            </a>
          ))}
        </div>
        <div className="text-center text-sm xs:text-lg text-gray-500 px-2 max-w-[500px]">
          <p className="mb-2">
            © Ritesh Giri 2024. All rights reserved. Location: India
          </p>
          <p>
            This site showcases my personal projects and professional work.
            Content may not be used without permission.
          </p>
        </div>
      </div>{" "}
      {/* Large Gradient Bottom-Left */}
      <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-gradient-to-br from-violet-400 via-blue-400 to-transparent opacity-50 blur-[120px] rounded-full"></div>
      {/* Large Gradient Bottom-Right */}
      <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-gradient-to-bl from-blue-400 via-violet-400 to-transparent opacity-50 blur-[120px] rounded-full"></div>
    </>
  );
};

export default About;
