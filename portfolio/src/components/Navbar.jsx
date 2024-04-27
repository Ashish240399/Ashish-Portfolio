"use client";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];
  return (
    <div className="fixed top-5 left-0 w-full flex items-center justify-center bg-transparent text-black z-40">
      <div className="h-[60px] w-[85%] flex items-center justify-between bg-[rgba(255,255,255,0.1)] backdrop-blur-[10px] rounded-[50px] border border-white border-opacity-20 px-[2.5%]">
        <div>Navbar</div>
        <div className="flex items-center gap-[10%] w-[50%] justify-end">
          {navLinks.map((navLink) => (
            <Link href={navLink.path}>{navLink.name}</Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
