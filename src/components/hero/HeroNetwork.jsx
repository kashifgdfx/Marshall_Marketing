"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

const NODE_COUNT = 22;
const CONNECTION_DIST = 160;

function rand(min, max) {
  return Math.random() * (max - min) + min;
}

export default function HeroNetwork() {
  const canvasRef = useRef(null);
  const reduce = useReducedMotion();
  const rafRef = useRef(null);

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

    const nodes = Array.from({ length: NODE_COUNT }, () => ({
      x: rand(0, canvas.width),
      y: rand(0, canvas.height),
      vx: rand(-0.25, 0.25),
      vy: rand(-0.25, 0.25),
      r: rand(2, 4.5),
      pulse: rand(0, Math.PI * 2),
      pulseSpeed: rand(0.02, 0.05),
    }));

    let t = 0;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      t += 0.016;

      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
        n.pulse += n.pulseSpeed;
      });

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.hypot(dx, dy);
          if (dist < CONNECTION_DIST) {
            const alpha = (1 - dist / CONNECTION_DIST) * 0.35;
            // Animated data packet along line
            const progress = (Math.sin(t * 1.2 + i * 0.7 + j * 0.5) + 1) / 2;
            const px = nodes[i].x + (nodes[j].x - nodes[i].x) * progress;
            const py = nodes[i].y + (nodes[j].y - nodes[i].y) * progress;

            const grad = ctx.createLinearGradient(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y);
            grad.addColorStop(0, `rgba(47,111,228,${alpha})`);
            grad.addColorStop(0.5, `rgba(77,139,255,${alpha * 1.4})`);
            grad.addColorStop(1, `rgba(47,111,228,${alpha})`);

            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = grad;
            ctx.lineWidth = 0.8;
            ctx.stroke();

            // Data packet dot
            ctx.beginPath();
            ctx.arc(px, py, 1.5, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(220,232,255,${alpha * 2})`;
            ctx.fill();
          }
        }
      }

      // Draw nodes
      nodes.forEach((n) => {
        const glow = (Math.sin(n.pulse) + 1) / 2;
        const alpha = 0.5 + glow * 0.5;

        // Outer glow ring
        const outerR = n.r + 4 + glow * 6;
        const grad = ctx.createRadialGradient(n.x, n.y, n.r * 0.5, n.x, n.y, outerR);
        grad.addColorStop(0, `rgba(77,139,255,${0.3 * alpha})`);
        grad.addColorStop(1, "rgba(77,139,255,0)");
        ctx.beginPath();
        ctx.arc(n.x, n.y, outerR, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        // Core node
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(77,139,255,${alpha})`;
        ctx.fill();

        // Inner bright center
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r * 0.45, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(220,232,255,${alpha * 0.9})`;
        ctx.fill();
      });

      rafRef.current = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(rafRef.current);
    };
  }, [reduce]);

  if (reduce) return null;

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full z-[2] pointer-events-none opacity-60"
    />
  );
}
