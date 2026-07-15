"use client";

import { useState, useEffect } from "react";
import { FiArrowRight, FiCheckCircle, FiPhoneCall, FiShield } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const bgImages = ["/hero-bg1.jpg", "/hero-bg2.jpg", "/hero-bg3.jpg"];

const trustPoints = [
    "ISO 9001-2015 Certified",
    "MSME Registered Enterprise",
    "Advanced CBT Tech",
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
};

const item = {
    hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
    show: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
};

const Hero = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const reduce = useReducedMotion();

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((p) => (p === bgImages.length - 1 ? 0 : p + 1));
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative min-h-[75vh] sm:min-h-[80vh] lg:min-h-[90vh] w-full flex items-center justify-center overflow-hidden bg-secondary">
            {/* Animated crossfade + Ken Burns background */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <AnimatePresence mode="sync">
                    <motion.div
                        key={bgImages[currentImageIndex]}
                        className="absolute inset-0"
                        initial={{ opacity: 0, scale: 1.15 }}
                        animate={{ opacity: 0.4, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        transition={{ opacity: { duration: 1.4, ease: "easeInOut" }, scale: { duration: 6, ease: "linear" } }}
                    >
                        <Image
                            src={bgImages[currentImageIndex]}
                            alt={`Marshal Security Background ${currentImageIndex + 1}`}
                            fill
                            priority={currentImageIndex === 0}
                            quality={90}
                            className="object-cover object-center"
                        />
                    </motion.div>
                </AnimatePresence>

                {/* Themed overlays */}
                <div className="absolute inset-0 bg-gradient-to-r from-secondary/60 via-secondary/25 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/70 via-transparent to-secondary/20" />

                {/* Animated glow orb using primary */}
                {!reduce && (
                    <motion.div
                        aria-hidden
                        className="absolute -top-32 -right-32 h-[420px] w-[420px] rounded-full bg-primary/30 blur-3xl"
                        animate={{ x: [0, 40, -20, 0], y: [0, 30, -10, 0], opacity: [0.35, 0.6, 0.35] }}
                        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
                    />
                )}
                {!reduce && (
                    <motion.div
                        aria-hidden
                        className="absolute bottom-[-120px] left-[-120px] h-[380px] w-[380px] rounded-full bg-primary/20 blur-3xl"
                        animate={{ x: [0, -30, 20, 0], y: [0, -20, 15, 0], opacity: [0.25, 0.5, 0.25] }}
                        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
                    />
                )}

                {/* Subtle scanline grid */}
                <div
                    aria-hidden
                    className="absolute inset-0 opacity-[0.07] mix-blend-overlay"
                    style={{
                        backgroundImage:
                            "linear-gradient(to right, rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.6) 1px, transparent 1px)",
                        backgroundSize: "60px 60px",
                    }}
                />
            </div>

            {/* Content */}
            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20 lg:py-22 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
            >
                <div className="lg:col-span-9 space-y-7 text-left">
                    {/* Badge */}
                    <motion.div variants={item} className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 backdrop-blur-md px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-inner">
                        <motion.span
                            animate={reduce ? {} : { scale: [1, 1.3, 1], opacity: [1, 0.6, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="flex"
                        >
                            <FiShield className="text-primary" />
                        </motion.span>
                        <span className="text-slate-200">Your Security, Our Priority</span>
                        <span className="ml-1 h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        variants={item}
                        className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight"
                    >
                        Securing Infrastructure <br />
                        <span className="relative inline-block">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-light to-primary bg-[length:200%_auto] animate-[shine_6s_linear_infinite]">
                                Advancing Threat Detection
                            </span>
                            <motion.span
                                aria-hidden
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ delay: 1, duration: 1, ease: "easeOut" }}
                                className="absolute -bottom-2 left-0 h-1 w-full origin-left bg-gradient-to-r from-primary to-transparent rounded-full"
                            />
                        </span>
                    </motion.h1>

                    {/* Description */}
                    <motion.p variants={item} className="max-w-2xl text-base sm:text-lg leading-relaxed text-slate-300 font-medium">
                        M/s Marshal Marketing & Management Pvt. Ltd. is India&apos;s undisputed market leader in Computer-Based X-Ray Screener Training, offering elite security management & analysis across national sectors.
                    </motion.p>

                    {/* Trust points */}
                    <motion.div variants={item} className="flex flex-wrap gap-3 pt-2">
                        {trustPoints.map((point, i) => (
                            <motion.div
                                key={point}
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 + i * 0.15, duration: 0.5 }}
                                whileHover={{ y: -3, borderColor: "rgb(var(--primary) / 0.6)" }}
                                className="group flex items-center gap-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-200 shadow-sm transition-colors duration-300 hover:border-primary/50"
                            >
                                <FiCheckCircle className="text-primary text-base group-hover:scale-110 transition-transform" />
                                <span>{point}</span>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* CTAs */}
                    <motion.div variants={item} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                        <motion.a
                            whileHover={{ y: -3, scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            href="tel:+911123456789"
                            className="group relative inline-flex items-center justify-center gap-3 rounded-full bg-primary px-8 py-4 text-sm font-bold uppercase tracking-[0.12em] text-white shadow-lg shadow-primary/40 overflow-hidden"
                        >
                            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:translate-x-full transition-transform duration-700" />
                            <motion.span
                                animate={reduce ? {} : { rotate: [0, -15, 15, -10, 10, 0] }}
                                transition={{ duration: 1.4, repeat: Infinity, repeatDelay: 3 }}
                                className="flex"
                            >
                                <FiPhoneCall className="text-lg" />
                            </motion.span>
                            Connect With Experts
                        </motion.a>

                        <motion.div
                            whileHover={{ y: -3, scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full sm:w-auto"
                        >
                            <Link
                                href="/products-services"
                                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-8 py-4 text-sm font-bold uppercase tracking-[0.12em] text-white transition-colors duration-300 hover:bg-white/20 hover:border-white"
                            >
                                Our Services

                                <motion.span
                                    animate={{ x: [0, 6, 0] }}
                                    transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                                    className="flex"
                                >
                                    <FiArrowRight className="text-lg" />
                                </motion.span>
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>

            {/* Slide indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {bgImages.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        aria-label={`Go to slide ${index + 1}`}
                        className="relative h-1.5 rounded-full overflow-hidden bg-white/30 transition-all duration-500"
                        style={{ width: index === currentImageIndex ? 32 : 10 }}
                    >
                        {index === currentImageIndex && (
                            <motion.span
                                key={`fill-${currentImageIndex}`}
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 5, ease: "linear" }}
                                className="absolute inset-y-0 left-0 bg-primary"
                            />
                        )}
                    </button>
                ))}
            </div>

            {/* Scroll cue */}
            {!reduce && (
                <motion.div
                    className="absolute bottom-14 right-6 hidden md:flex flex-col items-center gap-2 text-white/60 text-[10px] uppercase tracking-[0.3em] z-20"
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    <span>Scroll</span>
                    <span className="h-8 w-px bg-gradient-to-b from-primary to-transparent" />
                </motion.div>
            )}

            <style jsx>{`
        @keyframes shine {
          to { background-position: 200% center; }
        }
      `}</style>
        </section>
    );
};

export default Hero;
