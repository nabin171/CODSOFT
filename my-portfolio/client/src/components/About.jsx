import React from "react";
import { Code2, Lightbulb, Target, Heart } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Maintainable, scalable code following industry best practices.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description: "Turning complex problems into simple, elegant solutions.",
  },
  {
    icon: Target,
    title: "Goal-Oriented",
    description: "Focused on delivering results that exceed expectations.",
  },
  {
    icon: Heart,
    title: "Passionate",
    description: "Always eager to learn and master new technologies.",
  },
];

const roles = [
  { emoji: "💻", label: "Developer" },
  { emoji: "🎨", label: "Designer" },
  { emoji: "🚀", label: "Innovator" },
  { emoji: "⚡", label: "Fast Learner" },
];

const About = () => {
  return (
    <section id="about" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About Me"
          title="The story behind"
          accent="the code"
          subtitle="Get to know who I am, what drives me, and how I approach building for the web."
        />

        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Visual */}
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-accent-gradient opacity-10 blur-2xl" />
              <div className="relative grid grid-cols-2 gap-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-card md:p-8">
                {roles.map((r) => (
                  <div
                    key={r.label}
                    className="card-hover rounded-2xl border border-slate-200 bg-slate-50 p-6"
                  >
                    <div className="mb-3 text-4xl">{r.emoji}</div>
                    <h3 className="font-display text-base font-bold text-slate-900">
                      {r.label}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Content */}
          <div className="space-y-6">
            <Reveal delay={80}>
              <h3 className="font-display text-2xl font-bold text-slate-900 md:text-3xl">
                Building digital experiences that make a difference
              </h3>
            </Reveal>
            <Reveal delay={140}>
              <div className="space-y-4 leading-relaxed text-slate-600">
                <p>
                  I'm a passionate{" "}
                  <span className="font-semibold text-slate-900">
                    Full Stack Developer
                  </span>{" "}
                  from Nepal with 2+ years of experience building modern web
                  applications. I specialize in responsive, user-friendly
                  interfaces backed by robust, scalable systems.
                </p>
                <p>
                  My journey started with a simple curiosity about how websites
                  work — it grew into a deep passion for crafting digital
                  experiences that are fast, beautiful, and intuitive.
                </p>
              </div>
            </Reveal>

            <div className="grid grid-cols-2 gap-4 pt-2">
              {highlights.map((item, i) => {
                const Icon = item.icon;
                return (
                  <Reveal key={item.title} delay={i * 90}>
                    <div className="card-hover h-full rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
                      <span className="mb-3 inline-grid h-10 w-10 place-items-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100">
                        <Icon size={20} />
                      </span>
                      <h4 className="font-display text-sm font-bold text-slate-900">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-xs leading-relaxed text-slate-500">
                        {item.description}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
