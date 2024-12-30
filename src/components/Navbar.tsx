'use client';
import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaShoppingCart, FaUserPlus, FaSun, FaMoon } from 'react-icons/fa';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  // Removed `scrolling` state and related code as it was unused
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <>
      {/* Marquee Line */}
      <div className="bg-[#0b0b0b] text-white py-2 text-center font-semibold text-lg">
        <marquee>✨ Special Offers! Check out our Deals and more! ✨</marquee>
      </div>

      <nav className="p-4 bg-background/55 backdrop-blur sticky top-0 border-b z-50">
        <div className="container mx-auto flex justify-between items-center mb-6">
          {/* Brand Logo */}
          <div className="text-lg font-bold flex justify-center items-center">
            <Link href="/">
              <span className={`text-2xl font-extrabold ${isDarkMode ? 'text-white' : 'text-[#4D0011]'}`}>
                Tabarak{' '}
                <span className="bg-gradient-to-r from-red-600 to-orange-400 text-transparent bg-clip-text">
                  Foods
                </span>
              </span>
            </Link>
          </div>

          {/* Centered Menu */}
          <div className="hidden md:flex space-x-8 flex-1 justify-center items-center">
            <Link
              href="/"
              className={`text-lg font-medium transition-all duration-300 ${isDarkMode ? 'text-white hover:text-[#F5DEB3]' : 'text-[#4D0011] hover:text-[#4D0011]'} hover:underline`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`text-lg font-medium transition-all duration-300 ${isDarkMode ? 'text-white hover:text-[#F5DEB3]' : 'text-[#4D0011] hover:text-[#4D0011]'} hover:underline`}
            >
              About
            </Link>
            <div className="relative">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`text-lg font-medium transition-all duration-300 ${isDarkMode ? 'text-white hover:text-[#F5DEB3]' : 'text-[#4D0011] hover:text-[#4D0011]'} hover:underline`}
              >
                Menu
              </button>
              {isMenuOpen && (
                <div className="absolute top-full left-0 mt-2 bg-[#1a1a1a] text-white p-4 shadow-lg rounded-lg space-y-4 w-48">
                  <Link
                    href="/deals"
                    className="block hover:text-[#F5DEB3] transition-all duration-300 hover:underline"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Shop All
                  </Link>
                  <Link
                    href="/menu"
                    className="block hover:text-[#F5DEB3] transition-all duration-300 hover:underline"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Our Menu
                  </Link>
                  <Link
                    href="/special"
                    className="block hover:text-[#F5DEB3] transition-all duration-300 hover:underline"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Our Special
                  </Link>
                </div>
              )}
            </div>
            <Link
              href="/contact"
              className={`text-lg font-medium transition-all duration-300 ${isDarkMode ? 'text-white hover:text-[#F5DEB3]' : 'text-[#4D0011] hover:text-[#4D0011]'} hover:underline`}
            >
              Contact
            </Link>
          </div>

          {/* Icons */}
          <div className="flex space-x-6 items-center">
            <button
              onClick={toggleTheme}
              className={`transition-all duration-300 ${isDarkMode ? 'text-[#F5DEB3]' : 'text-[#4D0011]'} hover:text-[#F5DEB3]`}
            >
              {isDarkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
            </button>
            <Link href="/cart">
              <FaShoppingCart
                size={24}
                className={`transition-all duration-300 ${isDarkMode ? 'text-[#F5DEB3]' : 'text-[#4D0011]'} hover:text-[#F5DEB3]`}
              />
            </Link>
            <Link href="/register">
              <FaUserPlus
                size={24}
                className={`transition-all duration-300 ${isDarkMode ? 'text-[#F5DEB3]' : 'text-[#4D0011]'} hover:text-[#F5DEB3]`}
              />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className={`md:hidden transition-all duration-300 ${isDarkMode ? 'text-[#F5DEB3]' : 'text-[#4D0011]'} hover:text-[#F5DEB3]`}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className={`md:hidden ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-[#4D0011] text-white'} p-4 space-y-4`}>
            <Link
              href="/"
              className="block hover:text-[#F5DEB3] transition-all duration-300 hover:underline"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block hover:text-[#F5DEB3] transition-all duration-300 hover:underline"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <div>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`block ${isDarkMode ? 'text-white' : 'text-[#4D0011]'} hover:text-[#F5DEB3] hover:underline`}
              >
                Menu
              </button>
              {isMenuOpen && (
                <div className={`space-y-2 p-4 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-black text-white'}`}>
                  <Link
                    href="/deals"
                    className="block hover:text-[#F5DEB3] transition-all duration-300 hover:underline"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Shop All
                  </Link>
                  <Link
                    href="/menu"
                    className="block hover:text-[#F5DEB3] transition-all duration-300 hover:underline"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Our Menu
                  </Link>
                  <Link
                    href="/special"
                    className="block hover:text-[#F5DEB3] transition-all duration-300 hover:underline"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Special
                  </Link>
                </div>
              )}
            </div>
            <Link
              href="/contact"
              className="block hover:text-[#F5DEB3] transition-all duration-300 hover:underline"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
