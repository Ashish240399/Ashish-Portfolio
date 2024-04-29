"use client";
import Navbar from "@/components/Navbar";
import Contact from "@/components/sections/Contact";
import HomeSection from "@/components/sections/HomeSection";
import Project from "@/components/sections/Project";
import Skills from "@/components/sections/Skills";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [section, setSection] = useState("home");
  const [trigger, setTrigger] = useState(false);
  const homeRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    if (section == "hire") {
      setSection("contact");
    }
    switch (section) {
      case "home":
        homeRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "skills":
        skillsRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "projects":
        projectsRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "contact":
        contactRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  }, [section, trigger]);

  return (
    <div className="lg:px-[5%] w-[100%] h-[100vh] overflow-auto pb-5">
      <Navbar
        setTrigger={setTrigger}
        setSection={setSection}
        section={section}
      />
      <div ref={homeRef} id="home">
        <HomeSection setSection={setSection} />
      </div>
      <div ref={skillsRef} id="skills">
        <Skills />
      </div>
      <div ref={projectsRef} id="projects">
        <Project />
      </div>
      <div ref={contactRef} id="contact">
        <Contact />
      </div>
    </div>
  );
}
