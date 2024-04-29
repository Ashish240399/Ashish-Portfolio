import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const HomeSection = ({ setSection }) => {
  return (
    <div className='lg:pt-[10%] md:pt-[14%] flex md:px-[10%] pt-[18%] px-[5%]'>
      <div className='lg:ml-[40%] lg:w-[60%] md:ml-0 md:w-[100%] ml-0 w-[100%] flex bg-[rgba(255,255,255,0.1)] backdrop-blur-[10px] shadow-lg rounded-xl border border-white border-opacity-20 p-4'>
        <div className='w-[100%] flex flex-col justify-center'>
          <div className='md:text-[2rem] text-[24px] font-bold'>
            Hi, I'm{" "}
            <span className='text-dark_orange'>Ashish Kumar Mohanty</span>
          </div>
          <div className='md:text-[1.5rem] text-[20px] mt-[10px]'>
            Full Stack Developer
          </div>
          <div className='md:text-[1rem] text-[14px] mt-[10px]'>
            I'm a passionate full stack web developer with two years of hands-on
            experience crafting robust and user-friendly web applications. My
            journey into the world of web development began with a deep
            curiosity and a love for problem-solving. Since then, I've been on
            an exhilarating adventure, honing my skills and exploring the
            endless possibilities of the digital realm.
          </div>
          <div className='flex gap-[10px] mt-[20px]'>
            <a
              href='https://www.linkedin.com/in/ashish-kumar-mohanty/'
              target='_blank'
              rel='noreferrer'>
              <FaLinkedin size={24} />
            </a>
            <a
              href='https://github.com/Ashish240399'
              target='_blank'
              rel='noreferrer'>
              <FaGithub size={24} />
            </a>
            <a
              href='https://twitter.com/Ashish_k7797?t=LZApvzGdN6icpHrnK083ow&s=09'
              target='_blank'
              rel='noreferrer'>
              <FaTwitter size={24} />
            </a>
          </div>
          <div className='flex gap-[10px] mt-[20px] md:text-[16px] text-[14px]'>
            <button
              onClick={() => {
                setSection("hire");
              }}
              className='bg-dark_orange text-dark_blue px-[20px] md:py-[10px] py-[7px] rounded-md'>
              Hire Me
            </button>
            <a href='/assets/pdf/resume.pdf' download>
              <button className='bg-dark_blue text-dark_orange px-[20px] md:py-[10px] py-[7px] rounded-md'>
                Download CV
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
