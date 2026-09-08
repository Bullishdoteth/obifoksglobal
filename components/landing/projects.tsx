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
    setCanScrollLeft(scrollLeft > 20);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 20);

    // Calculate approximate active slide index
    const slideWidth = clientWidth > 640 ? 520 : clientWidth * 0.88;
    const index = Math.round(scrollLeft / slideWidth);
    setActiveIndex(Math.min(Math.max(index, 0), projectsData.length - 1));
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

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = scrollContainerRef.current.clientWidth * 0.8;
    scrollContainerRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
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

        {/* Scrollable Carousel Track */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-6 sm:gap-8 pb-8 pt-2 scrollbar-none snap-x snap-mandatory scroll-smooth -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-12 lg:px-12"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {projectsData.map((project, idx) => (
            <div
              key={project.id}
              className="snap-start shrink-0 w-[88vw] sm:w-[500px] lg:w-[540px] bg-zinc-950 border border-zinc-800 hover:border-zinc-700 overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-xl"
            >
              <div>
                {/* Image Header */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-zinc-900">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    sizes="(max-width: 640px) 88vw, 540px"
                    className="object-cover object-center transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-90" />
                  
                  {/* Location Badge */}
                  <div className="absolute top-4 left-4 z-10 flex flex-wrap gap-2">
                    <span className="bg-black/90 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 border border-zinc-800 flex items-center gap-1.5 rounded-lg">
                      <MapPin className="w-3.5 h-3.5 text-[#EE7130]" />
                      {project.location}
                    </span>
                    {project.featured && (
                      <span className="bg-[#EE7130] text-white text-xs font-bold px-3 py-1.5 rounded-lg">
                        FEATURED DEPLOYMENT
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 sm:p-8 space-y-5">
                  <div>
                    <span className="text-xs uppercase tracking-wider font-semibold text-zinc-500 block mb-1">
                      {project.category}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                      {project.name}
                    </h3>
                  </div>

                  <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
                    {project.summary}
                  </p>

                  {/* Key Specs Box */}
                  <div className="bg-zinc-900/90 border border-zinc-800 p-4 space-y-3">
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="flex items-center gap-2">
                        <BatteryCharging className="w-4 h-4 text-[#EE7130] shrink-0" />
                        <div>
                          <span className="text-[10px] text-zinc-500 uppercase tracking-wider block font-semibold">Storage</span>
                          <span className="text-white font-bold">{project.battery}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Sun className="w-4 h-4 text-[#EE7130] shrink-0" />
                        <div>
                          <span className="text-[10px] text-zinc-500 uppercase tracking-wider block font-semibold">Solar Array</span>
                          <span className="text-white font-bold">{project.panels}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Impact Highlights */}
                  <div className="space-y-2 pt-1">
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">Key Outcomes:</span>
                    {project.impact.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#EE7130] shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Indicator */}
              <div className="px-6 py-4 sm:px-8 border-t border-zinc-900 bg-zinc-900/30 flex items-center justify-between text-xs text-zinc-500 font-medium">
                <span>System Size: <strong className="text-zinc-300">{project.systemSize}</strong></span>
                <span className="font-mono text-zinc-600">0{idx + 1} / 0{projectsData.length}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Indicator Dots */}
        <div className="flex items-center justify-center gap-2 mt-4">
          {projectsData.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                if (!scrollContainerRef.current) return;
                const slideWidth = scrollContainerRef.current.clientWidth > 640 ? 520 : scrollContainerRef.current.clientWidth * 0.88;
                scrollContainerRef.current.scrollTo({
                  left: i * (slideWidth + 32),
                  behavior: "smooth",
                });
              }}
              aria-label={`Go to project slide ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                activeIndex === i ? "w-8 bg-[#EE7130]" : "w-2 bg-zinc-800 hover:bg-zinc-700"
              }`}
            />
          ))}
        </div>

      </div>

    </section>
  );
}
