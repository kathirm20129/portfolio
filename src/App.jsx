import React from "react";
import Hero from "./components/Hero";

export default function App() {
  return (
    <div className="min-h-screen bg-deep bg-[length:cover] bg-center" style={{ backgroundImage: "url('/assets/bg-space.png')" }}>
      <Hero />
    </div>
  );
}
