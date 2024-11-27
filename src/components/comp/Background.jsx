import React, { useState } from "react";

const apps = [
  { id: 1, title: "About", imgSrc: "public/App/freelancer.png" },
  { id: 2, title: "Skills", imgSrc: "public/App/skill.png" },
  { id: 3, title: "Mobile", imgSrc: "public/App/mobile-app.webp" },
  {
    id: 4,
    title: "Tik Tak Toe",
    imgSrc: "public/App/tic-tac-toe-svgrepo-com.svg",
  },
  { id: 5, title: "Tools", imgSrc: "public/App/tools-and-utensils.png" },
  { id: 6, title: "GitHub", imgSrc: "public/App/512x512-logo-27148.png" },
  { id: 7, title: "X", imgSrc: "public/App/twitter-x-logo-42554.png" },
  { id: 8, title: "LinkedIn", imgSrc: "public/App/linkedin-logo-png-1854.png" },
  { id: 9, title: "WhatsApp", imgSrc: "public/App/whatsapp-logo-png-2260.png" },
  {
    id: 10,
    title: "Password Generator",
    imgSrc: "public/App/password-svgrepo-com.svg",
  },
  {
    id: 11,
    title: "Youtube",
    imgSrc: "public/App/youtube-color-svgrepo-com.svg",
  },
];

const appUIs = {
  1: <div>About App</div>,
  2: <div>Skills App</div>,
  3: <div>Mobile App</div>,
  4: <div>Tik Tak Toe App</div>,
  5: <div>Tools App</div>,
  6: <div>GitHub App</div>,
  7: <div>X App</div>,
  8: <div>LinkedIn App</div>,
  9: <div>WhatsApp App</div>,
  10: <div>Password Generator App</div>,
  11: <div>YouTube App</div>,
};

const Background = () => {
  const [activeApp, setActiveApp] = useState(null);

  return (
    <div className="absolute inset-0 z-10">
      {/* Apps Grid */}
      <div className="relative p-6">
        <div className="grid grid-cols-4 gap-5 mt-8">
          {apps.map((app) => (
            <div
              key={app.id}
              className="flex flex-col items-center hover:scale-105"
            >
              {/* Image (App Icon) */}
              <div
                className="w-12 h-12 mb-2 bg-white flex justify-center items-center rounded-[12px] cursor-pointer"
                onClick={() => setActiveApp(app.id)}
              >
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

        {/* Render Active App */}
        {activeApp && (
          <div className="absolute inset-0 h-screen w-full bg-black flex items-center justify-center z-20">
            <div className="absolute top-0 flex justify-between items-center w-full p-4">
              {/* App Content */}
              <div className="text-white font-medium text-lg">
                {appUIs[activeApp]}
              </div>
              {/* Close Button */}
              <button
                className="text-red-500 font-bold text-xl p-2"
                onClick={() => setActiveApp(null)}
              >
                ✕
              </button>
            </div>
            {/* App Content */}
            {/* <div className="text-black">{appUIs[activeApp]}</div> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Background;
