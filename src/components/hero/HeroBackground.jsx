"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const bgImages = ["/slide1.jpg", "/slide2.jpg", "/slide3.jpg"];

export default function HeroBackground({ mouseX = 0, mouseY = 0 }) {
  const [idx, setIdx] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    const t = setInterval(() => setIdx((p) => (p + 1) % bgImages.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      {/* Base dark */}
      <div className="absolute inset-0" style={{ background: "#071221" }} />

      {/* Layer 7 — BG image slider */}
      <AnimatePresence mode="sync">
        <motion.div
          key={bgImages[idx]}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 0.25, scale: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{
            opacity: { duration: 1.8, ease: "easeInOut" },
            scale: { duration: 8, ease: "linear" },
          }}
        >
          <Image src={bgImages[idx]} alt="" fill priority={idx === 0} quality={75} className="object-cover object-center" />
        </motion.div>
      </AnimatePresence>

      {/* Layer 1 — Animated gradient mesh */}
      {!reduce && (
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(ellipse 80% 60% at 20% 30%, rgba(47,111,228,0.20) 0%, transparent 65%), radial-gradient(ellipse 55% 75% at 80% 70%, rgba(77,139,255,0.13) 0%, transparent 65%)",
              "radial-gradient(ellipse 80% 60% at 45% 65%, rgba(47,111,228,0.24) 0%, transparent 65%), radial-gradient(ellipse 55% 75% at 55% 15%, rgba(77,139,255,0.16) 0%, transparent 65%)",
              "radial-gradient(ellipse 80% 60% at 20% 30%, rgba(47,111,228,0.20) 0%, transparent 65%), radial-gradient(ellipse 55% 75% at 80% 70%, rgba(77,139,255,0.13) 0%, transparent 65%)",
            ],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
      )}

      {/* Layer 3 — Security grid (large) */}
      {/* <div
        className="absolute inset-0"
        style={{
          opacity: 0.055,
          backgroundImage:
            "linear-gradient(rgba(47,111,228,0.9) 1px, transparent 1px), linear-gradient(90deg, rgba(47,111,228,0.9) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      /> */}
      {/* Security grid (small) */}
      {/* <div
        className="absolute inset-0"
        style={{
          opacity: 0.022,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      /> */}

      {/* Layer 4 — Glow orbs reacting to mouse */}
      {!reduce && (
        <>
          <motion.div
            className="absolute rounded-full"
            style={{
              width: 520, height: 520,
              background: "radial-gradient(circle, rgba(47,111,228,0.26) 0%, transparent 70%)",
              filter: "blur(90px)",
              top: "-8%", right: "-4%",
            }}
            animate={{ x: mouseX * 50, y: mouseY * 40, opacity: [0.55, 0.85, 0.55] }}
            transition={{ x: { type: "spring", stiffness: 40, damping: 20 }, y: { type: "spring", stiffness: 40, damping: 20 }, opacity: { duration: 8, repeat: Infinity, ease: "easeInOut" } }}
          />
          <motion.div
            className="absolute rounded-full"
            style={{
              width: 420, height: 420,
              background: "radial-gradient(circle, rgba(77,139,255,0.18) 0%, transparent 70%)",
              filter: "blur(80px)",
              bottom: "-8%", left: "-4%",
            }}
            animate={{ x: -mouseX * 35, y: -mouseY * 30, opacity: [0.4, 0.65, 0.4] }}
            transition={{ x: { type: "spring", stiffness: 35, damping: 20 }, y: { type: "spring", stiffness: 35, damping: 20 }, opacity: { duration: 11, repeat: Infinity, ease: "easeInOut" } }}
          />
          <motion.div
            className="absolute rounded-full"
            style={{
              width: 260, height: 260,
              background: "radial-gradient(circle, rgba(47,111,228,0.32) 0%, transparent 70%)",
              filter: "blur(60px)",
              top: "38%", left: "42%",
            }}
            animate={{ x: mouseX * 20, y: mouseY * 15, opacity: [0.3, 0.5, 0.3] }}
            transition={{ x: { type: "spring", stiffness: 30, damping: 20 }, y: { type: "spring", stiffness: 30, damping: 20 }, opacity: { duration: 16, repeat: Infinity, ease: "easeInOut" } }}
          />
        </>
      )}

      {/* Layer 5 — Noise texture */}
      <div
        className="absolute inset-0 pointer-events-none mix-blend-overlay"
        style={{
          opacity: 0.035,
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "150px 150px",
        }}
      />

      {/* Layer 6 — Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 110% 100% at 50% 50%, transparent 35%, rgba(7,18,33,0.75) 100%)",
        }}
      />

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{ background: "linear-gradient(to top, #071221, transparent)" }}
      />
    </div>
  );
}
