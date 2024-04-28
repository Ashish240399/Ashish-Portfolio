import React from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { BsGlobe2 } from "react-icons/bs";

const Project = () => {
  const projects = [
    {
      title: "Book Review",
      type: "Fullstack",
      description:
        "Welcome to the Book Review Platform, where literature enthusiasts converge to share their thoughts on their favorite reads! Our platform provides a seamless experience for users to discover new books, engage with fellow readers, and contribute their own reviews.",
      img: "/assets/images/book-review-app.png",
      github: "https://github.com/Ashish240399/book-review",
      demo: "https://book-review-umber.vercel.app/",
      tech_stack: [
        "React",
        "Next.js",
        "Redux Toolkit",
        "Material UI",
        "Mongodb",
      ],
    },
    {
      title: "Moview Watchlist",
      type: "Frontend",
      description:
        "Moview Watchlist is here to help! Create a free account to search for movies and add them to your personal watchlist. Easily remove movies you've seen or aren't interested in anymore. Watchlister is like a notepad for your movie must-sees, not a streaming platform.",
      img: "/assets/images/movie-watchlist.png",
      github: "https://github.com/Ashish240399/movie-watchlist",
      demo: "https://movie-watchlist-opal.vercel.app/",
      tech_stack: ["React", "Next.js", "Redux Toolkit", "Material UI"],
    },
    {
      title: "Ecommerce",
      type: "Fullstack",
      description:
        "Skip the checkout lines with the Ecommerce app! Sign up for a secure account with email validation and browse our products. Add and remove items to your cart, keeping track of everything you want. Enjoy a smooth checkout with integrated payment options.",
      img: "/assets/images/ecommerce.png",
      github: "https://github.com/Ashish240399/e-Commerce",
      demo: "",
      tech_stack: [
        "Python",
        "Django",
        "React",
        "Next.js",
        "Redux",
        "MySql",
        "Docker",
        "Redis",
      ],
    },
    {
      title: "Admin Dashboard",
      type: "Backend",
      description:
        "The Admin Dashboard empowers you to manage users with ease. Create secure accounts, edit user info, and delete access as needed. Plus, a seamless user experience with login and registration ensures a smooth journey for everyone. It's your one-stop shop for user management, guaranteeing a secure and efficient system.",
      img: "/assets/images/admin-dashboard.png",
      github: "https://github.com/Ashish240399/GIGL",
      demo: "",
      tech_stack: ["Python", "Django", "Node.js", "PHP", "Yii2"],
    },
  ];
  return (
    <div className="pt-[7%] px-[10%]">
      <div className="text-[30px] font-bold mb-4">Projects</div>
      <div className="grid grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col gap-[10px] p-4 bg-[rgba(255,255,255,0.1)] backdrop-blur-[10px] rounded-lg overflow-hidden shadow-lg transform transition-all hover:scale-105 w-full cursor-pointer"
          >
            <div className="">
              <img src={project.img} alt={project.title} />
            </div>
            <div className="">
              <div className="text-[1.5rem] font-bold">{project.title}</div>
              <div className="text-[1rem] text-dark_orange font-bold">
                {project.type}
              </div>
              <div className="text-[1rem] transition-all">
                {project.description}
              </div>
              <div className="flex gap-[10px] transition-all mt-4 items-center justify-center">
                <a
                  className="transform transition-all hover:scale-150"
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub size={24} />
                </a>
                {project.demo.length > 0 && (
                  <a
                    className="transform transition-all hover:scale-150"
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsGlobe2 size={24} />
                  </a>
                )}
              </div>
              <div className="flex gap-[10px] flex-wrap mt-5 text-[12px] items-center justify-center">
                {project.tech_stack.map((tech, index) => (
                  <div
                    className="bg-dark_blue text-dark_orange px-4 py-2 rounded"
                    key={index}
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
