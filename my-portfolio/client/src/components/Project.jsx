
import React from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce application built with MERN stack featuring user authentication, payment integration, and admin dashboard.",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    githubLink: "https://github.com/nabin171/E-commerce-App",
    liveLink: "https://e-commerce-appfrontend.vercel.app/",
  },
  {
    id: 2,
    title: "Personal Portfolio",
    description:
      "A collaborative task management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    technologies: ["React", "Firebase", "Tailwind CSS"],
    githubLink: "https://github.com/nabin171/portfolio",
    liveLink:
      "https://portfolio-git-main-nabin-karkis-projects-d6b8accc.vercel.app/",
  },
  {
    id: 3,
    title: "Datanature AI",
    description:
      "An AI-powered data intelligence platform that transforms raw data into actionable insights using advanced machine learning models and natural language processing.",
    image:
      "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&h=600&fit=crop",
    technologies: ["AI/ML", "Python", "React", "Data Analytics"],

    liveLink: "https://datanature.ai",
  },
  {
    id: 4,
    title: "Kids Dlytica",
    description:
      "An engaging and interactive analytics platform designed for children, making data literacy fun and accessible through gamified learning experiences and visual storytelling.",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop",
    technologies: ["React", "Node.js", "Tailwind CSS", "MongoDB"],
    githubLink: "https://github.com/nabin171",
    liveLink: "https://www.kids-academy.dlytica.com/",
  },
  {
    id: 5,
    title: "Dlytica",
    description:
      "A powerful business analytics and data visualization platform that helps organizations make data-driven decisions with real-time dashboards, reports, and predictive analytics.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    technologies: ["React", "Python", "PostgreSQL", "Chart.js"],
    githubLink: "https://github.com/nabin171",
    liveLink: "https://dlytica.com",
  },
  {
    id: 6,
    title: "VIRTUAL TRY-ON",
    description:
      "A major project developed at Kantipur Engineering College. Collaborated with a team of three members to design and implement an AI-based virtual try-on system that allows users to visualize clothing items in real time.",
    image:
      "https://images.unsplash.com/photo-1521335629791-ce4aec67dd47?w=800&h=600&fit=crop",
    technologies: ["React", "Python", "PostgreSQL", "Chart.js"],
    githubLink: "https://github.com/nabin171",
    liveLink: "https://dlytica.com",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-10 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            experience in web development
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Project Content */}
              <div className="p-6 flex flex-col gap-4">
                <h3 className="text-2xl font-bold text-gray-900">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 mt-2">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-300 text-sm font-medium"
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 text-sm font-medium"
                  >
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
