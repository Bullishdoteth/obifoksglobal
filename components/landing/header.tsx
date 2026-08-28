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
  Sparkles,
  PhoneCall,
  CheckCircle2
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
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const navItems = [
    { label: "Home", href: "/", sectionId: "hero" },
    { label: "Solutions", href: "/solutions", hasMegaMenu: true, sectionId: "solutions" },
    { label: "Products", href: "/products", sectionId: "products" },
    { label: "Projects", href: "/projects", sectionId: "projects" },
    { label: "About Us", href: "/about-us", sectionId: "about-us" },
    { label: "Contact us", href: "#contact", sectionId: "contact" },
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
    <header className="sticky top-0 z-50 w-full bg-black text-white border-b border-white/10 shadow-xl relative" ref={dropdownRef}>
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
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 h-full">
          {navItems.map((item) => {
            const active = isItemActive(item);

            if (item.hasMegaMenu) {
              return (
                <li
                  key={item.label}
                  className="h-full flex items-center"
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

      {/* Full-Width Desktop Mega Menu Dropdown Panel (White Theme) */}
      {solutionsOpen && (
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="hidden md:block absolute top-full left-0 right-0 w-full bg-white text-zinc-900 border-b border-zinc-200/90 shadow-2xl py-7 animate-in fade-in slide-in-from-top-1 duration-200 z-50"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            {/* Mega Menu Top Header Bar */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-zinc-200/80">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                  Our 6 Core Renewable Energy &amp; Power Capabilities
                </span>
              </div>
              <Link
                href="/solutions"
                onClick={() => setSolutionsOpen(false)}
                className="text-xs font-bold text-[#EE7130] hover:text-[#d85e1f] flex items-center gap-1.5 transition-colors group/link"
              >
                <span>View All Solutions Overview</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Mega Menu Full-Width Grid (9 Cols Cards + 3 Cols Side Banner) */}
            <div className="grid grid-cols-12 gap-6 items-stretch">
              
              {/* 6 Solution Cards in a spacious 3x2 Grid (9 cols) */}
              <div className="col-span-9 grid grid-cols-3 gap-4">
                {SOLUTIONS_DATA.map((sol: SolutionItem) => {
                  const IconComponent = getSolutionIcon(sol.iconName);
                  return (
                    <Link
                      key={sol.id}
                      href={`/solutions/${sol.slug}`}
                      onClick={() => setSolutionsOpen(false)}
                      className="group p-4 rounded-xl border border-zinc-200/80 bg-zinc-50/70 hover:bg-white hover:border-[#EE7130]/50 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
                    >
                      <div className="space-y-2.5">
                        <div className="flex items-center justify-between">
                          <div className="p-2.5 rounded-lg bg-[#EE7130]/10 text-[#EE7130] group-hover:bg-[#EE7130] group-hover:text-white transition-colors flex-shrink-0">
                            <IconComponent className="w-5 h-5 stroke-[2]" />
                          </div>
                          <span className="text-[10px] font-bold px-2 py-0.5 bg-zinc-200/60 text-zinc-600 border border-zinc-200 rounded-full group-hover:border-[#EE7130]/30 group-hover:text-[#EE7130] transition-colors">
                            {sol.badge}
                          </span>
                        </div>

                        <div>
                          <h4 className="text-sm font-bold text-zinc-900 group-hover:text-[#EE7130] transition-colors">
                            {sol.title}
                          </h4>
                          <p className="text-xs text-zinc-600 line-clamp-2 mt-1 leading-relaxed">
                            {sol.shortDesc}
                          </p>
                        </div>
                      </div>

                      <div className="mt-3 pt-2.5 border-t border-zinc-200/60 flex items-center justify-between text-[11px] font-semibold text-zinc-500 group-hover:text-zinc-900 transition-colors">
                        <span>Learn more</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#EE7130]" />
                      </div>
                    </Link>
                  );
                })}
              </div>

              {/* Featured Callout Side Banner (3 cols) */}
              <div className="col-span-3 bg-gradient-to-br from-zinc-900 via-zinc-950 to-[#0e2a18] text-white border border-zinc-800 rounded-xl p-5 flex flex-col justify-between relative overflow-hidden shadow-xl">
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#EE7130]/20 rounded-full blur-2xl pointer-events-none" />
                
                <div className="space-y-3 relative z-10">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#459628]/20 border border-[#459628]/30 rounded-full text-[10px] font-bold text-[#459628] uppercase tracking-wide">
                    <CheckCircle2 className="w-3 h-3" /> Free Energy Audit
                  </span>
                  
                  <h4 className="text-base font-extrabold text-white leading-snug">
                    Need a Custom Solar Sizing &amp; Design?
                  </h4>
                  
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    Our certified power engineers in Owerri perform site visits, load audits, and tailored solar quotes.
                  </p>
                </div>

                <div className="space-y-2 pt-4 relative z-10">
                  <a
                    href="https://wa.me/2349033333333?text=Hello%20Obifoks%20Global,%20I%20want%20a%20solar%20solution%20quote"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setSolutionsOpen(false)}
                    className="w-full py-2.5 px-3 bg-[#459628] hover:bg-[#387a20] text-white text-xs font-bold rounded-lg text-center transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#459628]/20"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>WhatsApp Engineer</span>
                  </a>

                  <Link
                    href="#contact"
                    onClick={() => setSolutionsOpen(false)}
                    className="w-full py-2.5 px-3 bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-bold rounded-lg text-center transition-all flex items-center justify-center gap-1.5 border border-white/10"
                  >
                    <span>Contact Us</span>
                  </Link>
                </div>
              </div>

            </div>

          </div>
        </div>
      )}

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
