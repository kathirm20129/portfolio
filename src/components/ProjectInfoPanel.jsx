// import React from "react";

// export default function ProjectInfoPanel() {
//   return (
//     <div className="absolute inset-0 flex justify-center items-center z-[100] animate-fadeIn">

//       <div className="
//         max-w-3xl w-full 
//         bg-white/10 backdrop-blur-xl 
//         border border-white/20 
//         rounded-2xl p-10 
//         text-white shadow-xl relative
//       ">

//         {/* Top Icon */}
//         <div className="flex justify-center mb-6">
//           <img src="/assets/icon-github.png" className="w-10" />
//         </div>

//         <p className="leading-relaxed text-lg text-center px-6">
//           Lorem Ipsum is simply dummy text of the printing and typesetting
//           industry. Lorem Ipsum has been the industry’s standard dummy text
//           ever since the 1500s, when an unknown printer took a galley of type
//           and scrambled it.
//         </p>
//       </div>

//     </div>
//   );
// }





























import React from "react";

export default function ProjectInfoPanel() {
  return (
    <div className="absolute inset-0 flex justify-center items-center z-[100] animate-fadeIn">

      <div className="
        max-w-3xl w-full 
        bg-white/10 backdrop-blur-xl 
        border border-white/20 
        rounded-2xl p-6 sm:p-10 
        text-white shadow-xl relative
      ">

        {/* Top Icon */}
        <div className="flex justify-center mb-6">
          <img src="/assets/icon-github.png" className="w-8 sm:w-10" />
        </div>

        <p className="leading-relaxed text-base sm:text-lg text-center px-4 sm:px-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry’s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it.
        </p>
      </div>

    </div>
  );
}