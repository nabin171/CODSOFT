import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ParticlesBackground from "./components/ParticlesBackground";

const App = () => {
  return (
    <div className="relative w-full h-screen">
      <ParticlesBackground />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
