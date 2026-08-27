"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/", active: true },
    { label: "About Us", href: "/about-us" },
    { label: "Products", href: "#products" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-zinc-200/80 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-16 sm:h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <div className="flex items-center gap-3 select-none transition-transform">
            {/* Brand Wordmark */}
            <div className="flex flex-col">
              <span className="text-[#EE7130] font-black text-base sm:text-lg md:text-xl tracking-tight leading-none">
                OBIFOKS GLOBAL
              </span>
              <span className="text-zinc-800 font-extrabold text-[9px] sm:text-[10px] tracking-[0.22em] uppercase leading-tight pt-0.5">
                &amp; FELICITY NIG. LTD.
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className={`relative text-sm font-medium transition-colors py-1 ${
                  item.active
                    ? "text-[#ff3b00] font-semibold after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-full after:h-0.5 after:bg-[#ff3b00] after:rounded-full"
                    : "text-zinc-700 hover:text-[#ff3b00]"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Action Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="#quote"
            className="inline-flex items-center gap-2 bg-[#EE7130] hover:bg-[#e03400] text-white text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg transition-all shadow-md hover:shadow-[0_0_20px_rgba(255,59,0,0.3)] active:scale-95"
          >
            <span>Get a Quote</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-zinc-700 hover:text-zinc-900 p-2 rounded-lg hover:bg-zinc-100 transition-colors focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-zinc-200/90 shadow-xl px-6 py-5 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <ul className="flex flex-col space-y-2.5">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-2 text-base font-medium transition-colors ${
                    item.active
                      ? "text-[#ff3b00] font-semibold"
                      : "text-zinc-700 hover:text-[#ff3b00]"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
