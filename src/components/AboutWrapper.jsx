"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { FiShield, FiCheckCircle, FiTarget, FiAward, FiArrowRight } from "react-icons/fi";

/* ---------------------------------------------------------
   Scroll-reveal utility — fades + rises content into place
   once it enters the viewport. No extra dependencies.
--------------------------------------------------------- */
function useInView(threshold = 0.2) {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        const prefersReduced =
            typeof window !== "undefined" &&
            window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
        if (prefersReduced) {
            setInView(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            { threshold }
        );
        observer.observe(node);
        return () => observer.disconnect();
    }, [threshold]);

    return [ref, inView];
}

function Reveal({ children, delay = 0, className = "" }) {
    const [ref, inView] = useInView();
    return (
        <div
            ref={ref}
            className={`transition-all duration-700 ease-out will-change-transform ${className} ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: inView ? `${delay}ms` : "0ms" }}
        >
            {children}
        </div>
    );
}

const expertiseItems = [
    {
        icon: FiShield,
        title: "Security Analysis & Audit",
        desc: "Deep-dive assessment, rigorous risk profiling, and total facility security auditing.",
    },
    {
        icon: FiCheckCircle,
        title: "X-Ray Image Recognition",
        desc: "Sophisticated intelligence paradigms focused heavily on accurate detection of threat objects.",
    },
    {
        icon: FiTarget,
        title: "Modern Forensic Tools",
        desc: "Deploying next-generation forensic kits and advanced diagnostics for rapid identification.",
    },
    {
        icon: FiAward,
        title: "Program Development",
        desc: "End-to-end framework planning, security design blueprints, and strategic deployments.",
    },
];

export default function AboutWrapper() {
    return (
        <>
            <style jsx global>{`
                @keyframes driftSlow {
                    0%,
                    100% {
                        transform: translate(0, 0) scale(1);
                    }
                    50% {
                        transform: translate(4%, -5%) scale(1.08);
                    }
                }
                @keyframes driftSlowReverse {
                    0%,
                    100% {
                        transform: translate(0, 0) scale(1);
                    }
                    50% {
                        transform: translate(-4%, 5%) scale(1.08);
                    }
                }
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(-6px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                @keyframes pulseSoft {
                    0%,
                    100% {
                        box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.12);
                    }
                    50% {
                        box-shadow: 0 0 0 6px rgba(255, 255, 255, 0);
                    }
                }
                @keyframes dividerGrow {
                    from {
                        width: 0;
                    }
                    to {
                        width: 2rem;
                    }
                }
                .animate-fade-in {
                    animation: fadeIn 0.8s ease-out both;
                }
                @media (prefers-reduced-motion: reduce) {
                    *,
                    *::before,
                    *::after {
                        animation-duration: 0.01ms !important;
                        animation-iteration-count: 1 !important;
                        transition-duration: 0.01ms !important;
                    }
                }
            `}</style>

            {/* HERO & ABOUT SECTION */}
            <section className="w-full relative overflow-hidden bg-gradient-to-br from-secondary via-secondary-light to-secondary py-20 sm:py-28 px-6 text-white border-b border-border/10">
                {/* Drifting decorative gradients — slow, ambient, non-distracting */}
                <div
                    className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"
                    style={{ animation: "driftSlow 16s ease-in-out infinite" }}
                ></div>
                <div
                    className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[100px] pointer-events-none"
                    style={{ animation: "driftSlowReverse 20s ease-in-out infinite" }}
                ></div>

                <div className="relative max-w-5xl mx-auto text-center flex flex-col items-center">
                    {/* ISO Badge */}
                    <span
                        className="text-xs font-bold uppercase tracking-widest text-primary bg-primary-light/10 px-4 py-1.5 rounded-full inline-block mb-6 border border-primary/20 backdrop-blur-sm animate-fade-in"
                        style={{ animation: "fadeIn 0.8s ease-out both, pulseSoft 3.5s ease-in-out 0.8s infinite" }}
                    >
                        Estd. 2003 | ISO 9001-2015 Certified Company
                    </span>

                    {/* Main Heading */}
                    <h1
                        className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-8 leading-[1.15] tracking-tight max-w-4xl text-white animate-fade-in"
                        style={{ animationDelay: "120ms" }}
                    >
                        About Our Company
                    </h1>

                    {/* Highlighted Core Intro */}
                    <p
                        className="text-lg sm:text-xl lg:text-2xl leading-relaxed mb-8 font-medium text-slate-100 max-w-4xl border-b border-slate-700/50 pb-8 animate-fade-in"
                        style={{ animationDelay: "220ms" }}
                    >
                        M/s Marshal Marketing & Management Pvt. Ltd. is a premier Security Company dedicated to
                        providing top-tier security management expertise and support services to enterprises
                        nationwide having access to general public.
                    </p>

                    {/* Detailed Description */}
                    <p
                        className="text-base sm:text-lg leading-relaxed text-slate-300 max-w-3xl font-light animate-fade-in"
                        style={{ animationDelay: "320ms" }}
                    >
                        In order to meet the desired goals of a safer environment, we provide comprehensive
                        security analysis & assessment, security programme development, and bespoke architectural
                        design. As a certified MSME Company, we are leading providers of advanced security
                        systems with a core emphasis on the detection of threat objects.
                    </p>
                </div>
            </section>

            {/* LEADER IN X-RAY SCREENER TRAINING (HIGHLIGHT SECTION) */}
            <section className="w-full bg-background text-foreground py-20 px-6 border-b border-border">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <Reveal className="lg:col-span-7">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="p-2 bg-primary-light text-primary rounded-lg dark:bg-primary-light/20 transition-transform duration-300 hover:scale-110 hover:rotate-6">
                                    <FiAward className="w-6 h-6" />
                                </span>
                                <h2 className="text-2xl sm:text-3xl font-bold">Undisputed Market Leader</h2>
                            </div>
                            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                                We are proud to state that M/s Marshal Marketing & Management Pvt. Ltd. is the
                                undisputed leader in India for providing{" "}
                                <strong>Computer Based X-Ray Screener Training</strong>, holding a dominant
                                lion&apos;s share in the industry market.
                            </p>
                            <p className="text-muted text-sm sm:text-base leading-relaxed">
                                Our training infrastructure and methodologies are highly trusted and utilized
                                across major Indian sectors to protect national assets and secure high-transit
                                public spaces.
                            </p>
                        </Reveal>

                        <Reveal delay={150} className="lg:col-span-5">
                            <div className="bg-card text-foreground p-8 rounded-2xl shadow-sm border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-primary text-white rounded-xl mt-1 transition-transform duration-300 group-hover:scale-110">
                                        <FiTarget className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-2">Threat-Level Customization</h3>
                                        <p className="text-sm text-muted leading-relaxed">
                                            Once we have thoroughly assessed the specific threats facing your
                                            establishment, our core focus shifts to developing an agile,
                                            bulletproof set of solutions that fit seamlessly within your existing
                                            operations and threat perimeter.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* OUR CORE EXPERTISE */}
            <section className="w-full bg-card text-foreground py-20">
                {/* HEADING */}
                <Reveal className="text-center mb-16 px-6">
                    <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-2">
                        What We Excel At
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold">Our Areas of Expertise</h2>
                    <div className="flex items-center justify-center gap-1.5 mt-4">
                        <span
                            className="h-[2px] bg-primary inline-block"
                            style={{ animation: "dividerGrow 0.6s ease-out 0.3s both" }}
                        ></span>
                        <span className="w-2 h-2 rounded-full bg-primary"></span>
                        <span
                            className="h-[2px] bg-primary inline-block"
                            style={{ animation: "dividerGrow 0.6s ease-out 0.3s both" }}
                        ></span>
                    </div>
                </Reveal>

                {/* EXPERTISE GRID */}
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {expertiseItems.map(({ icon: Icon, title, desc }, i) => (
                        <Reveal key={title} delay={i * 100}>
                            <div className="bg-background text-foreground p-6 rounded-xl border border-border shadow-sm hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 group h-full">
                                <div className="w-12 h-12 rounded-xl bg-primary-light text-primary flex items-center justify-center text-xl font-bold mb-4 group-hover:bg-primary group-hover:text-white group-hover:rotate-6 transition-all duration-300 dark:bg-primary-light/20">
                                    <Icon />
                                </div>
                                <h3 className="font-bold text-lg mb-2">{title}</h3>
                                <p className="text-muted text-sm leading-relaxed">{desc}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* TRUSTED BY TRUSTED BODIES (TRUSTED CLIENTS BANNER) */}
            <section className="relative w-full overflow-hidden bg-gradient-to-b from-secondary to-secondary-light py-20 px-6 text-white text-center">
                {/* DECORATIVE BACKGROUND SHAPES */}
                <div
                    className="absolute -left-32 bottom-0 w-96 h-96 bg-primary/5 rounded-full pointer-events-none"
                    style={{ animation: "driftSlow 18s ease-in-out infinite" }}
                ></div>
                <div
                    className="absolute -right-24 top-0 w-56 h-56 bg-primary/5 rounded-full pointer-events-none"
                    style={{ animation: "driftSlowReverse 15s ease-in-out infinite" }}
                ></div>

                <Reveal className="relative max-w-4xl mx-auto">
                    <span className="text-xs font-bold uppercase tracking-widest text-accent block mb-3">
                        Our Track Record
                    </span>

                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Trusted Across Premium National Sectors
                    </h2>

                    <p className="text-base md:text-lg leading-relaxed text-slate-200 mb-10 max-w-3xl mx-auto">
                        We deliver customized, elite X-Ray Screener Training trusted implicitly by the majority
                        of <strong>Airlines, Airports, Law Enforcement Agencies,</strong> and the{" "}
                        <strong>Central Paramilitary Forces of India</strong>.
                    </p>

                    <Link href="/contact">
                        <button className="group relative overflow-hidden bg-primary text-white px-8 py-3.5 rounded-full font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center gap-2">
                            Partner With Us
                            <FiArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </button>
                    </Link>
                </Reveal>
            </section>
        </>
    );
}