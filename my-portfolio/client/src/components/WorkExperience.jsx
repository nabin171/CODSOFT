import React, { useState } from "react";
import {
  Briefcase,
  MapPin,
  Calendar,
  ChevronDown,
  ChevronUp,
  ExternalLink,
} from "lucide-react";

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
      "Building and maintaining enterprise-level web applications for banking and financial clients. Focused on scalable dashboard interfaces, real-time data visualization, and headless CMS integration using modern React/Next.js stack.",
    responsibilities: [
      "Built enterprise-level web applications for banking and financial clients using React, Next.js, and Tailwind CSS.",
      "Developed scalable dashboard interfaces with dynamic data visualization, reusable UI components, and structured layout systems.",
      "Integrated REST APIs using Axios and fetch to manage and display real-time financial and customer-related data.",
      "Implemented efficient state management and conditional rendering to handle complex user flows and data-driven UI updates.",
      "Improved website performance by optimizing image, video, and static asset loading strategies.",
      "Utilized Next.js Server Components and Client Components for enhanced performance and clean separation of concerns.",
      "Integrated WordPress as a headless CMS using GraphQL to manage dynamic content and backend data operations.",
      "Resolved a long-standing Google Ads delivery issue by migrating and deploying the website under a new domain.",
    ],
    technologies: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Axios",
      "GraphQL",
      "WordPress",
      "REST API",
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
    color: "from-violet-500 to-purple-600",
    description:
      "Completed an intensive 1350+ hour MERN Stack training program. Built a full-featured e-commerce API with JWT authentication, pagination, and Stripe payment integration. Deployed on Render with CI/CD via GitHub Actions.",
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
      "GitHub Actions",
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
    color: "from-emerald-500 to-teal-600",
    description:
      "Developed a cross-platform task management mobile app using Flutter. Implemented Provider state management, local persistence, and REST API synchronization as part of a collaborative team project.",
    responsibilities: [
      "Built a cross-platform task management app for iOS and Android using Flutter and Dart.",
      "Implemented Provider for efficient state management across the application.",
      "Added local data persistence and REST API synchronization for seamless offline/online experience.",
      "Collaborated with teammates on feature planning and code reviews.",
    ],
    technologies: ["Flutter", "Dart", "Provider", "REST API", "Local Storage"],
    companyLink: "https://nabinkarki10.com.np",
  },
];

const typeColors = {
  "Full-time": "bg-blue-50 text-blue-600",
  "Part-time": "bg-violet-50 text-violet-600",
  Freelance: "bg-emerald-50 text-emerald-600",
  Internship: "bg-orange-50 text-orange-600",
  Training: "bg-purple-50 text-purple-600",
};

const WorkExperience = () => {
  const [expanded, setExpanded] = useState(null);
  const toggle = (id) => setExpanded(expanded === id ? null : id);

  return (
    <section
      id="experience"
      className="py-10 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
            Work{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A timeline of my professional journey — the roles, companies, and
            impact I've made along the way.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-indigo-200 to-transparent hidden md:block" />

          <div className="flex flex-col gap-8">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                className="relative flex flex-col md:flex-row gap-6 md:pl-20"
              >
                {/* Timeline logo */}
                <div
                  className={`absolute left-0 top-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${exp.color} flex items-center justify-center text-white font-extrabold text-lg shadow-lg hidden md:flex z-10`}
                >
                  {exp.logo}
                </div>

                {/* Card */}
                <div className="flex-1 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
                  <div
                    className="p-6 cursor-pointer select-none"
                    onClick={() => toggle(exp.id)}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <div
                            className={`w-10 h-10 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center text-white font-bold text-sm md:hidden`}
                          >
                            {exp.logo}
                          </div>
                          <h3 className="text-xl font-bold text-gray-900">
                            {exp.role}
                          </h3>
                        </div>
                        <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mt-1">
                          <span className="flex items-center gap-1 font-semibold text-gray-700">
                            <Briefcase size={14} /> {exp.company}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin size={14} /> {exp.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar size={14} /> {exp.duration}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <span
                          className={`px-3 py-1 text-xs font-semibold rounded-full ${typeColors[exp.type]}`}
                        >
                          {exp.type}
                        </span>
                        <button className="text-gray-400 hover:text-gray-700 transition-colors">
                          {expanded === exp.id ? (
                            <ChevronUp size={20} />
                          ) : (
                            <ChevronDown size={20} />
                          )}
                        </button>
                      </div>
                    </div>

                    <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {expanded === exp.id && (
                    <div className="px-6 pb-6 border-t border-gray-100 pt-4 animate-fadeIn">
                      <h4 className="text-sm font-bold text-gray-700 mb-3 uppercase tracking-wide">
                        Key Responsibilities
                      </h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-gray-600"
                          >
                            <span className="mt-1.5 w-2 h-2 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <a
                        href={exp.companyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-4 text-sm text-blue-600 font-semibold hover:text-indigo-600 transition-colors"
                      >
                        <ExternalLink size={14} /> Visit Company
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.25s ease-out; }
      `}</style>
    </section>
  );
};

export default WorkExperience;
