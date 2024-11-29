import React from "react";

const ScrollLayout = ({ children, className }) => {
  return (
    <div
      className={`relative overflow-y-auto iphone-content ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollLayout;
