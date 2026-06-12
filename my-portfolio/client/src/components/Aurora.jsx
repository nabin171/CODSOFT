import React from "react";

/**
 * Fixed, decorative backdrop — a subtle blue mesh glow over a faint grid.
 * Kept airy and light to match a clean, professional aesthetic.
 */
const Aurora = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Faint grid */}
      <div className="absolute inset-0 bg-grid [background-size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_25%,transparent_70%)] opacity-70" />

      {/* Soft blue glow blobs */}
      <div className="absolute -top-40 left-1/4 h-[40rem] w-[40rem] rounded-full bg-brand-400/15 blur-[150px] animate-aurora-drift" />
      <div className="absolute top-1/3 -right-32 h-[34rem] w-[34rem] rounded-full bg-indigo-400/12 blur-[140px] animate-aurora-drift [animation-delay:-7s]" />
      <div className="absolute bottom-0 left-0 h-[32rem] w-[32rem] rounded-full bg-sky-300/12 blur-[140px] animate-aurora-drift [animation-delay:-13s]" />
    </div>
  );
};

export default Aurora;
