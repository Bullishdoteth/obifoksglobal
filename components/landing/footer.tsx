"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number>(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-[#050505] w-full text-zinc-300 pt-16 sm:pt-20 pb-10 sm:pb-12 overflow-hidden border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Top Footer Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 lg:gap-12 pb-12 sm:pb-16">
          {/* Column 1: Logo & Info */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="inline-flex flex-col group select-none transition-opacity hover:opacity-90">
              <span className="text-white font-extrabold text-base sm:text-lg md:text-xl tracking-tight leading-none">
                OBIFOKS <span className="text-[#EE7130]">GLOBAL</span>
              </span>
              <span className="text-zinc-400 font-bold text-[9px] sm:text-[10px] tracking-[0.2em] uppercase leading-tight pt-1">
                &amp; FELICITY NIG. LTD.
              </span>
            </Link>
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed max-w-[320px]">
              Reliable energy solutions, solar installations, and lithium storage for homes, businesses, and industrial projects.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-3">
            <h3 className="text-white font-semibold text-xs tracking-widest uppercase mb-4 sm:mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-zinc-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors duration-150 inline-block hover:translate-x-0.5 transition-transform">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition-colors duration-150 inline-block hover:translate-x-0.5 transition-transform">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/#about-us" className="hover:text-white transition-colors duration-150 inline-block hover:translate-x-0.5 transition-transform">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-white transition-colors duration-150 inline-block hover:translate-x-0.5 transition-transform">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="md:col-span-4">
            <h3 className="text-white font-semibold text-xs tracking-widest uppercase mb-4 sm:mb-5">
              Contact
            </h3>
            <ul className="space-y-4 text-xs sm:text-sm text-zinc-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#EE7130] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  No. 6 Wetheral Road, Opposite Polaris Bank, Government Roundabout, Owerri, Imo State.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#EE7130] shrink-0 mt-0.5" />
                <div className="flex flex-col space-y-1">
                  <a href="tel:09064566983" className="hover:text-white transition-colors">
                    0906 456 6983
                  </a>
                  <a href="tel:08026640279" className="hover:text-white transition-colors">
                    0802 664 0279
                  </a>
                  <a href="tel:09111709721" className="hover:text-white transition-colors">
                    0911 170 9721
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#EE7130] shrink-0" />
                <a href="mailto:obifoks@gmail.com" className="hover:text-white transition-colors">
                  obifoks@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-zinc-800/60 my-6 sm:my-8" />

        {/* Bottom copyright & credit row */}
        <div className="flex flex-col sm:flex-row items-center justify-between py-4 sm:py-6 text-xs text-zinc-500 gap-4">
          <p>© {currentYear} Obifoks Global &amp; Felicity Nig. Ltd. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span>Built by</span>
            <a
              href="https://github.com/mike"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors font-medium underline underline-offset-4 decoration-zinc-700 hover:decoration-white"
            >
              Mike
            </a>
          </div>
        </div>

        {/* Watermark Typography Overlay */}
        <div className="pt-8 sm:pt-12 pb-4 text-center select-none pointer-events-none opacity-80">
          <div
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-widest leading-tight uppercase text-transparent"
            style={{
              WebkitTextStroke: "1px rgba(255, 255, 255, 0.08)",
            }}
          >
            OBIFOKS GLOBAL &amp; FELICITY
          </div>
          <div
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-widest leading-tight uppercase text-transparent"
            style={{
              WebkitTextStroke: "1px rgba(255, 255, 255, 0.08)",
            }}
          >
            NIG. LTD.
          </div>
        </div>
      </div>
    </footer>
  );
}
