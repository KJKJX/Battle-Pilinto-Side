import React from "react";

// Hero section with main title and description
function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center mt-24 mb-8 px-4">
      {/* Main Title */}
      <h1 className="text-4xl md:text-5xl text-white mb-4">
        Battling: The Pilinto Side of it
      </h1>
      {/* Description Paragraph */}
      <p className=" text-white text-[17px] max-w-xl mb-6">
        Learn battling while having fun! Battling: The Pilinto Side of it is a
        game that makes learning battling exciting. You'll click fast, unlock
        new stuff, and even get daily challenges and rewards! It's the perfect
        way to practice battling skills and have a blast!
      </p>
    </section>
  );
}

export default Hero;
