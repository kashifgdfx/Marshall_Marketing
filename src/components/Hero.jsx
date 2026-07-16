"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { FiShield, FiCheckCircle } from "react-icons/fi";
import dynamic from "next/dynamic";

import HeroBackground from "./hero/HeroBackground";
import HeroStats from "./hero/HeroStats";
import HeroCTA from "./hero/HeroCTA";

// Lazy-load heavy visual components
const HeroParticles    = dynamic(() => import("./hero/HeroParticles"),    { ssr: false });
const HeroNetwork      = dynamic(() => import("./hero/HeroNetwork"),      { ssr: false });
const HeroScene        = dynamic(() => import("./hero/HeroScene"),        { ssr: false });
const HeroFloatingCards = dynamic(() => import("./hero/HeroFloatingCards"), { ssr: false });

const bgImages = ["/slide1.jpg", "/slide2.jpg", "/slide3.jpg"];

const trustPoints = [
  "ISO 9001-2015 Certified",
  "MSME Registered Enterprise",
  "Advanced CBT Tech",
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.13, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  show: {
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

// Slide indicators (kept from original)
function SlideIndicators({ total, current, onChange }) {
  return (
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-30">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          onClick={() => onChange(i)}
          aria-label={`Go to slide ${i + 1}`}
          className="relative h-1.5 rounded-full overflow-hidden bg-white/20 transition-all duration-500"
          style={{ width: i === current ? 32 : 10 }}
        >
          {i === current && (
            <motion.span
              key={`fill-${i}`}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 5, ease: "linear" }}
              className="absolute inset-y-0 left-0 bg-blue-500"
            />
          )}
        </button>
      ))}
    </div>
  );
}

export default function Hero() {
  const reduce = useReducedMotion();
  const sectionRef = useRef(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [slideIdx, setSlideIdx] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Scroll-driven effects
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const heroScale    = useTransform(scrollYProgress, [0, 1], [1, 0.96]);
  const heroBgScale  = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const heroOpacity  = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const cardsOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  // Mouse tracking (normalized -1 to 1)
  const handleMouseMove = useCallback((e) => {
    if (reduce || isMobile) return;
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMouse({
      x: ((e.clientX - rect.left) / rect.width) * 2 - 1,
      y: ((e.clientY - rect.top) / rect.height) * 2 - 1,
    });
  }, [reduce, isMobile]);

  const handleMouseLeave = useCallback(() => setMouse({ x: 0, y: 0 }), []);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Slide auto-advance
  useEffect(() => {
    const t = setInterval(() => setSlideIdx((p) => (p + 1) % bgImages.length), 5000);
    return () => clearInterval(t);
  }, []);

  const headingX = reduce || isMobile ? 0 : mouse.x * -8;
  const headingY = reduce || isMobile ? 0 : mouse.y * -5;

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[100svh] w-full flex items-center justify-center overflow-hidden"
      aria-label="Marshal Marketing & Management — Hero"
    >
      {/* ── Layered Background ── */}
      <motion.div className="absolute inset-0" style={{ scale: heroBgScale }}>
        <HeroBackground mouseX={mouse.x} mouseY={mouse.y} />
      </motion.div>

      {/* ── Particles (full section) ── */}
      {!isMobile && (
        <div className="absolute inset-0 z-[1]">
          <HeroParticles mouseX={mouse.x} mouseY={mouse.y} />
        </div>
      )}

      {/* ── Network (full section) ── */}
      {!isMobile && (
        <div className="absolute inset-0 z-[2]">
          <HeroNetwork />
        </div>
      )}

      {/* ── Main content wrapper ── */}
      <motion.div
        style={{ scale: heroScale, opacity: heroOpacity }}
        className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 py-24 lg:py-28 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center"
      >
        {/* ════ LEFT — Content ════ */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-6 text-left"
        >
          {/* Badge */}
          <motion.div
            variants={item}
            className="inline-flex w-fit items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white"
            style={{
              background: "rgba(47,111,228,0.12)",
              border: "1px solid rgba(47,111,228,0.4)",
              backdropFilter: "blur(10px)",
              boxShadow: "0 0 16px rgba(47,111,228,0.2)",
            }}
          >
            <motion.span
              animate={reduce ? {} : { scale: [1, 1.35, 1], opacity: [1, 0.55, 1] }}
              transition={{ duration: 2.2, repeat: Infinity }}
              className="flex"
            >
              <FiShield className="text-blue-400" />
            </motion.span>
            <span className="text-slate-200">Your Security, Our Priority</span>
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={item}
            style={{ x: headingX, y: headingY }}
            transition={{ type: "spring", stiffness: 60, damping: 18 }}
            className="text-4xl sm:text-5xl lg:text-[3.6rem] xl:text-[4rem] font-black text-white leading-[1.04] tracking-tight"
          >
            Securing Infrastructure
            <br />
            <span className="relative inline-block mt-1">
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage: "linear-gradient(90deg, #2F6FE4 0%, #7AA7FF 40%, #4D8BFF 70%, #2F6FE4 100%)",
                  backgroundSize: "200% auto",
                  animation: "heroShine 5s linear infinite",
                }}
              >
                Advancing Threat Detection
              </span>
              <motion.span
                aria-hidden
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.1, duration: 1.1, ease: "easeOut" }}
                className="absolute -bottom-2 left-0 h-[3px] w-full origin-left rounded-full"
                style={{ background: "linear-gradient(90deg, #2F6FE4, #4D8BFF, transparent)" }}
              />
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={item}
            className="max-w-xl text-base sm:text-lg leading-relaxed text-slate-300 font-medium"
          >
            M/s Marshal Marketing &amp; Management Pvt. Ltd. is India&apos;s undisputed market leader in
            Computer-Based X-Ray Screener Training, offering elite security management &amp; analysis
            across national sectors.
          </motion.p>

          {/* Trust chips */}
          <motion.div variants={item} className="flex flex-wrap gap-2.5">
            {trustPoints.map((point, i) => (
              <motion.div
                key={point}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + i * 0.14, duration: 0.5 }}
                whileHover={{ y: -2 }}
                className="group flex items-center gap-2 rounded-lg px-3.5 py-2 text-xs sm:text-sm font-semibold text-slate-200 transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  backdropFilter: "blur(6px)",
                }}
              >
                <FiCheckCircle className="text-blue-400 text-sm group-hover:scale-110 transition-transform" />
                {point}
              </motion.div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div variants={item}>
            <HeroCTA />
          </motion.div>

          {/* Stats */}
          <motion.div variants={item}>
            <HeroStats />
          </motion.div>
        </motion.div>

        {/* ════ RIGHT — 3D Scene ════ */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          style={{ opacity: cardsOpacity }}
          className="relative hidden lg:flex items-center justify-center"
        >
          <div className="relative w-full aspect-square max-w-[520px]">
            {/* Scene glow backdrop */}
            <div
              className="absolute inset-[10%] rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(47,111,228,0.12) 0%, transparent 70%)",
                filter: "blur(30px)",
              }}
            />
            <HeroScene mouseX={mouse.x} mouseY={mouse.y} />
            <HeroFloatingCards mouseX={mouse.x} mouseY={mouse.y} />
          </div>
        </motion.div>
      </motion.div>

      {/* ── Slide indicators ── */}
      <SlideIndicators total={bgImages.length} current={slideIdx} onChange={setSlideIdx} />

      {/* ── Scroll cue ── */}
      {!reduce && (
        <motion.div
          className="absolute bottom-14 right-6 hidden md:flex flex-col items-center gap-2 text-white/50 text-[10px] uppercase tracking-[0.3em] z-30"
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span>Scroll</span>
          <span className="h-8 w-px" style={{ background: "linear-gradient(to bottom, #2F6FE4, transparent)" }} />
        </motion.div>
      )}

      <style>{`
        @keyframes heroShine {
          to { background-position: 200% center; }
        }
      `}</style>
    </section>
  );
}
