"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  ChevronDown, 
  ShoppingBag, 
  Search, 
  Menu, 
  X, 
  Home, 
  Building2, 
  Factory, 
  BatteryCharging, 
  ShieldCheck, 
  SunMedium, 
  ArrowRight,
  Zap,
  Sparkles
} from "lucide-react";
import { useCart } from "@/context/cart-context";
import { SOLUTIONS_DATA, SolutionItem } from "@/lib/solutions-data";

// Helper function to map icon string to Lucide component
function getSolutionIcon(iconName: string) {
  switch (iconName) {
    case "Home":
      return Home;
    case "Building2":
      return Building2;
    case "Factory":
      return Factory;
    case "BatteryCharging":
      return BatteryCharging;
    case "ShieldCheck":
      return ShieldCheck;
    case "SunMedium":
      return SunMedium;
    default:
      return Zap;
  }
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const { totalItems, openCart } = useCart();
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLUListElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const navItems = [
    { label: "Home", href: "/", sectionId: "hero" },
    { label: "Solutions", href: "/solutions", hasMegaMenu: true, sectionId: "solutions" },
    { label: "Products", href: "/#products", sectionId: "products" },
    { label: "Projects", href: "/projects", sectionId: "projects" },
    { label: "About Us", href: "/about-us", sectionId: "about-us" },
    { label: "Contact us", href: "/contact", sectionId: "contact" },
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

    const ids = ["hero", "products", "solutions", "brands"];
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
      { rootMargin: "-20% 0px -60% 0px" }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [pathname]);

  // Close mega menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setSolutionsOpen(false);
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
      if (activeSection === "products") {
        return item.sectionId === "products";
      }
      if (activeSection === "solutions") {
        return item.sectionId === "solutions";
      }
      if (activeSection === "hero" || !activeSection) {
        return item.href === "/";
      }
      return false;
    }

    // On non-root routes:
    if (item.href === "/") {
      return false; // Home is NOT highlighted when viewing other pages
    }

    if (item.hasMegaMenu || item.href.startsWith("/solutions")) {
      return pathname.startsWith("/solutions");
    }

    if (item.href.startsWith("/products")) {
      return pathname.startsWith("/products");
    }

    if (item.href.startsWith("/projects")) {
      return pathname.startsWith("/projects");
    }

    if (item.href.startsWith("/about")) {
      return pathname.startsWith("/about");
    }

    if (item.href.startsWith("/contact")) {
      return pathname.startsWith("/contact");
    }

    return pathname === item.href;
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-black text-white border-b border-white/10 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-16 sm:h-20 flex items-center justify-between relative">
        
        {/* Brand Logo & Wordmark */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex flex-col">
            <span className="text-white font-extrabold text-base sm:text-lg md:text-xl tracking-tight leading-none group-hover:text-zinc-100 transition-colors">
              OBIFOKS <span className="text-[#EE7130]">GLOBAL</span>
            </span>
            <span className="text-zinc-400 font-bold text-[9px] sm:text-[10px] tracking-[0.2em] uppercase leading-tight pt-0.5">
              &amp; FELICITY NIG. LTD.
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 h-full" ref={dropdownRef}>
          {navItems.map((item) => {
            const active = isItemActive(item);

            if (item.hasMegaMenu) {
              return (
                <li
                  key={item.label}
                  className="h-full flex items-center relative"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    onClick={() => setSolutionsOpen(!solutionsOpen)}
                    aria-expanded={solutionsOpen}
                    className={`relative text-xs sm:text-sm font-medium transition-colors py-2 flex items-center gap-1.5 focus:outline-none ${
                      active || solutionsOpen
                        ? "text-white font-semibold after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-[#EE7130] after:rounded-full"
                        : "text-zinc-300 hover:text-white"
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 text-zinc-400 stroke-[2.5] transition-transform duration-200 ${
                        solutionsOpen ? "rotate-180 text-[#EE7130]" : ""
                      }`}
                    />
                  </button>

                  {/* Mega Menu Dropdown */}
                  {solutionsOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-[880px] max-w-[90vw] pt-2 animate-in fade-in zoom-in-95 duration-200">
                      <div className="bg-zinc-950 border border-white/15 rounded-2xl shadow-2xl p-6 backdrop-blur-xl bg-opacity-95 overflow-hidden">
                        
                        {/* Header bar in Mega Menu */}
                        <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                          <div className="flex items-center gap-2">
                            <Sparkles className="w-4 h-4 text-[#EE7130]" />
                            <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                              Our Renewable Energy &amp; Power Solutions
                            </span>
                          </div>
                          <Link
                            href="/solutions"
                            onClick={() => setSolutionsOpen(false)}
                            className="text-xs font-semibold text-[#EE7130] hover:text-[#f88950] flex items-center gap-1 transition-colors"
                          >
                            <span>View All Solutions</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>

                        {/* Solutions Grid */}
                        <div className="grid grid-cols-12 gap-4">
                          {/* 6 Solution Cards (8 cols) */}
                          <div className="col-span-8 grid grid-cols-2 gap-3">
                            {SOLUTIONS_DATA.map((sol: SolutionItem) => {
                              const IconComponent = getSolutionIcon(sol.iconName);
                              return (
                                <Link
                                  key={sol.id}
                                  href={`/solutions/${sol.slug}`}
                                  onClick={() => setSolutionsOpen(false)}
                                  className="group p-3 rounded-xl border border-white/5 bg-zinc-900/40 hover:bg-zinc-900 hover:border-[#EE7130]/40 transition-all duration-200 flex items-start gap-3"
                                >
                                  <div className="p-2.5 rounded-lg bg-[#EE7130]/10 text-[#EE7130] group-hover:bg-[#EE7130] group-hover:text-white transition-colors flex-shrink-0">
                                    <IconComponent className="w-5 h-5 stroke-[2]" />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between gap-1">
                                      <h4 className="text-xs font-bold text-white group-hover:text-[#EE7130] transition-colors truncate">
                                        {sol.title}
                                      </h4>
                                    </div>
                                    <p className="text-[11px] text-zinc-400 line-clamp-2 mt-0.5 leading-snug">
                                      {sol.shortDesc}
                                    </p>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>

                          {/* Featured Callout Side Banner (4 cols) */}
                          <div className="col-span-4 bg-gradient-to-br from-[#0e2a18] via-zinc-900 to-zinc-950 border border-white/10 rounded-xl p-4 flex flex-col justify-between relative overflow-hidden">
                            <div className="absolute -top-10 -right-10 w-28 h-28 bg-[#EE7130]/20 rounded-full blur-2xl pointer-events-none" />
                            <div>
                              <span className="inline-block px-2 py-0.5 bg-[#459628]/20 border border-[#459628]/30 rounded text-[10px] font-bold text-[#459628] uppercase tracking-wide mb-2">
                                Free Consultation
                              </span>
                              <h4 className="text-sm font-bold text-white leading-tight mb-1">
                                Need a Custom Solar Audit?
                              </h4>
                              <p className="text-[11px] text-zinc-300 leading-normal mb-3">
                                Talk directly with our solar engineers in Owerri for sizing, load analysis &amp; quote.
                              </p>
                            </div>
                            <Link
                              href="/contact"
                              onClick={() => setSolutionsOpen(false)}
                              className="w-full py-2 px-3 bg-[#EE7130] hover:bg-[#d85e1f] text-white text-xs font-bold rounded-lg text-center transition-all flex items-center justify-center gap-1.5 shadow-lg shadow-[#EE7130]/20"
                            >
                              <span>Request Sizing Audit</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                          </div>
                        </div>

                      </div>
                    </div>
                  )}
                </li>
              );
            }

            return (
              <li key={item.label} className="h-full flex items-center">
                <Link
                  href={item.href}
                  className={`relative text-xs sm:text-sm font-medium transition-colors py-2 flex items-center gap-1 ${
                    active
                      ? "text-white font-semibold after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-[#EE7130] after:rounded-full"
                      : "text-zinc-300 hover:text-white"
                  }`}
                >
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right Actions: Shopping Cart & Search Icons */}
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Cart Icon with badge */}
          <button
            onClick={openCart}
            aria-label={`Shopping Cart (${totalItems} items)`}
            className="relative p-1.5 text-zinc-300 hover:text-white transition-colors cursor-pointer focus:outline-none"
          >
            <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.8]" />
            <span className="absolute -top-1 -right-1.5 w-4 h-4 bg-[#EE7130] text-white text-[10px] font-bold rounded-full flex items-center justify-center border border-black transition-transform scale-100">
              {totalItems}
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

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-zinc-950 border-b border-white/10 px-4 sm:px-6 py-4 space-y-3 animate-in fade-in duration-200 max-h-[85vh] overflow-y-auto">
          <ul className="flex flex-col space-y-2">
            {navItems.map((item) => {
              const active = isItemActive(item);

              if (item.hasMegaMenu) {
                return (
                  <li key={item.label} className="border-b border-white/5 pb-2">
                    <button
                      onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                      className={`w-full flex items-center justify-between py-2 text-sm font-medium focus:outline-none ${
                        active ? "text-[#EE7130] font-semibold" : "text-zinc-300 hover:text-white"
                      }`}
                    >
                      <span>Solutions</span>
                      <ChevronDown
                        className={`w-4 h-4 text-zinc-400 transition-transform ${
                          mobileSolutionsOpen ? "rotate-180 text-[#EE7130]" : ""
                        }`}
                      />
                    </button>

                    {/* Mobile Solutions Accordion Sub-menu */}
                    {mobileSolutionsOpen && (
                      <div className="mt-2 ml-2 pl-3 border-l-2 border-[#EE7130]/40 space-y-2 py-1">
                        <Link
                          href="/solutions"
                          onClick={() => setMobileMenuOpen(false)}
                          className="block text-xs font-bold text-[#EE7130] py-1"
                        >
                          All Solutions Overview →
                        </Link>
                        {SOLUTIONS_DATA.map((sol) => {
                          const IconComp = getSolutionIcon(sol.iconName);
                          return (
                            <Link
                              key={sol.id}
                              href={`/solutions/${sol.slug}`}
                              onClick={() => setMobileMenuOpen(false)}
                              className="flex items-center gap-2.5 py-1.5 text-xs text-zinc-300 hover:text-white"
                            >
                              <IconComp className="w-4 h-4 text-[#EE7130]" />
                              <span>{sol.title}</span>
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </li>
                );
              }

              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between py-2 text-sm font-medium transition-colors ${
                      active
                        ? "text-[#EE7130] font-semibold"
                        : "text-zinc-300 hover:text-white"
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
