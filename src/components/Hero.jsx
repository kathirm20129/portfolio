import React from "react";
import SocialBar from "./SocialBar";
import ScrollIndicator from "./ScrollIndicator";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Contact top-right */}
      <div className="absolute top-6 right-6 z-40">
        <button className="px-4 py-2 text-sm tracking-wider border border-white/20 rounded-full neon-text hover:scale-105 transition">
          CONTACT ME
        </button>
      </div>

      {/* Left social vertical */}
      <SocialBar />

      {/* Right scroll indicator */}
      <ScrollIndicator />

      {/* Hero content */}
      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-20">
        {/* Header / Title */}
        <div className="pt-12 text-center">
          <div className="mx-auto max-w-3xl">
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="w-24 md:w-40 header-accent"></div>
              <h2 className="neon-text text-xs md:text-sm uppercase tracking-widest">A MESSAGE FROM EARTH</h2>
              <div className="w-24 md:w-40 header-accent"></div>
            </div>

            <h1 className="neon-text text-3xl md:text-5xl font-extrabold outlined mb-4">HELLO FELLOW GALAXY MEMBER</h1>
            <p className="neon-text text-sm md:text-base opacity-70 mb-8">I AM JAY</p>
          </div>
        </div>
      </div>

      {/* Planet & astronaut block */}
      <div className="absolute inset-0 flex items-end justify-center pointer-events-none">
        {/* Planet wrapper */}
        <div className="relative w-full max-w-4xl sm:max-w-3xl md:max-w-7xl -mb-6 md:-mb-10 lg:-mb-20">
          {/* subtle rotation layer */}
          <img src="/assets/bg-space.png.png" alt="planet" className="w-full block drop-shadow-2xl transform animate-slowspin/10" style={{animationDuration: '80s'}} />

          {/* Astronaut */}
          <img
            src="/assets/bg-space.png.png"
            alt="astronaut"
            className="absolute left-1/2 transform -translate-x-1/2 -top-36 sm:-top-44 md:-top-56 w-28 sm:w-36 md:w-48 animate-floaty pointer-events-auto"
            style={{ zIndex: 30 }}
          />

          {/* Click to open target on planet */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-24 md:bottom-28 text-center pointer-events-auto">
            <div className="relative inline-flex items-center justify-center">
              <div className="w-36 h-36 md:w-44 md:h-44 rounded-full border-2 border-white/20 flex items-center justify-center click-to-open">
                <div className="text-center">
                  <div className="text-sm md:text-base neon-text font-semibold">CLICK</div>
                  <div className="text-xs md:text-sm neon-text opacity-80">TO OPEN</div>
                </div>
              </div>

              {/* corner brackets */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{opacity:0.8}}>
                <path d="M30 70 L60 70" stroke="#b28cff" strokeWidth="2" strokeLinecap="round" />
                <path d="M170 130 L140 130" stroke="#64ffc6" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative left and right subtle elements (for desktop) */}
      <div className="hidden lg:block absolute left-6 top-1/3 opacity-40">
        <div className="w-2 h-40 bg-gradient-to-b from-purple-600/30 to-transparent rounded-lg"></div>
      </div>

      <div className="hidden lg:block absolute right-6 top-1/3 opacity-40">
        <div className="w-2 h-40 bg-gradient-to-b from-cyan-400/30 to-transparent rounded-lg"></div>
      </div>
    </section>
  );
}
