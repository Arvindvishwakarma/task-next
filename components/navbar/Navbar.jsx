"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full text-sm py-4 shadow-lg">
      <nav
        className="max-w-[85rem] w-full mx-auto md:px-16 px-10 sm:flex sm:items-center sm:justify-between"
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          <a className="flex-none" href="#">
            <div className="h-12 w-12 bg-black"></div>
          </a>
          <div className="sm:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
              aria-label="Toggle navigation"
            >
              <svg
                className={`hs-collapse-open:block ${
                  isMenuOpen ? "hidden" : ""
                } flex-shrink-0 size-4 text-black`}
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1={3} x2={21} y1={6} y2={6} />
                <line x1={3} x2={21} y1={12} y2={12} />
                <line x1={3} x2={21} y1={18} y2={18} />
              </svg>
              <svg
                className={`hs-collapse-open:hidden ${
                  isMenuOpen ? "block" : "hidden"
                } flex-shrink-0 size-4 text-black`}
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
        </div>
        <div
          className={`hs-collapse  ${
            isMenuOpen ? "block" : "hidden"
          } overflow-hidden transition-all duration-300 basis-full grow sm:block`}
        >
          <div className="flex md:bg-gradient-to-r from-[#E9EFFC] to-[#FCF4EE] md:mt-0 mt-6 md:flex-row flex-col mx-auto md:w-fit md:rounded-full py-2 items-center justify-start md:gap-8 gap-3 px-3">
            {[
              "Home",
              "About Us",
              "Work",
              "Services",
              "Clients",
              "Team",
              "Contact Us",
            ].map((item, index) => (
              <motion.a
                key={index}
                href="#"
                className={`block text-[16px] md:py-1 py-3 px-3 md:text-start text-center rounded-full text-gray-800 hover:bg-zinc-50 md:w-fit w-full font-semibold ${
                  index === 0 ? "md:bg-white bg-zinc-100" : ""
                }`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
