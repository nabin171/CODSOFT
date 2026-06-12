import React from "react";
import Navbar from "../components/Navbar";
import Body from "./Body";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Project";
import WorkExperience from "../components/WorkExperience";
import Education from "../components/Education";
import Resume from "../components/Resume";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="relative">
      <Navbar />

      <main>
        <section id="home">
          <Body />
        </section>

        <About />
        <Skills />
        <Projects />
        <WorkExperience />
        <Education />
        <Resume />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default Home;