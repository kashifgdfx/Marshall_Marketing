import React from "react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "X-Ray Screen 3D | Marshal Marketing & Management Pvt. Ltd.",
  description:
    "Explore X-Screen 3D - an online 3D/CT X-Ray Image Recognition and Interpretation Training system compliant with EU regulations and ICAO standards.",
  alternates: {
    canonical: "https://www.marshal-m-m.com/products/x-ray-screen-3d",
  },
  openGraph: {
    title: "X-Ray Screen 3D | Marshal Marketing & Management Pvt. Ltd.",
    description:
      "Advanced 3D & CT X-Ray screening and simulation image recognition software interpretation training system.",
    url: "https://www.marshal-m-m.com/products/x-ray-screen-3d",
    siteName: "Marshal Marketing & Management",
    images: [
      {
        url: "/xray-mockup-pc.png",
        width: 1200,
        height: 630,
        alt: "X-Ray Screen 3D Software Simulation",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "X-Ray Screen 3D | Marshal Marketing & Management Pvt. Ltd.",
    description: "Advanced 3D/CT X-Ray simulation image recognition software.",
    images: ["/xray-mockup-pc.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function XRayScreen3D() {
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

  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-800 selection:bg-blue-600/10 selection:text-[#113264]">


      {/* --- PREMIUM HERO BANNER --- */}
      <section className="relative bg-[#3883FB] text-white overflow-hidden py-16 md:py-24 px-6 md:px-12">
        <div className="absolute inset-0 bg-gradient-to-r from-[#3883FB] to-[#1e40af] opacity-95" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-20" />
        
        <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="space-y-4 max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-950/60 border border-blue-800/80 px-3,5 py-1.5 rounded-full inline-block">
              Advanced Training Technologies
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-none text-white">
              X-Ray Screen 3D
            </h1>
            <p className="text-slate-300 text-sm md:text-base max-w-xl">
              Certified online 3D/CT X-Ray Image Recognition and Interpretation Training system compliant with international security frameworks.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-blue-600 hover:bg-white hover:text-[#113264] text-white font-extrabold text-sm uppercase px-8 py-4 rounded-xl shadow-lg shadow-blue-900/30 transition-all duration-300 transform active:scale-95"
          >
            Get Technical Quote
          </Link>
        </div>
      </section>

      {/* --- MAIN PRODUCT CORE CONTENT --- */}
      <main className="max-w-7xl mx-auto px-6 py-12 md:py-20 space-y-20">
        
        {/* SECTION 1: INTRO & FEATURES IN GRID LAYOUT */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          <div className="bg-white border border-slate-100 p-8 md:p-10 rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-xs font-black text-blue-600 tracking-widest uppercase">System Overview</span>
              <h3 className="text-2xl font-bold text-[#113264] tracking-tight">Introduction</h3>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed text-justify">
                X-Screen 3D is an online 3D/CT X-Ray Image Recognition and Interpretation Training system, specifically designed for the new line of 3D & CT X-Ray machines. X-Screen is already certified by the UK DfT to comply with EU training regulations, while also being compliant with ICAO and other recognized international standards.
              </p>
            </div>
          </div>

          <div className="bg-white border border-slate-100 p-8 md:p-10 rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-xs font-black text-blue-600 tracking-widest uppercase">Zero Footprint Software</span>
              <h3 className="text-2xl font-bold text-[#113264] tracking-tight">Features of 3D</h3>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed text-justify">
                The X-Screen 3D training product is a zero footprint system available on all mobile and web-based platforms, without any need for a 3rd party software download or higher performance hardware. Our Technical Team along with Quadratica UK Ltd. have made sure that X-Screen 3D has been designed & developed in such a way that the end user does not need to have expensive computers with extra graphics cards to run the system. X-Screen 3D will run on the same computers the original 2D/Dual-View system runs on now with no need to update your computers. It can be used on mobile devices as well.
              </p>
            </div>
          </div>
        </section>

        {/* --- HANDHELD PREVIEW DECORATIVE SECTION --- */}
        <section className="flex justify-center">
          <div className="relative border border-slate-200/60 bg-white p-4 md:p-6 shadow-xl rounded-3xl max-w-4xl w-full">
            <div className="relative w-full aspect-video md:max-h-[520px] overflow-hidden rounded-2xl bg-slate-100 flex items-center justify-center">
              <Image
                src="/x-ray3d-img.png" 
                alt="X-Screen 3D Handheld Tablet Demonstration Simulator"
                width={800}
                height={420}
                priority
                className="w-full h-auto max-h-[520px] object-contain"
              />
            </div>
          </div>
        </section>

        {/* SECTION 2: OBJECTIVES & ACQUISITIONS */}
        <section className="bg-[#113264]/5 border border-[#113264]/10 rounded-3xl p-8 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-12 space-y-6">
            <span className="text-xs font-black text-blue-600 tracking-widest uppercase">Targeted Learning Outcomes</span>
            <h3 className="text-2xl md:text-3xl font-extrabold text-[#113264] tracking-tight">
              X-Screen 3D X-Ray Image Interpretation Training
            </h3>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed text-justify">
              DfT approved X-Ray image recognition and interpretation training X-Screen 3D is available as an individual package, or as an integral add-on to an existing Dual View/2D X-Screen system.
            </p>
            <div className="pt-2">
              <p className="text-slate-800 font-bold text-sm md:text-base mb-4">
                Our X-Screen Image Recognition and Interpretation Training system will ensure trainees:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Have the necessary knowledge and skills in threat and detection technology to perform optimum security duties.",
                  "Adhere to international security standards, best practices and relevant regulations.",
                  "Keep abreast of new and emerging threats.",
                  "Enhance their skills and knowledge across multiple machine types."
                ].map((bullet, idx) => (
                  <div key={idx} className="flex gap-3 items-start bg-white p-4 rounded-xl border border-slate-200/50">
                    <span className="text-blue-600 font-bold text-lg leading-none">✓</span>
                    <span className="text-slate-600 text-xs md:text-sm leading-relaxed">{bullet}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: TAILORED SUITE & REDUCED COSTS */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="space-y-4 bg-white border border-slate-100 p-8 md:p-10 rounded-3xl shadow-sm">
            <span className="text-xs font-black text-blue-600 tracking-widest uppercase">Modular Control Panel</span>
            <h3 className="text-2xl font-bold text-[#113264]">Tailor Your 3D Training</h3>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed text-justify">
              X-Screen offers the System Administrator the ability to modify the lesson styles to match the experience level of the trainees, while the full reporting systems provides feedback from Managers, Supervisors and Screeners... including full playback facilities! X-Screen was the first system to offer individual X-Ray images and real life photos to improve overall recognition training: an important feature many now replicate. X-Screen offers high quality, X-Ray correct simulation on all major X-Ray machines. X-Screen contains 3D training environments that cater for carry-on or cabin baggage and hold baggage. 
            </p>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed text-justify">
              Local content pertinent to modern Indian environments is also provided by Marshal Marketing. An Administrator can create Induction, remedial, refresher or advanced training lessons, All within the same system, for all major operational environments, giving a greater degree of control over the training.
            </p>
          </div>

          <div className="space-y-4 bg-white border border-slate-100 p-8 md:p-10 rounded-3xl shadow-sm">
            <span className="text-xs font-black text-blue-600 tracking-widest uppercase">Budget Optimization</span>
            <h3 className="text-2xl font-bold text-[#113264]">Reduced Costs</h3>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed text-justify">
              Live training on X-Ray scanning systems is prohibitively expensive - especially as you have to include items containing a wide range of threats and prohibited materials. X-Screen 3D will dramatically reduce your training overheads and also gives you the ability to produce your own lessons. 
            </p>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed text-justify">
              Developed by Quadratica (UK) Ltd. along with Marshal Marketing of India, and employing the very latest thinking in Computer Based Training Technology, X-Screen 3D is a fully DfT & EU compliant security training system that provides X-Ray screening professionals with highly realistic simulations to ensure they:
            </p>
            <ul className="space-y-2 pt-2">
              {[
                "Adhere to international security standards, best practices and relevant international regulations.",
                "Keep abreast of new and emerging threats.",
                "Enhance their skills and knowledge across machine types."
              ].map((subBullet, sIdx) => (
                <li key={sIdx} className="flex items-start gap-3 text-sm text-slate-600">
                  <span className="text-blue-600 font-bold text-base select-none">•</span>
                  <span className="leading-relaxed">{subBullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

      
     
{/* SECTION 4: FACTS & FIGURES STATISTICAL MATRIX WITH DUAL IMAGES */}
        <section className="bg-white border border-slate-200/80 rounded-[2.5rem] p-8 md:p-14 shadow-sm space-y-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-slate-100 pb-6">
            <div className="space-y-1">
              <span className="text-xs font-black text-blue-600 tracking-widest uppercase">Verified Parameters</span>
              <h3 className="text-2xl md:text-3xl font-black text-[#113264] tracking-tight">X-Screen 3D Facts & Figures</h3>
            </div>
            <p className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-md">
              Global Platform Authorization
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Left Column: Dual Stacked Images Matching Content Height */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-6">
              {/* Image 1 */}
              <div className="relative w-full aspect-[16/10] bg-slate-50 border border-slate-200/80 p-2 rounded-2xl shadow-inner group overflow-hidden flex-1">
                <div className="relative w-full h-full overflow-hidden rounded-xl">
                  <Image
                    src="/x-ray3d-img.png"
                    alt="X-Screen 3D Simulation Interface Graphic 1"
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
                    alt="X-Screen 3D Simulation Interface Graphic 2"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Right Column: Dynamic Data Matrix Checklist */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {factsAndFigures.map((fact, index) => (
                  <div key={index} className="flex items-start gap-3 bg-slate-50/50 border border-slate-200/60 p-3.5 rounded-xl hover:bg-white hover:shadow-md hover:border-blue-500/10 transition-all duration-200">
                    <div className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-emerald-600 font-extrabold text-[10px]">✔</span>
                    </div>
                    <span className="text-slate-700 text-xs md:text-sm font-semibold leading-snug">{fact}</span>
                  </div>
                ))}
              </div>
              
              <div className="pt-4 border-t border-slate-100 text-right">
                <p className="text-[10px] font-black text-slate-400 tracking-widest uppercase">
                  Powered globally by Quadratica (UK) Ltd.
                </p>
              </div>
            </div>

          </div>
        </section>
         
       

      </main>

   

    </div>
  );
}