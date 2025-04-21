import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-gray-800">
          Photo <span className="text-[#41b883]">Studio</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 font-medium text-gray-700">
          <Link to="/signup" className="hover:text-[#41b883] transition">
            Get Started
          </Link>
          <Link to="/login" className="hover:text-[#41b883] transition">
            Login
          </Link>
          <Link to="/pricing" className="hover:text-[#41b883] transition">
            Pricing
          </Link>
          <Link to="/contact" className="hover:text-[#41b883] transition">
            Contact
          </Link>
        </nav>

        {/* Hamburger */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 text-2xl focus:outline-none"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-2 font-medium text-gray-700">
          <Link to="/signup" className="block hover:text-[#41b883]">
            Get Started
          </Link>
          <Link to="/login" className="block hover:text-[#41b883]">
            Login
          </Link>
          <Link to="/pricing" className="block hover:text-[#41b883]">
            Pricing
          </Link>
          <Link to="/contact" className="block hover:text-[#41b883]">
            Contact
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
