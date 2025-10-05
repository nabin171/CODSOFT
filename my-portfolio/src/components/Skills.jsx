import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaPython,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiCplusplus,
  SiJavascript,
} from "react-icons/si";

const skills = [
  { name: "HTML", Icon: FaHtml5 },
  { name: "CSS", Icon: FaCss3Alt },
  { name: "Express", Icon: SiExpress },
  { name: "JavaScript", Icon: SiJavascript },
  { name: "React", Icon: FaReact },
  { name: "Node.js", Icon: FaNodeJs },
  { name: "MongoDB", Icon: SiMongodb },
  { name: "C++", Icon: SiCplusplus },
  { name: "Python", Icon: FaPython },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-b from-gray-100 to-white"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
          My{" "}
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Skills
          </span>
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          Technologies and tools I have worked with
        </p>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.Icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md p-6 text-lg font-semibold text-gray-700 
                           transition duration-300 transform hover:-translate-y-3 hover:scale-105 
                           hover:bg-blue-600 hover:text-white group flex flex-col items-center gap-4"
              >
                <Icon
                  size={48}
                  className="text-blue-600 group-hover:text-white transition duration-300"
                />
                <span>{skill.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
