"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ShoppingBag, Search, Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/", active: true },
    { label: "Services", href: "#solutions", hasDropdown: true },
    { label: "Our Office Locations", href: "#contact", hasDropdown: true },
    { label: "Service Areas", href: "#contact" },
    { label: "Products", href: "#products" },
    { label: "Shop", href: "#products" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-black text-white border-b border-white/10 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-16 sm:h-20 flex items-center justify-between">
        
        {/* Brand Logo & Wordmark */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex flex-col">
            <span className="text-white font-extrabold text-base sm:text-lg md:text-xl tracking-tight leading-none">
              OBIFOKS <span className="text-[#EE7130]">GLOBAL</span>
            </span>
            <span className="text-zinc-400 font-bold text-[9px] sm:text-[10px] tracking-[0.2em] uppercase leading-tight pt-0.5">
              &amp; FELICITY NIG. LTD.
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className={`relative text-xs sm:text-sm font-medium transition-colors py-1 flex items-center gap-1 ${
                  item.active
                    ? "text-white font-semibold after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-full after:h-0.5 after:bg-[#459628] after:rounded-full"
                    : "text-zinc-300 hover:text-white"
                }`}
              >
                <span>{item.label}</span>
                {item.hasDropdown && (
                  <ChevronDown className="w-3.5 h-3.5 text-zinc-400 stroke-[2.5]" />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Actions: Shopping Cart & Search Icons */}
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Cart Icon with badge */}
          <button
            aria-label="Shopping Cart"
            className="relative p-1.5 text-zinc-300 hover:text-white transition-colors"
          >
            <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.8]" />
            <span className="absolute -top-1 -right-1.5 w-4 h-4 bg-[#459628] text-white text-[10px] font-bold rounded-full flex items-center justify-center border border-[#0B1D12]">
              0
            </span>
          </button>

          {/* Search Icon */}
          <button
            aria-label="Search Site"
            className="p-1.5 text-zinc-300 hover:text-white transition-colors"
          >
            <Search className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.8]" />
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-zinc-300 hover:text-white p-2 rounded-lg transition-colors focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#09180E] border-b border-white/10 px-6 py-5 space-y-3 animate-in fade-in duration-200">
          <ul className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between py-2 text-sm font-medium transition-colors ${
                    item.active
                      ? "text-[#459628] font-semibold"
                      : "text-zinc-300 hover:text-white"
                  }`}
                >
                  <span>{item.label}</span>
                  {item.hasDropdown && <ChevronDown className="w-4 h-4 text-zinc-400" />}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
