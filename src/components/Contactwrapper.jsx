"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";

// Icons
import {
  MapPin,
  Phone,
  Mail,
  User,
  MessageSquare,
  Send,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";

// EmailJS Credentials
const EMAIL_SERVICE_ID = "service_5n72u1i";
const EMAIL_TEMPLATE_ID = "template_102fpjv";
const EMAIL_PUBLIC_KEY = "bfED1bbzcLms9zkik";

/* ---------------------------------------------------------
   Small utility hooks — scroll reveal + count-up
   (vanilla React/IntersectionObserver, no extra deps needed)
--------------------------------------------------------- */

function useInView(threshold = 0.2) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Respect reduced-motion users: just show content immediately.
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

function useCountUp(target, inView, duration = 1400) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = null;
    let raf;

    const step = (ts) => {
      if (start === null) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      // ease-out-cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, duration]);

  return value;
}

/* ---------------------------------------------------------
   Reveal wrapper — fades + rises content into place once
   it enters the viewport
--------------------------------------------------------- */
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

export default function ContactPage() {
  const formRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [focusedField, setFocusedField] = useState("");

  const [statsRef, statsInView] = useInView(0.5);
  const compliancePct = useCountUp(100, statsInView);

  const dismissTimer = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: "", message: "" });
    if (dismissTimer.current) clearTimeout(dismissTimer.current);

    try {
      await emailjs.sendForm(
        EMAIL_SERVICE_ID,
        EMAIL_TEMPLATE_ID,
        e.target,
        EMAIL_PUBLIC_KEY
      );

      setStatus({
        type: "success",
        message:
          "Your message has been sent successfully! Our security experts will connect with you.",
      });
      e.target.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus({
        type: "error",
        message: "Failed to send message. Please try again directly via email.",
      });
    } finally {
      setIsLoading(false);
      dismissTimer.current = setTimeout(
        () => setStatus({ type: "", message: "" }),
        6000
      );
    }
  };

  const inputBase =
    "w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-[#3b82f6] focus:ring-4 focus:ring-[#3b82f6]/10 outline-none transition-all duration-300 text-sm font-medium";

  return (
    <main className="min-h-screen bg-white font-sans text-slate-900 selection:bg-[#3b82f6]/30 selection:text-[#113264]">
      {/* Reduced-motion + shared keyframes */}
      <style jsx global>{`
        @keyframes scanSweep {
          0% {
            transform: translateY(-10%);
            opacity: 0;
          }
          8% {
            opacity: 1;
          }
          92% {
            opacity: 1;
          }
          100% {
            transform: translateY(110%);
            opacity: 0;
          }
        }
        @keyframes driftSlow {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(3%, -4%) scale(1.06);
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(14px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes shine {
          0% {
            transform: translateX(-120%) skewX(-15deg);
          }
          100% {
            transform: translateX(220%) skewX(-15deg);
          }
        }
        @keyframes progressShrink {
          from {
            width: 100%;
          }
          to {
            width: 0%;
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.7s ease-out both;
        }
        .btn-shine::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 40%;
          height: 100%;
          background: linear-gradient(
            120deg,
            transparent,
            rgba(255, 255, 255, 0.35),
            transparent
          );
          transform: translateX(-120%) skewX(-15deg);
        }
        .btn-shine:hover::after {
          animation: shine 1s ease;
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

      {/* --- HERO SECTION --- */}
      <section className="relative w-full md:h-[450px] flex flex-col md:flex-row overflow-hidden bg-[#113264]">
        {/* Ambient drifting glow — subtle, on-theme, not distracting */}
        <div
          className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#3b82f6]/20 blur-3xl"
          style={{ animation: "driftSlow 14s ease-in-out infinite" }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-32 right-0 w-[28rem] h-[28rem] rounded-full bg-[#0d274c]/60 blur-3xl"
          style={{ animation: "driftSlow 18s ease-in-out infinite reverse" }}
          aria-hidden="true"
        />

        {/* Left: Image Block with animated security-scan sweep */}
        <div className="w-full md:w-1/2 flex items-center justify-center bg-[#0d274c] p-4 md:p-8 relative z-10">
          <div className="relative w-full max-w-[550px] aspect-[4/3] md:aspect-auto rounded-xl overflow-hidden shadow-lg ring-1 ring-white/10">
            <Image
              src="/contact-og.png"
              alt="Marshal Marketing & Management Security Experts"
              width={600}
              height={400}
              priority
              className="object-contain w-full h-auto"
            />
            {/* Scanning beam — nods to the 3D X-Ray screening product line */}
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-1/4"
              style={{
                background:
                  "linear-gradient(180deg, rgba(59,130,246,0) 0%, rgba(59,130,246,0.35) 45%, rgba(59,130,246,0) 100%)",
                animation: "scanSweep 3.6s ease-in-out infinite",
              }}
              aria-hidden="true"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-[#3b82f6]/20 rounded-xl" />
          </div>
        </div>

        {/* Right: Premium Corporate Content Block */}
        <div className="w-full md:w-1/2 bg-[#113264] flex items-center justify-center p-8 md:p-12 lg:p-16 relative z-10">
          <div className="relative z-10 max-w-lg space-y-6 animate-fadeInUp">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight uppercase tracking-tight">
              Securing Innovation <br />
              <span className="text-[#3b82f6]">Connecting Expertise</span>
            </h1>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed">
              Leading provider of high-end tactical infrastructure, advanced 3D
              X-Ray screening, explosive trace detectors, and enterprise
              marketing models across India.
            </p>

            {/* High-End Enterprise Metrics */}
            <div
              ref={statsRef}
              className="flex gap-8 pt-4 border-t border-slate-700/60"
            >
              <div className="group cursor-default">
                <span className="block text-3xl font-bold text-white transition-transform duration-300 group-hover:scale-105">
                  24/7
                </span>
                <span className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">
                  Aviation & Elite Support
                </span>
              </div>
              <div className="group cursor-default">
                <span className="block text-3xl font-bold text-white transition-transform duration-300 group-hover:scale-105">
                  {compliancePct}%
                </span>
                <span className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">
                  Compliant Solutions
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTACT CONTENT SECTION --- */}
      <section className="w-full py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-20">
            {/* LEFT: Contact Information Grid */}
            <div className="lg:col-span-5 space-y-8">
              <Reveal>
                <div>
                  <h2 className="text-sm font-black text-[#113264] uppercase tracking-wider border-b-2 border-[#3b82f6] w-fit pb-1 mb-2">
                    CONTACT DETAILS
                  </h2>
                  <p className="text-slate-500 text-sm font-medium mt-3">
                    For procurement, service contracts, and custom inquiries,
                    please reach out via our official details.
                  </p>
                </div>
              </Reveal>

              {/* Info Cards */}
              <div className="space-y-5">
                {/* ADDRESS BOX */}
                <Reveal delay={80}>
                  <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 hover:border-[#3b82f6]/40 transition-all duration-300 group">
                    <div className="p-3 bg-[#3b82f6]/10 rounded-xl text-[#3b82f6] group-hover:bg-[#3b82f6] group-hover:text-white group-hover:rotate-6 transition-all duration-300">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xs font-black uppercase tracking-wider text-slate-700 underline underline-offset-4 mb-2">
                        ADDRESS :
                      </h3>
                      <p className="text-slate-500 text-sm font-semibold leading-relaxed tracking-wide">
                        M-10, 2nd Floor, M-Block Market,
                        <br />
                        Greater Kailash Part - I,
                        <br />
                        New Delhi-110048. India
                      </p>
                    </div>
                  </div>
                </Reveal>

                {/* PHONE BOX */}
                <Reveal delay={160}>
                  <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 hover:border-[#3b82f6]/40 transition-all duration-300 group">
                    <div className="p-3 bg-[#3b82f6]/10 rounded-xl text-[#3b82f6] group-hover:bg-[#3b82f6] group-hover:text-white group-hover:rotate-6 transition-all duration-300">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xs font-black uppercase tracking-wider text-slate-700 underline underline-offset-4 mb-2">
                        PHONE :
                      </h3>
                      <div className="text-sm font-semibold text-slate-500 space-y-0.5 tracking-wide">
                        <p>+91 9654918918</p>
                        <p>+91 9818816090</p>
                        <p className="text-xs text-slate-400">
                          011-29230484, 011-46508491
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>

                {/* EMAIL BOX */}
                <Reveal delay={240}>
                  <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 hover:border-[#3b82f6]/40 transition-all duration-300 group">
                    <div className="p-3 bg-[#3b82f6]/10 rounded-xl text-[#3b82f6] group-hover:bg-[#3b82f6] group-hover:text-white group-hover:rotate-6 transition-all duration-300">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xs font-black uppercase tracking-wider text-slate-700 underline underline-offset-4 mb-2">
                        EMAIL :
                      </h3>
                      <div className="text-sm font-semibold text-slate-500 space-y-0.5 break-all">
                        <p className="hover:text-[#3b82f6] transition-colors cursor-pointer">
                          sales@marshal-m-m.com
                        </p>
                        <p className="text-xs text-slate-400">
                          harmohan@marshal-m-m.com
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>

            {/* RIGHT: High-End Lead Generation Form */}
            <div className="lg:col-span-7">
              <Reveal delay={120}>
                <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100">
                  <h3 className="text-xl font-black text-[#113264] uppercase tracking-tight mb-6">
                    Send Procurement Query
                  </h3>

                  <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    {/* Name Input */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="name"
                        className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1"
                      >
                        Full Name / Authorized Signatory
                      </label>
                      <div className="relative group">
                        <div
                          className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-300 ${
                            focusedField === "name"
                              ? "text-[#3b82f6]"
                              : "text-slate-400"
                          }`}
                        >
                          <User className="w-4 h-4" />
                        </div>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          required
                          placeholder="e.g., Captain Malhotra"
                          onFocus={() => setFocusedField("name")}
                          onBlur={() => setFocusedField("")}
                          className={inputBase}
                        />
                      </div>
                    </div>

                    {/* Email Input */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="email"
                        className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1"
                      >
                        Official Email Address
                      </label>
                      <div className="relative group">
                        <div
                          className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-300 ${
                            focusedField === "email"
                              ? "text-[#3b82f6]"
                              : "text-slate-400"
                          }`}
                        >
                          <Mail className="w-4 h-4" />
                        </div>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          required
                          placeholder="corporate@domain.com"
                          onFocus={() => setFocusedField("email")}
                          onBlur={() => setFocusedField("")}
                          className={inputBase}
                        />
                      </div>
                    </div>

                    {/* Phone Input */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="phone"
                        className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1"
                      >
                        Contact Number
                      </label>
                      <div className="relative group">
                        <div
                          className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-300 ${
                            focusedField === "phone"
                              ? "text-[#3b82f6]"
                              : "text-slate-400"
                          }`}
                        >
                          <Phone className="w-4 h-4" />
                        </div>
                        <input
                          type="tel"
                          name="phone"
                          id="phone"
                          required
                          placeholder="+91 XXXXX XXXXX"
                          onFocus={() => setFocusedField("phone")}
                          onBlur={() => setFocusedField("")}
                          className={inputBase}
                        />
                      </div>
                    </div>

                    {/* Message Input */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="message"
                        className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1"
                      >
                        Requirement Details
                      </label>
                      <div className="relative group">
                        <div
                          className={`absolute left-4 top-4 transition-colors duration-300 ${
                            focusedField === "message"
                              ? "text-[#3b82f6]"
                              : "text-slate-400"
                          }`}
                        >
                          <MessageSquare className="w-4 h-4" />
                        </div>
                        <textarea
                          name="message"
                          id="message"
                          rows="4"
                          required
                          placeholder="Specify requirements like 3D X-Ray Screens, ETD Kits, or Food Poison Testing solutions..."
                          onFocus={() => setFocusedField("message")}
                          onBlur={() => setFocusedField("")}
                          className={`${inputBase} resize-none`}
                        ></textarea>
                      </div>
                    </div>

                    {/* Response Status Notification Banner */}
                    {status.message && (
                      <div
                        key={status.message}
                        className={`relative overflow-hidden p-4 rounded-xl text-xs font-semibold flex items-center gap-2 border animate-fadeInUp ${
                          status.type === "success"
                            ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                            : "bg-rose-50 text-rose-700 border-rose-200"
                        }`}
                      >
                        {status.type === "success" ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        ) : (
                          <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                        )}
                        <span>{status.message}</span>
                        <div
                          className={`absolute bottom-0 left-0 h-0.5 ${
                            status.type === "success"
                              ? "bg-emerald-400"
                              : "bg-rose-400"
                          }`}
                          style={{
                            animation: "progressShrink 6s linear forwards",
                          }}
                        />
                      </div>
                    )}

                    {/* Submit Action Button */}
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="relative overflow-hidden btn-shine w-full bg-[#3b82f6] hover:bg-[#1d4ed8] text-white font-black text-sm uppercase tracking-wider py-4 rounded-xl shadow-lg shadow-[#3b82f6]/20 hover:shadow-xl active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isLoading ? (
                        <span className="flex items-center gap-2">
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Processing Request...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2 cursor-pointer">
                          Submit Dispatch Request
                          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </span>
                      )}
                    </button>
                  </form>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* --- LIVE INTERACTIVE GOOGLE MAPS BLOCK --- */}
      <Reveal className="w-full">
        <section className="w-full h-80 bg-slate-200 relative border-t border-slate-200 group">
          <iframe
            title="Marshal Marketing & Management Pvt Ltd Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.6644200427847!2d77.2341258763216!3d28.549805975711316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3c4fe6331a9%3A0xc6cb525997f7faea!2sM%20Block%20Market%2C%20Greater%20Kailash%20I%2C%20Greater%20Kailash%2C%20New%20Delhi%2C%20Delhi%20110048!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
            className="w-full h-full border-0 absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-700"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </Reveal>
    </main>
  );
}