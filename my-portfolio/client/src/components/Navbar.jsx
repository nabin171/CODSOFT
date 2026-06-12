import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Experience", id: "experience" },
  { name: "Education", id: "education" },
  { name: "Contact", id: "contact" },
];

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (!section) return;
    const top = section.getBoundingClientRect().top + window.pageYOffset - 80;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
        <nav
          className={`flex w-full max-w-6xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 md:px-5 ${
            scrolled
              ? "border border-slate-200 bg-white/85 shadow-card backdrop-blur-md"
              : "border border-transparent bg-transparent"
          }`}
        >
          {/* Logo */}
          <button
            onClick={() => scrollToSection("home")}
            className="group flex items-center gap-3"
          >
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent-gradient font-display text-sm font-bold text-white shadow-glow transition-transform duration-300 group-hover:scale-105">
              NK
            </span>
            <span className="font-display text-lg font-bold text-slate-900">
              Nabin<span className="text-brand-600">.</span>
            </span>
          </button>

          {/* Desktop links */}
          <div className="hidden items-center gap-1 rounded-full border border-slate-200/80 bg-slate-100/70 p-1 lg:flex">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                  active === link.id
                    ? "text-white"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {active === link.id && (
                  <span className="absolute inset-0 -z-10 rounded-full bg-accent-gradient shadow-sm" />
                )}
                {link.name}
              </button>
            ))}
          </div>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollToSection("contact")}
              className="hidden items-center gap-1.5 rounded-full bg-accent-gradient px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition-transform duration-300 hover:-translate-y-0.5 sm:flex"
            >
              Let's talk <ArrowUpRight size={16} />
            </button>
            <button
              onClick={() => setIsOpen((o) => !o)}
              className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 bg-white text-slate-700 lg:hidden"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      {isOpen && (
        <div className="fixed inset-x-4 top-20 z-40 rounded-2xl border border-slate-200 bg-white/95 p-3 shadow-card backdrop-blur-md lg:hidden">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                scrollToSection(link.id);
                setIsOpen(false);
              }}
              className={`block w-full rounded-xl px-4 py-3 text-left text-sm font-medium transition-colors ${
                active === link.id
                  ? "bg-brand-50 text-brand-700"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </>
  );
};

export default Navbar;
