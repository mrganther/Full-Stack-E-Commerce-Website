import React from "react";
import boat from "../assets/boat.png";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="min-h-screen w-full bg-cover bg-center flex items-center justify-center"
    style={{ backgroundImage: `url(${assets.headerBanner})` }}
    >
      <div className="p-8 rounded-1g">
        <div>
          <h1 className="bg-orange text-white text-7xl p-3">Name</h1>
          <p className="text-l text-white text-center">hello</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
