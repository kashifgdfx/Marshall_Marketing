"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { SparklesText } from "@/components/SparklesText"; // अपनी फाइल पाथ चेक करें

import "swiper/css";
import "swiper/css/pagination";

// ... (corporateQuotes array जैसा है वैसा ही रखें)
const corporateQuotes = [
    {
        desc: "We provide the most advanced X-Ray simulator for BHS in the world. We are the leading simulator makers in BHS.",
    },
    {
        desc: "We provide Poison, Detection kits, Bomb threat solution & Explosive detection kits.",
    },
    {
        desc: "India’s leading Company in providing security management & expertise to enterprises in aviation sector.",
    },
    {
        desc: "Constantly upgrading and innovating technology in aviation security to counter emerging threats.",
    },
];

export default function HappyCustomersQuotes() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkDevice = () => setIsMobile(window.innerWidth < 768);
        checkDevice();
        window.addEventListener("resize", checkDevice);
        return () => window.removeEventListener("resize", checkDevice);
    }, []);

    return (
        <section className="py-20 bg-white border-t border-gray-100 overflow-hidden w-full">
            <div className="max-w-7xl mx-auto px-6">
                
                {/* 1. HEADING WITH SPARKLES */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 px-4"
                >
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#3b82f6] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full inline-block mb-3">
                        Our Core Pillars & Trust
                    </span>
                    
                    {/* Yahan SparklesText ka use kiya hai */}
                    <SparklesText 
                        className="text-3xl md:text-5xl font-black text-[#113264] uppercase tracking-wide"
                        sparklesCount={8}
                        colors={{ first: "#3b82f6", second: "#1d4ed8" }}
                    >
                        WHAT OUR CUSTOMERS & PARTNERS SAY
                    </SparklesText>

                    <p className="text-gray-500 text-sm mt-6 max-w-xl mx-auto font-medium">
                        Discover why national airports and defense establishments trust Marshal Marketing.
                    </p>
                </motion.div>

                {/* 2. SWIPER (जैसा था वैसा ही रहेगा) */}
                <div className="relative">
                    <Swiper
                        spaceBetween={40}
                        autoplay={{ delay: 4500, disableOnInteraction: false }}
                        pagination={{ clickable: true }}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        modules={[Autoplay, Pagination]}
                        className="quotes-multi-swiper pb-16"
                    >
                        {corporateQuotes.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="bg-white rounded-2xl border border-gray-200/50 p-8 shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between">
                                    <p className="text-[#475569] text-sm md:text-base leading-relaxed font-medium">
                                        <span className="text-2xl font-black text-[#3b82f6] mr-2">“</span>
                                        {item.desc}
                                        <span className="text-2xl font-black text-[#3b82f6] ml-2">”</span>
                                    </p>
                                    <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-[#113264]"></div>
                                        <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#113264]">
                                            Marshal Certified
                                        </span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}