import React from "react";
import ScrollLayout from "../Layout/ScrollLayout";

const AboutMe = () => {
  return (
    <ScrollLayout className={"text-white bg-black h-[70vh]"}>
      <div className="w-full h-full flex flex-col items-center justify-center bg-black pt-4">
        <div className="w-40 h-40 x:w-48 x:h-48 mb-8 rounded-full border-4 border-violet-500">
          <img
            src="/App/freelancer.png"
            alt="About Me"
            className="w-full h-full object-cover object-center p-6"
          />
        </div>
        <div className="text-center max-w-lg px-4">
          <h1 className="text-2xl x:text-3xl font-semibold x:mb-4 text-gray-300">
            About Me
          </h1>
          <div className="mt-4 text-base x:text-lg leading-relaxed text-gray-400 break-words">
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
    </ScrollLayout>
  );
};

export default AboutMe;
