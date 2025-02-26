import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = ({ openModal }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md fixed w-full z-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <NavLink to="/" className="flex items-center" onClick={closeMenu}>
            <img
              src="/assets/logo.png"
              alt="Mazingira Smart Logo"
              className="h-10"
            />
            {/* <span className="ml-2 text-xl font-bold text-green-800">Mazingira Smart</span> */}
          </NavLink>

          {/* Hamburger Menu (Mobile) */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              // Close Icon
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              // Hamburger Icon
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            )}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-gray-700  hover:text-green-600 transition-transform duration-200 hover:scale-105 ${
                  isActive
                    ? "text-green-900 font-bold border-b-2 border-green-900"
                    : ""
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-gray-700  hover:text-green-600 transition-transform duration-200 hover:scale-105 ${
                  isActive
                    ? "text-green-900 font-bold border-b-2 border-green-900"
                    : ""
                }`
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `text-gray-700  hover:text-green-600 transition-transform duration-200 hover:scale-105 ${
                  isActive
                    ? "text-green-900 font-bold border-b-2 border-green-900"
                    : ""
                }`
              }
            >
              Projects
            </NavLink>
            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                `text-gray-700  hover:text-green-600 transition-transform duration-200 hover:scale-105 ${
                  isActive
                    ? "text-green-900 font-bold border-b-2 border-green-900"
                    : ""
                }`
              }
            >
              Gallery
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `text-gray-700  hover:text-green-600 transition-transform duration-200 hover:scale-105 ${
                  isActive
                    ? "text-green-900 font-bold border-b-2 border-green-900"
                    : ""
                }`
              }
            >
              Blog
            </NavLink>
            <NavLink
              to="/donate"
              className={({ isActive }) =>
                `text-gray-700  hover:text-green-600 transition-transform duration-200 hover:scale-105 ${
                  isActive
                    ? "text-green-900 font-bold border-b-2 border-green-900"
                    : ""
                }`
              }
            >
              Get Involved
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-gray-700  hover:text-green-600 transition-transform duration-200 hover:scale-105 ${
                  isActive
                    ? "text-green-900 font-bold border-b-2 border-green-900"
                    : ""
                }`
              }
            >
              Contact
            </NavLink>
            <button
              onClick={openModal}
              className="bg-green-900 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Donate Now
            </button>
          </nav>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
          <nav className="flex flex-col space-y-4 pb-4">
            <NavLink
              to="/"
              className="text-gray-700 hover:text-green-600"
              onClick={closeMenu}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="text-gray-700 hover:text-green-600"
              onClick={closeMenu}
            >
              About Us
            </NavLink>
            <NavLink
              to="/projects"
              className="text-gray-700 hover:text-green-600"
              onClick={closeMenu}
            >
              Projects
            </NavLink>
            <NavLink
              to="/gallery"
              className="text-gray-700 hover:text-green-600"
              onClick={closeMenu}
            >
              Gallery
            </NavLink>
            <NavLink
              to="/blog"
              className="text-gray-700 hover:text-green-600"
              onClick={closeMenu}
            >
              Blog
            </NavLink>
            <NavLink
              to="/get-involved"
              className="text-gray-700 hover:text-green-600"
              onClick={closeMenu}
            >
              Get Involved
            </NavLink>

            <NavLink
              to="/contact"
              className="text-gray-700 hover:text-green-600"
              onClick={closeMenu}
            >
              Contact
            </NavLink>
            <button
              onClick={openModal}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Donate Now
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
