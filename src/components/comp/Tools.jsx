import React from "react";

const Tools = () => {
  const tools = [
    {
      img: "/Tools/git.svg",
      title: "Git",
      description:
        "A version control system for tracking changes in source code and collaborating efficiently.",
    },
    {
      img: "/Tools/vscode.svg",
      title: "VS Code",
      description:
        "A lightweight yet powerful code editor with extensions for almost every programming language.",
    },
    {
      img: "/Tools/chrome.svg",
      title: "Chrome Dev Tools",
      description:
        "A set of developer tools built into Google Chrome for debugging, analyzing performance, and inspecting web applications.",
    },
    {
      img: "/Tools/react.svg",
      title: "React Dev Tools",
      description:
        "A debugging tool for React developers to inspect component hierarchies and manage state effectively.",
    },
  ];

  return (
    <div className="px-2 bg-black min-h-screen">
      <h1 className="text-2xl font-bold text-center text-white mb-6">
        Tools I Use
      </h1>
      <div className="flex flex-col gap-4">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="flex gap-4 items-center bg-gray-800 hover:bg-gray-700 transition-colors rounded-lg p-4 shadow-md"
          >
            <img
              src={tool.img}
              alt={`${tool.title} logo`}
              className="w-20 h-20 object-contain rounded-md"
            />
            <div>
              <h2 className="text-lg font-semibold text-white mb-1">
                {tool.title}
              </h2>
              <p className="text-gray-300 text-base">{tool.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tools;
