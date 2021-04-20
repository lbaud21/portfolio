import React, { useState } from "react";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import Hero from "../components/hero";
import AboutMe from "../components/aboutMe";
import Projects from "../components/projects";
import Contact from "../components/contact";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Hero />
      <AboutMe />
      <Projects />
      <Contact />
    </>
  );
};

export default Dashboard;
