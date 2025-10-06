import React, { useState } from "react";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("Home");

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Resume", id: "resume" },
    { name: "Contact", id: "contact" },
  ];

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const navbarHeight = 80; // Adjust this value based on your navbar's actual height
      const sectionPosition =
        section.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: sectionPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div
            className="flex items-center gap-3 group cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
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

          {/* Navigation Links - CORRECTED */}
          <div className="hidden md:flex items-center gap-2 bg-gray-50 rounded-full px-2 py-2">
            {navLinks.map((link) => (
              <button
                // 1. Use a unique string for the key
                key={link.id}
                // 2. Set active link by name and scroll to section by ID
                onClick={() => {
                  setActiveLink(link.name);
                  scrollToSection(link.id);
                }}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  // 3. Compare by the 'name' property
                  activeLink === link.name
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md"
                    : "text-gray-600 hover:text-gray-900 hover:bg-white"
                }`}
              >
                {/* 4. Render the 'name' property, not the whole object */}
                {link.name}
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
