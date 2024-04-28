"use client";
import React, { useEffect } from "react";

const Navbar = ({ setSection, section }) => {
  const navLinks = [
    { name: "Home", path: "home" },
    { name: "Skills", path: "skills" },
    { name: "Projects", path: "project" },
    { name: "Contact", path: "contact" },
  ];

  return (
    <div className="fixed top-5 left-0 w-full flex items-center justify-center bg-transparent text-black z-40">
      <div className="h-[60px] w-[85%] flex items-center justify-between bg-[rgba(255,255,255,0.1)] backdrop-blur-[10px] shadow-lg rounded-[50px] border border-white border-opacity-20 px-[2.5%]">
        <div
          className="text-[36px] text-dark_blue"
          style={{
            fontFamily: "Water Brush,cursive",
            textShadow: "2px 2px 4px rgba(38,130,134,0.5)",
          }}
        >
          Ashish
        </div>
        <div className="flex items-center gap-[10%] w-[50%] justify-end">
          {navLinks.map((navLink) => (
            <div
              onClick={() => {
                setSection(navLink.path);
              }}
              className="relative"
            >
              <button
                key={navLink.name}
                className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              >
                {navLink.name}
              </button>
              <div
                className={`${
                  section == navLink.path
                    ? "absolute top-[100%] left-0 h-[3px] w-full bg-dark_orange transition-all duration-500 ease-in-out"
                    : "absolute top-[100%] left-0 h-[3px] w-0 bg-dark_orange transition-all duration-500 ease-in-out"
                }`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
