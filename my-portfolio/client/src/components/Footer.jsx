import React from "react";
import { Github, Linkedin, Twitter, Mail, Heart, ArrowUp } from "lucide-react";
import { href } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const quickLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Resume", id: "resume" },
    { name: "Contact", id: "contact" },
  ];

  const socialLinks = [
    { icon: Github, link: "https://github.com/nabin171", name: "GitHub" },
    {
      icon: Linkedin,
      link: "https://www.linkedin.com/in/nabin-karki-22a872203/",
      name: "LinkedIn",
    },
    {
      icon: Twitter,
      link: "https://twitter.com/yourusername",
      name: "Twitter",
    },
    {
      icon: Mail,
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=karki0008@gmail.com",
      target: "_blank",
      rel: "noopener noreferrer",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=karki0008@gmail.com",
      name: "Email",
    },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-12 h-12">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full"></div>
                <div className="absolute inset-0 flex items-center justify-center font-bold text-white text-lg">
                  NK
                </div>
              </div>
              <h3 className="text-2xl font-bold">Nabin Karki</h3>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              A passionate MERN Stack Developer from Nepal, dedicated to
              creating beautiful, functional web applications that make a
              difference.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 p-3 rounded-lg hover:bg-gradient-to-br hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 transform hover:scale-110"
                    title={social.name}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Get In Touch
            </h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=karki0008@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  karki0008@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+9779862276291"
                  className="hover:text-white transition-colors"
                >
                  +977 9862276291
                </a>
              </li>
              <li className="hover:text-white transition-colors">
                Kathmandu, Nepal
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Nabin Karki. All rights reserved. Made
            with{" "}
            <Heart
              size={14}
              className="inline text-red-500"
              fill="currentColor"
            />{" "}
            in Nepal
          </p>

          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 p-3 rounded-full hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-110 shadow-lg"
            title="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
