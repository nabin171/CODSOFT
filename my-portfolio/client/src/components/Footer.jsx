import React from "react";
import { Github, Linkedin, Twitter, Mail, Heart, ArrowUp } from "lucide-react";

const quickLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Experience", id: "experience" },
  { name: "Education", id: "education" },
  { name: "Contact", id: "contact" },
];

const socialLinks = [
  { icon: Github, link: "https://github.com/nabin171", name: "GitHub" },
  {
    icon: Linkedin,
    link: "https://www.linkedin.com/in/nabin-karki-22a872203/",
    name: "LinkedIn",
  },
  { icon: Twitter, link: "https://twitter.com/yourusername", name: "Twitter" },
  {
    icon: Mail,
    link: "https://mail.google.com/mail/?view=cm&fs=1&to=karki0008@gmail.com",
    name: "Email",
  },
];

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer className="relative mt-10 border-t border-slate-200 bg-white/60 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-12 grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4 flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent-gradient font-display text-sm font-bold text-white shadow-glow">
                NK
              </span>
              <h3 className="font-display text-xl font-bold text-slate-900">
                Nabin Karki
              </h3>
            </div>
            <p className="mb-6 max-w-md leading-relaxed text-slate-600">
              A passionate Full Stack Developer from Nepal, dedicated to crafting
              beautiful, functional web applications that make a difference.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.name}
                    className="grid h-11 w-11 place-items-center rounded-xl border border-slate-200 bg-white text-slate-600 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:text-brand-600"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="mb-4 font-display text-sm font-bold uppercase tracking-[0.15em] text-brand-600">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-sm text-slate-600 transition-all duration-300 hover:translate-x-1 hover:text-brand-600"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-display text-sm font-bold uppercase tracking-[0.15em] text-brand-600">
              Get In Touch
            </h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=karki0008@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-brand-600"
                >
                  karki0008@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+9779862276291"
                  className="transition-colors hover:text-brand-600"
                >
                  +977 9862276291
                </a>
              </li>
              <li>Kathmandu, Nepal</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 md:flex-row">
          <p className="text-center text-sm text-slate-500 md:text-left">
            © {new Date().getFullYear()} Nabin Karki. All rights reserved. Made
            with{" "}
            <Heart size={13} className="inline text-rose-500" fill="currentColor" />{" "}
            in Nepal
          </p>

          <button
            onClick={scrollToTop}
            title="Scroll to top"
            className="grid h-11 w-11 place-items-center rounded-full bg-accent-gradient text-white shadow-glow transition-transform duration-300 hover:-translate-y-1"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
