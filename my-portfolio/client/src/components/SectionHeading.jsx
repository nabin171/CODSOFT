import React from "react";
import Reveal from "./Reveal";

/**
 * Consistent section header: eyebrow chip + title (with gradient accent word) + subtitle.
 */
const SectionHeading = ({ eyebrow, title, accent, subtitle, align = "center" }) => {
  const alignment = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`mb-16 flex flex-col gap-5 ${alignment}`}>
      {eyebrow && (
        <Reveal>
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={80}>
        <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
          {title} {accent && <span className="text-gradient">{accent}</span>}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={160}>
          <p
            className={`max-w-2xl text-balance text-base leading-relaxed text-slate-500 md:text-lg ${
              align === "center" ? "mx-auto" : ""
            }`}
          >
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
};

export default SectionHeading;