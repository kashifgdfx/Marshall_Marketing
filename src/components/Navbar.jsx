"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronRight } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [solitaireOpen, setSolitaireOpen] = useState(false);

  const serviceLinks = [
    { href: "/services/x-screen-3d", label: "X-Screen Model 3D" },
    { href: "/services/x-screen-2d", label: "X-Screen Model 2D" },
    { href: "/services/explosive-trace-detection-kit", label: "Explosive Trace Detection Kit" },
    { href: "/services/food-poison-detection-kit", label: "Food Poison Detection Kit" },
  ];

  return (
    <div className="w-full bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-[999999] border-b border-gray-100">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-20 py-3">
        {/* Logo */}
        <div className="logo">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/marshallogo.png"
                alt="Marshal Logo"
                width={40}
                height={40}
                priority
                className="object-contain"
              />
            </div>

            <div className="flex flex-col leading-tight">
              <span className="text-lg sm:text-xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dark">
                Marshal Marketing
              </span>
              <span className="text-[10px] sm:text-xs font-semibold text-gray-500 uppercase tracking-wider">
                &amp; Management Pvt. Ltd.
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-9">
            <li>
              <Link
                href="/"
                className="relative font-medium text-gray-700 py-1 transition-colors duration-300 hover:text-primary
                           after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-primary
                           after:transition-all after:duration-300 hover:after:w-full"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/about"
                className="relative font-medium text-gray-700 py-1 transition-colors duration-300 hover:text-primary
                           after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-primary
                           after:transition-all after:duration-300 hover:after:w-full"
              >
                About Us
              </Link>
            </li>

         {/* Products & Services Dropdown */}
<li className="relative group">
  <button
    className="
      relative flex items-center gap-1.5 py-1 font-medium text-gray-700
      transition-colors duration-300 group-hover:text-primary

      after:absolute
      after:left-0
      after:-bottom-1
      after:h-[2px]
      after:w-0
      after:bg-primary
      after:transition-all
      after:duration-300
      group-hover:after:w-full
    "
  >
    <span>Products &amp; Services</span>

    <ChevronDown
      className="
        w-4 h-4
        transition-all duration-300
        group-hover:rotate-180
        group-hover:text-primary
      "
    />
  </button>

  <ul
    className="
      absolute top-full left-1/2 -translate-x-1/2 mt-2
      w-[22rem]
      rounded-2xl
      bg-white
      shadow-2xl
      ring-1 ring-black/5
      py-2
      z-50

      opacity-0
      invisible
      translate-y-2
      scale-95
      origin-top

      transition-all
      duration-200
      ease-out

      group-hover:opacity-100
      group-hover:visible
      group-hover:translate-y-0
      group-hover:scale-100
      group-hover:-translate-x-1/2
    "
  >
    {serviceLinks.map((item) => (
      <li key={item.href}>
        <Link
          href={item.href}
          className="
            group/item
            flex
            items-center
            justify-between
            px-5
            py-3
            text-sm
            font-medium
            text-gray-700

            transition-all
            duration-200

            hover:bg-primary/5
            hover:text-primary

            border-l-2
            border-transparent
            hover:border-primary
          "
        >
          <span>{item.label}</span>

          <ChevronRight
            className="
              w-4
              h-4
              text-gray-300

              -translate-x-1
              opacity-0

              transition-all
              duration-200

              group-hover/item:translate-x-0
              group-hover/item:opacity-100
              group-hover/item:text-primary
            "
          />
        </Link>
      </li>
    ))}
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
                className="inline-flex items-center rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white
                           shadow-md shadow-primary/25 transition-all duration-300 hover:bg-primary-dark hover:-translate-y-0.5 hover:shadow-lg"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Toggle */}
        <button
          aria-label="Toggle menu"
          className="lg:hidden relative flex h-9 w-9 items-center justify-center"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span
            className={`absolute h-0.5 w-6 rounded bg-gray-900 transition-all duration-300 ${
              mobileOpen ? "rotate-45" : "-translate-y-2"
            }`}
          />
          <span
            className={`absolute h-0.5 w-6 rounded bg-gray-900 transition-all duration-300 ${
              mobileOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute h-0.5 w-6 rounded bg-gray-900 transition-all duration-300 ${
              mobileOpen ? "-rotate-45" : "translate-y-2"
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden border-t border-gray-100 bg-white transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-6 py-5">
          <li>
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="block rounded-lg px-2 py-2.5 font-medium text-gray-800 transition-colors hover:bg-primary/5 hover:text-primary"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/about"
              onClick={() => setMobileOpen(false)}
              className="block rounded-lg px-2 py-2.5 font-medium text-gray-800 transition-colors hover:bg-primary/5 hover:text-primary"
            >
              About Us
            </Link>
          </li>

          {/* Mobile Services */}
          <li>
            <button
              onClick={() => setServiceOpen(!serviceOpen)}
              className="flex w-full items-center justify-between rounded-lg px-2 py-2.5 text-left font-medium text-gray-800 transition-colors hover:bg-primary/5 hover:text-primary"
            >
              Products &amp; Services
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-300 ${
                  serviceOpen ? "rotate-180 text-primary" : ""
                }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                serviceOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <ul className="ml-2 mt-1 flex flex-col gap-1 border-l-2 border-primary/20 pl-4">
                {serviceLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => {
                        setMobileOpen(false);
                        setServiceOpen(false);
                      }}
                      className="block rounded-lg px-2 py-2 text-sm text-gray-600 transition-colors hover:bg-primary/5 hover:text-primary"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
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

          <li className="pt-2">
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="block rounded-full bg-primary px-5 py-2.5 text-center font-semibold text-white shadow-md shadow-primary/25 transition-colors hover:bg-primary-dark"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;