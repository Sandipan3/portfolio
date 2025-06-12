import React from "react";
import { Link } from "react-router-dom";
import ShinyText from "../blocks/TextAnimations/ShinyText/ShinyText";

const Navbar = () => {
  return (
    <nav className="w-full text-white py-6 sm:py-4 lg:py-6">
      <div className="container mx-auto px-4 lg:px-32 flex justify-center">
        <div className="flex justify-around items-center gap-6 lg:gap-16 bg-gray-800 p-4 sm:p-6 rounded-full shadow-xl backdrop-blur-md">
          <Link
            to="/"
            className="text-white hover:text-gray-300 transition duration-300 lg:text-xl"
          >
            <ShinyText
              text="Home"
              disabled={false}
              speed={3}
              className="text-sm sm:text-base"
            />
          </Link>
          <Link
            to="/about"
            className="text-white hover:text-gray-300 transition duration-300 lg:text-xl"
          >
            <ShinyText
              text="About"
              disabled={false}
              speed={3}
              className="text-sm sm:text-base"
            />
          </Link>
          <Link
            to="/projects"
            className="text-white hover:text-gray-300 transition duration-300 lg:text-xl"
          >
            <ShinyText
              text="Projects"
              disabled={false}
              speed={3}
              className="text-sm sm:text-base"
            />
          </Link>
          <Link
            to="/contact"
            className="text-white hover:text-gray-300 transition duration-300 lg:text-xl"
          >
            <ShinyText
              text="Contact"
              disabled={false}
              speed={3}
              className="text-sm sm:text-base"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
