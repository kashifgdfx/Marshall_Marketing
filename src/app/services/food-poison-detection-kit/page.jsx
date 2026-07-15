import React from "react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Food Poison Detection Kit (STPD-06) | Marshal Marketing & Management",
  description: "Official specifications for the STPD-06 Short Term Poison Detection Kit used by US DOD and international defense entities.",
};

export default function FoodPoisonDetectionKit() {
  return (
    <div className="bg-[#f8fafc] min-h-screen font-sans text-[#1e293b] antialiased selection:bg-emerald-600/10 selection:text-[#0b462c]">


      {/* --- HERO BANNER SECTION --- */}
      <section className="relative bg-[#07131e] text-white py-16 md:py-24 px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.15),transparent_50%)]" />
        <div className="relative max-w-7xl mx-auto space-y-4">
          <span className="inline-block bg-emerald-500/10 border border-[#2F6FE4] text-[#2F6FE4] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
            Food Safety & Anti-Terror Suite
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-black uppercase tracking-tight text-white">
            FOOD POISON DETECTION KIT
          </h1>
          <div className="h-1 w-20 bg-[#2F6FE4] rounded-full" />
        </div>
      </section>

      {/* --- MAIN CORE INTERFACE CONTENT --- */}
      <main className="max-w-7xl mx-auto px-6 py-16 space-y-16">
        
        {/* --- DUAL SPLIT INTERACTIVE BLOCK (IMAGE + CONTENT) --- */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start bg-white border border-slate-200 rounded-[2.5rem] p-6 md:p-10 shadow-sm">
          
          {/* Left Side: Both Image Boxes (Stacked Vertically with Sticky behavior) */}
          <div className="lg:col-span-5 flex flex-col gap-5 w-full lg:sticky lg:top-24">
            
            {/* First Image Box */}
            <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl shadow-inner group overflow-hidden">
              <span className="text-[10px] font-black text-[#2F6FE4] tracking-widest uppercase block mb-2">
                 STPD-06 Field Kit Reference
              </span>
              <div className="relative w-full aspect-[3/2] overflow-hidden rounded-xl bg-white border border-slate-100 flex items-center justify-center">
                <Image
                  src="/food-poison1.jpg"
                  alt="STPD-06 Food Poison Detection Kit Diagram"
                  fill
                  priority
                  className="object-contain p-2 group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
              <p className="text-[11px] text-slate-400 text-center mt-2 italic">
                Figure 1: STPD-06 Autonomous Testing Apparatus
              </p>
            </div>

            {/* Second Image Box */}
            <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl shadow-inner group overflow-hidden">
              <span className="text-[10px] font-black text-[#2F6FE4] tracking-widest uppercase block mb-2">
                 Technical Verification Overview
              </span>
              <div className="relative w-full aspect-[3/2] overflow-hidden rounded-xl bg-white border border-slate-100 flex items-center justify-center">
                <Image
                  src="/food-poison2.jpg"
                  alt="Food Poison Kit Operational Testing Reference"
                  fill
                  className="object-contain p-2 group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
              <p className="text-[11px] text-slate-400 text-center mt-2 italic">
                Figure 2: Colorimetric Interpretation Guide
              </p>
            </div>

          </div>

          {/* Right Side: Introduction & Core Features Data */}
          <div className="lg:col-span-7 flex flex-col justify-start space-y-6 w-full">
            
            <div className="space-y-3 border-b border-slate-100 pb-4">
              <h2 className="text-xl md:text-2xl font-black text-[#0f2d4a] leading-tight">
                Introduction to &apos;STPD-06&apos; Short Term Poison Detection Kit
              </h2>
              <div className="flex flex-wrap gap-2">
                <p className="text-xs font-bold text-slate-500 tracking-wider bg-slate-100 px-3 py-1.5 rounded w-fit">
                  Model: STPD-06
                </p>
                <p className="text-xs font-bold text-[#2F6FE4] tracking-wider bg-[#2F6FE4]/50 px-3 py-1.5 rounded w-fit uppercase">
                  Global Defense Standard
                </p>
              </div>
            </div>

            {/* Introduction Paragraphs */}
            <div className="space-y-4 text-slate-600 text-xs md:text-sm leading-relaxed text-justify">
              <p>
                Our Field detection kit for Poison in Food is called <strong>&apos;STPD-06&apos; (Short Term Poison Detection Kit)</strong>. The Poison Detection kits are presently being used by the <strong>US Department of Defense (DOD)</strong>, the <strong>British Ministry of Defense (MOD)</strong>, as well as in many other countries. Several entities within the US DOD validate its performance independently and recommend its use.
              </p>
              <p>
                The detectors were developed for the DOD and were tested extensively using more than <strong>12,000 different foods</strong>, cooking methods, spices, etc. Our Poison Detection Kit has been noted a Success Story and can be found on the web page of TSWG, the US Government arm for research on anti-terror technology. 
              </p>
              <p>
                To the best of our knowledge, our poison detection kits are the only detectors available in the world that detects poisons <strong>INSTANTLY, RELIABLY</strong>, and which can be used even by a person with no technical background.
              </p>
            </div>

            {/* Instant Banner Alert */}
            <div className="bg-[#2F6FE4] text-gray-100 p-4 rounded-xl text-center font-bold text-xs md:text-sm tracking-wide border border-emerald-800 shadow-sm uppercase">
               Results are obtained in 2-8 minutes for all thirty poisons.
            </div>

            {/* Features Sub-section */}
            <div className="space-y-3 pt-2">
              <h3 className="text-lg font-bold text-[#0f2d4a] border-l-4 border-[#2F6FE4] pl-3">
                Features of &apos;STPD-06&apos; Food Poison Detection Kits
              </h3>
              <ul className="space-y-2.5 text-xs text-slate-600 list-none">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#2F6FE4] font-bold mt-0.5">✔</span>
                  <span><strong>Highly Portable:</strong> The STPD series kits are very small and light weight. They can therefore be easily stored or transported by land or air with the VIP or person to be protected.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#2F6FE4] font-bold mt-0.5">✔</span>
                  <span><strong>Autonomous Operation:</strong> Designed to be totally autonomous kits that <strong>REQUIRE NO ADDITIONAL MATERIAL</strong> that is not in the Kit itself, except for clean water.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#2F6FE4] font-bold mt-0.5">✔</span>
                  <span><strong>Zero Technical Barriers:</strong> They require <strong>NO Electricity</strong>, <strong>NO Batteries</strong> and <strong>NO knowledge of chemistry</strong> from the users.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#2F6FE4] font-bold mt-0.5">✔</span>
                  <span><strong>Immediate Intuitive Reading:</strong> By design, a <strong>POSITIVE color change</strong> will be the indicator of the presence of poison, so that it will be recognizable by any person IMMEDIATELY.</span>
                </li>
              </ul>
            </div>
              
            {/* Detector Matrix Box */}
            <div className="space-y-3 bg-slate-50 p-5 rounded-xl border border-slate-150">
              <h4 className="text-xs font-black text-[#0f2d4a] uppercase tracking-wider">Integrated Detector Modules:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="bg-white p-3 rounded-lg border border-slate-200 text-xs">
                  <span className="font-bold text-[#2F6FE4] block mb-1">1. CA Detector</span>
                  Detects cyanides, azides, sulfides and chromates.
                </div>
                <div className="bg-white p-3 rounded-lg border border-slate-200 text-xs">
                  <span className="font-bold text-[#2F6FE4] block mb-1">2. HM Detector</span>
                  Detects cadmium, lead, mercury and thallium.
                </div>
                <div className="bg-white p-3 rounded-lg border border-slate-200 text-xs">
                  <span className="font-bold text-[#2F6FE4] block mb-1">3. AJ Pouch</span>
                  Detects <strong>ALL</strong> arsenic compounds.
                </div>
              </div>
            </div>

            {/* Scientific Matrix Intelligence Note */}
            <div className="bg-blue-50/50 border border-blue-100 p-4 rounded-xl text-xs text-slate-700 leading-relaxed">
              <strong className="block text-blue-800 uppercase tracking-widest text-[10px] mb-1">Advanced Matrix Diagnostics:</strong>
              The Poison Detectors used in the CKT kits were optimized using over 12,000 food samples from all around the world including Indian food. Although the detectors appear simple, they are advanced systems designed to isolate poisons which a person may consume without suspecting any threat. Highly salty laboratory-prepared artificial mixtures are filtered out if they alter taste profiles naturally, preventing false-positive clutter.
            </div>

            {/* Powered by Signature Footer inside card */}
            <div className="flex justify-between items-center text-[10px] text-slate-400 pt-2 border-t border-slate-100 italic">
              <span>Security Screening Solution</span>
              <span>Powered by ChemSee</span>
            </div>

          </div>

        </section>

      </main>

     

    </div>
  );
}