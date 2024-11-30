import React from "react";
import { Projects, Technologies, About } from "../Pages";

const PortfolioBottom = () => {
  return (
    <div className="flex flex-col w-full">
      <section className="h-screen w-full flex items-center justify-center mx-auto bg-white">
        <Projects />
      </section>
      <section className="min-h-screen w-full flex items-center justify-center bg-black">
        <Technologies />
      </section>

      {/* About Section */}
      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        <About />
      </section>
    </div>
  );
};

export default PortfolioBottom;
