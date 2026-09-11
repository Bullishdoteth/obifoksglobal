"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X
} from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const navItems = [
    { label: "Home", href: "/", sectionId: "hero" },
    { label: "Products", href: "/products", sectionId: "products" },
    { label: "About Us", href: "/#about-us", sectionId: "about-us" },
    { label: "Contact us", href: "/#contact", sectionId: "contact" },
  ];

  // Track active section hash or hero when on homepage
  useEffect(() => {
    const syncHash = () => {
      if (typeof window !== "undefined" && window.location.hash) {
        setActiveSection(window.location.hash.replace("#", ""));
      } else if (pathname === "/") {
        setActiveSection("hero");
      } else {
        setActiveSection("");
      }
    };

    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, [pathname]);

  // IntersectionObserver to dynamically highlight active section when scrolling homepage
  useEffect(() => {
    if (pathname !== "/") return;

    const ids = ["hero", "products", "about-us", "contact"];
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -50% 0px" }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [pathname]);

  // Close mega menu & mobile menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setSolutionsOpen(false);
        setMobileMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle mouse enter with slight delay buffer
  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setSolutionsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setSolutionsOpen(false);
    }, 150);
  };

  // Logic to determine if a nav item is genuinely active
  const isItemActive = (item: (typeof navItems)[0]) => {
    if (pathname === "/") {
      if (activeSection && activeSection !== "hero") {
        return item.sectionId === activeSection;
      }
      return item.href === "/" || item.sectionId === "hero";
    }

    // On non-root routes:
    if (item.href === "/") {
      return false; // Home is NOT highlighted when viewing other pages
    }

    if (item.sectionId === "products" || item.href.startsWith("#products")) {
      return pathname.startsWith("#products");
    }

    if (item.sectionId === "projects" || item.href.startsWith("#projects")) {
      return pathname.startsWith("#projects");
    }

    if (item.sectionId === "about-us" || item.href.startsWith("#about")) {
      return pathname.startsWith("#about");
    }

    if (item.sectionId === "contact" || item.href.startsWith("#contact")) {
      return pathname.startsWith("#contact");
    }

    return pathname === item.href;
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-black text-white border-b border-white/10 shadow-xl relative" ref={dropdownRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-16 sm:h-20 flex items-center justify-between relative">

        {/* Brand Logo & Wordmark */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex flex-col">
            <span className="text-white font-black text-base sm:text-lg md:text-xl tracking-tight leading-none group-hover:text-zinc-200 transition-colors">
              OBIFOKS <span className="text-[#EE7130]">GLOBAL</span>
            </span>
            <span className="text-zinc-400 font-bold text-[9px] sm:text-[10px] tracking-[0.2em] uppercase leading-tight pt-0.5">
              &amp; FELICITY NIG. LTD.
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 h-full">
          {navItems.map((item) => {
            const active = isItemActive(item);

            return (
              <li key={item.label} className="h-full flex items-center">
                <Link
                  href={item.href}
                  className={`relative text-xs sm:text-sm font-bold transition-colors py-2 flex items-center gap-1 ${active
                    ? "text-white font-extrabold after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-[#EE7130]"
                    : "text-zinc-300 hover:text-white"
                    }`}
                >
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right Actions: Mobile Menu Toggle Button */}
        <div className="flex items-center gap-4 sm:gap-6">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-zinc-300 hover:text-white p-2 transition-colors focus:outline-none cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Overlay Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 w-full bg-zinc-950/98 backdrop-blur-xl border-b border-white/10 px-6 py-6 sm:px-8 sm:py-8 shadow-2xl animate-in slide-in-from-top-2 duration-200 max-h-[calc(100vh-5rem)] overflow-y-auto z-50">
          <ul className="flex flex-col space-y-1">
            {navItems.map((item) => {
              const active = isItemActive(item);

              return (
                <li key={item.label} className="border-b border-white/5 last:border-b-0">
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between py-3 text-base font-bold transition-colors ${active
                      ? "text-[#EE7130]"
                      : "text-zinc-200 hover:text-white"
                      }`}
                  >
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}

