import React from "react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "X-Screen Model 2D Advanced Simulator | Marshal Marketing",
  description:
    "Discover X-Screen Model 2D (V2.5) - The world's foremost advanced X-Ray screening simulation tool with X-Ray correct Build-a-Bag technology.",
  alternates: {
    canonical: "https://www.marshal-m-m.com/products/x-screen-2d",
  },
  openGraph: {
    title: "X-Screen Model 2D Advanced Simulator | Marshal",
    description: "100% X-Ray correct advanced simulation training system used globally by ACI & TSA.",
    url: "https://www.marshal-m-m.com/products/x-screen-2d",
    siteName: "Marshal Marketing & Management",
    images: [
      {
        url: "/xray-mockup-pc.png",
        width: 1200,
        height: 630,
        alt: "X-Screen 2D Software Simulation Terminal",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function XScreen2D() {
  const regularFeatures = [
    "Adhere to International Security Standards & regulations",
    "Keep abreast of new and emerging Threats",
    "Enhance skills across multiple machine types",
    "18 X-Ray operational environments (Single view, Dual View, CT)",
    "Used by 95% of UK DfT regulated Airports",
    "Capable of generating bag libraries in excess of 1 million images",
    "New objects added to the library every year",
    "Multiple X-Ray machine simulators with X-Ray correct images",
    "Multiple Pre-prepared Lessons (Induction & Refresher)",
    "In excess of 3,000 pre-built X-Ray Images",
    "Trainer-led bespoke Training module",
    "Multiple operational environments (Cabin, Hold, Cargo, Mailroom)",
    "Default Cargo, Single/Dual View Carry-On, & Hold Baggage Lessons",
    "Thousands of Threat, Non-Threat components and containers",
    "Full product support: software updates, e-mail and telephone support"
  ];

  return (
    <div className="bg-[#f8fafc] min-h-screen font-sans text-[#1e293b] antialiased selection:bg-blue-600/10 selection:text-[#113264]">
      
   

      {/* --- CINEMATIC HERO SECTION --- */}
      <section className="relative bg-[#0b1329] text-white py-20 md:py-28 px-6 md:px-12 overflow-hidden shadow-inner">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(30,58,138,0.4),transparent_50%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0b1329]/90" />
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]" />

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 text-blue-400 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-ping" />
              Foremost 2D Simulation Suite (V2.5)
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black uppercase tracking-tight leading-[0.95] text-white">
              X-Screen <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Model 2D</span>
            </h1>
            <p className="text-slate-400 text-sm md:text-base max-w-2xl leading-relaxed">
              Advanced 2D simulation system featuring unique X-Ray correct Build-a-Bag technology, eliminating bulky image libraries and time-consuming captures.
            </p>
          </div>
          
          <div className="lg:col-span-4 lg:text-right">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-white hover:to-white text-white hover:text-[#0b1329] font-black text-xs md:text-sm uppercase tracking-wider px-8 py-4.5 rounded-xl shadow-xl shadow-blue-950/50 transition-all duration-300 transform active:scale-98 w-full sm:w-auto"
            >
              Request 2D Demo Terminal
            </Link>
          </div>
        </div>
      </section>

      {/* --- ARCHITECTURAL CORE ENGINE --- */}
      <main className="max-w-7xl mx-auto px-6 py-16 md:py-24 space-y-24">
        
        {/* SECTION 1: INTRODUCTION GLASS CARD */}
        <section className="bg-white border border-slate-200/60 p-8 md:p-12 rounded-[2rem] shadow-sm hover:shadow-xl hover:border-blue-500/20 transition-all duration-300 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-2 h-full bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="space-y-4 max-w-5xl">
            <span className="text-xs font-black text-blue-600 tracking-widest uppercase bg-blue-50 px-2.5 py-1 rounded-md w-fit block">
              01 / Core Logic Overview
            </span>
            <h3 className="text-2xl font-black text-[#113264] tracking-tight">Introduction</h3>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed text-justify">
              Marshal provides software that allows trainers to train security screening staff. Our 2D advanced simulation system has the ability to build complete bags from scratch, which are still X-Ray correct, erasing the need for bulky image libraries and time-consuming bag captures.
            </p>
          </div>
        </section>

        {/* --- BRAND NEW SPLIT SHOWCASE DESIGN FOR SPECIAL FEATURES OF 2D --- */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch bg-white border border-slate-200/80 rounded-[2.5rem] p-6 md:p-10 shadow-sm">
          
          {/* Left Block: The Requested Interface Group Image (Takes up 5 cols) */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <div className="relative w-full bg-slate-50 border border-slate-200/80 p-2 rounded-2xl shadow-inner group overflow-hidden flex items-center justify-center min-h-[300px]">
              <div className="relative w-full h-full aspect-[16/11] overflow-hidden rounded-xl">
                <Image
                  src="/x-screen-2d.png"
                  alt="X-Screen Model 2D Special Features Interfaces Display"
                  fill
                  priority
                  className="object-contain object-center group-hover:scale-[1.03] transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Right Block: Content & Description (Takes up 7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 px-2">
            <div className="space-y-3">
              <span className="text-xs font-black text-blue-600 tracking-widest uppercase bg-blue-50 px-2.5 py-1 rounded-md w-fit block">
                02 / Dynamic Configurations
              </span>
              <h3 className="text-3xl font-black text-[#113264] tracking-tight">Special Features of 2D</h3>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed text-justify">
                V2.5 offers high quality, X-Ray correct simulation on all major X-Ray machines. Our innovative Bag-Builder module allows new threat objects to be added into the substantial image library quickly and efficiently. As regulations change, V2.5 can be reconfigured to replicate new operational environments, ensuring employees receive training that is relevant to their duties, regardless of industry sector.
              </p>
            </div>
            
            <div className="pt-4 border-t border-slate-100 flex items-center gap-3 text-xs font-bold text-slate-400 uppercase tracking-wider">
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
              High fidelity hardware interfaces simulated perfectly
            </div>
          </div>
        </section>

        {/* SECTION 2: ARCHITECTURAL FEATURES MAPPING GRID */}
        <section className="bg-gradient-to-br from-[#113264] to-[#0d254c] text-white rounded-[2.5rem] p-8 md:p-14 shadow-xl relative overflow-hidden">
          <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="space-y-10 relative z-10">
            <div className="space-y-3">
              <span className="text-xs font-bold text-blue-400 tracking-widest uppercase block">System Intelligence Matrix</span>
              <h3 className="text-2xl md:text-4xl font-black tracking-tight max-w-4xl">
                Advanced Architectural Features of X-Screen 2D
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "100% X-Ray Correct", desc: "Every item image displayed within X-Screen is 100% X-Ray correct, developed alongside manufacturers." },
                { title: "Bespoke Bag Builder", desc: "Create bags using individual threat & non-threat articles from a perpetual, ever-growing item library." },
                { title: "User-Configurable", desc: "Configure scoring, difficulty levels, lesson generation, machine type, and reports to suit individual needs." },
                { title: "Adaptive Engine", desc: "Recognises individual strengths and weaknesses, automatically modifying the engine to target weak areas." },
                { title: "Exact Keypad Replicas", desc: "High fidelity user interfaces engineered as an exact replica of the physical keypads used on machines." },
                { title: "Anywhere Anytime", desc: "Cloud hosted ecosystem allowing licenses to be shared across multiple physical sites efficiently." }
              ].map((item, index) => (
                <div key={index} className="bg-white/[0.03] border border-white/10 p-6 rounded-2xl hover:bg-white/[0.06] hover:border-blue-400/30 transition-all duration-300 space-y-2">
                  <h4 className="font-bold text-blue-400 text-base">{item.title}</h4>
                  <p className="text-slate-300 text-xs md:text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* TSA & ACI Global Framework Note */}
            <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-xs md:text-sm text-slate-300 max-w-3xl leading-relaxed">
                V2.5 has been directly developed from the product in use by the <strong>Transport Security Administration (TSA)</strong> in the US and selected as part of the <strong>Airports Council International (ACI) global training hub.</strong>
              </p>
              <span className="text-[10px] font-black tracking-widest bg-blue-500/20 text-blue-300 border border-blue-500/40 px-3 py-1.5 rounded-md uppercase shrink-0">
                TSA & ACI Certified Hub
              </span>
            </div>
          </div>
        </section>

        {/* SECTION 3: METRIC ANALYSIS & REGULAR FEATURES SHUFFLE MATRIX WITH DUAL IMAGES */}
        <section className="bg-white border border-slate-200/80 rounded-[2.5rem] p-8 md:p-14 shadow-sm space-y-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-slate-100 pb-6">
            <div className="space-y-1">
              <span className="text-xs font-black text-blue-600 tracking-widest uppercase">Ecosystem Parameters</span>
              <h3 className="text-2xl md:text-3xl font-black text-[#113264] tracking-tight">X-Screen 2D Specifications</h3>
            </div>
            <p className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-md">
              Powered by Quadratica (UK) Ltd
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Left Column: Dual Stacked Images Matching Content Height Perfectly */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-6">
              {/* Image 1 */}
              <div className="relative w-full aspect-[16/10] bg-slate-50 border border-slate-200/80 p-2 rounded-2xl shadow-inner group overflow-hidden flex-1">
                <div className="relative w-full h-full overflow-hidden rounded-xl">
                  <Image
                    src="/x-screen-2d.png"
                    alt="X-Screen 2D Simulation Terminal Workspace Image 1"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              
              {/* Image 2 */}
              <div className="relative w-full aspect-[16/10] bg-slate-50 border border-slate-200/80 p-2 rounded-2xl shadow-inner group overflow-hidden flex-1">
                <div className="relative w-full h-full overflow-hidden rounded-xl">
                  <Image
                    src="/x-ray3d-img2.png"
                    alt="X-Screen Machine Keypad Simulation Interface Image 2"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Right Column: Dynamic Matrix Checklist Array */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {regularFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 bg-slate-50/50 border border-slate-200/60 p-3.5 rounded-xl hover:bg-white hover:shadow-md hover:border-blue-500/10 transition-all duration-200">
                    <div className="w-5 h-5 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-blue-600 font-extrabold text-[10px]">✔</span>
                    </div>
                    <span className="text-slate-700 text-xs md:text-sm font-semibold leading-snug">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="pt-4 border-t border-slate-100 text-right">
                <p className="text-[10px] font-black text-slate-400 tracking-widest uppercase">
                  Fully certified by the DfT to comply with EU regulations.
                </p>
              </div>
            </div>

          </div>
        </section>

      </main>

    </div>
  );
}