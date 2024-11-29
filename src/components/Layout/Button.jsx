import React from "react";

const Button = ({ children, className }) => {
  return (
    <div
      className={`flex items-center justify-center w-12 h-12 text-3xl gap-2 border p-2 cursor-pointer ${className}`}
    >
      {children}
    </div>
  );
};

export default Button;
