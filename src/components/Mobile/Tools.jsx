import ScrollLayout from "../Layout/ScrollLayout";

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
      "A debugging tool for React developers to inspect Layoutonent hierarchies and manage state effectively.",
  },
];

const Tools = () => {
  return (
    <ScrollLayout className="px-2 bg-black h-[70vh]">
      <h1 className="text-xl sm:text-2xl font-bold text-center text-white mb-6">
        Tools I Use
      </h1>
      <div className="flex flex-col gap-4">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="flex gap-2 sm:gap-4 items-center bg-gray-800 hover:bg-gray-700 transition-colors rounded-lg p-2 sm:p-4 shadow-md"
          >
            <img
              src={tool.img}
              alt={`${tool.title} logo`}
              loading="lazy"
              className="w-16 h-16 sm:w-20 sm:h-20 object-contain rounded-md"
            />
            <div>
              <h2 className="text-base sm:text-lg font-semibold text-white mb-1">
                {tool.title}
              </h2>
              <p className="text-sm sm:text-base text-gray-300">
                {tool.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </ScrollLayout>
  );
};

export default Tools;
