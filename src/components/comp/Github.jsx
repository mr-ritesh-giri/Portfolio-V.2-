import React from "react";
import "./Github.css";
import VisitProfile from "./VisitProfile";

const socials = [
  {
    name: "Twitter",
    url: "https://twitter.com/KnIgHtG11697565",
    imgSrc:
      "https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ritesh-giri-b8b770242/",
    imgSrc:
      "https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg",
  },
  {
    name: "Instagram",
    url: "https://instagram.com/mr_ritesh_giri",
    imgSrc:
      "https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg",
  },
];

const tools = [
  {
    name: "Visual Studio Code",
    imgSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
  {
    name: "HTML5",
    imgSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    imgSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    imgSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "React",
    imgSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Tailwind CSS",
    imgSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "GSAP",
    imgSrc: "https://cdn.worldvectorlogo.com/logos/gsap-greensock.svg",
  },
  {
    name: "Node.js",
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
  },
  {
    name: "Express.js",
    imgSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "MongoDB",
    imgSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Git",
    imgSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
];

const Github = () => {
  return (
    <div className="relative iphone-content profile-container text-white bg-black overflow-y-auto h-[74vh]">
      {/* Link Button */}
      <div className="m-4 flex justify-center hover:scale-105">
        <a href={socials.linkedIn} target="_blank">
          <VisitProfile />
        </a>
      </div>

      {/* Added height and overflow */}
      <a href="your-profile-link">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/flexi-coding.appspot.com/o/dempgi7-520f8d5f-63d4-4453-8822-dbc149ae27f8.gif?alt=media&token=91c0c7b2-93c3-4029-b011-1a8703c5730d"
          alt="MasterHead"
        />
      </a>
      <div className="my-4">
        <h1>Hi 👋, I'm Ritesh Giri</h1>
        <h2>A passionate Front-End Developer from India</h2>
      </div>
      <img
        align="right"
        alt="Coding"
        width="400"
        src="https://cdn.dribbble.com/users/1162077/screenshots/3848914/programmer.gif"
        className="mb-4"
      />
      <ul>
        <li>
          🔭 I’m currently working on <strong>Frontend Projects</strong>
        </li>
        <li>
          🌱 I’m currently learning <strong>React</strong>
        </li>
        <li>
          💬 Ask me about <strong>JavaScript</strong>
        </li>
        <li>
          📫 How to reach me: <strong>rrgiri032@gmail.com</strong>
        </li>
        <li>
          ⚡ Fun fact: <strong>I am Funny</strong>
        </li>
      </ul>
      <br />
      <h3 className="text-xl mb-3">🌐 Socials:</h3>
      <div className="flex gap-2">
        {socials.map((social) => (
          <a
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            key={social.name}
          >
            <img
              align="center"
              src={social.imgSrc}
              alt={social.name}
              height="30"
              width="30"
            />
          </a>
        ))}
      </div>
      <br />
      <h3 className="text-xl mb-3">🛠️ Languages and Tools:</h3>
      <div className="flex flex-wrap gap-2">
        {tools.map((tool) => (
          <img key={tool.name} alt={tool.name} width="40px" src={tool.imgSrc} />
        ))}
      </div>
      <br />
      <h3>📊 GitHub Stats:</h3>
      <img
        src="https://github-readme-streak-stats.herokuapp.com/?user=mr-ritesh-giri&theme=dark&hide_border=false"
        alt="GitHub Streak"
      />
      <br />
      <br />
      <img
        src="https://github-readme-stats.vercel.app/api/top-langs/?username=mr-ritesh-giri&theme=dark&hide_border=false&include_all_commits=false&count_private=false&layout=compact"
        alt="Top Languages"
      />
      <br />
      <br />
      <h3>🔝 Top Contributed Repo</h3>
      <img
        src="https://github-contributor-stats.vercel.app/api?username=mr-ritesh-giri&limit=5&theme=tokyonight&combine_all_yearly_contributions=true"
        alt="Top Contributed Repo"
      />
    </div>
  );
};

export default Github;
