"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function HeroRadar({ className = "" }) {
  const reduce = useReducedMotion();

  const rings = [1, 0.75, 0.5, 0.25];

  return (
    <div className={`relative ${className}`} aria-hidden="true">
      <svg viewBox="0 0 300 300" className="w-full h-full" style={{ overflow: "visible" }}>
        <defs>
          <radialGradient id="radarGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(47,111,228,0.15)" />
            <stop offset="100%" stopColor="rgba(47,111,228,0)" />
          </radialGradient>
          <radialGradient id="sweepGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(77,139,255,0.0)" />
            <stop offset="60%" stopColor="rgba(77,139,255,0.25)" />
            <stop offset="100%" stopColor="rgba(47,111,228,0.55)" />
          </radialGradient>
          <clipPath id="radarClip">
            <circle cx="150" cy="150" r="148" />
          </clipPath>
        </defs>

        {/* Background fill */}
        <circle cx="150" cy="150" r="148" fill="url(#radarGlow)" />

        {/* Rings */}
        {rings.map((scale, i) => (
          <g key={i}>
            <circle
              cx="150" cy="150"
              r={148 * scale}
              fill="none"
              stroke="rgba(47,111,228,0.3)"
              strokeWidth="0.8"
            />
            {/* Expanding pulse ring */}
            {!reduce && (
              <motion.circle
                cx="150" cy="150"
                r={148 * scale}
                fill="none"
                stroke="rgba(77,139,255,0.5)"
                strokeWidth="1.5"
                initial={{ r: 148 * scale * 0.85, opacity: 0.6 }}
                animate={{ r: 148 * scale * 1.08, opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.75,
                  ease: "easeOut",
                }}
              />
            )}
          </g>
        ))}

        {/* Cross hairs */}
        <line x1="150" y1="2" x2="150" y2="298" stroke="rgba(47,111,228,0.2)" strokeWidth="0.6" />
        <line x1="2" y1="150" x2="298" y2="150" stroke="rgba(47,111,228,0.2)" strokeWidth="0.6" />
        <line x1="44" y1="44" x2="256" y2="256" stroke="rgba(47,111,228,0.12)" strokeWidth="0.5" />
        <line x1="256" y1="44" x2="44" y2="256" stroke="rgba(47,111,228,0.12)" strokeWidth="0.5" />

        {/* Sweep */}
        {!reduce && (
          <motion.g
            style={{ transformOrigin: "150px 150px" }}
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            clipPath="url(#radarClip)"
          >
            {/* Sweep cone */}
            <path
              d="M150,150 L298,150 A148,148 0 0,0 150,2 Z"
              fill="url(#sweepGrad)"
              opacity="0.7"
            />
            {/* Sweep leading edge line */}
            <line
              x1="150" y1="150"
              x2="298" y2="150"
              stroke="rgba(77,139,255,0.9)"
              strokeWidth="1.5"
            />
          </motion.g>
        )}

        {/* Blip dots */}
        {[
          { cx: 195, cy: 110, delay: 0 },
          { cx: 115, cy: 185, delay: 1.2 },
          { cx: 220, cy: 175, delay: 2.4 },
          { cx: 90, cy: 120, delay: 0.8 },
        ].map((dot, i) => (
          <motion.circle
            key={i}
            cx={dot.cx} cy={dot.cy} r="3"
            fill="rgba(77,139,255,0.9)"
            initial={{ opacity: 0, r: 1 }}
            animate={{ opacity: [0, 1, 0.6, 0], r: [1, 3.5, 2.5, 1] }}
            transition={{ duration: 4, repeat: Infinity, delay: dot.delay, ease: "easeOut" }}
          />
        ))}

        {/* Center dot */}
        <circle cx="150" cy="150" r="4" fill="rgba(77,139,255,0.9)" />
        <circle cx="150" cy="150" r="2" fill="rgba(220,232,255,1)" />
        <motion.circle
          cx="150" cy="150" r="8"
          fill="none"
          stroke="rgba(77,139,255,0.6)"
          strokeWidth="1"
          animate={{ r: [8, 18, 8], opacity: [0.6, 0, 0.6] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
        />
      </svg>
    </div>
  );
}
