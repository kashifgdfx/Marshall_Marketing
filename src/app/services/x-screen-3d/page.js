import React from "react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "X-Ray Screen 3D | Marshal Marketing & Management Pvt. Ltd.",
  description: "Explore X-Screen 3D - an online 3D/CT X-Ray Image Recognition and Interpretation Training system compliant with EU regulations and ICAO standards.",
  alternates: { canonical: "https://www.marshal-m-m.com/products/x-ray-screen-3d" },
  openGraph: {
    title: "X-Ray Screen 3D | Marshal Marketing & Management Pvt. Ltd.",
    description: "Advanced 3D & CT X-Ray screening and simulation image recognition software interpretation training system.",
    url: "https://www.marshal-m-m.com/products/x-ray-screen-3d",
    siteName: "Marshal Marketing & Management",
    images: [{ url: "/xray-mockup-pc.png", width: 1200, height: 630, alt: "X-Ray Screen 3D Software Simulation" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "X-Ray Screen 3D | Marshal Marketing & Management Pvt. Ltd.",
    description: "Advanced 3D/CT X-Ray simulation image recognition software.",
    images: ["/xray-mockup-pc.png"],
  },
  robots: { index: true, follow: true },
};

const outcomes = [
  "Have the necessary knowledge and skills in threat and detection technology to perform optimum security duties.",
  "Adhere to international security standards, best practices and relevant regulations.",
  "Keep abreast of new and emerging threats.",
  "Enhance their skills and knowledge across multiple machine types.",
];

const factsAndFigures = [
  "Fully EU 2015/1998 compliant",
  "20+ X-Ray operational environments (machine interfaces)",
  "Used all over the world with great results",
  "Used by London 2012 Olympics & 2014 Commonwealth",
  "Provided by a UK DfT accredited training course provider",
  "New objects added to the library regularly",
  "Multiple X-Ray machine simulators with X-Ray correct images",
  "Multi Pre-Prepared Lessons (Induction & Refresher)",
  "Trainer-led bespoke training",
  "Automated adaptive training (performance-driven learning)",
  "Multiple operational environments",
  "Cabin & Hold Baggage environments",
  "Full product support including software updates, e-mail support & telephone support in accordance with our T&Cs.",
];

function ScanGraphic() {
  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="scan-grid absolute inset-0 opacity-30" />
      <div className="scan-orb absolute -top-32 right-[12%] h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl" />
      <div className="scan-orb-delayed absolute bottom-0 left-[8%] h-64 w-64 rounded-full bg-blue-600/30 blur-3xl" />
      <svg className="absolute inset-0 h-full w-full opacity-40" viewBox="0 0 1440 600" fill="none">
        <path d="M0 407C210 322 294 496 521 395C769 285 872 415 1074 290C1203 210 1340 267 1440 194" stroke="url(#line)" strokeWidth="1" />
        <path d="M0 452C199 385 324 568 564 440C801 313 938 432 1140 346C1270 290 1355 337 1440 294" stroke="url(#line)" strokeWidth="1" strokeDasharray="5 8" />
        <defs><linearGradient id="line" x1="0" y1="0" x2="1440" y2="0"><stop stopColor="#38bdf8" stopOpacity="0" /><stop offset=".5" stopColor="#67e8f9" /><stop offset="1" stopColor="#38bdf8" stopOpacity="0" /></linearGradient></defs>
      </svg>
      <div className="scan-beam absolute top-0 bottom-0 w-px bg-cyan-100/80 shadow-[0_0_28px_6px_rgba(103,232,249,.35)]" />
    </div>
  );
}

function EyeIcon() { return <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.7"><path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z" /><circle cx="12" cy="12" r="2.5" /></svg>; }
function CheckIcon() { return <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="3"><path d="m5 12 4.5 4.5L19 7" /></svg>; }

export default function XRayScreen3D() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#f5f8fc] font-sans text-slate-700 selection:bg-cyan-200 selection:text-[#06204e]">
      <style>{`
        @keyframes scan { 0% { transform: translateX(-10vw); } 100% { transform: translateX(110vw); } }
        @keyframes drift { 0%,100% { transform: translate3d(0,0,0); } 50% { transform: translate3d(0,18px,0); } }
        @keyframes pulse { 0%,100% { opacity:.35; transform:scale(.92); } 50% { opacity:.75; transform:scale(1.08); } }
        .scan-grid { background-image: linear-gradient(rgba(125,211,252,.18) 1px, transparent 1px), linear-gradient(90deg, rgba(125,211,252,.18) 1px, transparent 1px); background-size: 42px 42px; mask-image: linear-gradient(to bottom, black, transparent); }
        .scan-beam { animation: scan 6s linear infinite; }
        .scan-orb { animation: drift 7s ease-in-out infinite; }
        .scan-orb-delayed { animation: drift 9s ease-in-out -3s infinite; }
        .pulse-dot { animation: pulse 2.4s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) { .scan-beam, .scan-orb, .scan-orb-delayed, .pulse-dot { animation: none; } }
      `}</style>

      <section className="relative isolate overflow-hidden bg-[#06204e] px-6 pb-20 pt-16 text-white md:px-12 md:pb-28 md:pt-24">
        <ScanGraphic />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.08fr_.92fr]">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-200/20 bg-white/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[.22em] text-cyan-100 backdrop-blur">
              <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-cyan-300" /> Advanced Training Technologies
            </div>
            <h1 className="max-w-3xl text-5xl font-black uppercase leading-[.88] tracking-[-.065em] text-white sm:text-6xl lg:text-7xl">X-Ray<br /><span className="text-cyan-300">Screen 3D</span></h1>
            <p className="mt-7 max-w-xl text-sm leading-7 text-blue-100/80 md:text-base">Certified online 3D/CT X-Ray Image Recognition and Interpretation Training system compliant with international security frameworks.</p>
            <Link href="/contact" className="group mt-9 inline-flex items-center gap-4 rounded-full bg-cyan-300 px-6 py-3.5 text-xs font-black uppercase tracking-wider text-[#06204e] transition duration-300 hover:bg-white hover:shadow-[0_0_32px_rgba(103,232,249,.4)]">
              Get Technical Quote <span className="text-lg transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
          <div className="relative mx-auto w-full max-w-[470px]">
            <div className="absolute -inset-4 rounded-[2rem] border border-cyan-100/15" />
            <div className="relative overflow-hidden rounded-[1.5rem] border border-white/15 bg-[#0c3773]/70 p-3 shadow-2xl backdrop-blur-sm">
              <div className="absolute left-0 top-0 h-full w-1 bg-cyan-300" />
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-[#071d46]">
                <Image src="/x-ray3d-img.png" alt="X-Screen 3D Handheld Tablet Demonstration Simulator" fill priority className="object-cover opacity-85" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06204e]/75 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-md border border-cyan-100/20 bg-[#06204e]/75 px-3 py-2 text-[9px] font-bold uppercase tracking-[.16em] text-cyan-100 backdrop-blur"><EyeIcon /> 3D Scan Interface</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="relative mx-auto max-w-7xl space-y-20 px-6 py-16 md:px-12 md:py-24">
        <section className="grid gap-5 lg:grid-cols-2">
          <article className="group rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-[0_14px_40px_rgba(15,52,103,.06)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(15,52,103,.12)] md:p-10">
            <p className="text-[10px] font-black uppercase tracking-[.2em] text-[#1676c6]">System Overview</p><div className="my-5 h-px w-full bg-slate-100" />
            <h2 className="text-2xl font-black tracking-tight text-[#06204e]">Introduction</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">X-Screen 3D is an online 3D/CT X-Ray Image Recognition and Interpretation Training system, specifically designed for the new line of 3D & CT X-Ray machines. X-Screen is already certified by the UK DfT to comply with EU training regulations, while also being compliant with ICAO and other recognized international standards.</p>
          </article>
          <article className="group rounded-[1.75rem] bg-[#0b3777] p-8 text-white shadow-[0_14px_40px_rgba(15,52,103,.14)] transition duration-500 hover:-translate-y-1 md:p-10">
            <p className="text-[10px] font-black uppercase tracking-[.2em] text-cyan-300">Zero Footprint Software</p><div className="my-5 h-px w-full bg-white/15" />
            <h2 className="text-2xl font-black tracking-tight">Features of 3D</h2>
            <p className="mt-4 text-sm leading-7 text-blue-100/80 md:text-base">The X-Screen 3D training product is a zero footprint system available on all mobile and web-based platforms, without any need for a 3rd party software download or higher performance hardware. Our Technical Team along with Quadratica UK Ltd. have made sure that X-Screen 3D has been designed & developed in such a way that the end user does not need to have expensive computers with extra graphics cards to run the system. X-Screen 3D will run on the same computers the original 2D/Dual-View system runs on now with no need to update your computers. It can be used on mobile devices as well.</p>
          </article>
        </section>

        <section className="relative overflow-hidden rounded-[2rem] bg-[#e8f6ff] p-7 md:p-12">
          <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-cyan-300/30 blur-3xl" />
          <div className="relative grid items-start gap-10 lg:grid-cols-[.8fr_1.2fr]">
            <div><p className="text-[10px] font-black uppercase tracking-[.2em] text-[#1676c6]">Targeted Learning Outcomes</p><h2 className="mt-4 text-3xl font-black leading-tight tracking-tight text-[#06204e]">X-Screen 3D X-Ray Image Interpretation Training</h2><p className="mt-5 text-sm leading-7 text-slate-600 md:text-base">DfT approved X-Ray image recognition and interpretation training X-Screen 3D is available as an individual package, or as an integral add-on to an existing Dual View/2D X-Screen system.</p></div>
            <div><p className="mb-5 text-sm font-bold leading-6 text-[#06204e]">Our X-Screen Image Recognition and Interpretation Training system will ensure trainees:</p><div className="grid gap-3 sm:grid-cols-2">{outcomes.map((outcome) => <div key={outcome} className="flex gap-3 rounded-2xl border border-white bg-white/80 p-4 text-xs leading-5 text-slate-600 shadow-sm backdrop-blur"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0b3777] text-cyan-300"><CheckIcon /></span>{outcome}</div>)}</div></div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-[1.75rem] border border-slate-200 bg-white p-8 md:p-10"><p className="text-[10px] font-black uppercase tracking-[.2em] text-[#1676c6]">Modular Control Panel</p><h2 className="mt-4 text-2xl font-black text-[#06204e]">Tailor Your 3D Training</h2><div className="mt-5 space-y-4 text-sm leading-7 text-slate-600 md:text-base"><p>X-Screen offers the System Administrator the ability to modify the lesson styles to match the experience level of the trainees, while the full reporting systems provides feedback from Managers, Supervisors and Screeners... including full playback facilities! X-Screen was the first system to offer individual X-Ray images and real life photos to improve overall recognition training: an important feature many now replicate. X-Screen offers high quality, X-Ray correct simulation on all major X-Ray machines. X-Screen contains 3D training environments that cater for carry-on or cabin baggage and hold baggage.</p><p>Local content pertinent to modern Indian environments is also provided by Marshal Marketing. An Administrator can create Induction, remedial, refresher or advanced training lessons, All within the same system, for all major operational environments, giving a greater degree of control over the training.</p></div></article>
          <article className="rounded-[1.75rem] border border-slate-200 bg-white p-8 md:p-10"><p className="text-[10px] font-black uppercase tracking-[.2em] text-[#1676c6]">Budget Optimization</p><h2 className="mt-4 text-2xl font-black text-[#06204e]">Reduced Costs</h2><div className="mt-5 space-y-4 text-sm leading-7 text-slate-600 md:text-base"><p>Live training on X-Ray scanning systems is prohibitively expensive - especially as you have to include items containing a wide range of threats and prohibited materials. X-Screen 3D will dramatically reduce your training overheads and also gives you the ability to produce your own lessons.</p><p>Developed by Quadratica (UK) Ltd. along with Marshal Marketing of India, and employing the very latest thinking in Computer Based Training Technology, X-Screen 3D is a fully DfT & EU compliant security training system that provides X-Ray screening professionals with highly realistic simulations to ensure they:</p></div><ul className="mt-5 space-y-3">{["Adhere to international security standards, best practices and relevant international regulations.", "Keep abreast of new and emerging threats.", "Enhance their skills and knowledge across machine types."].map((item) => <li key={item} className="flex gap-3 text-sm leading-6 text-slate-600"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" />{item}</li>)}</ul></article>
        </section>

        <section className="overflow-hidden rounded-[2rem] bg-[#06204e] p-7 text-white shadow-xl md:p-12">
          <div className="flex flex-col justify-between gap-4 border-b border-white/15 pb-7 md:flex-row md:items-end"><div><p className="text-[10px] font-black uppercase tracking-[.2em] text-cyan-300">Verified Parameters</p><h2 className="mt-3 text-3xl font-black tracking-tight">X-Screen 3D Facts & Figures</h2></div><p className="w-fit rounded-full border border-cyan-100/20 bg-white/5 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[.16em] text-cyan-100">Global Platform Authorization</p></div>
          <div className="mt-9 grid gap-8 lg:grid-cols-[.84fr_1.16fr]">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1"><div className="group relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10"><Image src="/x-ray3d-img.png" alt="X-Screen 3D Simulation Interface Graphic 1" fill className="object-cover transition duration-700 group-hover:scale-105" /></div><div className="group relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10"><Image src="/x-ray3d-img2.png" alt="X-Screen 3D Simulation Interface Graphic 2" fill className="object-cover transition duration-700 group-hover:scale-105" /></div></div>
            <div><div className="grid gap-2.5 sm:grid-cols-2">{factsAndFigures.map((fact, index) => <div key={fact} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[.055] p-3.5 transition hover:border-cyan-200/40 hover:bg-white/10"><span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-300 text-[#06204e]"><CheckIcon /></span><span className="text-xs font-medium leading-5 text-blue-50/85">{fact}</span></div>)}</div><p className="mt-6 border-t border-white/15 pt-5 text-right text-[9px] font-bold uppercase tracking-[.16em] text-blue-200/60">Powered globally by Quadratica (UK) Ltd.</p></div>
          </div>
        </section>
      </main>
    </div>
  );
}
