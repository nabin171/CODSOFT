import React from "react";
import Navbar from "../components/Navbar";
import Body from "./Body";
import Skills from "../components/Skills";
import Projects from "../components/Projects";

const Home = () => {
  return (
    <div>
      <Navbar />

      <section id="home">
        <Body />
      </section>

      <Skills />

      <Projects />

      {/* Add these when you create them */}
      <section id="about">{/* <About /> */}</section>

      <section id="resume">{/* <Resume /> */}</section>

      <section id="contact">{/* <Contact /> */}</section>
    </div>
  );
};

export default Home;
