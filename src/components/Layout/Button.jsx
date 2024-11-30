import React from "react";

const Button = ({ children, className }) => {
  return (
    <div
      className={`flex items-center justify-center w-8 h-8 min:w-12 min:h-12 text-3xl gap-2 border min:p-2 cursor-pointer ${className}`}
    >
      {children}
    </div>
  );
};

export default Button;
