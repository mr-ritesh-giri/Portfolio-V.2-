import React, { useEffect } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

const Technologies = () => {
  useEffect(() => {
    Draggable.create(".draggable", {
      bounds: window,
      inertia: true,
    });
  }, []);

  return (
    <div className="h-screen w-full p-8 bg-black">
      <h1 className="text-7xl mb-20 text-white">
        My <span className="text-violet-500 font-semibold">Technology</span>
        Skillset
      </h1>
    </div>
  );
};

export default Technologies;
