import Image from "next/image";
import React from "react";
import img from "../../assets/images/programming.png";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const HomeSection = () => {
  return (
    <div className="pt-[10%] flex px-[10%] ">
      <div className="ml-[40%] w-[60%] flex bg-[rgba(255,255,255,0.1)] backdrop-blur-[10px] rounded-xl border border-white border-opacity-20 p-4">
        <div className="w-[100%] flex flex-col justify-center">
          <div className="text-[2rem] font-bold">
            Hi, I'm{" "}
            <span className="text-dark_orange">Ashish Kumar Mohanty</span>
          </div>
          <div className="text-[1.5rem] mt-[10px]">Full Stack Developer</div>
          <div className="text-[1rem] mt-[10px]">
            I'm a passionate full stack web developer with two years of hands-on
            experience crafting robust and user-friendly web applications. My
            journey into the world of web development began with a deep
            curiosity and a love for problem-solving. Since then, I've been on
            an exhilarating adventure, honing my skills and exploring the
            endless possibilities of the digital realm.
          </div>
          <div className="flex gap-[10px] mt-[20px]">
            <a
              href="https://www.linkedin.com/in/ashish-kumar-mohanty/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com/Ashish240399"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://twitter.com/Ashish_k7797?t=LZApvzGdN6icpHrnK083ow&s=09"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter size={24} />
            </a>
          </div>
          <div className="flex gap-[10px] mt-[20px]">
            <button className="bg-dark_orange text-dark_blue px-[20px] py-[10px] rounded-md">
              Hire Me
            </button>
            <button className="bg-[#2f2f2f] text-dark_orange px-[20px] py-[10px] rounded-md">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
