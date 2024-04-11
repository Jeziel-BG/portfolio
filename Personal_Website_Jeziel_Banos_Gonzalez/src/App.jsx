import React, { useState } from "react";
import { useRef } from "react";
import { CreateHeader } from "./components/header/header";
import { CreateAboutMe } from "./components/aboutMe/aboutMe";
import { CreateProjects } from "./components/projects/projects";
import { CreateEducation } from "./components/education/education";
import "./App.css";
import { CreateContact } from "./components/contactInfo/contactInfo";

export default function App() {
  const home = useRef(null);
  const about = useRef(null);
  const projects = useRef(null);
  const education = useRef(null);
  const contact = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  const hideNav = () => {
    const nav = document.getElementById("nav");

    let lastScrollY = window.scrollY;
    window.addEventListener("scroll", () => {
      if (lastScrollY < window.scrollY) {
        nav.classList.add("hidden");
      } else {
        nav.classList.remove("hidden");
      }

      lastScrollY = window.scrollY;
    });
  };

  window.addEventListener("scroll", hideNav);
  return (
    <div className="flex-container" onScroll={hideNav}>
      <ul id="nav" className="navbar">
        <li className="home" onClick={() => scrollToSection(home)}>
          01. Home
        </li>
        <li className="about" onClick={() => scrollToSection(about)}>
          02. About
        </li>
        <li className="projects" onClick={() => scrollToSection(projects)}>
          03. Projects
        </li>
        <li className="education" onClick={() => scrollToSection(education)}>
          04. Education
        </li>
        <li className="contact" onClick={() => scrollToSection(contact)}>
          05. Contact
        </li>
      </ul>

      <div ref={home} className="home-section">
        <CreateHeader />
      </div>

      <div ref={about} className="aboutMe-section">
        <CreateAboutMe />
      </div>

      <div ref={projects} className="project-section">
        <CreateProjects />
      </div>

      <div ref={education} className="education-section">
        <CreateEducation />
      </div>

      <div ref={contact} className="contact-section">
        <CreateContact />
      </div>
    </div>
  );
}
