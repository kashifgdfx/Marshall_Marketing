"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FiShield, FiMonitor, FiActivity, FiAward, FiLock } from "react-icons/fi";

const cards = [
  { icon: FiShield,   label: "Threat Detection",       value: "99.7% Accuracy",        top: "4%",  left: "2%",  delay: 0 },
  { icon: FiMonitor,  label: "Computer Based Training", value: "CBT Certified",          top: "4%",  right: "2%", delay: 0.2 },
  { icon: FiActivity, label: "Real-Time Monitoring",    value: "24 / 7 Active",          bottom: "28%", left: "0%",  delay: 0.4 },
  { icon: FiAward,    label: "Government Trusted",      value: "ISO 9001-2015",          bottom: "28%", right: "0%", delay: 0.6 },
  { icon: FiLock,     label: "Enterprise Security",     value: "150+ Organizations",     bottom: "4%",  left: "50%", delay: 0.8 },
];

export default function HeroFloatingCards({ mouseX = 0, mouseY = 0 }) {
  const reduce = useReducedMotion();

  return (
    <div className="absolute inset-0 pointer-events-none z-20" aria-hidden="true">
      {cards.map((card, i) => {
        const Icon = card.icon;
        const style = {};
        if (card.top)    style.top    = card.top;
        if (card.bottom) style.bottom = card.bottom;
        if (card.left)   style.left   = card.left;
        if (card.right)  style.right  = card.right;
        if (card.left === "50%") style.transform = "translateX(-50%)";

        const tiltX = reduce ? 0 : mouseY * -8;
        const tiltY = reduce ? 0 : mouseX * 8;

        return (
          <motion.div
            key={i}
            className="absolute hidden lg:flex items-center gap-2.5 px-3 py-2.5 rounded-xl"
            style={{
              ...style,
              background: "rgba(7,18,33,0.65)",
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",
              border: "1px solid rgba(47,111,228,0.35)",
              boxShadow: "0 0 18px rgba(47,111,228,0.18), inset 0 1px 0 rgba(255,255,255,0.06)",
              minWidth: "160px",
            }}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{
              opacity: 1, y: 0, scale: 1,
              rotateX: tiltX,
              rotateY: tiltY,
            }}
            transition={{
              opacity: { delay: card.delay + 0.8, duration: 0.6 },
              y: { delay: card.delay + 0.8, duration: 0.6 },
              scale: { delay: card.delay + 0.8, duration: 0.6 },
              rotateX: { type: "spring", stiffness: 50, damping: 15 },
              rotateY: { type: "spring", stiffness: 50, damping: 15 },
            }}
          >
            {/* Floating animation */}
            <motion.div
              className="flex items-center gap-2.5 w-full"
              animate={reduce ? {} : { y: [0, -4, 0] }}
              transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
            >
              <div
                className="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center"
                style={{
                  background: "rgba(47,111,228,0.2)",
                  border: "1px solid rgba(47,111,228,0.4)",
                  boxShadow: "0 0 10px rgba(47,111,228,0.3)",
                }}
              >
                <Icon className="text-blue-400 text-sm" />
              </div>
              <div>
                <p className="text-[10px] text-slate-400 leading-none mb-0.5 font-medium">{card.label}</p>
                <p className="text-xs text-white font-bold leading-none">{card.value}</p>
              </div>
            </motion.div>

            {/* Border shimmer */}
            {!reduce && (
              <motion.div
                className="absolute inset-0 rounded-xl pointer-events-none"
                style={{
                  background: "linear-gradient(105deg, transparent 40%, rgba(77,139,255,0.15) 50%, transparent 60%)",
                  backgroundSize: "200% 100%",
                }}
                animate={{ backgroundPosition: ["200% 0", "-200% 0"] }}
                transition={{ duration: 3.5, repeat: Infinity, delay: i * 0.6, ease: "linear" }}
              />
            )}
          </motion.div>
        );
      })}
    </div>
  );
}
