"use client";

import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaMapMarkerAlt,
  FaEnvelopeOpen,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t bg-white pt-16 pb-6 font-sans text-gray-700">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-20">

        {/* MAIN FOOTER */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 xl:gap-20">

          {/* LEFT: COMPANY INFO & ADDRESS */}
          <div className="lg:col-span-5">

            {/* LOGO & BRAND NAME */}
            <div className="mb-6 flex items-center gap-3">
              <Image
                src="/marshallogo.png"
                alt="Marshal Marketing & Management Logo"
                width={48}
                height={48}
                priority
                className="h-12 w-auto object-contain"
              />
              <p className="text-xl md:text-2xl font-black text-[#113264] tracking-tight leading-tight uppercase">
                Marshal Marketing & Management
              </p>
            </div>

            {/* BRIEF ABOUT */}
            <p className="mb-8 max-w-md text-sm leading-relaxed text-gray-500 font-medium">
              India’s leading Enterprise providing high-end security solutions, advanced BHS simulators, and explosive detection tactical expertise to the aviation sector.
            </p>

            {/* ADDRESS & EMAIL BLOCK */}
            <div className="space-y-5">

              {/* ADDRESS ITEM */}
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-lg text-[#3b82f6]" />
                <div>
                  <h6 className="mb-1 text-xs font-black uppercase tracking-wider text-gray-800">
                    Corporate Office Address
                  </h6>
                  <p className="text-sm font-semibold leading-relaxed text-gray-500">
                    M-10, 2nd Floor, M-Block Market,<br />
                    Greater Kailash Part - I,<br />
                    New Delhi-110048. India
                  </p>
                </div>
              </div>

              {/* EMAIL ITEM */}
              <div className="flex items-start gap-3">
                <FaEnvelopeOpen className="mt-1 text-base text-[#3b82f6]" />
                <div>
                  <h6 className="mb-1 text-xs font-black uppercase tracking-wider text-gray-800">
                    Email Procurement
                  </h6>
                  <a
                    href="mailto:sales@marshal-m-m.com"
                    className="text-sm font-semibold text-gray-500 transition hover:text-[#3b82f6]"
                  >
                    sales@marshal-m-m.com
                  </a>
                </div>
              </div>
            </div>

            {/* SOCIAL LINK BUTTONS */}
            <div className="mt-8">
              <span className="mb-4 block text-[10px] font-black uppercase tracking-widest text-gray-400">
                Connect With Us
              </span>

              <div className="flex items-center gap-3">
                {[
                  { icon: <FaFacebookF />, url: "https://www.facebook.com/", label: "Facebook" },
                  { icon: <FaTwitter />, url: "https://www.x.com/", label: "Twitter" },
                  { icon: <FaLinkedinIn />, url: "https://www.linkedin.com/", label: "LinkedIn" },
                  { icon: <FaYoutube />, url: "https://www.youtube.com/", label: "YouTube" },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit our ${social.label} page`}
                    title={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-50 border border-gray-200 text-gray-500 transition-all duration-300 hover:bg-[#113264] hover:text-white hover:border-[#113264]"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMNS: LINKS & SERVICES */}
          <div className="lg:col-span-7">
            <div className="grid h-full grid-cols-1 gap-12 sm:grid-cols-2 lg:gap-16 lg:pl-12">

              {/* USEFUL LINKS */}
              <div className="flex flex-col">
                <h3 className="relative mb-7 inline-block pb-3 text-base font-black uppercase tracking-wider text-[#113264] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-10 after:bg-[#3b82f6]">
                  Useful Links
                </h3>

                <ul className="space-y-4 text-[14px] font-semibold text-gray-500">
                  {[
                    { name: "Home", path: "/" },
                    { name: "About us", path: "/about" },
                    // { name: "Products & Services", path: "/services" },
                    { name: "Terms & conditions", path: "/terms" },
                    { name: "Privacy policy", path: "/privacy" },
                  ].map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.path}
                        className="group inline-flex items-center gap-2 transition-all duration-300 hover:text-[#3b82f6]"
                      >
                        <span className="h-[1px] w-0 bg-[#3b82f6] transition-all duration-300 group-hover:w-3" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* PRODUCTS & SERVICES */}
              <div className="flex flex-col">
                <h3 className="relative mb-7 inline-block pb-3 text-base font-black uppercase tracking-wider text-[#113264] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-10 after:bg-[#3b82f6]">
                  Products & Services
                </h3>

                <ul className="space-y-4 text-[14px] font-semibold text-gray-500">
                  {[
                    { name: "X-Ray Screen 3D", path: "/services/x-screen-3d" },
                    { name: "X-Ray Screen 2D", path: "/services/x-screen-2d" },
                    { name: "Explosive Trace Detection Kit", path: "/services/explosive-trace-detection-kit" },
                    { name: "Food Poison Detection Kit", path: "/services/food-poison-detection-kit" },
                  ].map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.path}
                        className="group inline-flex items-center gap-2 transition-all duration-300 hover:text-[#3b82f6]"
                      >
                        <span className="h-[1px] w-0 bg-[#3b82f6] transition-all duration-300 group-hover:w-3" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* COPYRIGHT BOTTOM STRIP */}
        <div className="mt-16 border-t border-gray-200/60 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-xs font-semibold text-gray-400 md:text-left tracking-wide">
              © Copyright Marshal Marketing & Management Pvt. Ltd.. All Rights Reserved
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;