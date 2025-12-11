import React from "react";

export default function ScrollIndicator() {
  return (
    <div className="absolute right-6 bottom-12 z-40 hidden md:flex flex-col items-center gap-3">
      <div className="neon-text text-xs">SCROLL </div>
      <div className="w-10 h-16 rounded-2xl border-2 border-white/60 flex items-start justify-center p-1">
        <div className="w-2 h-2 rounded-full bg-white/80 animate-floaty" style={{animationDuration: '1.6s'}}></div>
      </div>
    </div>
  );
}

