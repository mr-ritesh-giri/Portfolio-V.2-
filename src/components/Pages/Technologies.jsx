import React, { useEffect } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

const Technologies = () => {
  useEffect(() => {
    Draggable.create(".draggable", {
      bounds: ".container",
      inertia: true,
    });
  }, []);

  return (
    <div className="container h-screen w-full bg-black p-8 flex flex-col">
      {/* Heading Section */}
      <div className="mb-16">
        <h1 className="text-7xl mb-14 text-left text-white leading-tight">
          My <span className="text-violet-500 font-semibold">Technology</span>{" "}
          Skillset
        </h1>
        <p className="text-xl text-gray-300 text-left">
          Here are the technologies I have hands-on experience with:
        </p>
      </div>

      {/* Skills Section */}
      <div className="flex-1 p-6 rounded-lg shadow-lg overflow-hidden">
        {/* Placeholder for skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              img: "/public/Tech/HTML.webp",
              name: "HTML",
              description: "Markup",
            },
            {
              img: "/public/Tech/CSS.svg",
              name: "CSS",
              description: "Styling",
            },
            {
              img: "/public/Tech/JS.png",
              name: "JavaScript",
              description: "Programming",
            },
            {
              img: "/public/Tech/React.svg",
              name: "React",
              description: "Framework",
            },
            {
              img: "/public/Tech/Tailwind.svg",
              name: "TailwindCSS",
              description: "Framework",
            },
            {
              img: "/public/Tech/GSAP.svg",
              name: "GSAP",
              description: "Animation",
            },
            {
              img: "/public/Tech/LocomotiveJs.png",
              name: "Locomotive JS",
              description: "Scroll",
            },
            {
              img: "/public/Tech/Git.svg",
              name: "Git",
              description: "Version",
            },
          ].map((tech, index) => (
            <div
              key={index}
              className="draggable flex items-start gap-4 bg-gray-950 p-6 rounded-2xl shadow-md border border-gray-600 hover:shadow-xl hover:border-violet-500"
            >
              <img
                src={tech.img}
                alt={`${tech.name} logo`}
                className="w-16 h-16 mr-8"
              />
              <div>
                <h3 className="text-2xl text-white">{tech.name}</h3>
                <p className="text-gray-400 text-lg">{tech.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center text-5xl text-violet-400 font-semibold mt-8 opacity-100">
        🏁 Drag Us!
      </div>
    </div>
  );
};

export default Technologies;
