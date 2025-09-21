// src/components/ParticlesBackground.jsx
import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine); // load slim bundle
  }, []);

  const options = {
    fullScreen: { enable: false },
    fpsLimit: 60,
    detectRetina: true,
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" },
        onClick: { enable: true, mode: "push" },
      },
      modes: {
        push: { quantity: 4 },
        repulse: { distance: 100, duration: 0.4 },
      },
    },
    particles: {
      number: { value: 60, density: { enable: true, area: 800 } },
      color: { value: "#ffffff" },
      links: { enable: true, distance: 120, opacity: 0.15 },
      move: { enable: true, speed: 0.8 },
      size: { value: { min: 1, max: 3 } },
      opacity: { value: 0.6 },
    },
  };

  return (
    <Particles
      id="tsparticles"
      options={options}
      init={particlesInit}
      className="absolute inset-0 -z-10 pointer-events-none"
    />
  );
};

export default ParticlesBackground;
