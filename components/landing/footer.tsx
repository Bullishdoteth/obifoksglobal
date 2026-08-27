"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number>(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);
  return (
    <footer className="bg-[#050505] w-full text-zinc-300 pt-16 pb-8 px-6 sm:px-10 lg:px-16 overflow-hidden border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">
        {/* Top Footer Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12">
          {/* Column 1: Logo & Info */}
          <div className="lg:col-span-1 space-y-4">
            <Link href="/" className="flex items-center group">
          <div className="flex items-center gap-3 select-none transition-transform group-hover:scale-105">
            {/* Brand Wordmark */}
            <div className="flex flex-col">
              <span className="text-[#EE7130] font-black text-base sm:text-lg md:text-xl tracking-tight leading-none">
                OBIFOKS GLOBAL
              </span>
              <span className="text-white font-extrabold text-[9px] sm:text-[10px] tracking-[0.22em] uppercase leading-tight pt-0.5">
                &amp; FELICITY NIG. LTD.
              </span>
            </div>
          </div>
        </Link>
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed max-w-[260px] pt-1">
              Obifoks Global delivers reliable energy solutions — quality products, expert service, and support.
            </p>
            <div className="pt-2">
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-9 h-9 rounded-full bg-[#18181b] border border-zinc-800 flex items-center justify-center text-white hover:bg-zinc-800 transition-colors"
              >
                <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24">
                  <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-2.901 2.896 2.896 2.896 0 0 1-2.896-2.896 2.896 2.896 0 0 1 2.896-2.896c.338 0 .66.057.962.162V9.404a6.31 6.31 0 0 0-.962-.075 6.335 6.335 0 0 0-6.336 6.336 6.335 6.335 0 0 0 6.336 6.336 6.335 6.335 0 0 0 6.336-6.336V9.062a8.163 8.163 0 0 0 4.78 1.523V7.14a4.83 4.83 0 0 1-1.000-.454z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: SERVICES */}
          <div>
            <h3 className="text-white font-semibold text-xs tracking-widest uppercase mb-4 sm:mb-5">
              SERVICES
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-zinc-400">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Ship to UK
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  UK Express (DHL &amp; UPS)
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  USA, Canada &amp; Europe
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Import from China
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Procurement Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: COMPANY */}
          <div>
            <h3 className="text-white font-semibold text-xs tracking-widest uppercase mb-4 sm:mb-5">
              COMPANY
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-zinc-400">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Business Shipping
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: SUPPORT */}
          <div>
            <h3 className="text-white font-semibold text-xs tracking-widest uppercase mb-4 sm:mb-5">
              SUPPORT
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-zinc-400">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Get a Quote
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Track Shipment
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Shipping Guide
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: CONTACT US */}
          <div>
            <h3 className="text-white font-semibold text-xs tracking-widest uppercase mb-4 sm:mb-5">
              CONTACT US
            </h3>
            <ul className="space-y-3.5 text-xs sm:text-sm text-zinc-400">
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#ff3b00] shrink-0" />
                <a href="tel:09138845436" className="hover:text-white transition-colors">
                  09138845436
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#ff3b00] shrink-0" />
                <a href="mailto:03cargoexpress@gmail.com" className="hover:text-white transition-colors">
                  03cargoexpress@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#ff3b00] shrink-0 mt-0.5" />
                <span className="leading-snug">
                  15 Thanni Olodo Street,
                  <br />
                  Jibowu
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-zinc-800/80 my-2" />

        {/* Bottom copyright & policies row */}
        <div className="flex flex-col sm:flex-row items-center justify-between py-6 text-xs text-zinc-500 gap-4">
          <p>© {currentYear} Obifoks Global &amp; Felicity. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-zinc-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-zinc-300 transition-colors">
              Terms &amp; Conditions
            </Link>
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
