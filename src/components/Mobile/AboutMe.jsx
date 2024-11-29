import React from "react";

const AboutMe = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-black pt-4">
      <div className="w-48 h-48 mb-8 rounded-full border-4 border-violet-500">
        <img
          src="public/App/freelancer.png"
          alt="About Me"
          className="w-full h-full object-cover object-center p-6"
        />
      </div>
      <div className="text-center max-w-lg px-4">
        <h1 className="text-3xl font-semibold mb-4 text-gray-300">About Me</h1>
        <div className="mt-4 text-lg leading-relaxed text-gray-400 break-words">
          <p>
            I'm Ritesh Giri, a 20-year-old passionate Front-End Developer. I
            enjoy building smooth and user-friendly websites and applications.
          </p>
          <p className="mt-4">
            From design to development, I’m involved in every step of the
            process. My goal is to deliver high-quality, scalable results that
            create positive and impactful user experiences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
