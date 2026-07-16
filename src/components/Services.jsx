"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ConfettiButton } from "../components/ui/confetti";
import confetti from "canvas-confetti";

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

  const handleConfetti = (e) => {
  const rect = e.currentTarget.getBoundingClientRect();

  confetti({
    particleCount: 120,
    spread: 70,
    origin: {
      x: (rect.left + rect.width / 2) / window.innerWidth,
      y: (rect.top + rect.height / 2) / window.innerHeight,
    },
  });
};


  useEffect(() => {
    const checkDevice = () => setIsMobile(window.innerWidth < 768);
    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  // 3D Card Animation Variants
  const cardVariants = {
    hidden: { opacity: 0, rotateX: 20, y: 50 },
    visible: { 
      opacity: 1, 
      rotateX: 0, 
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };
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
   <section className="py-20 bg-[#f8fafc] overflow-hidden">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl font-black text-center text-[#113264] mb-16 uppercase tracking-widest"
      >
        Products & Services
      </motion.h2>

      {/* PARENT PERSPECTIVE CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 [perspective:1500px]">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              // 3D Hover Tilt Effect
              whileHover={{ 
                rotateY: 10, 
                rotateX: 5, 
                z: 20,
                transition: { duration: 0.3 } 
              }}
              className="bg-white rounded-2xl p-6 shadow-2xl shadow-blue-900/10 border border-gray-100 flex flex-col justify-between group cursor-pointer [transform-style:preserve-3d]"
            >
              {/* IMAGE WITH 3D POP EFFECT */}
              <div className="relative w-full h-48 mb-6 [transform:translateZ(30px)]">
                <div className="relative w-full h-full rounded-xl overflow-hidden bg-gray-50 p-4">
                  <Image
                    src={item.img}
                    alt={item.alt}
                    fill
                    className="object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>

              {/* CONTENT */}
              <div className="text-center [transform:translateZ(20px)]">
                <h3 className="text-lg font-black text-[#113264] uppercase mb-2">
                  {item.title}
                </h3>
                <p className="text-xs font-bold text-gray-500 mb-4">{item.subtitle}</p>
                <p className="text-xs text-gray-400 line-clamp-3 mb-6">{item.desc}</p>
              </div>

              <div className="text-center">
                <Link href={item.link} className="text-xs font-black text-blue-600 uppercase hover:underline">
                  Read More
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* CTA SECTION WITH 3D DEPTH */}
  
    </section>

      {/* CALL TO ACTION (CTA) SECTION */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={ctaVariants}
        className="relative bg-gradient-to-r from-[#113264] to-[#1e40af] py-20 overflow-hidden text-white will-change-transform"
      >
      
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
  onClick={handleConfetti}
  className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-[#3b82f6] px-10 py-4 text-sm font-black uppercase tracking-widest text-white shadow-xl transition-all duration-300 hover:bg-white hover:text-[#113264]"
>
  Schedule A Meeting
</Link>
        </div>
      </motion.section>
   
    </>
  );
}