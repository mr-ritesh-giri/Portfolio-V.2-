import ScrollLayout from "../Layout/ScrollLayout";

const technologies = [
  {
    img: "/Tech/HTML.webp",
    name: "HTML",
    description: "Markup",
  },
  {
    img: "/Tech/CSS.svg",
    name: "CSS",
    description: "Styling",
  },
  {
    img: "/Tech/JS.png",
    name: "JavaScript",
    description: "Programming",
  },
  {
    img: "/Tech/React.svg",
    name: "React",
    description: "Framework",
  },
  {
    img: "/Tech/Tailwind.svg",
    name: "TailwindCSS",
    description: "Framework",
  },
  {
    img: "/Tech/GSAP.svg",
    name: "GSAP",
    description: "Animation",
  },
  {
    img: "/Tech/LocomotiveJs.png",
    name: "Locomotive JS",
    description: "Scroll",
  },
  {
    img: "/Tech/Git.svg",
    name: "Git",
    description: "Version",
  },
];

const Skills = () => {
  return (
    <ScrollLayout className={"overflow-y-auto h-[73vh]"}>
      {" "}
      <div className="w-full h-full flex flex-col justify-start items-start bg-black text-white pt-3 px-4">
        <div className="font-bold text-2xl w-full mb-4">
          My Technology Skillset
        </div>
        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="flex justify-center items-start bg-gray-950 px-2 py-2 sm:px-6 sm:py-4 rounded-2xl shadow-md border border-gray-600 hover:scale-110 hover:border-violet-500"
            >
              <img
                src={tech.img}
                alt={`${tech.name} logo`}
                className="w-8 h-8 mr-5"
              />
              <div>
                <h3 className="text-xs sm:text-sm text-white">{tech.name}</h3>
                <p className="text-gray-400 text-sm">{tech.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ScrollLayout>
  );
};

export default Skills;
