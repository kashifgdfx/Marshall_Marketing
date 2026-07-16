import React from "react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "X-Screen Model 2D Advanced Simulator | Marshal Marketing",
  description: "Discover X-Screen Model 2D (V2.5) - The world's foremost advanced X-Ray screening simulation tool with X-Ray correct Build-a-Bag technology.",
  alternates: { canonical: "https://www.marshal-m-m.com/products/x-screen-2d" },
  openGraph: {
    title: "X-Screen Model 2D Advanced Simulator | Marshal",
    description: "100% X-Ray correct advanced simulation training system used globally by ACI & TSA.",
    url: "https://www.marshal-m-m.com/products/x-screen-2d",
    siteName: "Marshal Marketing & Management",
    images: [{ url: "/xray-mockup-pc.png", width: 1200, height: 630, alt: "X-Screen 2D Software Simulation Terminal" }],
    locale: "en_US", type: "website",
  },
};

const regularFeatures = [
  "Adhere to International Security Standards & regulations", "Keep abreast of new and emerging Threats", "Enhance skills across multiple machine types", "18 X-Ray operational environments (Single view, Dual View, CT)", "Used by 95% of UK DfT regulated Airports", "Capable of generating bag libraries in excess of 1 million images", "New objects added to the library every year", "Multiple X-Ray machine simulators with X-Ray correct images", "Multiple Pre-prepared Lessons (Induction & Refresher)", "In excess of 3,000 pre-built X-Ray Images", "Trainer-led bespoke Training module", "Multiple operational environments (Cabin, Hold, Cargo, Mailroom)", "Default Cargo, Single/Dual View Carry-On, & Hold Baggage Lessons", "Thousands of Threat, Non-Threat components and containers", "Full product support: software updates, e-mail and telephone support",
];

const intelligence = [
  { title: "100% X-Ray Correct", desc: "Every item image displayed within X-Screen is 100% X-Ray correct, developed alongside manufacturers." },
  { title: "Bespoke Bag Builder", desc: "Create bags using individual threat & non-threat articles from a perpetual, ever-growing item library." },
  { title: "User-Configurable", desc: "Configure scoring, difficulty levels, lesson generation, machine type, and reports to suit individual needs." },
  { title: "Adaptive Engine", desc: "Recognises individual strengths and weaknesses, automatically modifying the engine to target weak areas." },
  { title: "Exact Keypad Replicas", desc: "High fidelity user interfaces engineered as an exact replica of the physical keypads used on machines." },
  { title: "Anywhere Anytime", desc: "Cloud hosted ecosystem allowing licenses to be shared across multiple physical sites efficiently." },
];

function CheckIcon() { return <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5" stroke="currentColor" strokeWidth="3"><path d="m5 12 4.5 4.5L19 7" /></svg>; }

function AiVisualization() {
  return <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
    <div className="ai-grid absolute inset-0 opacity-40" />
    <div className="ai-sweep absolute top-0 bottom-0 w-px bg-cyan-100 shadow-[0_0_24px_5px_rgba(103,232,249,.5)]" />
    <div className="ai-node absolute left-[13%] top-[28%] h-2 w-2 rounded-full bg-cyan-200 shadow-[0_0_20px_7px_rgba(103,232,249,.65)]" />
    <div className="ai-node-delayed absolute bottom-[24%] right-[16%] h-2 w-2 rounded-full bg-cyan-200 shadow-[0_0_20px_7px_rgba(103,232,249,.65)]" />
    <svg className="absolute inset-0 h-full w-full opacity-40" viewBox="0 0 1400 640" fill="none"><path d="M-30 392C177 249 306 473 503 339C716 195 820 377 1003 267C1163 171 1286 248 1440 116" stroke="url(#ai-line)" strokeWidth="1.5" /><path d="M-30 472C176 341 302 515 535 411C768 306 862 452 1085 352C1214 294 1326 339 1440 270" stroke="url(#ai-line)" strokeWidth="1" strokeDasharray="5 8" /><defs><linearGradient id="ai-line" x1="0" y1="0" x2="1400" y2="0"><stop stopColor="#67e8f9" stopOpacity="0" /><stop offset=".45" stopColor="#67e8f9" /><stop offset="1" stopColor="#67e8f9" stopOpacity="0" /></linearGradient></defs></svg>
  </div>; 
}

export default function XScreen2D() {
  return <div className="min-h-screen overflow-hidden bg-[#f5f8fc] font-sans text-slate-700 antialiased selection:bg-cyan-200 selection:text-[#06204e]">
    <style>{`
      @keyframes ai-sweep { from { transform:translateX(-10vw) } to { transform:translateX(110vw) } }
      @keyframes node { 0%,100% { opacity:.35; transform:scale(.75) } 50% { opacity:1; transform:scale(1.35) } }
      @keyframes float { 0%,100% { transform:translateY(0) } 50% { transform:translateY(-10px) } }
      .ai-grid { background-image: linear-gradient(rgba(125,211,252,.16) 1px, transparent 1px), linear-gradient(90deg, rgba(125,211,252,.16) 1px, transparent 1px); background-size:38px 38px; mask-image:linear-gradient(to bottom,black,transparent); }
      .ai-sweep { animation:ai-sweep 7s linear infinite; } .ai-node { animation:node 2.2s ease-in-out infinite; } .ai-node-delayed { animation:node 2.2s ease-in-out -1.1s infinite; } .ai-float { animation:float 5s ease-in-out infinite; }
      @media (prefers-reduced-motion:reduce) { .ai-sweep,.ai-node,.ai-node-delayed,.ai-float { animation:none; } }
    `}</style>

    <section className="relative isolate overflow-hidden bg-[#06204e] px-6 pb-20 pt-16 text-white md:px-12 md:pb-28 md:pt-24"><AiVisualization />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
        <div><div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-100/20 bg-white/10 px-4 py-2 text-[10px] font-black uppercase tracking-[.18em] text-cyan-100 backdrop-blur"><span className="ai-node h-1.5 w-1.5 rounded-full bg-cyan-300" /> Foremost 2D Simulation Suite (V2.5)</div><h1 className="text-5xl font-black uppercase leading-[.88] tracking-[-.065em] sm:text-6xl lg:text-7xl">X-Screen<br /><span className="text-cyan-300">Model 2D</span></h1><p className="mt-7 max-w-xl text-sm leading-7 text-blue-100/80 md:text-base">Advanced 2D simulation system featuring unique X-Ray correct Build-a-Bag technology, eliminating bulky image libraries and time-consuming captures.</p><Link href="/contact" className="group mt-9 inline-flex items-center gap-4 rounded-full bg-cyan-300 px-6 py-3.5 text-xs font-black uppercase tracking-wider text-[#06204e] transition hover:bg-white hover:shadow-[0_0_32px_rgba(103,232,249,.4)]">Request 2D Demo Terminal <span className="text-lg transition-transform group-hover:translate-x-1">→</span></Link></div>
        <div className="ai-float relative mx-auto w-full max-w-[470px]"><div className="absolute -inset-4 rounded-[2rem] border border-cyan-100/15" /><div className="relative overflow-hidden rounded-[1.5rem] border border-white/15 bg-[#0c3773]/70 p-3 shadow-2xl backdrop-blur"><div className="absolute bottom-0 left-0 top-0 w-1 bg-cyan-300" /><div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-[#071d46]"><Image src="/x-screen-2d.png" alt="X-Screen Model 2D Special Features Interfaces Display" fill priority className="object-contain p-3" /><div className="absolute bottom-4 left-4 rounded-md border border-cyan-100/20 bg-[#06204e]/80 px-3 py-2 text-[9px] font-bold uppercase tracking-[.16em] text-cyan-100 backdrop-blur">AI-assisted 2D training interface</div></div></div></div>
      </div>
    </section>

    <main className="mx-auto max-w-7xl space-y-20 px-6 py-16 md:px-12 md:py-24">
      <section className="group relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-[0_14px_40px_rgba(15,52,103,.06)] transition hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(15,52,103,.12)] md:p-11"><div className="absolute bottom-0 left-0 top-0 w-1 bg-cyan-400" /><p className="text-[10px] font-black uppercase tracking-[.2em] text-[#1676c6]">01 / Core Logic Overview</p><h2 className="mt-4 text-2xl font-black text-[#06204e]">Introduction</h2><p className="mt-4 max-w-5xl text-sm leading-7 text-slate-600 md:text-base">Marshal provides software that allows trainers to train security screening staff. Our 2D advanced simulation system has the ability to build complete bags from scratch, which are still X-Ray correct, erasing the need for bulky image libraries and time-consuming bag captures.</p></section>

      <section className="grid overflow-hidden rounded-[2rem] border border-slate-200 bg-white lg:grid-cols-[.92fr_1.08fr]"><div className="relative min-h-[320px] bg-[#e8f6ff] p-6 md:p-10"><div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(103,232,249,.4),transparent_40%)]" /><div className="relative h-full overflow-hidden rounded-2xl border border-white bg-white/50 shadow-lg"><Image src="/x-screen-2d.png" alt="X-Screen Model 2D Special Features Interfaces Display" fill className="object-contain p-5 transition duration-700 hover:scale-105" /></div></div><div className="flex flex-col justify-center p-8 md:p-12"><p className="text-[10px] font-black uppercase tracking-[.2em] text-[#1676c6]">02 / Dynamic Configurations</p><h2 className="mt-4 text-3xl font-black tracking-tight text-[#06204e]">Special Features of 2D</h2><p className="mt-5 text-sm leading-7 text-slate-600 md:text-base">V2.5 offers high quality, X-Ray correct simulation on all major X-Ray machines. Our innovative Bag-Builder module allows new threat objects to be added into the substantial image library quickly and efficiently. As regulations change, V2.5 can be reconfigured to replicate new operational environments, ensuring employees receive training that is relevant to their duties, regardless of industry sector.</p><div className="mt-7 flex items-center gap-3 border-t border-slate-100 pt-5 text-[10px] font-bold uppercase tracking-[.12em] text-slate-400"><span className="ai-node h-2 w-2 rounded-full bg-cyan-400" />High fidelity hardware interfaces simulated perfectly</div></div></section>

      <section className="relative overflow-hidden rounded-[2rem] bg-[#06204e] p-8 text-white shadow-xl md:p-12"><div className="absolute -right-16 top-0 h-64 w-64 rounded-full bg-cyan-300/10 blur-3xl" /><div className="relative"><p className="text-[10px] font-black uppercase tracking-[.2em] text-cyan-300">System Intelligence Matrix</p><h2 className="mt-4 max-w-4xl text-3xl font-black tracking-tight md:text-4xl">Advanced Architectural Features of X-Screen 2D</h2><div className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{intelligence.map((item, index) => <article key={item.title} className="group rounded-2xl border border-white/10 bg-white/[.055] p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-200/40 hover:bg-white/10"><span className="text-[10px] font-black text-cyan-300">0{index + 1}</span><h3 className="mt-4 font-bold text-cyan-100">{item.title}</h3><p className="mt-2 text-xs leading-5 text-blue-100/70">{item.desc}</p></article>)}</div><div className="mt-9 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-7 sm:flex-row sm:items-center"><p className="max-w-3xl text-sm leading-6 text-blue-100/80">V2.5 has been directly developed from the product in use by the <strong>Transport Security Administration (TSA)</strong> in the US and selected as part of the <strong>Airports Council International (ACI) global training hub.</strong></p><span className="shrink-0 rounded-full border border-cyan-100/20 bg-white/5 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[.14em] text-cyan-100">TSA & ACI Certified Hub</span></div></div></section>

      <section className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm md:p-12"><div className="flex flex-col justify-between gap-4 border-b border-slate-100 pb-7 md:flex-row md:items-end"><div><p className="text-[10px] font-black uppercase tracking-[.2em] text-[#1676c6]">Ecosystem Parameters</p><h2 className="mt-3 text-3xl font-black tracking-tight text-[#06204e]">X-Screen 2D Specifications</h2></div><p className="w-fit rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[.14em] text-slate-400">Powered by Quadratica (UK) Ltd</p></div><div className="mt-9 grid gap-8 lg:grid-cols-[.84fr_1.16fr]"><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1"><div className="group relative aspect-[16/10] overflow-hidden rounded-2xl bg-slate-100"><Image src="/x-screen-2d.png" alt="X-Screen 2D Simulation Terminal Workspace Image 1" fill className="object-cover transition duration-700 group-hover:scale-105" /></div><div className="group relative aspect-[16/10] overflow-hidden rounded-2xl bg-slate-100"><Image src="/x-ray3d-img2.png" alt="X-Screen Machine Keypad Simulation Interface Image 2" fill className="object-cover transition duration-700 group-hover:scale-105" /></div></div><div><div className="grid gap-2.5 sm:grid-cols-2">{regularFeatures.map((feature) => <div key={feature} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50/80 p-3.5 transition hover:border-cyan-300/50 hover:bg-white hover:shadow-sm"><span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0b3777] text-cyan-300"><CheckIcon /></span><span className="text-xs font-medium leading-5 text-slate-600">{feature}</span></div>)}</div><p className="mt-6 border-t border-slate-100 pt-5 text-right text-[9px] font-bold uppercase tracking-[.14em] text-slate-400">Fully certified by the DfT to comply with EU regulations.</p></div></div></section>
    </main>
  </div>;
}
