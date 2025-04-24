import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX, FiUser, FiLogOut, FiBell } from "react-icons/fi";
import { useAuth } from "../context/AuthContext";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logout } = useAuth();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const handleLogout = () => {
    logout();
    localStorage.removeItem("token");
    closeMenu();
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-99">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-gray-800">
          Photo <span className="text-[#41b883]">Studio</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 font-medium text-gray-700">
          {!user ? (
            <>
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
            </>
          ) : (
            <>
              <div className="flex items-center space-x-4 py-4">
                {/* Notifications Icon */}
                <button className="relative cursor-pointer">
                  <FiBell size={28} />
                  <span className="absolute top-0 right-0 text-xs text-white bg-red-500 rounded-full w-4 h-4 flex items-center justify-center">
                    3
                  </span>
                </button>
                {/* Profile Icon */}
                <Link to="/profile" className="cursor-pointer">
                  <FiUser size={28} />
                </Link>
                {/* Logout Button */}
                <button onClick={handleLogout} className="text-[#41b883] cursor-pointer">
                  <FiLogOut size={28} />
                </button>
              </div>
            </>
          )}
        </nav>

        {/* Hamburger Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 text-2xl focus:outline-none"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav - overlay with absolute positioning */}
      <div
        className={`md:hidden fixed top-16 left-0 w-full bg-white px-4 py-4 space-y-2 font-medium text-gray-700 transition-transform duration-300 z-40 ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        {!user ? (
          <>
            <Link
              to="/signup"
              onClick={closeMenu}
              className="block hover:text-[#41b883]"
            >
              Get Started
            </Link>
            <Link
              to="/login"
              onClick={closeMenu}
              className="block hover:text-[#41b883]"
            >
              Login
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/profile"
              onClick={closeMenu}
              className="block hover:text-[#41b883]"
            >
              Profile
            </Link>
            <button
              onClick={handleLogout}
              className="block hover:text-[#41b883]"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
