import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  const navigationLinks = [
    { name: "Home", path: "/" },
    { name: "Brand", path: "/brand" },
    {
      name: "Shop",
      path: "/shop",
      subMenu: [
        { name: "Men", path: "/shop/men" },
        { name: "Women", path: "/shop/women" },
      ],
    },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const renderDesktopMenu = () =>
    navigationLinks.map((link, index) =>
      link.subMenu ? (
        <div
          key={link.name}
          className="relative"
          onMouseEnter={() => setOpenDropdownIndex(index)}
          onMouseLeave={() => setOpenDropdownIndex(null)}
        >
          <Link
            to={link.path}
            className="cursor-pointer text-gray-700 hover:text-red-900 font-medium px-2 py-1 inline-block"
          >
            {link.name}
          </Link>

          {openDropdownIndex === index && (
            <div className="absolute top-7 left-0 p-2 bg-white shadow-sm rounded-lg w-44 border border-gray-100 transition-all duration-200">
              {link.subMenu.map((sub) => (
                <Link
                  key={sub.name}
                  to={sub.path}
                  className="block px-4 py-2 text-gray-700 rounded-md hover:bg-red-900 hover:text-white transition"
                >
                  {sub.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      ) : (
        <Link
          key={link.name}
          to={link.path}
          className="text-gray-700 hover:text-red-900 font-medium px-3 py-1"
        >
          {link.name}
        </Link>
      )
    );

  const renderMobileMenu = () =>
    navigationLinks.map((link, index) =>
      link.subMenu ? (
        <div key={link.name} className="border-b">
          <span
            onClick={() =>
              setOpenDropdownIndex(openDropdownIndex === index ? null : index)
            }
            className="block px-4 py-3 text-gray-700 cursor-pointer font-medium"
          >
            {link.name}
          </span>

          {openDropdownIndex === index &&
            link.subMenu.map((sub) => (
              <Link
                key={sub.name}
                to={sub.path}
                onClick={() => setMobileOpen(false)}
                className="block px-8 py-2 text-gray-600 hover:bg-red-500 hover:text-white transition"
              >
                {sub.name}
              </Link>
            ))}
        </div>
      ) : (
        <Link
          key={link.name}
          to={link.path}
          onClick={() => setMobileOpen(false)}
          className="block px-4 py-3 border-b text-gray-700 hover:bg-red-50"
        >
          {link.name}
        </Link>
      )
    );

  return (
    <nav className="bg-white shadow-2xs fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-red-900">
            Luxora
          </Link>

          {/* Search Bar */}
          <div className="flex-1 justify-center px-6 hidden sm:flex md:justify-center">
            <div className="relative w-full max-w-sm">
              <input
                type="text"
                placeholder="Search..."
                className="pl-3 pr-10 py-2 border border-gray-300 rounded-lg outline-none w-full focus:ring-red-900 focus:border-red-900 transition"
              />
              <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-4.35-4.35M16.65 16.65A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z"
                  />
                </svg>
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {renderDesktopMenu()}

            {/* Login */}
            <Link
              to="/login"
              className="flex items-center px-5 py-2 bg-gradient-to-r from-black to-red-800 text-white rounded-lg hover:opacity-90 transition"
            >
              Login
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 ml-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="flex items-center md:hidden">
            <button onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && <div className="md:hidden bg-white shadow-md">{renderMobileMenu()}</div>}
    </nav>
  );
}
