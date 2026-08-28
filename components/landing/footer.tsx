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
    <footer className="bg-[#050505] w-full text-zinc-300 pt-16 pb-8 overflow-hidden border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Top Footer Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12">
          {/* Column 1: Logo & Info */}
          <div className="lg:col-span-1 space-y-4">
            <Link href="/" className="flex items-center gap-3 group select-none transition-transform">
              <div className="flex flex-col">
                <span className="text-white font-extrabold text-base sm:text-lg md:text-xl tracking-tight leading-none">
                  OBIFOKS <span className="text-[#EE7130]">GLOBAL</span>
                </span>
                <span className="text-zinc-400 font-bold text-[9px] sm:text-[10px] tracking-[0.2em] uppercase leading-tight pt-0.5">
                  &amp; FELICITY NIG. LTD.
                </span>
              </div>
            </Link>
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed max-w-[260px] pt-1">
              Reliable energy solutions for homes, businesses and industries.
            </p>
            <div className="pt-2">
              <span className="inline-block px-3 py-1.5 rounded-full bg-[#EE7130]/10 border border-[#EE7130]/30 text-[#EE7130] text-[11px] font-bold tracking-wider uppercase">
                WE ARE HERE TO SERVE YOU.
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-xs tracking-widest uppercase mb-4 sm:mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-zinc-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#solutions" className="hover:text-white transition-colors">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="#products" className="hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="#projects" className="hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Solutions */}
          <div>
            <h3 className="text-white font-semibold text-xs tracking-widest uppercase mb-4 sm:mb-5">
              Solutions
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-zinc-400">
              <li>
                <Link href="#solutions" className="hover:text-white transition-colors">
                  Residential Solar
                </Link>
              </li>
              <li>
                <Link href="#solutions" className="hover:text-white transition-colors">
                  Commercial Solar
                </Link>
              </li>
              <li>
                <Link href="#solutions" className="hover:text-white transition-colors">
                  Industrial Solar
                </Link>
              </li>
              <li>
                <Link href="#solutions" className="hover:text-white transition-colors">
                  Energy Storage
                </Link>
              </li>
              <li>
                <Link href="#solutions" className="hover:text-white transition-colors">
                  Security &amp; CCTV
                </Link>
              </li>
              <li>
                <Link href="#solutions" className="hover:text-white transition-colors">
                  Solar Lighting
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Support */}
          <div>
            <h3 className="text-white font-semibold text-xs tracking-widest uppercase mb-4 sm:mb-5">
              Support
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-zinc-400">
              <li>
                <Link href="#contact" className="hover:text-white transition-colors">
                  Installation
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-white transition-colors">
                  Maintenance
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-white transition-colors">
                  After-Sales Support
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-white transition-colors">
                  Request a Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Contact */}
          <div>
            <h3 className="text-white font-semibold text-xs tracking-widest uppercase mb-4 sm:mb-5">
              Contact
            </h3>
            <ul className="space-y-3.5 text-xs sm:text-sm text-zinc-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#EE7130] shrink-0 mt-0.5" />
                <span className="leading-snug">
                  No. 6 Wetheral Road, Opposite Polaris Bank, Government Roundabout, Owerri, Imo State.
                </span>
              </li>
              <li className="flex items-start gap-2.5 pt-1">
                <Phone className="w-4 h-4 text-[#EE7130] shrink-0 mt-0.5" />
                <div className="flex flex-col space-y-1">
                  <a href="tel:09064566983" className="hover:text-white transition-colors">
                    0906 456 6983
                  </a>
                  <a href="tel:08026640279" className="hover:text-white transition-colors">
                    0802 664 0279
                  </a>
                  <a href="tel:09111709721" className="hover:text-white transition-colors">
                    09111709721
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2.5 pt-1">
                <Mail className="w-4 h-4 text-[#EE7130] shrink-0" />
                <a href="mailto:obifoks@gmail.com" className="hover:text-white transition-colors">
                  obifoks@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-zinc-800/80 my-2" />

        {/* Bottom copyright & credit row */}
        <div className="flex flex-col sm:flex-row items-center justify-between py-6 text-xs text-zinc-500 gap-4">
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
        <div className="pt-6 sm:pt-8 pb-4 text-center select-none pointer-events-none">
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

