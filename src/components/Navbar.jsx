"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronRight } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [solitaireOpen, setSolitaireOpen] = useState(false);




  return (
    <div className="w-full bg-white shadow-md sticky top-0 z-[999999]">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-20 py-3">
        {/* Logo */}
        <div className="logo">
          <Link href="/" className="flex items-center gap-3 group">
            {/* Logo Image */}
            <div className="flex-shrink-0">
              <Image
                src="/marshallogo.png"
                alt="Marshal Logo"
                width={40}
                height={40}
                priority
                className="object-contain"
              />
            </div>

            {/* Logo Text (Stacked vertically for a cleaner brand look) */}
            <div className="flex flex-col leading-tight">
              <span className="text-lg sm:text-xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dark">
                Marshal Marketing
              </span>
              <span className="text-[10px] sm:text-xs font-semibold text-gray-500 uppercase tracking-wider">
                & Management Pvt. Ltd.
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-8">
            <li>
              <Link
                href="/"
                className="font-medium hover:text-[#4B86FF] transition"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/about"
                className="font-medium hover:text-[#4B86FF] transition"
              >
                About Us
              </Link>
            </li>

            {/* Services Dropdown */}
            <li className="relative group">
              <button className="flex items-center gap-1 font-medium hover:text-[#4B86FF] transition">
                Products & Services
                <ChevronDown className="w-4 h-4" />
              </button>

              <ul className="absolute top-full right-6 hidden group-hover:block bg-white shadow-xl rounded-xl w-92 py-2 z-50">

                <li>
                  <Link
                    href="/services/x-screen-3d"
                    className="block px-5 py-3 text-sm hover:bg-gray-100 transition"
                  >
                    X-SCREEN MODEL 3D
                  </Link>
                </li>

                <li>
                  <Link
                    href="/services/x-screen-2d"
                    className="block px-5 py-3 text-sm hover:bg-gray-100 transition"
                  >
                    X-SCREEN MODEL 2D
                  </Link>
                </li>

                <li>
                  <Link
                    href="/services/explosive-trace-detection-kit"
                    className="block px-5 py-3 text-sm hover:bg-gray-100 transition"
                  >
                 EXPLOSIVE TRACE DETECTION KIT
                  </Link>
                </li>

                <li>
                  <Link
                    href="/services/food-poison-detection-kit"
                    className="block px-5 py-3 text-sm hover:bg-gray-100 transition"
                  >
                   FOOD POISION DETECTION KIT
                  </Link>
                </li>

              


              </ul>
            </li>

            {/* <li>
              <Link
                href="/blog"
                className="font-medium hover:text-[#4B86FF] transition"
              >
                Blog
              </Link>
            </li> */}

            <li>
              <Link
                href="/contact"
                className="font-medium hover:text-[#4B86FF] transition"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Toggle */}
        <div
          className="lg:hidden flex flex-col gap-1.5 cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className="w-6 h-0.5 bg-black rounded"></span>
          <span className="w-6 h-0.5 bg-black rounded"></span>
          <span className="w-6 h-0.5 bg-black rounded"></span>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white shadow-md px-6 py-5 border-t">
          <ul className="flex flex-col gap-4">
            <li>
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className="font-medium"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/about"
                onClick={() => setMobileOpen(false)}
                className="font-medium"
              >
                About Us
              </Link>
            </li>

            {/* Mobile Services */}
            <li>
              <button
                onClick={() => setServiceOpen(!serviceOpen)}
                className="w-full text-left flex items-center gap-1 font-medium"
              >
                Products & Services
                <ChevronDown className="text-[14px] mt-[2px]" />
              </button>

              {serviceOpen && (
                <ul className="ml-4 mt-3 flex flex-col gap-3 text-sm text-gray-600">
                  <li>
                    <Link
                      href="/services/x-screen-3d"
                      onClick={() => {
                        setMobileOpen(false);
                        setServiceOpen(false);
                      }}
                    >
                      X-SCREEN MODEL 3D
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/services/x-screen-2d"
                      onClick={() => {
                        setMobileOpen(false);
                        setServiceOpen(false);
                      }}
                    >
                     X-SCREEN MODEL 2D
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/services/explosive-trace-detection-kit"
                      onClick={() => {
                        setMobileOpen(false);
                        setServiceOpen(false);
                      }}
                    >
                      EXPLOSIVE TRACE DETECTION KIT
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/services/food-poison-detection-kit"
                      onClick={() => {
                        setMobileOpen(false);
                        setServiceOpen(false);
                      }}
                    >
                    food-poison-detection-kit
                    </Link>
                  </li>

                


                </ul>
              )}
            </li>



            {/* <li>
              <Link
                href="/blog"
                onClick={() => setMobileOpen(false)}
                className="font-medium"
              >
                Blog
              </Link>
            </li> */}

            <li>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="font-medium"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
