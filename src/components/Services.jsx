"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    title: "X-SCREEN MODEL 3D",
    subtitle: "3D - Computer Based Interpretation Training for X-Ray Screeners",
    desc: "X-Screen 3D is an online 3D/CT X-Ray Image Recognition and Interpretation Training system, specifically designed for the new line of 3D & CT X-Ray machines. X-Screen is already certified by the UK DfT to comply with EU 6-in-6 regulations, while also being compliant with ICAO and other recognized international standards.",
    img: "/service-img1.png",
    alt: "X-SCREEN MODEL 3D - Computer Based Interpretation Training for X-Ray Screeners",
    link: "/services/x-screen-3d",
  },
  {
    title: "X-SCREEN MODEL 2D",
    subtitle: "2D - Computer Based Interpretation Training for X-Ray Screeners",
    desc: "Our 2D Computer Based Interpretation Training for X-Ray Screeners has the ability to build complete bags from scratch, which are still x-ray correct, erasing the need for bulky image libraries and Time-consuming bag captures.",
    img: "/service-img2.png",
    alt: "X-SCREEN MODEL 2D - Computer Based Interpretation Training for X-Ray Screeners",
    link: "/services/x-screen-2d",
  },
  {
    title: "EXPLOSIVE TRACE DETECTION KIT",
    subtitle: "SprayView PLUS Detection Kit for Explosives and HME Precursors",
    desc: "The SV-03PLUS SprayView™ Plus Detection Kit is a master explosives detection kit which allows for the detection of traces of explosives for the detection of Commercial & Military Explosives such as TNT, RDX, PETN and Inorganic Nitrate. The SV-03PLUS SprayView™ Explosive traces detection Kit also includes reagents for the detection of chemicals that can be use to...",
    img: "/service-img3.png",
    alt: "EXPLOSIVE TRACE DETECTION KIT - SprayView PLUS Detection Kit",
    link: "/services/explosive-trace-detection-kit",
  },
  {
    title: "FOOD POISON DETECTION KIT",
    subtitle: "Field detection kit for Poison in Food",
    model: "Model : STPD - 06",
    desc: "Our Poison Detection Kits are the only detectors available in the world that detects poisons INSTANTLY, RELIABLY, and which can be used even by a person with no technical background.",
    img: "/service-img4.png",
    alt: "FOOD POISON DETECTION KIT - Field detection kit for Poison in Food",
    link: "/services/food-poison-detection-kit",
  },
];

export default function Services() {
  const [isMobile, setIsMobile] = useState(false);

  // मोबाइल स्क्रीन चेक करने के लिए ताकि भारी एनीमेशन बाईपास हो सके
  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  // 1. हेडिंग एनीमेशन
  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  // 2. ग्रिड कंटेनर वेरिएंट्स (Stagger इफ़ेक्ट सिर्फ डेस्कटॉप के लिए)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: isMobile ? 0 : 0.15, // मोबाइल पर स्टैगर बंद ताकि रेंडरिंग फ़ास्ट हो
      },
    },
  };

  // 3. इंडिविजुअल कार्ड्स वेरिएंट्स
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: isMobile ? 20 : 40 // मोबाइल पर कम मूवमेंट ताकि जर्क न लगे
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: isMobile ? 0.4 : 0.6, // मोबाइल पर फ़ास्ट फेड
        ease: [0.215, 0.610, 0.355, 1], // स्मूथ क्यूबिक बेज़ियर
      }
    },
  };

  // 4. CTA सेक्शन एनीमेशन
  const ctaVariants = {
    hidden: { opacity: 0, scale: isMobile ? 1 : 0.98 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <>
      {/* PRODUCTS & SERVICES SECTION */}
      <section className="py-20 bg-white overflow-hidden">
        {/* Section Heading के लिए मोशन */}
        <motion.h2 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={headingVariants}
          className="text-3xl md:text-4xl font-black text-center text-[#1d4ed8] uppercase tracking-wide mb-16"
        >
          PRODUCTS & SERVICES
        </motion.h2>

        {/* 4-Column Responsive Grid - Parent Motion */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: isMobile ? 0.05 : 0.15 }} // मोबाइल पर आते ही तुरंत ट्रिगर होगा
          variants={containerVariants}
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4"
        >
          {services.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-white rounded-lg p-5 flex flex-col justify-between transition-shadow duration-300 hover:shadow-xl border border-gray-100/80 will-change-transform"
            >
              <div>
                {/* IMAGE CONTAINER */}
                <div className="relative w-full h-48 border border-gray-200/80 rounded-lg overflow-hidden bg-[#fafafa] p-3 flex items-center justify-center mb-6">
                  <div className="relative w-full h-full">
                    <Image
                      src={item.img}
                      alt={item.alt}
                      fill
                      priority={index === 0}
                      className="object-contain mix-blend-multiply transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </div>

                {/* TEXT DETAILS */}
                <div className="text-center px-1">
                  <h3 className="text-xl font-extrabold text-[#113264] tracking-tight uppercase mb-3 min-h-[56px] flex items-center justify-center">
                    {item.title}
                  </h3>
                  
                  <p className="text-sm font-bold text-gray-800 leading-snug mb-2 min-h-[40px]">
                    {item.subtitle}
                  </p>

                  {item.model && (
                    <p className="text-xs font-medium text-gray-500 mb-4 bg-gray-50 py-0.5 px-2 rounded inline-block">
                      {item.model}
                    </p>
                  )}

                  <p className="text-xs text-gray-500 font-medium leading-relaxed mb-6 text-center line-clamp-6">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* ACTION LINK */}
              <div className="text-center pt-2">
                <Link
                  href={item.link}
                  className="inline-block text-xs font-bold tracking-wide text-[#3b82f6] transition-all duration-200 hover:text-[#1d4ed8] hover:underline"
                >
                  Read More...
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CALL TO ACTION (CTA) SECTION */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={ctaVariants}
        className="relative bg-gradient-to-r from-[#113264] to-[#1e40af] py-20 overflow-hidden text-white will-change-transform"
      >
        {/* Background Geometric Accents */}
        <div className="absolute left-[-100px] bottom-[-100px] w-[300px] h-[300px] bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute right-[-80px] top-[-80px] w-[240px] h-[240px] bg-white/5 rounded-full blur-xl pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto text-center px-5">
          <h2 className="text-white text-3xl md:text-5xl font-black tracking-tight leading-tight mb-6">
            Looking for Advanced Threat Detection &
            <br className="hidden md:block" /> Security Management for Your Enterprise?
          </h2>

          <p className="text-blue-100 text-sm md:text-base max-w-2xl mx-auto mb-10 opacity-90 font-medium">
            Get in touch with our security compliance experts today to schedule consultation programs.
          </p>

          <Link
            href="/contact"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-[#3b82f6] px-10 py-4 text-sm font-black uppercase tracking-widest text-white shadow-xl transition-all duration-300 hover:bg-white hover:text-[#113264] hover:-translate-y-0.5"
          >
            <span className="relative z-10">
              Schedule A Meeting
            </span>
          </Link>
        </div>
      </motion.section>
    </>
  );
}