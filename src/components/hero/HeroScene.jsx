"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";
import HeroRadar from "./HeroRadar";

export default function HeroScene({ mouseX = 0, mouseY = 0 }) {
  const reduce = useReducedMotion();
  const rotX = reduce ? 0 : mouseY * -12;
  const rotY = reduce ? 0 : mouseX * 12;

  return (
    <div className="relative w-full h-full flex items-center justify-center" aria-hidden="true">
      {/* Radar background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-30">
        <div className="w-[90%] h-[90%] max-w-[500px] max-h-[500px]">
          <HeroRadar />
        </div>
      </div>

      {/* 3D Core */}
      <motion.div
        className="relative z-10"
        style={{ perspective: "900px" }}
        animate={reduce ? {} : { rotateX: rotX, rotateY: rotY }}
        transition={{ type: "spring", stiffness: 60, damping: 18 }}
      >
        <motion.div
          style={{ transformStyle: "preserve-3d" }}
          animate={reduce ? {} : { rotateY: [0, 360] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          className="relative w-[220px] h-[220px] sm:w-[260px] sm:h-[260px]"
        >
          {/* Outer orbit ring 1 */}
          <motion.div
            className="absolute inset-0 rounded-full border border-blue-500/30"
            style={{
              transform: "rotateX(70deg)",
              boxShadow: "0 0 20px rgba(47,111,228,0.3), inset 0 0 20px rgba(47,111,228,0.1)",
            }}
            animate={reduce ? {} : { rotateZ: [0, 360] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />

          {/* Outer orbit ring 2 */}
          <motion.div
            className="absolute rounded-full border border-blue-400/20"
            style={{
              inset: "-20px",
              transform: "rotateX(70deg) rotateZ(45deg)",
              boxShadow: "0 0 15px rgba(77,139,255,0.2)",
            }}
            animate={reduce ? {} : { rotateZ: [45, 405] }}
            transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
          />

          {/* Inner orbit ring */}
          <motion.div
            className="absolute rounded-full border border-blue-300/40"
            style={{
              inset: "20px",
              transform: "rotateX(65deg)",
              boxShadow: "0 0 12px rgba(77,139,255,0.4)",
            }}
            animate={reduce ? {} : { rotateZ: [0, -360] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          />

          {/* Core sphere */}
          <div className="absolute inset-[35px] rounded-full flex items-center justify-center"
            style={{
              background: "radial-gradient(circle at 35% 35%, rgba(77,139,255,0.9), rgba(15,40,100,0.95) 70%)",
              boxShadow: "0 0 40px rgba(47,111,228,0.6), 0 0 80px rgba(47,111,228,0.25), inset 0 0 30px rgba(77,139,255,0.3)",
              border: "1px solid rgba(77,139,255,0.5)",
            }}
          >
            {/* Shield icon inside core */}
            <svg viewBox="0 0 24 24" className="w-10 h-10 sm:w-12 sm:h-12" fill="none">
              <motion.path
                d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7L12 2z"
                stroke="rgba(220,232,255,0.9)"
                strokeWidth="1.2"
                fill="rgba(47,111,228,0.3)"
                animate={reduce ? {} : { opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.path
                d="M9 12l2 2 4-4"
                stroke="rgba(220,232,255,1)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
              />
            </svg>
          </div>

          {/* Floating scan line */}
          {!reduce && (
            <motion.div
              className="absolute left-[35px] right-[35px] h-px"
              style={{ background: "linear-gradient(90deg, transparent, rgba(77,139,255,0.8), transparent)" }}
              animate={{ top: ["35px", "calc(100% - 35px)", "35px"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          )}
        </motion.div>
      </motion.div>

      {/* Ambient glow beneath */}
      <motion.div
        className="absolute bottom-[10%] left-1/2 -translate-x-1/2 rounded-full"
        style={{
          width: "60%", height: "30px",
          background: "radial-gradient(ellipse, rgba(47,111,228,0.4) 0%, transparent 70%)",
          filter: "blur(12px)",
        }}
        animate={reduce ? {} : { opacity: [0.4, 0.7, 0.4], scaleX: [1, 1.15, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Orbiting data points */}
      {!reduce && [0, 60, 120, 180, 240, 300].map((deg, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-blue-400"
          style={{
            boxShadow: "0 0 6px rgba(77,139,255,0.9)",
            top: "50%", left: "50%",
          }}
          animate={{
            x: Math.cos((deg + 0) * Math.PI / 180) * 140,
            y: Math.sin((deg + 0) * Math.PI / 180) * 50,
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            x: { duration: 10, repeat: Infinity, ease: "linear", from: Math.cos(deg * Math.PI / 180) * 140 },
            y: { duration: 10, repeat: Infinity, ease: "linear", from: Math.sin(deg * Math.PI / 180) * 50 },
            opacity: { duration: 2, repeat: Infinity, delay: i * 0.3, ease: "easeInOut" },
          }}
        />
      ))}
    </div>
  );
}
