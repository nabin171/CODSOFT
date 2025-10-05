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
    title: "Portfolio Website",
    description:
      "A stunning portfolio website template with smooth animations, dark mode support, and responsive design.",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    githubLink: "https://github.com/nabin171/portfolio",
    liveLink:
      "https://portfolio-git-main-nabin-karkis-projects-d6b8accc.vercel.app/",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "A beautiful weather application that provides real-time weather data, forecasts, and interactive maps for any location worldwide.",
    image:
      "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop",
    technologies: ["React", "Weather API", "Chart.js"],
    githubLink: "https://github.com/yourusername/weather-app",
    liveLink: "https://weather-dashboard.vercel.app",
  },
  {
    id: 4,
    title: "Social Media Platform",
    description:
      "A modern social networking platform with posts, comments, likes, real-time notifications, and user profiles.",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
    githubLink: "https://github.com/yourusername/social-media",
    liveLink: "https://social-platform.vercel.app",
  },
  {
    id: 5,
    title: "Portfolio Website",
    description:
      "A stunning portfolio website template with smooth animations, dark mode support, and responsive design.",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    githubLink: "https://github.com/yourusername/portfolio",
    liveLink: "https://portfolio.vercel.app",
  },
  {
    id: 6,
    title: "Blog Platform",
    description:
      "A feature-rich blogging platform with markdown support, categories, tags, search functionality, and admin panel.",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=600&fit=crop",
    technologies: ["React", "Express", "MongoDB", "Node.js"],
    githubLink: "https://github.com/yourusername/blog-platform",
    liveLink: "https://blog-platform.vercel.app",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-white to-gray-50"
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
