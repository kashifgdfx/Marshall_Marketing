"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion"; // 1. Framer Motion इम्पोर्ट किया

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";

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

    // मोबाइल स्क्रीन चेक करने के लिए
    useEffect(() => {
        const checkDevice = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkDevice();
        window.addEventListener("resize", checkDevice);
        return () => window.removeEventListener("resize", checkDevice);
    }, []);

    // 2. हेडर के लिए एनीमेशन सेटिंग्स (Fade-in + Slide-up)
    const headerVariants = {
        hidden: { opacity: 0, y: isMobile ? 15 : 30 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    // 3. स्वाइपर कंटेनर के लिए एनीमेशन सेटिंग्स (स्मूथ स्लाइड-अप और हल्का स्केल)
    const swiperContainerVariants = {
        hidden: { 
            opacity: 0, 
            y: isMobile ? 25 : 50,
            scale: isMobile ? 1 : 0.98
        },
        visible: { 
            opacity: 1, 
            y: 0,
            scale: 1,
            transition: { 
                duration: isMobile ? 0.5 : 0.7, 
                ease: [0.215, 0.610, 0.355, 1] 
            }
        }
    };

    return (
        <section className="py-20 bg-gray-50/50 border-t border-b border-gray-100 overflow-hidden w-full">
            <div className="max-w-7xl mx-auto px-6">
                
                {/* 1. SECTION MAIN HEADING (मोशन के साथ) */}
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={headerVariants}
                    className="text-center mb-16 px-4 will-change-transform"
                >
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#3b82f6] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full inline-block mb-3">
                        Our Core Pillars & Trust
                    </span>
                    
                    <h2 className="text-3xl md:text-4xl font-black text-[#113264] uppercase tracking-wide">
                        WHAT OUR CUSTOMERS & PARTNERS SAY
                    </h2>

                    {/* Subtitle */}
                    <p className="text-gray-500 text-xs sm:text-sm mt-3 max-w-xl mx-auto font-medium">
                        Discover why national airports, security enterprises, and defense establishments trust Marshal Marketing & Management.
                    </p>

                    {/* Dynamic Blue Divider */}
                    <div className="flex items-center justify-center gap-1.5 mt-5">
                        <span className="w-10 h-[3px] bg-[#3b82f6] rounded-full"></span>
                        <span className="w-2.5 h-[3px] bg-[#3b82f6] rounded-full"></span>
                        <span className="w-10 h-[3px] bg-[#3b82f6] rounded-full"></span>
                    </div>
                </motion.div>

                {/* 2. MULTI-COLUMN AUTO SWIPER CONTAINER (मोशन के साथ) */}
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: isMobile ? 0.05 : 0.15 }} // मोबाइल पर आते ही तुरंत ट्रिगर होगा
                    variants={swiperContainerVariants}
                    className="relative will-change-transform"
                >
                    <Swiper
                        spaceBetween={40}
                        autoplay={{
                            delay: 4500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                        modules={[Autoplay, Pagination]}
                        className="quotes-multi-swiper pb-16"
                    >
                        {corporateQuotes.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="bg-white rounded-2xl border border-gray-200/50 p-8 shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col justify-between">
                                    
                                    {/* Quote Text */}
                                    <p className="text-[#475569] text-sm md:text-base leading-relaxed font-medium text-justify sm:text-left">
                                        {/* Open Quote */}
                                        <span className="text-2xl font-serif font-black text-[#3b82f6] mr-1.5 inline-block select-none">
                                            “
                                        </span>
                                        
                                        {item.desc}
                                        
                                        {/* Close Quote */}
                                        <span className="text-2xl font-serif font-black text-[#3b82f6] ml-1.5 inline-block select-none">
                                            ”
                                        </span>
                                    </p>

                                    {/* Bottom Branding Accent */}
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
                </motion.div>

            </div>

            {/* Global Custom CSS */}
            <style jsx global>{`
                .quotes-multi-swiper .swiper-pagination-bullets {
                    bottom: 0px !important;
                }
                .quotes-multi-swiper .swiper-pagination-bullet {
                    background: #cbd5e1 !important;
                    opacity: 1 !important;
                    width: 8px !important;
                    height: 8px !important;
                    margin: 0 6px !important;
                    transition: all 0.3s ease;
                }
                .quotes-multi-swiper .swiper-pagination-bullet-active {
                    background: #3b82f6 !important; 
                    transform: scale(1.15);
                }
            `}</style>
        </section>
    );
}