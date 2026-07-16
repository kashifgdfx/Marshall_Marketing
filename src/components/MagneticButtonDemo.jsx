"use client";

import React from "react";
import { MagneticButton } from "../components/ui/magnetic-button";

export function MagneticButtonDemo() {
  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <MagneticButton>
      <button
        onClick={handleClick}
        className="cursor-pointer rounded-full bg-primary px-8 py-4 text-sm font-bold uppercase tracking-[0.12em] text-white shadow-lg shadow-primary/40 transition-transform duration-150 active:scale-95"
      >
        Connect With Experts
      </button>
    </MagneticButton>
  );
}