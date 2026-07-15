"use client";

import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

export default function VideoContactSection() {
  return (
    <section className="py-20 bg-[#f8fafc] w-full border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* TOP HEADING SECTION */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 tracking-tight">
            Contact <span className="text-[#3b82f6]">Information</span>
          </h2>
          <p className="text-gray-400 mt-3 text-sm font-medium">
            For inquiries, Please feel free to reach out to us.
          </p>
        </div>

        {/* MAIN GRID CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* LEFT COLUMN: CONTACT DETAILS (Occupies 5 columns on desktop) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            <h3 className="text-sm font-black text-[#1d4ed8] uppercase tracking-wider border-b-2 border-[#1d4ed8] w-fit pb-1 mb-2">
              CONTACT DETAILS
            </h3>

            {/* PHONE BOX */}
            <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex items-start gap-4">
              <div className="p-3 bg-blue-50 text-[#3b82f6] rounded-lg mt-0.5">
                <FiPhone className="text-lg" />
              </div>
              <div>
                <h4 className="text-xs font-black uppercase tracking-wider text-gray-700 underline underline-offset-4 mb-2">
                  PHONE :
                </h4>
                <div className="text-sm font-semibold text-gray-500 space-y-1 tracking-wide">
                  <p>+91 9654918918</p>
                  <p>+91 9818816090</p>
                  <p>011-29230484, 011-46508491</p>
                </div>
              </div>
            </div>

            {/* EMAIL BOX */}
            <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex items-start gap-4">
              <div className="p-3 bg-blue-50 text-[#3b82f6] rounded-lg mt-0.5">
                <FiMail className="text-lg" />
              </div>
              <div>
                <h4 className="text-xs font-black uppercase tracking-wider text-gray-700 underline underline-offset-4 mb-2">
                  EMAIL :
                </h4>
                <div className="text-sm font-semibold text-gray-500 space-y-1 break-all">
                  <p className="hover:text-[#3b82f6] transition-colors cursor-pointer">sales@marshal-m-m.com</p>
                  <p className="hover:text-[#3b82f6] transition-colors cursor-pointer">harmohan@marshal-m-m.com</p>
                  <p className="hover:text-[#3b82f6] transition-colors cursor-pointer">nanki.uberoi@marshal-m-m.com</p>
                </div>
              </div>
            </div>

            {/* ADDRESS BOX */}
            <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex items-start gap-4">
              <div className="p-3 bg-blue-50 text-[#3b82f6] rounded-lg mt-0.5">
                <FiMapPin className="text-lg" />
              </div>
              <div>
                <h4 className="text-xs font-black uppercase tracking-wider text-gray-700 underline underline-offset-4 mb-2">
                  ADDRESS :
                </h4>
                <p className="text-sm font-semibold text-gray-500 leading-relaxed tracking-wide">
                  M-10, 2nd Floor, M-Block Market,<br />
                  Greater Kailash Part - I,<br />
                  New Delhi, 110048
                </p>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: LIVE GOOGLE MAP (Occupies 7 columns on desktop) */}
          <div className="lg:col-span-7 w-full h-full min-h-[400px] md:min-h-[450px] rounded-2xl overflow-hidden shadow-md border border-gray-200 relative bg-gray-100">
            <iframe
              title="Marshal Marketing & Management Pvt Ltd Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.6644200427847!2d77.2341258763216!3d28.549805975711316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3c4fe6331a9%3A0xc6cb525997f7faea!2sM%20Block%20Market%2C%20Greater%20Kailash%20I%2C%20Greater%20Kailash%2C%20New%20Delhi%2C%20Delhi%20110048!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
              className="w-full h-full absolute inset-0 border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}