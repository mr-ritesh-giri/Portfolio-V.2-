import React from "react";
import "./Github.css";
import VisitProfile from "../Layout/VisitProfile";
import ScrollLayout from "../Layout/ScrollLayout";
import { socials, tools } from "../../constants/constant";

const Github = () => {
  return (
    <ScrollLayout className={"text-white bg-black h-[70vh]"}>
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
          loading="lazy"
        />
      </a>
      <div className="my-4">
        <h1>Hi 👋, I'm Ritesh Giri</h1>
        <h2>A passionate Front-End Developer from India</h2>
      </div>
      <img
        loading="lazy"
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
              loading="lazy"
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
        loading="lazy"
      />
      <br />
      <br />
      <img
        src="https://github-readme-stats.vercel.app/api/top-langs/?username=mr-ritesh-giri&theme=dark&hide_border=false&include_all_commits=false&count_private=false&layout=Layoutact"
        alt="Top Languages"
        loading="lazy"
      />
      <br />
      <br />
      <h3>🔝 Top Contributed Repo</h3>
      <img
        src="https://github-contributor-stats.vercel.app/api?username=mr-ritesh-giri&limit=5&theme=tokyonight&combine_all_yearly_contributions=true"
        alt="Top Contributed Repo"
        loading="lazy"
      />
    </ScrollLayout>
  );
};

export default Github;
