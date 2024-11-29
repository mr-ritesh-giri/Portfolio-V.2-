import React from "react";
import {
  FaBirthdayCake,
  FaBriefcase,
  FaCalendarAlt,
  FaLink,
} from "react-icons/fa";
import VisitProfile from "./VisitProfile";

const Twitter = () => {
  const user = {
    name: "Ritesh Giri",
    username: "@mr_riteshgiri",
    bio: "Passionate FrontEnd Developer 🚀 | Turning ideas into interactive experiences | Constantly learning and evolving in the world of web development | Software developer/Programmer/Software engineer",
    profileImage: "public/Twitter/profileimage.jpg",
    dob: "April 21, 2005",
    joinDate: "January 2023",
    twitterLink: "https://x.com/mr_riteshgiri",
  };

  return (
    <div className="bg-black text-white">
      {/* Banner Section */}
      <div
        className="relative h-40 bg-cover bg-center"
        style={{ backgroundImage: "url(public/Twitter/twitterbanner.jpg)" }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      {/* Profile Section */}
      <div className="relative -mt-10">
        <div className="flex flex-col items-start">
          {/* Profile Picture */}
          <img
            src={user.profileImage}
            alt={user.name}
            className="w-24 h-24 rounded-full border-3 border-black"
          />
          <div className="flex-1">
            <h1 className="text-2xl font-semibold">{user.name}</h1>
            <p className="text-gray-400 text-base">{user.username}</p>
            <p className="text-gray-300 mt-4">{user.bio}</p>
          </div>
        </div>

        {/* Links Info Section */}

        <div className="flex flex-col items-start my-2 text-gray-400 text-sm">
          <div className="flex items-center gap-2">
            <FaBriefcase />
            <p>Software developer/Programmer/Software engineer</p>
          </div>
          <div className="flex items-center gap-2 mt-1">
            <FaLink />
            <a href="riteshcodes.netlify.app" alt="link" target="_blank">
              riteshcodes.netlify.app
            </a>
          </div>
          {/* Additional Info Section */}
          <div className="flex gap-4 mt-2 text-gray-400">
            <div className="flex items-center gap-2">
              <FaCalendarAlt />
              <p className="text-sm">Born {user.dob}</p>
            </div>
            <div className="flex items-center gap-2">
              <FaBirthdayCake />
              <p className="text-sm">Joined {user.joinDate}</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-3 text-sm flex gap-5">
          <div className="text-gray-400">
            <span className="text-white">129</span> Following
          </div>
          <div className="text-gray-400">
            <span className="text-white">42</span> Followers
          </div>
        </div>

        {/* Link Button */}
        <div className="mt-10 flex justify-center hover:scale-105">
          <a href={user.twitterLink} target="_blank">
            <VisitProfile />
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center py-4 text-gray-400">
        <p>&copy; 2024 Ritesh Giri</p>
      </div>
    </div>
  );
};

export default Twitter;
