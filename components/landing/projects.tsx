"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { 
  MapPin, 
  BatteryCharging, 
  Sun, 
  Zap, 
  CheckCircle2, 
  ChevronLeft, 
  ChevronRight 
} from "lucide-react";

interface ProjectItem {
  id: string;
  name: string;
  category: string;
  location: string;
  battery: string;
  panels: string;
  systemSize: string;
  image: string;
  featured?: boolean;
  summary: string;
  impact: string[];
}

const projectsData: ProjectItem[] = [
  {
    id: "foks-water",
    name: "FOKS WATER COMPANY",
    category: "Commercial Industrial Water Bottling Facility",
    location: "Irete, Owerri",
    battery: "100kWh Battery System",
    panels: "100 Solar Panels",
    systemSize: "100kW 3-Phase Solar",
    image: "/assets/projects/foks-water.png",
    featured: true,
    summary: "Heavy-duty off-grid commercial power deployment for industrial water purification, high-wattage bottling lines, and refrigeration.",
    impact: [
      "Zero downtime for continuous water production lines",
      "Over ₦4.5M monthly diesel fuel savings",
      "Automatic seamless grid & generator fallback integration",
    ],
  },
  {
    id: "mrs-fueling",
    name: "MRS Fueling Station",
    category: "24/7 Petroleum Retail Facility",
    location: "Port Harcourt Expressway",
    battery: "15kWh Battery System",
    panels: "18 Solar Panels",
    systemSize: "12kW Hybrid System",
    image: "/assets/projects/mrs-station.png",
    summary: "Uninterrupted energy setup powering fuel dispensing pumps, canopy LED lighting, electronic point of sale, and security monitoring.",
    impact: [
      "24-hour pump operation without generator noise",
      "Protection against frequent grid voltage surges",
      "75% daily fuel overhead cost reduction",
    ],
  },
  {
    id: "mint-fueling",
    name: "MINT Fueling Station",
    category: "Commercial Fuel & Convenience Hub",
    location: "Aba Road, Enugu",
    battery: "20kWh Battery System",
    panels: "24 Solar Panels",
    systemSize: "15kW 3-Phase System",
    image: "/assets/projects/mint-station.png",
    summary: "High-reliability hybrid solar energy system designed for 24/7 retail operation, cold storage marts, and underground pump motors.",
    impact: [
      "Powers store refrigeration & pumps simultaneously",
      "Lowered station maintenance costs by over 70%",
      "Continuous operation during regional grid blackouts",
    ],
  },
  {
    id: "gigas-fueling",
    name: "GIGAS Fueling Station",
    category: "Heavy Commercial Gas & Fuel Station",
    location: "Onitsha Industrial Zone",
    battery: "15kWh Battery System",
    panels: "20 Solar Panels",
    systemSize: "12kW Smart Solar Hub",
    image: "/assets/projects/gigas-station.png",
    summary: "Dedicated solar backup setup ensuring uninterrupted dispensing pumps, administrative offices, and high-voltage station canopy light arrays.",
    impact: [
      "Eliminated night-time generator running costs",
      "Instant 0ms transfer time during utility grid blackouts",
      "Zero noise pollution for station customers",
    ],
  },
];

export default function Projects() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const checkScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);

    if (clientWidth > 0) {
      const index = Math.round(scrollLeft / clientWidth);
      setActiveIndex(Math.min(Math.max(index, 0), projectsData.length - 1));
    }
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);

    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const goToSlide = (index: number) => {
    if (!scrollContainerRef.current) return;
    const targetIndex = Math.min(Math.max(index, 0), projectsData.length - 1);
    const slideWidth = scrollContainerRef.current.clientWidth;
    scrollContainerRef.current.scrollTo({
      left: targetIndex * slideWidth,
      behavior: "smooth",
    });
  };

  const scroll = (direction: "left" | "right") => {
    const targetIndex = direction === "left" ? activeIndex - 1 : activeIndex + 1;
    goToSlide(targetIndex);
  };

  return (
    <section id="projects" className="scroll-mt-20 py-20 sm:py-28 bg-black text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Section Header with Carousel Nav Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white text-black text-xs sm:text-sm font-bold tracking-wider uppercase mb-4">
              NOTABLE PROJECTS
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
              Powering real businesses.
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-3 leading-relaxed">
              Proven solar and energy storage installations across factories, commercial fueling stations, and production hubs in Nigeria.
            </p>
          </div>

          {/* Carousel Arrow Controls */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              aria-label="Previous project slide"
              className="w-12 h-12 rounded-full border border-zinc-800 bg-zinc-950 flex items-center justify-center text-white hover:bg-zinc-800 disabled:opacity-30 disabled:hover:bg-zinc-950 transition-all duration-200 cursor-pointer disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              aria-label="Next project slide"
              className="w-12 h-12 rounded-full border border-zinc-800 bg-zinc-950 flex items-center justify-center text-white hover:bg-zinc-800 disabled:opacity-30 disabled:hover:bg-zinc-950 transition-all duration-200 cursor-pointer disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Scrollable Carousel Track - 1 slide per view */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none scroll-smooth w-full"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {projectsData.map((project, idx) => (
            <div
              key={project.id}
              className="w-full shrink-0 snap-start snap-always py-2"
            >
              <div className="bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl hover:border-zinc-700 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-0">
                {/* Left Side: Image & Main Header */}
                <div className="lg:col-span-5 relative min-h-[280px] sm:min-h-[360px] lg:min-h-full bg-zinc-900 overflow-hidden flex flex-col justify-between p-6 sm:p-8">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover object-center transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-black/60 z-10" />

                  {/* Top Badges */}
                  <div className="relative z-20 flex flex-wrap gap-2">
                    <span className="bg-black/80 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 border border-zinc-700/80 flex items-center gap-1.5 rounded-lg shadow-md">
                      <MapPin className="w-3.5 h-3.5 text-[#EE7130]" />
                      {project.location}
                    </span>
                    {project.featured && (
                      <span className="bg-[#EE7130] text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-md">
                        FEATURED DEPLOYMENT
                      </span>
                    )}
                  </div>

                  {/* Bottom Image Overlay Details */}
                  <div className="relative z-20 mt-auto pt-16">
                    <span className="text-xs uppercase tracking-widest font-bold text-[#EE7130] block mb-1">
                      {project.category}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight drop-shadow-md">
                      {project.name}
                    </h3>
                  </div>
                </div>

                {/* Right Side: Specs & Detailed Content */}
                <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
                  <div>
                    {/* Header info bar */}
                    <div className="flex items-center justify-between gap-4 pb-4 border-b border-zinc-800/80">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#EE7130]" />
                        <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                          Project Case Study
                        </span>
                      </div>
                      <span className="font-mono text-xs text-zinc-400 font-semibold px-2.5 py-1 bg-zinc-900 rounded-md border border-zinc-800">
                        0{idx + 1} / 0{projectsData.length}
                      </span>
                    </div>

                    {/* Summary Description */}
                    <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mt-5">
                      {project.summary}
                    </p>

                    {/* Technical Specifications Grid */}
                    <div className="mt-6 bg-zinc-900/90 border border-zinc-800/90 rounded-xl p-4 sm:p-5">
                      <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                        <Zap className="w-3.5 h-3.5 text-[#EE7130]" /> System Specifications
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="flex items-center gap-3 bg-zinc-950/80 p-3 rounded-lg border border-zinc-800/60">
                          <BatteryCharging className="w-5 h-5 text-[#EE7130] shrink-0" />
                          <div>
                            <span className="text-[10px] text-zinc-500 uppercase tracking-wider block font-semibold">Storage</span>
                            <span className="text-white font-bold text-xs sm:text-sm">{project.battery}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 bg-zinc-950/80 p-3 rounded-lg border border-zinc-800/60">
                          <Sun className="w-5 h-5 text-[#EE7130] shrink-0" />
                          <div>
                            <span className="text-[10px] text-zinc-500 uppercase tracking-wider block font-semibold">Solar Array</span>
                            <span className="text-white font-bold text-xs sm:text-sm">{project.panels}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 bg-zinc-950/80 p-3 rounded-lg border border-zinc-800/60">
                          <Zap className="w-5 h-5 text-[#EE7130] shrink-0" />
                          <div>
                            <span className="text-[10px] text-zinc-500 uppercase tracking-wider block font-semibold">Capacity</span>
                            <span className="text-white font-bold text-xs sm:text-sm">{project.systemSize}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Key Outcomes & Impact */}
                    <div className="mt-6 space-y-3">
                      <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                        Key Outcomes & Value Delivered
                      </h4>
                      <div className="grid grid-cols-1 gap-2.5">
                        {project.impact.map((item, i) => (
                          <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300 bg-zinc-900/40 p-2.5 rounded-lg border border-zinc-800/40">
                            <CheckCircle2 className="w-4 h-4 text-[#EE7130] shrink-0 mt-0.5" />
                            <span className="leading-snug">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-500">
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      Active Commercial Installation
                    </span>
                    <span className="font-mono text-zinc-400 font-semibold">
                      Project 0{idx + 1} of 0{projectsData.length}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Indicator Dots & Counter */}
        <div className="flex items-center justify-between mt-6 px-1">
          <div className="text-xs text-zinc-400 font-medium">
            Project <span className="text-white font-bold">{activeIndex + 1}</span> of <span className="text-white font-bold">{projectsData.length}</span>
          </div>
          <div className="flex items-center gap-2">
            {projectsData.map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                aria-label={`Go to project slide ${i + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  activeIndex === i ? "w-10 bg-[#EE7130]" : "w-2.5 bg-zinc-800 hover:bg-zinc-700"
                }`}
              />
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}

