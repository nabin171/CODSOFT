import React, { useState } from "react";
import {
  Briefcase,
  MapPin,
  Calendar,
  ChevronDown,
  ExternalLink,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const experiences = [
  {
    id: 1,
    role: "Frontend Developer (Fellow)",
    company: "DLytica: Data Analytics & AI",
    location: "Nepal",
    type: "Full-time",
    duration: "Nov 2025 – Present",
    logo: "DL",
    color: "from-blue-500 to-indigo-600",
    description:
      "Building and maintaining enterprise-level web applications for banking and financial clients. Focused on scalable dashboard interfaces, real-time data visualization, and headless CMS integration using a modern React/Next.js stack.",
    responsibilities: [
      "Built enterprise-level web applications for banking and financial clients using React, Next.js, and Tailwind CSS.",
      "Developed scalable dashboard interfaces with dynamic data visualization, reusable UI components, and structured layout systems.",
      "Integrated REST APIs using Axios and fetch to manage and display real-time financial and customer data.",
      "Implemented efficient state management and conditional rendering to handle complex user flows.",
      "Improved performance by optimizing image, video, and static asset loading strategies.",
      "Integrated WordPress as a headless CMS using GraphQL to manage dynamic content.",
    ],
    technologies: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Axios",
      "GraphQL",
      "WordPress",
    ],
    companyLink: "https://dlytica.com",
  },
  {
    id: 2,
    role: "MERN Stack Trainee",
    company: "Broadway Infosys",
    location: "Kathmandu, Nepal",
    type: "Training",
    duration: "May 2024 – Aug 2024",
    logo: "BI",
    color: "from-sky-500 to-blue-600",
    description:
      "Completed an intensive 1350+ hour MERN Stack training program. Built a full-featured e-commerce API with JWT authentication, pagination, and Stripe payments, deployed on Render with CI/CD via GitHub Actions.",
    responsibilities: [
      "Completed 1350+ hours of hands-on MERN stack development training.",
      "Built a full e-commerce REST API with JWT authentication, pagination, and Stripe payment integration.",
      "Deployed the backend on Render with CI/CD pipelines configured using GitHub Actions.",
      "Gained deep expertise in MongoDB schema design, Express middleware, React hooks, and Node.js.",
    ],
    technologies: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "JWT",
      "Stripe",
    ],
    companyLink: "https://broadwayinfosys.com",
  },
  {
    id: 3,
    role: "Flutter Developer",
    company: "Collaborative College Project",
    location: "Kathmandu, Nepal",
    type: "Internship",
    duration: "Jun 2023 – Jul 2023",
    logo: "FL",
    color: "from-indigo-500 to-violet-600",
    description:
      "Developed a cross-platform task management mobile app using Flutter. Implemented Provider state management, local persistence, and REST API synchronization as part of a collaborative team project.",
    responsibilities: [
      "Built a cross-platform task management app for iOS and Android using Flutter and Dart.",
      "Implemented Provider for efficient state management across the application.",
      "Added local data persistence and REST API synchronization for a seamless offline/online experience.",
      "Collaborated with teammates on feature planning and code reviews.",
    ],
    technologies: ["Flutter", "Dart", "Provider", "REST API", "Local Storage"],
    companyLink: "https://nabinkarki10.com.np",
  },
];

const typeColors = {
  "Full-time": "bg-brand-50 text-brand-700 ring-brand-100",
  Training: "bg-sky-50 text-sky-700 ring-sky-100",
  Internship: "bg-indigo-50 text-indigo-700 ring-indigo-100",
};

const WorkExperience = () => {
  const [expanded, setExpanded] = useState(1);
  const toggle = (id) => setExpanded(expanded === id ? null : id);

  return (
    <section id="experience" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Career Path"
          title="Work"
          accent="Experience"
          subtitle="A timeline of my professional journey — the roles, companies, and impact I've made along the way."
        />

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute bottom-2 left-7 top-2 hidden w-px bg-gradient-to-b from-brand-400 via-slate-200 to-transparent md:block" />

          <div className="flex flex-col gap-6">
            {experiences.map((exp) => {
              const open = expanded === exp.id;
              return (
                <Reveal key={exp.id}>
                  <div className="relative md:pl-20">
                    {/* Node */}
                    <div
                      className={`absolute left-0 top-1 hidden h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${exp.color} font-display text-base font-extrabold text-white shadow-glow md:grid`}
                    >
                      {exp.logo}
                    </div>

                    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card card-hover">
                      <button
                        onClick={() => toggle(exp.id)}
                        className="w-full cursor-pointer select-none p-6 text-left"
                      >
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                          <div>
                            <div className="flex items-center gap-3">
                              <div
                                className={`grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br ${exp.color} text-sm font-bold text-white md:hidden`}
                              >
                                {exp.logo}
                              </div>
                              <h3 className="font-display text-lg font-bold text-slate-900">
                                {exp.role}
                              </h3>
                            </div>
                            <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-500">
                              <span className="flex items-center gap-1.5 font-medium text-slate-700">
                                <Briefcase size={14} /> {exp.company}
                              </span>
                              <span className="flex items-center gap-1.5">
                                <MapPin size={14} /> {exp.location}
                              </span>
                              <span className="flex items-center gap-1.5">
                                <Calendar size={14} /> {exp.duration}
                              </span>
                            </div>
                          </div>

                          <div className="flex items-center gap-3">
                            <span
                              className={`whitespace-nowrap rounded-full px-3 py-1 text-xs font-semibold ring-1 ${typeColors[exp.type]}`}
                            >
                              {exp.type}
                            </span>
                            <ChevronDown
                              size={20}
                              className={`text-slate-400 transition-transform duration-300 ${
                                open ? "rotate-180" : ""
                              }`}
                            />
                          </div>
                        </div>

                        <p className="mt-4 text-sm leading-relaxed text-slate-600">
                          {exp.description}
                        </p>

                        <div className="mt-4 flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span key={tech} className="pill">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </button>

                      {/* Expandable */}
                      <div
                        className={`grid transition-all duration-500 ease-out ${
                          open
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <div className="border-t border-slate-200 px-6 pb-6 pt-5">
                            <h4 className="mb-3 text-xs font-bold uppercase tracking-[0.15em] text-brand-600">
                              Key Responsibilities
                            </h4>
                            <ul className="space-y-2.5">
                              {exp.responsibilities.map((item, i) => (
                                <li
                                  key={i}
                                  className="flex items-start gap-3 text-sm text-slate-600"
                                >
                                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-gradient" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                            <a
                              href={exp.companyLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700"
                            >
                              <ExternalLink size={14} /> Visit company
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
