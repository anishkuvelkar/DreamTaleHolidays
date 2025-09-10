import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../images/logo.png";

const Navbar = ({ setActiveSection }) => {
  const [isOpen, setIsOpen] = useState(false); 
  const [activeLink, setActiveLink] = useState("home");
  const [isInfoOpen, setIsInfoOpen] = useState(false); 

  const navLinks = [
    { name: "Home", key: "home" },
    { name: "About", key: "about" },
    { name: "Packages", key: "packages" },
    { name: "Fixed Departures", key: "fixed-departures" },
    { name: "Contact", key: "contact" },
  ];

  // Highlight active link on page load
  useEffect(() => {
    if (window.location.hash) {
      setActiveLink(window.location.hash.replace("#", ""));
    }

    const handleScroll = () => {
      navLinks.forEach((link) => {
        const section = document.getElementById(link.key);
        if (section) {
          const top = section.getBoundingClientRect().top;
          if (top <= 100 && top >= -section.offsetHeight + 100) {
            setActiveLink(link.key);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (key) => {
    setActiveSection(key);
    setActiveLink(key);
    const section = document.getElementById(key);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex justify-between items-center h-20 relative">
          {/* Logo */}
          <div
            className="flex items-center cursor-pointer"
            onClick={() => handleNavClick("home")}
          >
            <img src={logo} alt="Logo" className="h-20 w-auto mr-2" />
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-4 font-medium">
            {navLinks.map((link) => (
              <span
                key={link.key}
                onClick={() => handleNavClick(link.key)}
                className={`cursor-pointer px-4 py-2 rounded-full transition-all duration-200
                  text-blue-600 hover:bg-purple-500/20
                  ${activeLink === link.key ? "bg-purple-500/20" : ""}`}
              >
                {link.name}
              </span>
            ))}
          </div>

          {/* Right-side icons */}
          <div className="flex items-center space-x-4 z-50">
            {/* Hamburger Menu (Mobile only) */}
            <span
              onClick={() => setIsOpen(true)}
              className="md:hidden text-blue-600 cursor-pointer text-2xl"
            >
              <Menu className="h-8 w-8" />
            </span>

            {/* Info Panel Trigger */}
            <span
              onClick={() => setIsInfoOpen(true)}
              className="text-blue-600 cursor-pointer text-3xl"
            >
              &#8801;
            </span>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold text-blue-600">Menu</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-blue-600 focus:outline-none"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="p-4">
          {navLinks.map((link) => (
            <span
              key={link.key}
              onClick={() => handleNavClick(link.key)}
              className={`block w-full cursor-pointer px-4 py-2 rounded-full mb-2
                text-blue-600 hover:bg-purple-500/20
                ${activeLink === link.key ? "bg-purple-500/20" : ""}`}
            >
              {link.name}
            </span>
          ))}
        </div>
      </div>

      {/* Info Side Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          isInfoOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold text-blue-600">Info</h2>
          <button
            onClick={() => setIsInfoOpen(false)}
            className="text-blue-600 focus:outline-none"
            aria-label="Close info panel"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="p-4">
          <p className="text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
          </p>
        </div>
      </div>

      {/* Transparent Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
