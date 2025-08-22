import React, { Suspense } from "react";
import Button from "../Layout/Button";
import { FaRegCommentDots } from "react-icons/fa";
import { socialLinks } from "../../constants/constant";
import "./HeroPortfolio.css";
const LazySpline = React.lazy(() => import("@splinetool/react-spline"));

function HeroPortfolio() {
  return (
    <div className="w-full mx-auto px-2 lg:px-6 xl:px-0 flex justify-between items-center">
      {/* Gradient Blur */}
      <div className="absolute top-0 w-full h-[220px] inset-x-0 bg-gradient-to-r from-violet-600/70 via-blue-400/70 to-violet-600/70 blur-[130px] rounded-b-full"></div>
      <div className="w-full h-screen flex flex-col justify-center items-start text-white">
        <h2 className="text-4xl y:text-5xl x:text-6xl sm:text-7xl md:text-8xl lg:text-7xl xl:text-8xl mb-4 x:mb-5 sm:mb-6 md:mb-8 xl:mb-10">
          👋I'm Ritesh
        </h2>

        <h1 className="text-3xl y:text-4xl x:text-5xl sm:text-6xl md:text-7xl lg:text-6xl xl:text-7xl font-semibold text-transparent mb-4 x:mb-5 sm:mb-6 md:mb-10 xl:mb-14 bg-clip-text bg-gradient-to-r from-violet-500 via-gray-500 to-white animate-shinyText whitespace-nowrap">
          FrontEnd Developer
        </h1>

        <div className="y:text-xs text-xs x:text-sm md:text-base xl:text-lg text-gray-300">
          <p>Welcome to my Digital Playground</p>
          <p>Software Engineer by Day, UI/UX Enthusiast by Night</p>
        </div>

        <div className="flex mt-6 x:mt-8 space-x-2 x:space-x-4">
          {/* Contact Button */}
          <button className="px-2 x:px-4 py-1 x:py-2 border-2 border-violet-500 text-white text-sm x:text-base md:text-lg xl:text-xl font-semibold hover:bg-violet-500 hover:text-white rounded-[30px] flex items-center gap-1 x:gap-2 transition duration-300 ease-in-out">
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
                className="p-2 md:p-3 text-xl x:text-2xl md:text-3xl border-2 border-violet-500 rounded-full hover:scale-110 transition ease-in-out"
                children={<social.icon />}
              />
            </a>
          ))}
        </div>
      </div>

      {/* Lazy Loaded Spline 3D Model */}
      <div className="hidden lg:block justify-center items-center h-screen w-full min-w-[400px] xl:min-x-w-[500px] 2xl:min-w-[600px]">
        <Suspense fallback={<h1 className="text-8xl">Loading</h1>}>
          <LazySpline
            scene="https://prod.spline.design/DVe8fLgj4Kw25-rZ/scene.splinecode"
            className="w-full h-full"
          />
        </Suspense>
      </div>
      <div className="hidden lg:block absolute bottom-0 right-0 w-full h-16 bg-black z-10"></div>
    </div>
  );
}

export default HeroPortfolio;
