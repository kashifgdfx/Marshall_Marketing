"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const FeaturedUSP = () => {
  const uspData = [
    {
      img: "/featured1.webp",
      alt: "Comprehensive Security Analysis",
      titleMain: "Security",
      titleSub: "Analysis",
      desc: "Full threat profiling, risk assessment, and complete facility security auditing.",
    },
    {
      img: "/featured2.webp",
      alt: "Computer Based X-Ray Screener",
      titleMain: "CBT",
      titleSub: "Training",
      desc: "Undisputed leader in India for advanced Computer-Based X-Ray Screener training.",
    },
    {
      img: "/featured3.webp",
      alt: "Bespoke Architectural Security",
      titleMain: "Program",
      titleSub: "Design",
      desc: "Tailored framework planning, strategic defense blueprints, and execution.",
    },
    {
      img: "/featured4.webp",
      alt: "Advanced Threat Detection",
      titleMain: "Threat",
      titleSub: "Detection",
      desc: "High-end core specialization in detecting threat objects and contraband.",
    },
  ];

  // 3D perspective applied to the container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  // 3D Tilt/Rotate effect
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      rotateX: -20, 
      rotateY: 10, 
      y: 50,
      scale: 0.9 
    },
    visible: { 
      opacity: 1, 
      rotateX: 0, 
      rotateY: 0, 
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    },
  };

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      {/* Perspective wrapper for 3D effect */}
      <div className="max-w-7xl mx-auto px-4 [perspective:1000px]">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {uspData.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative bg-white p-8 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 hover:shadow-2xl transition-all duration-500"
              // Add a subtle interactive hover tilt
              whileHover={{ y: -10, rotateX: 5, rotateY: 5 }}
            >
              <div className="flex justify-center mb-6">
                <Image
                  src={item.img}
                  alt={item.alt}
                  width={64}
                  height={64}
                  className="transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <h4 className="text-xl font-bold text-center mb-3">
                <span className="text-blue-600">{item.titleMain}</span> {item.titleSub}
              </h4>
              <p className="text-sm text-gray-600 text-center leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedUSP;