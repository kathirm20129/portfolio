// // src/components/ExperienceSection.jsx
// import React from "react";

// export default function ExperienceSection({ onOpenInfo }) {
//   return (
//     <div className="absolute top-20 w-full flex flex-col items-center z-[60] animate-fadeIn">
//       {/* Title */}
//       <h1 className="neon-text outlined text-5xl tracking-widest mb-2">
//         MY WORK EXPERIENCE
//       </h1>

//       <p className="neon-text text-xl tracking-wide mb-10">
//         MICROSOFT SDE INTERN
//       </p>

//       {/* CLICK TO OPEN */}
//       <button
//         onClick={onOpenInfo}
//         className="relative mt-6 flex items-center justify-center text-white px-10 py-5 cursor-pointer select-none"
//       >
//         {/* Frame TL */}
//         <div className="absolute -top-6 -left-6 w-8 h-8 border-t-2 border-l-2 border-white/80"></div>

//         {/* Frame BR */}
//         <div className="absolute -bottom-6 -right-6 w-8 h-8 border-b-2 border-r-2 border-white/80"></div>

//         <div className="text-center">
//           <p className="text-lg font-bold neon-text tracking-widest">CLICK</p>
//           <p className="text-sm neon-text opacity-90">TO OPEN</p>
//         </div>
//       </button>

//       {/* navigation arrows (left/right placeholders) */}
//       <div className="absolute left-20 top-1/2 -translate-y-1/2 cursor-pointer">
//         <img src="/assets/left.png" className="w-10 opacity-80 hover:opacity-100" alt="left" />
//       </div>

//       <div className="absolute right-20 top-1/2 -translate-y-1/2 cursor-pointer">
//         <img src="/assets/right.png" className="w-10 opacity-80 hover:opacity-100" alt="right" />
//       </div>
//     </div>
//   );
// }





























// src/components/ExperienceSection.jsx
import React from "react";

export default function ExperienceSection({ onOpenInfo }) {
  return (
    <div className="absolute top-20 w-full flex flex-col items-center z-[60] animate-fadeIn">
      {/* Title - Adjusted text size */}
      <h1 className="neon-text outlined text-3xl sm:text-4xl md:text-5xl tracking-widest mb-2">
        MY WORK EXPERIENCE
      </h1>

      {/* Subtitle - Adjusted text size */}
      <p className="neon-text text-base sm:text-xl tracking-wide mb-10">
        MICROSOFT SDE INTERN
      </p>

      {/* CLICK TO OPEN - Adjusted padding/text size */}
      <button
        onClick={onOpenInfo}
        className="relative mt-6 flex items-center justify-center text-white px-8 py-4 sm:px-10 sm:py-5 cursor-pointer select-none"
      >
        {/* Frame TL - Adjusted size */}
        <div className="absolute -top-6 -left-6 w-6 h-6 sm:w-8 sm:h-8 border-t-2 border-l-2 border-white/80"></div>

        {/* Frame BR - Adjusted size */}
        <div className="absolute -bottom-6 -right-6 w-6 h-6 sm:w-8 sm:h-8 border-b-2 border-r-2 border-white/80"></div>

        <div className="text-center">
          <p className="text-base font-bold neon-text tracking-widest sm:text-lg">CLICK</p>
          <p className="text-xs neon-text opacity-90 sm:text-sm">TO OPEN</p>
        </div>
      </button>

      {/* navigation arrows (left/right placeholders) - Adjusted positioning for small screens */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 cursor-pointer sm:left-10 md:left-20">
        <img src="/assets/left.png" className="w-8 md:w-10 opacity-80 hover:opacity-100" alt="left" />
      </div>

      <div className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer sm:right-10 md:right-20">
        <img src="/assets/right.png" className="w-8 md:w-10 opacity-80 hover:opacity-100" alt="right" />
      </div>
    </div>
  );
}