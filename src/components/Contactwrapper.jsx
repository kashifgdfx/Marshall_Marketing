"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";

// Icons
import { 
  MapPin, 
  Phone, 
  Mail, 
  User, 
  MessageSquare, 
  Send,
  ArrowRight 
} from "lucide-react";

// EmailJS Credentials
const EMAIL_SERVICE_ID = "service_5n72u1i";
const EMAIL_TEMPLATE_ID = "template_102fpjv";
const EMAIL_PUBLIC_KEY = "bfED1bbzcLms9zkik";

export default function ContactPage() {
  const formRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: "", message: "" });

    try {
      await emailjs.sendForm(
        EMAIL_SERVICE_ID,
        EMAIL_TEMPLATE_ID,
        e.target,
        EMAIL_PUBLIC_KEY
      );
      
      setStatus({ type: "success", message: "Your message has been sent successfully! Our security experts will connect with you." });
      e.target.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus({ type: "error", message: "Failed to send message. Please try again directly via email." });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-white font-sans text-slate-900 selection:bg-[#3b82f6]/30 selection:text-[#113264]">
      
      {/* --- HERO SECTION --- */}
  
      <section className="relative w-full md:h-[450px] flex flex-col md:flex-row overflow-hidden bg-[#113264]">
        
        {/* Left: Image Block (Height and Width Controlled) */}
        <div className="w-full md:w-1/2 flex items-center justify-center bg-[#0d274c] p-4 md:p-8">
          <div className="relative w-full max-w-[550px] aspect-[4/3] md:aspect-auto">
            <Image
              src="/contact-og.png"
              alt="Marshal Marketing & Management Security Experts"
              width={600}   
              height={400}  
              priority
              className="object-contain w-full h-auto rounded-xl shadow-lg"
            />
          </div>
        </div>

        {/* Right: Premium Corporate Content Block */}
        <div className="w-full md:w-1/2 bg-[#113264] flex items-center justify-center p-8 md:p-12 lg:p-16 relative">
          <div className="relative z-10 max-w-lg space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight uppercase tracking-tight">
              Securing Innovation <br />
              <span className="text-[#3b82f6]">Connecting Expertise</span>
            </h1>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed">
              Leading provider of high-end tactical infrastructure, advanced 3D X-Ray screening, explosive trace detectors, and enterprise marketing models across India.
            </p>
            
            {/* High-End Enterprise Metrics */}
            <div className="flex gap-8 pt-4 border-t border-slate-700/60">
               <div>
                 <span className="block text-3xl font-bold text-white">24/7</span>
                 <span className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Aviation & Elite Support</span>
               </div>
               <div>
                 <span className="block text-3xl font-bold text-white">100%</span>
                 <span className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Compliant Solutions</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTACT CONTENT SECTION --- */}
      <section className="w-full py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-20">
            
            {/* LEFT: Contact Information Grid (Direct Alignment with Screenshot Data) */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="text-sm font-black text-[#113264] uppercase tracking-wider border-b-2 border-[#3b82f6] w-fit pb-1 mb-2">
                  CONTACT DETAILS
                </h2>
                <p className="text-slate-500 text-sm font-medium mt-3">
                  For procurement, service contracts, and custom inquiries, please reach out via our official details.
                </p>
              </div>

              {/* Info Cards */}
              <div className="space-y-5">
                
                {/* ADDRESS BOX */}
                <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-[#3b82f6]/30 transition-all duration-300 group">
                  <div className="p-3 bg-[#3b82f6]/10 rounded-xl text-[#3b82f6] group-hover:bg-[#3b82f6] group-hover:text-white transition-colors">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-black uppercase tracking-wider text-slate-700 underline underline-offset-4 mb-2">ADDRESS :</h3>
                    <p className="text-slate-500 text-sm font-semibold leading-relaxed tracking-wide">
                      M-10, 2nd Floor, M-Block Market,<br />
                      Greater Kailash Part - I,<br />
                      New Delhi-110048. India
                    </p>
                  </div>
                </div>

                {/* PHONE BOX */}
                <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-[#3b82f6]/30 transition-all duration-300 group">
                  <div className="p-3 bg-[#3b82f6]/10 rounded-xl text-[#3b82f6] group-hover:bg-[#3b82f6] group-hover:text-white transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-black uppercase tracking-wider text-slate-700 underline underline-offset-4 mb-2">PHONE :</h3>
                    <div className="text-sm font-semibold text-slate-500 space-y-0.5 tracking-wide">
                      <p>+91 9654918918</p>
                      <p>+91 9818816090</p>
                      <p className="text-xs text-slate-400">011-29230484, 011-46508491</p>
                    </div>
                  </div>
                </div>

                {/* EMAIL BOX */}
                <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-[#3b82f6]/30 transition-all duration-300 group">
                  <div className="p-3 bg-[#3b82f6]/10 rounded-xl text-[#3b82f6] group-hover:bg-[#3b82f6] group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-black uppercase tracking-wider text-slate-700 underline underline-offset-4 mb-2">EMAIL :</h3>
                    <div className="text-sm font-semibold text-slate-500 space-y-0.5 break-all">
                      <p className="hover:text-[#3b82f6] transition-colors cursor-pointer">sales@marshal-m-m.com</p>
                      <p className="text-xs text-slate-400">harmohan@marshal-m-m.com</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* RIGHT: High-End Lead Generation Form */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100">
                <h3 className="text-xl font-black text-[#113264] uppercase tracking-tight mb-6">Send Procurement Query</h3>
                
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                  
                  {/* Name Input */}
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Full Name / Authorized Signatory</label>
                    <div className="relative group">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#3b82f6] transition-colors">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        placeholder="e.g., Captain Malhotra"
                        className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-[#3b82f6] focus:ring-4 focus:ring-[#3b82f6]/10 outline-none transition-all text-sm font-medium"
                      />
                    </div>
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Official Email Address</label>
                    <div className="relative group">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#3b82f6] transition-colors">
                        <Mail className="w-4 h-4" />
                      </div>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        placeholder="corporate@domain.com"
                        className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-[#3b82f6] focus:ring-4 focus:ring-[#3b82f6]/10 outline-none transition-all text-sm font-medium"
                      />
                    </div>
                  </div>

                  {/* Phone Input */}
                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Contact Number</label>
                    <div className="relative group">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#3b82f6] transition-colors">
                        <Phone className="w-4 h-4" />
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        required
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-[#3b82f6] focus:ring-4 focus:ring-[#3b82f6]/10 outline-none transition-all text-sm font-medium"
                      />
                    </div>
                  </div>

                  {/* Message Input */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Requirement Details</label>
                    <div className="relative group">
                      <div className="absolute left-4 top-4 text-slate-400 group-focus-within:text-[#3b82f6] transition-colors">
                        <MessageSquare className="w-4 h-4" />
                      </div>
                      <textarea
                        name="message"
                        id="message"
                        rows="4"
                        required
                        placeholder="Specify requirements like 3D X-Ray Screens, ETD Kits, or Food Poison Testing solutions..."
                        className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-[#3b82f6] focus:ring-4 focus:ring-[#3b82f6]/10 outline-none transition-all text-sm font-medium resize-none"
                      ></textarea>
                    </div>
                  </div>

                  {/* Response Status Notification Banner */}
                  {status.message && (
                    <div className={`p-4 rounded-xl text-xs font-semibold flex items-center gap-2 border ${
                      status.type === 'success' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-rose-50 text-rose-700 border-rose-200'
                    }`}>
                      {status.type === 'success' ? <Send className="w-4 h-4 text-emerald-600" /> : <MessageSquare className="w-4 h-4 text-rose-600" />}
                      {status.message}
                    </div>
                  )}

                  {/* Submit Action Button */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-[#3b82f6] hover:bg-[#1d4ed8] text-white font-black text-sm uppercase tracking-wider py-4 rounded-xl shadow-lg shadow-[#3b82f6]/20 hover:shadow-xl active:scale-[0.99] transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <span>Processing Request...</span>
                    ) : (
                      <span className="flex items-center gap-2 cursor-pointer">
                        Submit Dispatch Request <ArrowRight className="w-4 h-4" />
                      </span>
                    )}
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- LIVE INTERACTIVE GOOGLE MAPS BLOCK --- */}
      <section className="w-full h-80 bg-slate-200 relative border-t border-slate-200">
        <iframe
          title="Marshal Marketing & Management Pvt Ltd Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.6644200427847!2d77.2341258763216!3d28.549805975711316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3c4fe6331a9%3A0xc6cb525997f7faea!2sM%20Block%20Market%2C%20Greater%20Kailash%20I%2C%20Greater%20Kailash%2C%20New%20Delhi%2C%20Delhi%20110048!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
          className="w-full h-full border-0 absolute inset-0 grayscale"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

    </main>
  );
}