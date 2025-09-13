import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  const navigationLinks = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Shop", path: "/shop" },
    {
      name: "About",
      path: "/about",
      subMenu: [
        { name: "Login", path: "/about/login" },
        { name: "Mission", path: "/blog" },
      ],
    },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-white shadow fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-3">
        <div className="flex justify-between items-center h-16">
          {/* Left: Logo + Search */}
          <div className="flex items-center space-x-10">
            <Link to="/" className="text-2xl font-bold text-red-900">
              Perfume
            </Link>
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="pl-3 pr-10 py-1 left-0 border rounded-lg outline-none w-60"
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

          {/* Center: Navigation Links */}
          <div className="hidden md:flex space-x-12 items-center">
            {navigationLinks.map((link, index) =>
              link.subMenu ? (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setOpenDropdownIndex(index)}
                  onMouseLeave={() => setOpenDropdownIndex(null)}
                >
                  <span className="cursor-pointer text-gray-700 hover:text-red-900 font-medium">
                    {link.name}
                  </span>
                  {openDropdownIndex === index && (
                    <div className="absolute top-8 left-0 p-2 bg-white shadow rounded w-40">
                      {link.subMenu.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.path}
                          className="block px-4 py-2 text-gray-700 rounded hover:bg-red-900 hover:text-white"
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
                  className="text-gray-700 hover:text-red-900 font-medium"
                >
                  {link.name}
                </Link>
              )
            )}
          </div>

          {/* Right: Login Button */}
          <div className="hidden md:flex items-center">
            <Link
              to="/login"
              className="px-4 py-2 bg-gradient-to-r from-black to-red-800 text-white rounded-lg hover:bg-indigo-700 transition"
            >
              Login
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
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
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
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white shadow-md">
          {navigationLinks.map((link, index) =>
            link.subMenu ? (
              <div key={link.name} className="border-b">
                <span
                  onClick={() =>
                    setOpenDropdownIndex(
                      openDropdownIndex === index ? null : index
                    )
                  }
                  className="block px-4 py-2 text-gray-700 cursor-pointer"
                >
                  {link.name}
                </span>
                {openDropdownIndex === index &&
                  link.subMenu.map((sub) => (
                    <Link
                      key={sub.name}
                      to={sub.path}
                      className="block px-8 py-2 text-gray-600 hover:bg-red-500"
                    >
                      {sub.name}
                    </Link>
                  ))}{" "}
                {/* <-- THIS IS THE PROBLEM */}
              </div>
            ) : (
              <Link
                key={link.name}
                to={link.path}
                className="block px-4 py-2 border-b text-gray-700 hover:bg-red-50"
              >
                {link.name}
              </Link>
            )
          )}

          {/* Mobile Search + Login */}
          <div className="p-4 flex flex-col space-y-2">
            <div className="relative flex items-center border rounded-lg overflow-hidden">
              <input
                type="text"
                placeholder="Search..."
                className="pl-3 pr-10 py-1 w-full outline-none"
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
            <Link
              to="/login"
              className="block w-full text-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
