import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-md fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link to="/" className="flex items-center">
          <img
            src="/assets/logo.png"
            alt="Mazingira Smart Logo"
            className="h-10"
          />
          <span className="ml-2 text-xl font-bold text-green-800">
            {/* Mazingira Smart */}
          </span>
        </Link>
        <nav className="space-x-6">
          <Link to="/" className="text-gray-700 hover:text-green-600">
            Home
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-green-600">
            About Us
          </Link>
          <Link to="/projects" className="text-gray-700 hover:text-green-600">
            Projects
          </Link>
          {/* <Link to="/impact" className="text-gray-700 hover:text-green-600">
            Impact
          </Link> */}
          <Link to="/gallery" className="text-gray-700 hover:text-green-600">
            Gallery
          </Link>
          <Link to="/donate" className="text-gray-700 hover:text-green-600">
            Get Involved
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-green-600">
            Contact
          </Link>
          <button className="bg-green-900 text-white px-4 py-2 rounded hover:bg-green-600">
            Donate Now
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
