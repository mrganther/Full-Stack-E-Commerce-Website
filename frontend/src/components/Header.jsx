import React from "react";
import Navbar from "./Navbar";
import boat from "../assets/boat.png";

const Header = () => {
  return (
    <div
      className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden"
      style={{ backgroundImage: `url(${boat})` }}
      id="Header"
    >
      <Navbar />
    </div>
  );
};

export default Header;
