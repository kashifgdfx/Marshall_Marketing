"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

const stats = [
  { value: 20,    suffix: "+", label: "Years Experience" },
  { value: 150,   suffix: "+", label: "Organizations" },
  { value: 50000, suffix: "+", label: "Professionals Trained", compact: true },
  { value: 99.7,  suffix: "%", label: "Detection Accuracy", decimal: true },
];

function Counter({ value, suffix, decimal, compact, reduce }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    if (!inView || reduce) { setCount(value); return; }
    const duration = 1800;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      current = Math.min(current + increment, value);
      setCount(current);
      if (step >= steps) clearInterval(timer);
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, value, reduce]);

  const display = () => {
    if (compact && count >= 1000) return `${(count / 1000).toFixed(count >= 10000 ? 0 : 1)}K`;
    if (decimal) return count.toFixed(1);
    return Math.floor(count).toString();
  };

  return (
    <span ref={ref} className="tabular-nums">
      {display()}{suffix}
    </span>
  );
}

export default function HeroStats() {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-2"
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
    >
      {stats.map((s, i) => (
        <motion.div
          key={i}
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
          }}
          className="group relative flex flex-col items-start gap-1 px-4 py-3 rounded-xl overflow-hidden"
          style={{
            background: "rgba(7,18,33,0.5)",
            border: "1px solid rgba(47,111,228,0.2)",
            backdropFilter: "blur(8px)",
          }}
          whileHover={{ borderColor: "rgba(47,111,228,0.5)", y: -2 }}
          transition={{ duration: 0.2 }}
        >
          {/* Glow on hover */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            style={{ background: "radial-gradient(ellipse at 50% 100%, rgba(47,111,228,0.12) 0%, transparent 70%)" }}
          />
          <span className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-none"
            style={{ textShadow: "0 0 20px rgba(47,111,228,0.6)" }}>
            <Counter {...s} reduce={reduce} />
          </span>
          <span className="text-[11px] sm:text-xs text-slate-400 font-medium leading-tight">{s.label}</span>
        </motion.div>
      ))}
    </motion.div>
  );
}
