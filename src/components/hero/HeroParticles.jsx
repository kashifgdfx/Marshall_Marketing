"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

const PARTICLE_COUNT = 55;

function rand(min, max) {
  return Math.random() * (max - min) + min;
}

export default function HeroParticles({ mouseX = 0, mouseY = 0 }) {
  const canvasRef = useRef(null);
  const reduce = useReducedMotion();
  const stateRef = useRef({ particles: [], mouse: { x: 0, y: 0 }, raf: null });

  useEffect(() => {
    if (reduce) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const colors = ["rgba(47,111,228,", "rgba(77,139,255,", "rgba(220,232,255,", "rgba(255,255,255,"];

    stateRef.current.particles = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: rand(0, canvas.width),
      y: rand(0, canvas.height),
      r: rand(0.8, 3.2),
      vx: rand(-0.18, 0.18),
      vy: rand(-0.22, -0.06),
      alpha: rand(0.15, 0.7),
      alphaDir: rand(-1, 1) > 0 ? 1 : -1,
      alphaSpeed: rand(0.003, 0.009),
      color: colors[Math.floor(rand(0, colors.length))],
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const { particles, mouse } = stateRef.current;

      particles.forEach((p) => {
        // Mouse attraction (subtle)
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 180) {
          p.vx += (dx / dist) * 0.008;
          p.vy += (dy / dist) * 0.008;
        }

        // Dampen velocity
        p.vx *= 0.995;
        p.vy *= 0.995;

        p.x += p.vx;
        p.y += p.vy;

        // Wrap
        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;
        if (p.y < -10) p.y = canvas.height + 10;
        if (p.y > canvas.height + 10) p.y = -10;

        // Opacity pulse
        p.alpha += p.alphaSpeed * p.alphaDir;
        if (p.alpha > 0.75 || p.alpha < 0.1) p.alphaDir *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.alpha.toFixed(2)})`;
        ctx.fill();

        // Glow for larger particles
        if (p.r > 2) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}${(p.alpha * 0.15).toFixed(2)})`;
          ctx.fill();
        }
      });

      stateRef.current.raf = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(stateRef.current.raf);
    };
  }, [reduce]);

  // Sync mouse position to ref (no re-render)
  useEffect(() => {
    stateRef.current.mouse = {
      x: ((mouseX + 1) / 2) * (canvasRef.current?.width || 0),
      y: ((mouseY + 1) / 2) * (canvasRef.current?.height || 0),
    };
  }, [mouseX, mouseY]);

  if (reduce) return null;

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full z-[1] pointer-events-none"
    />
  );
}
