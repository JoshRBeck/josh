"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  //Using state to track whether mobile menu is open or closed
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  //Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  const links = [
    ["home", "/Home"],
    ["about", "/About"],
    ["contact", "/Contact"],
    ["projects", "/Projects"],
  ];

  return (
    <div className="flex flex-row bg-gradient-to-r from-[#5a3f37] to-[#2c7744] p-4">
      <h1 className="w-1/4 text-[#2dc7ed] text-4xl md:text-5xl font-extrabold">
        Joshua Beck
        <span>.</span>
        <span className="text-[#a234d9]">_</span>
      </h1>
      <nav className="w-3/4 px-5 flex justify-end">
        <ul
          className={`flex flex-col items-end ${
            isMobileOpen ? "hidden" : "block"
          }`}
        >
          {links.map(([label, path]) => (
            <li key={label} className="mb-3">
              <Link href={path}>{label}</Link>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="md:hidden"
          onClick={toggleMenu}
          aria-label="Menu Button"
        >
          <svg viewBox="0 0 100 100" width="40" height="40">
            <rect width="100" height="20" rx="10" fill="#e1e5e6"></rect>
            <rect y="40" width="100" height="20" rx="10" fill="#e1e5e6"></rect>
            <rect y="80" width="100" height="20" rx="10" fill="#e1e5e6"></rect>
          </svg>
        </button>
        {/* Conditionally render the list of links */}
        {isMobileOpen && (
          <ul className="flex flex-col items-end">
            {links.map(([label, path]) => (
              <li key={label} className="mb-3">
                <Link href={path}>{label}</Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
