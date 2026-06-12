import React from "react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce application built with the MERN stack featuring user authentication, payment integration, and an admin dashboard.",
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
      "An AI-powered data intelligence platform that transforms raw data into actionable insights using advanced ML models and natural language processing.",
    image:
      "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&h=600&fit=crop",
    technologies: ["AI/ML", "Python", "React", "Data Analytics"],
    liveLink: "https://datanature.ai",
  },
  {
    id: 4,
    title: "Kids Dlytica",
    description:
      "An engaging analytics platform for children, making data literacy fun and accessible through gamified learning and visual storytelling.",
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
      "A powerful business analytics and data visualization platform that helps organizations make data-driven decisions with real-time dashboards and predictive analytics.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    technologies: ["React", "Python", "PostgreSQL", "Chart.js"],
    githubLink: "https://github.com/nabin171",
    liveLink: "https://dlytica.com",
  },
  {
    id: 6,
    title: "Virtual Try-On",
    description:
      "A major capstone at Kantipur Engineering College — an AI-based virtual try-on system that lets users visualize clothing items in real time, built with a team of three.",
    image:
      "https://plugins-media.makeupar.com/smb/blog/post/2025-05-16/bbc0f646-3c8e-4379-8cae-198a7a9a49fb.jpg",
    technologies: ["React", "Python", "PostgreSQL", "Chart.js"],
    githubLink: "https://github.com/nabin171",
    liveLink: "https://dlytica.com",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Selected Work"
          title="Featured"
          accent="Projects"
          subtitle="A selection of recent projects that showcase my skills across full-stack development, AI, and data visualization."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={(i % 3) * 100}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl glass card-hover">
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/55 via-slate-900/10 to-transparent" />

                  {/* Hover actions */}
                  <div className="absolute right-4 top-4 flex translate-y-2 gap-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="grid h-9 w-9 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition-colors hover:text-brand-600"
                        title="View code"
                      >
                        <Github size={16} />
                      </a>
                    )}
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="grid h-9 w-9 place-items-center rounded-full bg-accent-gradient text-white transition-transform hover:scale-110"
                        title="Live demo"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col gap-4 p-6">
                  <h3 className="font-display text-xl font-bold text-slate-900">
                    {project.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="mt-auto flex flex-wrap gap-2 pt-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="pill">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700"
                    >
                      Visit project <ArrowUpRight size={16} />
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;