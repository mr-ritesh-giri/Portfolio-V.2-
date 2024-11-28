import React from "react";
import { MeteorWall } from "../AnimatedUi/MeteorWall";
import Background from "../comp/Background";

function Iphone() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative mx-auto border-black bg-black border-[14px] rounded-[2.5rem] h-[80vh] w-1/3 shadow-[0px_0px_20px_5px_rgba(135,206,250,0.7)]">
        {/* Side buttons */}
        <div className="h-[32px] w-[3px] bg-black absolute -left-[17px] top-[72px] rounded-l-lg"></div>
        <div className="h-[46px] w-[3px] bg-black absolute -left-[17px] top-[124px] rounded-l-lg"></div>
        <div className="h-[46px] w-[3px] bg-black absolute -left-[17px] top-[178px] rounded-l-lg"></div>
        <div className="h-[64px] w-[3px] bg-black absolute -right-[17px] top-[142px] rounded-r-lg"></div>

        {/* Camera lens and flash */}
        <div className="absolute top-[14px] left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <div className="h-[14px] w-[14px] rounded-full bg-gray-800"></div>
          {/* Camera lens */}
          <div className="h-[6px] w-[6px] rounded-full bg-gray-600 mt-[2px]"></div>
          {/* Flash */}
        </div>

        {/* Screen (empty white background) */}
        <div className="relative overflow-hidden w-full h-full rounded-[2rem]">
          {/* Empty screen */}
          <div className="w-[1240px]">
            <MeteorWall className="absolute inset-0 z-0" />
            <Background />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Iphone;
