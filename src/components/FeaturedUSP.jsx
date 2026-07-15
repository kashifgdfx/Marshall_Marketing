"use client"; // Framer Motion के लिए यह ज़रूरी है

import Image from "next/image";
import { motion } from "framer-motion"; // 1. मोशन इम्पोर्ट करें

const FeaturedUSP = () => {
  const uspData = [
    {
      img: "/featured1.webp", // मेक श्योर आपकी नई इमेजेस/आइकॉन्स यहाँ मैप्ड हों
      alt: "Comprehensive Security Analysis and Vulnerability Assessment",
      titleMain: "Security",
      titleSub: "Analysis",
      desc: "Full threat profiling, risk assessment, and complete facility security auditing.",
    },
    {
      img: "/featured2.webp",
      alt: "Computer Based X-Ray Screener Training System",
      titleMain: "CBT",
      titleSub: "Training",
      desc: "Undisputed leader in India for advanced Computer-Based X-Ray Screener training.",
    },
    {
      img: "/featured3.webp",
      alt: "Bespoke Architectural Security Design and Deployment",
      titleMain: "Program",
      titleSub: "Design",
      desc: "Tailored framework planning, strategic defense blueprints, and execution.",
    },
    {
      img: "/featured4.webp",
      alt: "Advanced Threat Detection Systems and Kits",
      titleMain: "Threat",
      titleSub: "Detection",
      desc: "High-end core specialization in detecting threat objects and contraband.",
    },
  ];

  // 2. एनिमेटेड कंटेनर (Parent) के लिए सेटिंग्स: यह बच्चों के एनीमेशन को मैनेज करेगा
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        // 'Stagger' का मतलब है एक कार्ड के बाद दूसरा कार्ड एनिमेट होगा
        staggerChildren: 0.2, // हर कार्ड के बीच 0.2 सेकंड का गैप
      },
    },
  };

  // 3. इंडिविजुअल कार्ड (Child) के लिए सेटिंग्स: Fade-in + Slide-up
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30 // कार्ड शुरू में 30px नीचे रहेगा
    },
    visible: { 
      opacity: 1, 
      y: 0, // अपनी असली जगह पर आ जाएगा
      transition: {
        duration: 0.6, // एनीमेशन 0.6 सेकंड तक चलेगा
        ease: [0.22, 1, 0.36, 1] // प्रीमियम 'Ease-out' इफ़ेक्ट के लिए Cubic Bezier
      }
    },
  };

  return (
    <section className="py-16 md:py-20 bg-white text-foreground border-b border-border/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* 4. ग्रिड डिव को 'motion.div' में बदलें और वेरिएंट्स अप्लाई करें */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-border rounded-3xl overflow-hidden bg-card shadow-lg shadow-neutral-100/50 dark:shadow-neutral-950/30"
          initial="hidden" // शुरूआती स्टेट (Hidden)
          whileInView="visible" // स्क्रॉल होकर व्यू में आने पर (Visible)
          viewport={{ once: true, amount: 0.2 }} // सिर्फ एक बार एनिमेट होगा, जब 20% कॉम्पोनेन्ट दिख रहा हो
          variants={containerVariants} // कंटेनर वेरिएंट्स लोड करें
        >
          {uspData.map((item, index) => (
            // 5. हर कार्ड डिव को 'motion.div' में बदलें औरVariants अप्लाई करें
            <motion.div
              key={index}
              variants={cardVariants} // चाइल्ड वेरिएंट्स लोड करें (opacity और y)
              className={`
                border-border
                ${index !== uspData.length - 1 ? "lg:border-r" : ""}
                ${index % 2 !== 0 ? "sm:border-l lg:border-l-0" : ""}
                border-b sm:border-b-0
              `}
            >
              {/* अंदर का कंटेंट और होवर इफेक्ट्स पहले जैसे ही परफेक्ट हैं */}
              <div className="h-full px-6 py-12 text-center hover:bg-primary/5 transition-colors duration-300 group cursor-pointer relative">
                
                {/* प्रीमियम टच: होवर करने पर नीचे एक पतली प्राइमरी लाइन */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-primary transition-all duration-300 group-hover:w-full"/>

                {/* ICON */}
                <div className="flex justify-center mb-6 transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-translate-y-1">
                  <Image
                    src={item.img}
                    alt={item.alt}
                    width={72} // थोडा बड़ा आइकॉन बेहतर दिखता है
                    height={72}
                    className="h-16 w-auto object-contain dark:opacity-90"
                  />
                </div>

                {/* TITLE */}
                <h4 className="text-xl md:text-2xl font-extrabold text-foreground mb-4 tracking-tight">
                  <span className="text-primary">{item.titleMain}</span>{" "}
                  {item.titleSub}
                </h4>

                {/* DESC */}
                <p className="text-base text-muted leading-relaxed max-w-[280px] mx-auto">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedUSP;