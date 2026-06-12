import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Aurora from "./components/Aurora";

const App = () => {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      <Aurora />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;