import React, { useState } from "react";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("Home");

  const navLinks = ["Home", "About", "Skills", "Projects", "Resume", "Contact"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative w-12 h-12">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full group-hover:scale-110 transition-transform duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center font-bold text-white text-lg">
                NK
              </div>
            </div>
            <div className="font-bold text-2xl bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Nabin Karki
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-2 bg-gray-50 rounded-full px-2 py-2">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => setActiveLink(link)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeLink === link
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md"
                    : "text-gray-600 hover:text-gray-900 hover:bg-white"
                }`}
              >
                {link}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden flex flex-col gap-1.5 p-2">
            <span className="w-6 h-0.5 bg-gray-800 rounded-full"></span>
            <span className="w-6 h-0.5 bg-gray-800 rounded-full"></span>
            <span className="w-6 h-0.5 bg-gray-800 rounded-full"></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
