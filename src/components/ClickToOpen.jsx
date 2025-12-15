import React from "react";

export default function ClickToOpen({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="
        absolute 
        left-1/2 
        top-[59%]
        -translate-x-1/2
        z-[200]
        flex flex-col items-center justify-center
        cursor-pointer
        pointer-events-auto
        select-none
      "
    >

      {/* Target Frame — TOP LEFT */}
      <div className="absolute -top-6 -left-6 w-8 h-8 border-t-2 border-l-2 border-white/80 rounded-sm"></div>
      
      {/* Target Frame — BOTTOM RIGHT */}
      <div className="absolute -bottom-6 -right-6 w-8 h-8 border-b-2 border-r-2 border-white/80 rounded-sm"></div>

      {/* Main Text */}
      <div className="text-center">
        <p className="text-lg font-bold neon-text tracking-widest">CLICK</p>
        <p className="text-sm neon-text opacity-90">TO OPEN</p>
      </div>
    </div>
  );
}



