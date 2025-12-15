// import React from "react";

// export default function SkillsSection() {
//   const skills = Array(15).fill("ReactJS");

//   return (
    
//     <div className="absolute top-20 w-full flex flex-col items-center z-[60] animate-fadeIn">

//       {/* Title */}
//       <h1 className="neon-text outlined text-5xl tracking-widest mb-4">
//         MY SKILLS
//       </h1>

//       {/* Subtitle */}
//       <p className="neon-text text-xl tracking-wide mb-10">
//         HERE IS A LIST OF SOME OF MY SKILLS
//       </p>

//       {/* Skills Grid */}
//       <div className="
//         grid 
//         grid-cols-3 md:grid-cols-5 
//         gap-6 md:gap-8 
//         px-6 md:px-12 lg:px-32 
//         w-full max-w-6xl
//         mt-2
//       ">
//         {skills.map((skill, index) => (
//           <div
//             key={index}
//             className="
              
//               bg-white/10 
//               border border-white/30
//               rounded-xl 
//               px-6 md:px-8 
//               py-4 md:py-5 
//               text-white text-lg md:text-xl 
//               text-center
//               shadow-[0_0_25px_rgba(255,255,255,0.15)]
//             "
//           >
//             {skill}
//           </div>
          
          
//         ))}
//       </div>
//     </div>
//   );
// }


























import React from "react";

export default function SkillsSection() {
  const skills = Array(15).fill("ReactJS");

  return (
    
    <div className="absolute top-20 w-full flex flex-col items-center z-[60] animate-fadeIn">

      {/* Title - Adjusted text size */}
      <h1 className="neon-text outlined text-3xl sm:text-4xl md:text-5xl tracking-widest mb-4">
        MY SKILLS
      </h1>

      {/* Subtitle - Adjusted text size */}
      <p className="neon-text text-base sm:text-xl tracking-wide mb-10">
        HERE IS A LIST OF SOME OF MY SKILLS
      </p>

      {/* Skills Grid - Adjusted grid for small screens */}
      <div className="
        grid 
        grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 
        gap-4 sm:gap-6 md:gap-8 
        px-4 sm:px-6 md:px-12 lg:px-32 
        w-full max-w-6xl
        mt-2
      ">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="
              
              bg-white/10 
              border border-white/30
              rounded-xl 
              px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-5 
              text-sm sm:text-base md:text-xl 
              text-white
              text-center
              shadow-[0_0_25px_rgba(255,255,255,0.15)]
            "
          >
            {skill}
          </div>
          
          
        ))}
      </div>
    </div>
  );
}




