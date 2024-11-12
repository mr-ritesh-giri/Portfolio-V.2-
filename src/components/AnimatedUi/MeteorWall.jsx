import React from "react";
import { Meteor } from "../ui/Meteor";

export function MeteorWall({ className }) {
  return (
    <div className={className}>
      <div className="w-full relative">
        <div className="absolute inset-0 h-full w-full transform scale-[0.80] rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-black border-black px-4 py-8 h-[200vh] overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          {/* Meaty part - Meteor effect */}
          <Meteor number={50} /> 
        </div>
      </div>
    </div>
  );
}
