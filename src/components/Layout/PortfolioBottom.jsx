import React from "react";
import { Projects, Technologies, About } from "../Pages";

const PortfolioBottom = () => {
  return (
    <>
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
    </>
  );
};

export default PortfolioBottom;
