import React from "react";

const CustomButton = ({ text, href, isFullScreen }) => {
  const baseStyles =
    "py-2 px-3 xl:py-3 xl:px-5 text-base x:text-xl lg:text-lg rounded-3xl border-2 transition-all duration-300";
  const dynamicStyles = isFullScreen
    ? "bg-black border-white hover:bg-white hover:text-black"
    : "bg-black border-black hover:bg-white hover:text-black";

  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <button className={`${baseStyles} ${dynamicStyles}`}>{text}</button>
    </a>
  ) : (
    <button className={`${baseStyles} ${dynamicStyles}`}>{text}</button>
  );
};

export default CustomButton;
