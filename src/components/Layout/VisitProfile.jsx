import React from "react";

const VisitProfile = ({ className }) => {
  return (
    <div
      className={`relative px-6 py-3 bg-gray-950 text-white rounded-xl text-xl ${className}`}
    >
      Explore Profile
      <div className="absolute inset-x-0 bottom-0 w-full h-1 bg-gradient-to-r from-transparent via-violet-600 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-1 w-1/2 mx-auto bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 w-1/2 mx-auto h-4 blur-xl bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-50" />
    </div>
  );
};

export default VisitProfile;
