"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

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
    <div className="flex flex-row bg-gradient-to-r from-slate-900 via-stone-800 to-red-800 p-4">
      {/* Left side with name */}
      <h1 className="w-[25%] text-[#2dc7ed] text-4xl md:text-5xl font-extrabold">
        Joshua Beck
        <span>.</span>
        <span className="text-[#a234d9]">_</span>
      </h1>

      {/* Right side with links and burger button */}
      <nav className="w-[75%] flex items-center justify-center">
        <ul className="hidden md:flex flex-row space-x-4">
          {links.map(([label, path]) => (
            <li key={label} className="text-white flex-grow">
              <div>
                <Link href={path} legacyBehavior>
                  {label}
                </Link>
              </div>
            </li>
          ))}
        </ul>

        {/* Burger Button */}
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
      </nav>
    </div>
  );
};

export default Navbar;
