import React from "react";
import { ArrowUpRight, Download, Github, Linkedin, Sparkles } from "lucide-react";
import profilePicture from "../assets/profile_img.png";
import resume from "/Nabin_Karki_CV.pdf";

const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "20+", label: "Projects Shipped" },
  { value: "10+", label: "Happy Clients" },
];

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el)
    window.scrollTo({
      top: el.getBoundingClientRect().top + window.pageYOffset - 80,
      behavior: "smooth",
    });
};

const Body = () => {
  return (
    <div className="relative flex min-h-screen items-center px-6 pb-20 pt-32">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Left content */}
        <div className="flex flex-col gap-8 text-center lg:text-left">
          <div className="flex justify-center lg:justify-start">
            <span className="eyebrow animate-fade-up">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Available for new projects
            </span>
          </div>

          <div className="space-y-3">
            <p className="font-display text-lg font-medium text-slate-500">
              Hello, I'm
            </p>
            <h1 className="font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
              Nabin Karki
            </h1>
            <h2 className="text-balance text-2xl font-bold text-gradient sm:text-3xl lg:text-4xl">
              Full Stack Developer
            </h2>
          </div>

          <p className="mx-auto max-w-xl text-balance text-base leading-relaxed text-slate-600 md:text-lg lg:mx-0">
            I craft modern, performant and scalable web applications with{" "}
            <span className="font-semibold text-slate-900">React</span>,{" "}
            <span className="font-semibold text-slate-900">Next.js</span> and the{" "}
            <span className="font-semibold text-slate-900">MERN stack</span> —
            blending clean code with thoughtful, pixel-perfect design.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
            <button onClick={() => scrollTo("projects")} className="btn-primary">
              View my work <ArrowUpRight size={18} />
            </button>
            <a href={resume} download="Nabin_Karki_CV.pdf" className="btn-ghost">
              <Download size={18} /> Download CV
            </a>
          </div>

          {/* Socials */}
          <div className="flex items-center justify-center gap-4 lg:justify-start">
            <span className="text-sm text-slate-500">Find me on</span>
            <div className="h-px w-8 bg-slate-300" />
            {[
              { Icon: Github, link: "https://github.com/nabin171" },
              {
                Icon: Linkedin,
                link: "https://www.linkedin.com/in/nabin-karki-22a872203/",
              },
            ].map(({ Icon, link }, i) => (
              <a
                key={i}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-600"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-2 grid grid-cols-3 gap-4 border-t border-slate-200 pt-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center lg:text-left">
                <div className="font-display text-3xl font-bold text-slate-900 md:text-4xl">
                  {s.value}
                </div>
                <div className="mt-1 text-xs font-medium text-slate-500 md:text-sm">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right - portrait */}
        <div className="relative mx-auto w-full max-w-md lg:mx-0">
          <div className="group relative">
            {/* Glow */}
            <div className="absolute -inset-6 rounded-[2.5rem] bg-accent-gradient opacity-20 blur-3xl transition-opacity duration-500 group-hover:opacity-30" />

            {/* Image card */}
            <div className="relative overflow-hidden rounded-[2.1rem] border border-slate-200 bg-white shadow-card">
              <img
                src={profilePicture}
                alt="Nabin Karki"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
            </div>

            {/* Floating badge - role */}
            <div className="absolute -bottom-5 -left-5 flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-3 pr-5 shadow-card animate-float">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent-gradient">
                <Sparkles size={20} className="text-white" />
              </span>
              <div className="text-left">
                <p className="font-display text-sm font-bold text-slate-900">
                  Open to work
                </p>
                <p className="text-xs text-slate-500">Remote · Worldwide</p>
              </div>
            </div>

            {/* Floating badge - tech */}
            <div className="absolute -right-4 top-8 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-card animate-float [animation-delay:-3s]">
              <p className="font-display text-xl font-bold text-gradient">{"</>"}</p>
              <p className="text-[11px] font-medium text-slate-500">Clean Code</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
