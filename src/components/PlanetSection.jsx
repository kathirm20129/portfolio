import React from "react";

export default function PlanetSection({ setOpen }) {
  return (
    <div className="relative w-full max-w-5xl -mb-10 transition-all duration-500">

      <div className="absolute left-1/2 -translate-x-1/2 bottom-28">
        <button
          onClick={() => setOpen(true)}
          className="relative flex items-center justify-center w-40 h-40 md:w-48 md:h-48 rounded-full border-2 border-white/30 hover:bg-white/10 transition"
        >
          <div>
            <div className="text-sm md:text-base neon-text font-semibold">CLICK</div>
            <div className="text-xs md:text-sm neon-text opacity-80">TO OPEN</div>
          </div>
        </button>
      </div>

    </div>
  );
}
