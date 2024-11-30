import React from "react";

const Button = ({ children, className }) => {
  return (
    <div
      className={`flex items-center justify-center border cursor-pointer ${className}`}
    >
      {children}
    </div>
  );
};

export default Button;
// className={`flex items-center justify-center w-12 h-12 md:w-16 md:h-16 text-2xl md:text-3xl gap-2 border cursor-pointer ${className}`}
