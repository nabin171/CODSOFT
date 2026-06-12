import React from "react";
import { Download, FileText, ArrowUpRight } from "lucide-react";
import resume from "/Nabin_Karki_CV.pdf";
import Reveal from "./Reveal";

const Resume = () => {
  return (
    <section id="resume" className="px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-accent-gradient p-8 shadow-glow-lg md:p-12">
            {/* Decorative glow */}
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/15 blur-3xl" />
            <div className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-white/10 blur-3xl" />

            <div className="relative flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
              <div className="flex items-center gap-5">
                <span className="grid h-16 w-16 flex-shrink-0 place-items-center rounded-2xl bg-white/15 ring-1 ring-white/30 backdrop-blur-sm">
                  <FileText size={28} className="text-white" />
                </span>
                <div>
                  <h2 className="font-display text-2xl font-bold text-white md:text-3xl">
                    Want the full story?
                  </h2>
                  <p className="mt-1 max-w-md text-sm text-blue-50/90 md:text-base">
                    Grab my resume for a detailed look at my experience,
                    education, and achievements.
                  </p>
                </div>
              </div>

              <a
                href={resume}
                download="Nabin_Karki_CV.pdf"
                className="inline-flex flex-shrink-0 items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold text-brand-700 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
              >
                <Download size={18} /> Download Resume
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Resume;
