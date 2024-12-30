import React from "react";
import VisitProfile from "../Layout/VisitProfile";

const LinkedIn = () => {
  const user = {
    name: "Ritesh Giri",
    bio: "FrontEnd Developer | Innovating User Experience!💡",
    profileImage: "/Twitter/profileimage.jpg",
    dob: "April 21, 2005",
    joinDate: "January 2023",
    birth: "Shamli, Uttar Pradesh, India",
    linkedIn: "https://www.linkedin.com/in/ritesh-giri-b8b770242/",
    portfolio: "https://riteshcodes.netlify.app",
    followers: 12,
    connections: 7,
  };

  return (
    <div className="bg-black text-white">
      {/* Banner Section */}
      <div
        className="relative h-40 bg-cover bg-center"
        style={{ backgroundImage: "url(/Twitter/twitterbanner.jpg)" }}
      >
        <div className="absolute inset-0"></div>
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
            <p className="text-gray-300 mt-1 text-base">{user.bio}</p>
          </div>
        </div>

        {/* Links Info Section */}

        <div className="flex flex-col items-start my-2 text-gray-400 text-sm">
          <div className="flex items-center gap-2">
            <div>{user.birth}</div>
          </div>
          <div className="text-blue-400 mt-1">
            <a href="https://riteshcodes.netlify.app">{user.portfolio}</a>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-3 text-sm flex gap-3">
          <div className="text-blue-400">
            <span>{user.followers}</span> Followers
          </div>
          <div className="text-blue-400">
            {" "}
            <span>{user.connections}</span> Connections
          </div>
        </div>

        {/* Link Button */}
        <div className="mt-10 flex justify-center hover:scale-105">
          <a href={user.linkedIn} target="_blank">
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

export default LinkedIn;
