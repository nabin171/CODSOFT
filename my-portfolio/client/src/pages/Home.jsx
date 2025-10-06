import React from "react";
import Navbar from "../components/Navbar";
import Body from "./Body";
import Skills from "../components/Skills";
import Projects from "../components/Project";
import Contact from "../components/Contact";
import About from "../components/About";
import Resume from "../components/Resume";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />

      <section id="home">
        <Body />
      </section>

      <Skills />

      <Projects />
      <About />

      <Resume />

      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
