"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { MagneticButton } from "../ui/magnetic-button";

export default function HeroCTA() {
  const reduce = useReducedMotion();

  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
      {/* Primary — Magnetic */}
      <MagneticButton strength={0.6} maxDistance={80}>
        <motion.button
          whileHover={reduce ? {} : { scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="group relative overflow-hidden rounded-full px-8 py-4 text-sm font-bold uppercase tracking-[0.12em] text-white cursor-pointer"
          style={{
            background: "linear-gradient(135deg, #2F6FE4 0%, #4D8BFF 100%)",
            boxShadow: "0 0 24px rgba(47,111,228,0.5), 0 4px 20px rgba(47,111,228,0.3)",
          }}
        >
          {/* Shine sweep */}
          <motion.span
            aria-hidden
            className="absolute inset-0 -translate-x-full"
            style={{ background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.25) 50%, transparent 60%)" }}
            animate={reduce ? {} : { translateX: ["-100%", "200%"] }}
            transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1.5, ease: "easeInOut" }}
          />
          {/* Ripple glow */}
          <motion.span
            aria-hidden
            className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ background: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.15) 0%, transparent 70%)" }}
          />
          <span className="relative z-10">Connect With Experts</span>
        </motion.button>
      </MagneticButton>

      {/* Secondary */}
      <motion.div whileHover={reduce ? {} : { y: -2 }} whileTap={{ scale: 0.97 }}>
        <Link
          href="/services"
          className="group relative inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-bold uppercase tracking-[0.12em] text-white overflow-hidden"
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.15)",
            backdropFilter: "blur(8px)",
          }}
        >
          {/* Animated border */}
          <motion.span
            aria-hidden
            className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ border: "1px solid rgba(47,111,228,0.6)", boxShadow: "0 0 12px rgba(47,111,228,0.3)" }}
          />
          <span className="relative z-10">Explore Solutions</span>
          <motion.span
            className="relative z-10 flex"
            animate={reduce ? {} : { x: [0, 5, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <FiArrowRight className="text-base text-blue-400" />
          </motion.span>
        </Link>
      </motion.div>
    </div>
  );
}
