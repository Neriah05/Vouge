import React from "react";

const Hero = () => {
  return (
    <div className="relative w-full h-screen text-white flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0" // Set z-index to 0 to ensure it's at the bottom
        style={{
          backgroundImage: "url('/hero.jpg')", // Corrected path to the image in public folder
        }}
      ></div>

      {/* Set z-index to 10 to overlay on top */}
      {/* Content */}
      <div className="text-center px-6 z-20">
        {" "}
        {/* Set z-index to 20 to place content above overlay */}
        <h1 className="text-5xl font-semibold md:text-7xl lg:text-8xl">
          Vote Your Favourite <br /> Ambassador
        </h1>
        <div className="mt-6">
          <button className="bg-transparent border border-white text-white font-bold py-3 px-6 rounded-md shadow-lg hover:bg-blue-700 hover:border-none transition duration-300">
            Vote Favourite Ambassador
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
