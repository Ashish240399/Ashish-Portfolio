"use client";
import React, { useEffect } from "react";
import TopDrawer from "./Drawer";

const Navbar = ({ setTrigger, setSection, section }) => {
  const navLinks = [
    { name: "Home", path: "home" },
    { name: "Skills", path: "skills" },
    { name: "Projects", path: "projects" },
    { name: "Contact", path: "contact" },
  ];

  return (
    <div className="fixed md:top-5 top-0 left-0 w-full flex items-center justify-center bg-transparent text-black z-40">
      <div className="md:h-[60px] h-[50px] md:w-[85%] w-[95%] flex items-center justify-between bg-[rgba(255,255,255,0.1)] backdrop-blur-[10px] shadow-lg rounded-[50px] border border-white border-opacity-20 px-[2.5%]">
        <div
          className="md:text-[36px] text-[25px] text-dark_blue"
          style={{
            fontFamily: "Water Brush,cursive",
            textShadow: "2px 2px 4px rgba(38,130,134,0.5)",
          }}
        >
          Ashish
        </div>
        <div className="hidden md:flex items-center gap-[10%] w-[50%] justify-end text-[14px] md:text-[16px]">
          {navLinks.map((navLink) => (
            <div
              onClick={() => {
                setSection(navLink.path);
                setTrigger((prev) => !prev);
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
        <div className="flex md:hidden">
          <TopDrawer setTrigger={setTrigger} setSection={setSection} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
