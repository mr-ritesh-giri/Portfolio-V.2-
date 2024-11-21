import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const About = () => {
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

  return (
    <div className="flex flex-col justify-center items-center h-screen w-full bg-white text-black">
      <h1 className="text-3xl mb-5 text-left text-gray-400 leading-tight">
        Want to{" "}
        <span className="text-violet-500 font-semibold">Collaborate</span>?
      </h1>
      <h2 className="text-7xl font-medium">Let's have a chat!</h2>
      <div className="flex m-28">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-start w-auto h-12 mr-5 px-3 text-3xl gap-4 border border-gray-500 rounded-full p-2 text-black hover:scale-110 hover:border-violet-700 cursor-pointer transition duration-300"
          >
            <span className="flex items-center justify-center w-8 h-8 text-3xl">
              {social.icon}
            </span>
            <span className="text-lg font-semibold">{social.name}</span>
          </a>
        ))}
      </div>
      <div className="text-center text-gray-500 max-w-[500px]">
        <p className="mb-2">
          © Ben Böckmann 2024. All rights reserved. Location: Germany
        </p>
        <p>
          This site showcases my personal projects and professional work.
          Content may not be used without permission.
        </p>
      </div>
    </div>
  );
};

export default About;
