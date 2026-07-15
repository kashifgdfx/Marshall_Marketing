"use client";
import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqData = [
  {
    question: "What is X-Screen Training Programme?",
    answer: "The X-Screen Training Programme is an advanced Computer-Based Interpretation Training (CBT) system designed for X-Ray screeners. It enhances image recognition skills, helping operators accurately identify threats, contraband, and dangerous goods in real-time screening environments.",
  },
  {
    question: "What is a simulator?",
    answer: "It is a software device which works on PC/Laptop showing exactly the same image as would be seen on the screen of the X-Ray Machine. It allows trainees to practice without needing access to actual, expensive physical X-Ray hardware.",
  },
  {
    question: "How do you conduct a training?",
    answer: "Training is conducted through our proprietary interactive software modules. It includes step-by-step image interpretation exercises, timed tests, threat detection scenarios, and comprehensive automated reporting to track each screener's learning progress.",
  },
  {
    question: "Can we educate ourselves from our home?",
    answer: "Yes, our training systems support flexible remote learning setups. Screeners can access the modules securely via laptops or authorized workstations, enabling continuous training from home or anywhere outside the central facility.",
  },
  {
    question: "How many licenses does an ASTI / Airline / Airport require?",
    answer: "The number of licenses depends entirely on the volume of screeners and active workstations you have. We offer customizable deployment models tailored to small airlines, individual ASTIs, or massive multi-terminal airport operations.",
  },
  {
    question: "How can I see a demo?",
    answer: "You can easily schedule an interactive product demo by navigating to our Contact page or dropping us a request via email. Our technical team will arrange a live walkthrough of the software interface.",
  },
  {
    question: "How can I know about the general price?",
    answer: "Since our software licenses and tactical kits are customized based on enterprise scale and regulatory requirements, please reach out to our sales team for an official procurement quote tailored to your specifications.",
  },
  {
    question: "How big is the Explosive Detection Kit?",
    answer: "Our SprayView PLUS Detection Kit is highly compact, lightweight, and engineered for field tactical mobility. It comes housed in a rugged, easy-to-carry briefcase designed for immediate deployment by security staff.",
  },
  {
    question: "What is the shelf life of the Explosive Detection Kit?",
    answer: "The detection reagents and aerosol sprays inside the kit are formulated for high stability, generally offering an extended shelf life of up to 2 years when stored under optimal ambient conditions as per instructions.",
  },
  {
    question: "Is the Explosive Detection Kit a trace detector?",
    answer: "Yes, it is an elite trace detection system capable of identifying microscopic residues and invisible particles of explosive materials left on surfaces, baggage, clothing, or hands.",
  },
  {
    question: "What all explosives does the kit identify?",
    answer: "The master kit identifies a wide spectrum of military, commercial, and Home-Made Explosives (HMEs) including, but not limited to, TNT, RDX, PETN, Nitrates, and related precursor chemicals.",
  },
  {
    question: "How long will it take to procure a kit?",
    answer: "Standard delivery takes between 2 to 4 weeks depending on order volume and destination logistics. For urgent national infrastructure mandates or bulk corporate setups, expedited processing can be arranged.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white border-t border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* 1. HEADING SECTION */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#3b82f6] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full inline-block mb-3">
            Got Questions?
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#113264] uppercase tracking-wide">
            Frequently Asked Questions
          </h2>
          <div className="flex items-center justify-center gap-1.5 mt-4">
            <span className="w-8 h-[3px] bg-[#3b82f6] rounded-full"></span>
            <span className="w-2 h-[3px] bg-[#3b82f6] rounded-full"></span>
            <span className="w-8 h-[3px] bg-[#3b82f6] rounded-full"></span>
          </div>
        </div>

        {/* 2. ACCORDION LIST */}
        <div className="space-y-4">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white border border-gray-200/80 rounded-2xl transition-all duration-300 overflow-hidden shadow-sm hover:border-gray-300"
              >
                {/* Trigger Button */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 transition-colors hover:bg-gray-50/50 focus:outline-none"
                >
                  <span className="text-sm md:text-base font-bold text-gray-800 tracking-tight leading-snug">
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-[#113264] text-white rotate-180' : 'bg-gray-100 text-gray-600'}`}>
                    {isOpen ? <FiMinus className="text-xs" /> : <FiPlus className="text-xs" />}
                  </div>
                </button>

                {/* Animated Answer Body */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-[500px] border-t border-gray-100" : "max-h-0"
                  }`}
                >
                  <div className="p-6 text-xs sm:text-sm text-gray-500 font-medium leading-relaxed bg-[#fafafa]">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}