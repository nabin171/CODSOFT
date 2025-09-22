import React from "react";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "MongoDB",
  "C++",
  "Python",
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-b from-gray-100 to-white"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4 tracking-wide uppercase">
          My Skills
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          Technologies and tools I have worked with
        </p>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 text-lg font-semibold text-gray-700 
                         transition duration-300 transform hover:-translate-y-3 hover:scale-105 
                         hover:bg-blue-600 hover:text-white"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
