import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 pt-5">
        {/* Logo */}
        <a href="/" className="text-white text-2xl font-bold">
          Uzdrones
        </a>

        {/* Hamburger icon (mobile) */}
        <button
          className="text-white md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Navbar items */}
        <nav
          className={`${
            menuOpen ? "block" : "hidden"
          } absolute md:static top-full left-0 w-full md:w-auto bg-black/90 md:bg-transparent md:flex md:items-center text-white font-medium text-lg space-y-4 md:space-y-0 md:space-x-10 px-6 md:px-0 py-6 md:py-0`}
        >
          <a href="#section_1" className="hover:text-orange-500 block">
            Home
          </a>
          <a href="#section_2" className="hover:text-orange-500 block">
            About
          </a>
          <a href="#section_3" className="hover:text-orange-500 block">
            Products
          </a>
          <a href="#section_4" className="hover:text-orange-500 block">
            Services
          </a>
          <a href="#section_5" className="hover:text-orange-500 block">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
