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
  SiWordpress,
  SiDocker,
  SiTailwindcss,
  SiKubernetes,
  SiPostman,
  SiNextdotjs,
  SiVite,
} from "react-icons/si";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const skills = [
  { name: "HTML", Icon: FaHtml5, color: "#e34f26" },
  { name: "CSS", Icon: FaCss3Alt, color: "#1572b6" },
  { name: "JavaScript", Icon: SiJavascript, color: "#f7df1e" },
  { name: "React", Icon: FaReact, color: "#61dafb" },
  { name: "Node.js", Icon: FaNodeJs, color: "#5fa04e" },
  { name: "Express", Icon: SiExpress, color: "#0f172a" },
  { name: "MongoDB", Icon: SiMongodb, color: "#47a248" },
  { name: "C++", Icon: SiCplusplus, color: "#00599c" },
  { name: "Python", Icon: FaPython, color: "#3776ab" },
  { name: "WordPress", Icon: SiWordpress, color: "#21759b" },
  { name: "Docker", Icon: SiDocker, color: "#2496ed" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#38bdf8" },
  { name: "Kubernetes", Icon: SiKubernetes, color: "#326ce5" },
  { name: "Postman", Icon: SiPostman, color: "#ff6c37" },
  { name: "Next.js", Icon: SiNextdotjs, color: "#0f172a" },
  { name: "Vite", Icon: SiVite, color: "#a855f7" },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative overflow-hidden px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Tech Stack"
          title="Tools I build"
          accent="with"
          subtitle="A versatile toolkit spanning front-end, back-end, and DevOps — the technologies I reach for to ship great products."
        />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {skills.map((skill, index) => {
            const Icon = skill.Icon;
            return (
              <Reveal key={skill.name} delay={(index % 4) * 70}>
                <div className="card-hover group flex h-full flex-col items-center gap-4 rounded-2xl glass p-6">
                  <Icon
                    size={42}
                    style={{ color: skill.color }}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                  <span className="font-display text-sm font-semibold text-slate-700">
                    {skill.name}
                  </span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;