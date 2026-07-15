import React from "react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Explosive Trace Detection Kit | Marshal Marketing & Management",
  description: "Official instructions and technical specifications for the SprayView™ PLUS Explosive Detection Kit (Catalog No: SV-03PLUS).",
};

export default function ExplosiveTraceDetectionKit() {
  return (
    <div className="bg-[#f8fafc] min-h-screen font-sans text-[#1e293b] antialiased selection:bg-blue-600/10 selection:text-[#113264]">

      {/* --- HERO BANNER SECTION --- */}
      <section className="relative bg-[#0b1329] text-white py-16 md:py-24 px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(30,58,138,0.3),transparent_50%)]" />
        <div className="relative max-w-7xl mx-auto space-y-4">
          <span className="inline-block bg-blue-500/10 border border-blue-500/30 text-blue-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
            Security & Detection Suite
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-black uppercase tracking-tight text-white">
            EXPLOSIVE TRACE DETECTION KIT
          </h1>
          <div className="h-1 w-20 bg-blue-500 rounded-full" />
        </div>
      </section>

      {/* --- MAIN CORE INTERFACE CONTENT --- */}
      <main className="max-w-7xl mx-auto px-6 py-16 ">
        
        {/* --- DUAL SPLIT INTERACTIVE BLOCK (IMAGE + CONTENT) --- */}
<section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start bg-white border border-slate-200 rounded-[2.5rem] p-6 md:p-10 shadow-sm">
  
  {/* Left Side: Both Image Boxes (Stacked Vertically with Sticky behavior) */}
  <div className="lg:col-span-5 flex flex-col gap-5 w-full lg:sticky lg:top-24">
    
    {/* First Image Box */}
    <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl shadow-inner group overflow-hidden">
      <span className="text-[10px] font-black text-blue-600 tracking-widest uppercase block mb-2">
         Technical Manual Image Reference
      </span>
      <div className="relative w-full aspect-[3/2] overflow-hidden rounded-xl bg-white border border-slate-100 flex items-center justify-center">
        <Image
          src="/explosive-img.png"
          alt="SprayView PLUS Explosive Trace Detection Kit Instructions Diagram"
          fill
          priority
          className="object-contain p-2 group-hover:scale-[1.02] transition-transform duration-500"
        />
      </div>
      <p className="text-[11px] text-slate-400 text-center mt-2 italic">
        Figure 1: SV-03PLUS Complete Operational Chart
      </p>
    </div>

    {/* Second Image Box */}
    <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl shadow-inner group overflow-hidden">
      <span className="text-[10px] font-black text-blue-600 tracking-widest uppercase block mb-2">
         Product Kit Component View
      </span>
      <div className="relative w-full aspect-[3/2] overflow-hidden rounded-xl bg-white border border-slate-100 flex items-center justify-center">
        <Image
          src="/explosive-img2.png" 
          alt="SprayView PLUS Kit Reagents and Accessories"
          fill
          className="object-contain p-2 group-hover:scale-[1.02] transition-transform duration-500"
        />
      </div>
      <p className="text-[11px] text-slate-400 text-center mt-2 italic">
        Figure 2: SV-03PLUS Reagents and Accessories Layout
      </p>
    </div>

  </div>

  {/* Right Side: Kit Overview & Core Reagents Data (Aligned tightly from top) */}
  <div className="lg:col-span-7 flex flex-col justify-start space-y-6 w-full">
    
    <div className="space-y-3 border-b border-slate-100 pb-4">
      <h2 className="text-xl md:text-2xl font-black text-[#113264] leading-tight">
        Instructions for Using the SprayView™ PLUS Explosive Detection Kit
      </h2>
      <p className="text-xs font-bold text-slate-500 tracking-wider bg-slate-100 px-3 py-1.5 rounded w-fit">
        Catalog Number: SV-03PLUS
      </p>
    </div>

    <div className="space-y-3">
      <h3 className="text-lg font-bold text-[#113264] border-l-4 border-blue-600 pl-3">
        Kit Overview and Contents
      </h3>
      <p className="text-slate-600 text-xs md:text-sm leading-relaxed text-justify">
        The SV-03PLUS Detection Kit includes all of the items needed for the detection of explosives, explosive residues and explosive precursors. The Kit is designed to allow testing for traces of explosives in suspicious materials and detecting explosives on surfaces.
      </p>
    </div>
      
    <div className="space-y-3 bg-slate-50 p-5 rounded-xl border border-slate-150">
      <h4 className="text-xs font-black text-[#113264] uppercase tracking-wider">Reagents & Solutions Index:</h4>
      <ul className="space-y-2 text-xs text-slate-600 list-none">
        <li className="flex items-start gap-2"><span className="text-blue-600 font-bold">▪</span> <span><strong>Solution A</strong> – Detects TNT, DNT, MNT or other Aromatic Explosives</span></li>
        <li className="flex items-start gap-2"><span className="text-blue-600 font-bold">▪</span> <span><strong>Solution B</strong> – Detects RDX, HMX, PETN, TATP, NG, Celluloid nitrate or other Aliphatic Explosives. <em>(Solution A required first)</em></span></li>
        <li className="flex items-start gap-2"><span className="text-blue-600 font-bold">▪</span> <span><strong>Solution C</strong> – Detects Inorganic Nitrate Compounds such as Potassium Nitrate, Sodium Nitrate. <em>(Solution B required first)</em></span></li>
        <li className="flex items-start gap-2"><span className="text-blue-600 font-bold">▪</span> <span><strong>Solution 1</strong> – Detects Inorganic Bromate/Chlorate Explosives including Sodium Chlorate, Potassium Bromate.</span></li>
        <li className="flex items-start gap-2"><span className="text-blue-600 font-bold">▪</span> <span><strong>Solution 2</strong> – Detection of Peroxide and other strong oxidizers</span></li>
        <li className="flex items-start gap-2"><span className="text-blue-600 font-bold">▪</span> <span><strong>Solution U1 and U2</strong> – Detection of Urea</span></li>
        <li className="flex items-start gap-2"><span className="text-blue-600 font-bold">▪</span> <span><strong>Solution P</strong> – Detection of Perchlorate Explosives including Sodium, Potassium and Ammonium Perchlorate.</span></li>
      </ul>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="p-3 bg-slate-50 border border-slate-150 rounded-lg text-xs">
        <span className="font-bold text-[#113264] block mb-1">Validation Block:</span>
        5x Validation Pads included.
      </div>
      <div className="p-3 bg-slate-50 border border-slate-150 rounded-lg text-xs">
        <span className="font-bold text-[#113264] block mb-1">Accessories Pack:</span>
        5x Gloves, 3x Spray Caps, 5x Dropper Caps, 50x Pads.
      </div>
    </div>

  </div>

</section>

        {/* --- SECTION 2: DETECTION OF COMMERCIAL & MILITARY EXPLOSIVES --- */}
        <section className="bg-white border border-slate-200 rounded-[2rem] p-6 md:p-10 shadow-sm space-y-6">
          <h3 className="text-lg font-bold text-[#113264] border-l-4 border-blue-600 pl-3">
            Detection of Commercial & Military Explosives
          </h3>
          <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
            The SV-03PLUS SprayView™ PLUS Explosive Detection Kit allows for the detection of Commercial and Military Explosives such as TNT, RDX, PETN and Inorganic Nitrates.
          </p>

          <div className="bg-blue-50/40 border border-blue-100 p-4 rounded-xl text-xs md:text-sm text-slate-700">
            <strong>Sample Collection Rule:</strong> Swab the surface with the Collection Pad. For rough/porous surfaces, moisten the pad with clean water first. <strong>To test for all Military/Commercial Explosives, only a single sample is needed</strong> by applying Reagents A, B, and C sequentially on top of each other.
          </div>

          {/* Commercial Grid */}
          <div className="border border-slate-200 rounded-xl overflow-hidden text-xs">
            <div className="grid grid-cols-1 md:grid-cols-4 bg-slate-100 p-3 font-bold text-[#113264] border-b border-slate-200">
              <div>Protocol Target</div>
              <div className="text-center">Positive Target Color</div>
              <div className="text-center">Negative Output</div>
              <div className="pl-4">Procedural Flow</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 p-4 border-b border-slate-100 items-center bg-white gap-3">
              <div className="font-bold text-[#113264]">Step 1 - TNT, DNT, MNT</div>
              <div className="text-center font-semibold text-red-700 bg-red-50 py-1.5 rounded border border-red-100">Dark Red/Brownish/Purple</div>
              <div className="text-center text-slate-500 bg-slate-50 py-1.5 rounded">No color shift</div>
              <div className="text-slate-600 pl-4">Screw on Spray Cap A. Spray up to 3 times. Wait 30 seconds. If negative, do not wipe, proceed to Step 2.</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 p-4 border-b border-slate-100 items-center bg-white gap-3">
              <div className="font-bold text-[#113264]">Step 2 - RDX, HMX, PETN, TATP</div>
              <div className="text-center font-semibold text-pink-700 bg-pink-50 py-1.5 rounded border border-pink-100">Pink / Red Development</div>
              <div className="text-center text-slate-500 bg-slate-50 py-1.5 rounded">No color shift</div>
              <div className="text-slate-600 pl-4">Spray Reagent B directly onto the same pad. Wait 30 seconds. If negative, proceed to Step 3.</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 p-4 items-center bg-white gap-3">
              <div className="font-bold text-[#113264]">Step 3 - Nitrates & Inorganic Salts</div>
              <div className="text-center font-semibold text-orange-700 bg-orange-50 py-1.5 rounded border border-orange-100">Red / Pink Finalization</div>
              <div className="text-center text-slate-500 bg-slate-50 py-1.5 rounded">No color shift</div>
              <div className="text-slate-600 pl-4">Spray Reagent C onto the same pad. Wait 20 seconds to read the final indicator results.</div>
            </div>
          </div>
        </section>

        {/* --- SECTION 3: HOMEMADE PRECURSORS PROTOCOL --- */}
        <section className="bg-gradient-to-br from-[#113264] to-[#0d254c] text-white rounded-[2.5rem] p-8 md:p-12 shadow-xl">
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-blue-400 border-l-4 border-blue-400 pl-3">
              Detection of Precursors Used to make Homemade Explosives (HMEs)
            </h3>
            <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
              <strong>Three distinct samples are required</strong> to completely isolate and detect improvised chemical precursors without matrix cross-contamination:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              <div className="bg-white/[0.03] border border-white/10 p-5 rounded-xl space-y-3">
                <span className="text-[10px] font-black text-blue-300 uppercase block">Sample Block 1</span>
                <h4 className="font-bold text-white text-sm">Chlorates, Bromates & Peroxides</h4>
                <p className="text-slate-300 text-xs">Add 3 drops of Reagent 1 (Positive: Orange/Red). Then add 3 drops of Reagent 2 on the same pad (Positive: Yellow/Dark Green/Blue-Green).</p>
              </div>

              <div className="bg-white/[0.03] border border-white/10 p-5 rounded-xl space-y-3">
                <span className="text-[10px] font-black text-blue-300 uppercase block">Sample Block 2</span>
                <h4 className="font-bold text-white text-sm">Urea Precursors (U1 & U2)</h4>
                <p className="text-slate-300 text-xs">Place 3 drops of U1 on a new pad, followed by 3 drops of U2. Wait exactly 2 minutes to observe the Orange or Teal positive identification.</p>
              </div>

              <div className="bg-white/[0.03] border border-white/10 p-5 rounded-xl space-y-3">
                <span className="text-[10px] font-black text-blue-300 uppercase block">Sample Block 3</span>
                <h4 className="font-bold text-white text-sm">Inorganic Perchlorates (Reagent P)</h4>
                <p className="text-slate-300 text-xs">Apply 3 drops of Reagent P to a new sample pad. Wait 10 seconds. Color shift from Blue to Purple validates active threats.</p>
              </div>
            </div>
          </div>
        </section>

      </main>

   

    </div>
  );
}