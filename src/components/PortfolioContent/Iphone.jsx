import React from "react";
import { MeteorWall } from "../AnimatedUi/MeteorWall";

function Iphone() {
  // Array of apps data
  const apps = [
    { title: "About", imgSrc: "public/freelancer.png" },
    { title: "Skills", imgSrc: "public/skill.png" },
    { title: "Mobile", imgSrc: "public/mobile-app.webp" },
    { title: "Tik-Tak-Toe", imgSrc: "public/tic-tac-toe-svgrepo-com.svg" },
    { title: "Tools", imgSrc: "public/tools-and-utensils.png" },
    { title: "GitHub", imgSrc: "public/512x512-logo-27148.png" },
    { title: "X", imgSrc: "public/twitter-x-logo-42554.png" },
    { title: "LinkedIn", imgSrc: "public/linkedin-logo-png-1854.png" },
    { title: "WhatsApp", imgSrc: "public/whatsapp-logo-png-2260.png" },
    { title: "Password Generator", imgSrc: "public/password-svgrepo-com.svg" },
    { title: "Youtube", imgSrc: "public/youtube-color-svgrepo-com.svg" },
  ];

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative mx-auto border-black bg-black border-[14px] rounded-[2.5rem] h-[80vh] w-1/3 shadow-[0px_0px_20px_5px_rgba(135,206,250,0.7)]">
        {/* Side buttons */}
        <div className="h-[32px] w-[3px] bg-black absolute -left-[17px] top-[72px] rounded-l-lg"></div>
        <div className="h-[46px] w-[3px] bg-black absolute -left-[17px] top-[124px] rounded-l-lg"></div>
        <div className="h-[46px] w-[3px] bg-black absolute -left-[17px] top-[178px] rounded-l-lg"></div>
        <div className="h-[64px] w-[3px] bg-black absolute -right-[17px] top-[142px] rounded-r-lg"></div>

        {/* Camera lens and flash */}
        <div className="absolute top-[14px] left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <div className="h-[14px] w-[14px] rounded-full bg-gray-800"></div>
          {/* Camera lens */}
          <div className="h-[6px] w-[6px] rounded-full bg-gray-600 mt-[2px]"></div>
          {/* Flash */}
        </div>

        {/* Screen (empty white background) */}
        <div className="rounded-[2rem] relative overflow-hidden w-full h-full">
          {/* Empty screen */}
          <div className="w-[1150px]">
            <MeteorWall className="absolute inset-0 z-0" />
            <div className="absolute inset-0 z-10 p-6">
              {/* Apps Grid */}
              <div className="grid grid-cols-5 gap-5 mt-8">
                {apps.map((app, index) => (
                  <div key={index} className="flex flex-col items-center">
                    {/* Image (App Icon) */}
                    <div className="w-12 h-12 mb-2 bg-white flex justify-center items-center rounded-[12px]">
                      <img
                        src={app.imgSrc}
                        alt={app.title}
                        className="w-full h-full object-cover rounded-lg p-1"
                      />
                    </div>
                    {/* App Title */}
                    <span className="text-sm text-center text-white">
                      {app.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Iphone;
