"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, ShieldCheck, Zap } from "lucide-react";

interface SolutionItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  image: string;
  href: string;
}

const solutions: SolutionItem[] = [
  {
    id: "residential",
    number: "01",
    title: "Residential Energy",
    tagline: "Rooftop Solar & Silent Lithium Backup",
    description:
      "Engineered for 24/7 home power security. Protect your household from utility grid outages with zero-downtime solar inverters and long-lasting LiFePO4 batteries.",
    features: ["Rooftop Solar Arrays", "Lithium Battery Storage", "Automatic Grid Switching"],
    image: "/assets/solutions/residential.png",
    href: "#contact",
  },
  {
    id: "commercial",
    number: "02",
    title: "Commercial Energy",
    tagline: "Offices, Retail & Business Hubs",
    description:
      "Cut monthly operating costs and reduce heavy diesel generator dependency. We build robust hybrid power setups tailored for peak daytime business loads.",
    features: ["Peak Load Reduction", "Diesel Generator Integration", "3-Phase High Capacity"],
    image: "/assets/solutions/commercial.png",
    href: "#contact",
  },
  {
    id: "industrial",
    number: "03",
    title: "Industrial Energy",
    tagline: "Factories, Microgrids & Solar Farms",
    description:
      "Heavy-duty energy infrastructure built for high-wattage machinery, continuous production lines, and off-grid facility operations across Nigeria.",
    features: ["Megawatt Scale Solar", "Heavy Storage Cabinets", "Remote Performance Telemetry"],
    image: "/assets/solutions/industrial.png",
    href: "#contact",
  },
  {
    id: "security",
    number: "04",
    title: "Security & Accessories",
    tagline: "Solar Streetlights, MPPT & Protective Gear",
    description:
      "All-in-one solar street lighting, smart CCTV energy nodes, high-efficiency MPPT controllers, surge protectors, and certified installation hardware.",
    features: ["Standalone Solar Streetlights", "MPPT Charge Controllers", "Protection & Circuit Accessories"],
    image: "/assets/solutions/security.png",
    href: "#contact",
  },
];

export default function EnergySolutions() {
  const [activeSolution, setActiveSolution] = useState<number>(0);

  const current = solutions[activeSolution];

  return (
    <section id="solutions" className="relative py-20 sm:py-28 bg-black text-white overflow-hidden border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-zinc-800/80">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-[#EE7130] text-xs font-semibold uppercase tracking-widest mb-4">
              <Zap className="w-3.5 h-3.5" />
              ENERGY SOLUTIONS
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              Power solutions designed around your needs.
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-zinc-400 text-base sm:text-lg leading-relaxed mb-4">
              From residential backup power to industrial energy infrastructure, we provide solutions designed to keep you powered.
            </p>
            {/* Quick Stats Pill */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-zinc-400 pt-2">
              <span className="flex items-center gap-1.5 text-zinc-300">
                <span className="text-[#EE7130] font-bold">70+</span> Projects
              </span>
              <span className="text-zinc-700">•</span>
              <span className="flex items-center gap-1.5 text-zinc-300">
                <span className="text-[#EE7130] font-bold">4+</span> Major Brands
              </span>
              <span className="text-zinc-700">•</span>
              <span className="flex items-center gap-1.5 text-zinc-300">
                <ShieldCheck className="w-3.5 h-3.5 text-[#EE7130]" /> Professional Installation
              </span>
            </div>
          </div>
        </div>

        {/* Editorial 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch pt-10 sm:pt-14">
          
          {/* Left Column: Interactive Horizontal Rows */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div className="divide-y divide-zinc-800/60">
              {solutions.map((item, index) => {
                const isActive = activeSolution === index;
                return (
                  <div
                    key={item.id}
                    onMouseEnter={() => setActiveSolution(index)}
                    onClick={() => setActiveSolution(index)}
                    className={`group cursor-pointer py-6 transition-all duration-300 relative border-l-2 pl-5 sm:pl-6 ${
                      isActive
                        ? "border-[#EE7130] bg-zinc-900/40"
                        : "border-transparent hover:border-zinc-700 hover:bg-zinc-900/20"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-baseline gap-4 sm:gap-6">
                        <span
                          className={`font-mono text-sm sm:text-base font-semibold transition-colors duration-300 ${
                            isActive ? "text-[#EE7130]" : "text-zinc-500 group-hover:text-zinc-400"
                          }`}
                        >
                          {item.number}
                        </span>
                        <div>
                          <h3
                            className={`text-xl sm:text-2xl font-bold tracking-tight transition-colors duration-300 ${
                              isActive ? "text-white" : "text-zinc-300 group-hover:text-white"
                            }`}
                          >
                            {item.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-zinc-400 mt-1 font-medium">
                            {item.tagline}
                          </p>
                        </div>
                      </div>

                      {/* Arrow Icon */}
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 shrink-0 ${
                          isActive
                            ? "bg-[#EE7130] text-white border-[#EE7130] translate-x-1"
                            : "bg-zinc-900/60 text-zinc-400 border-zinc-800 group-hover:text-white group-hover:border-zinc-700 group-hover:translate-x-1"
                        }`}
                      >
                        <ArrowUpRight className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Mobile inline preview description */}
                    {isActive && (
                      <div className="lg:hidden mt-4 pt-3 border-t border-zinc-800/40 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                        {item.description}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Editorial Footer Quote / CTA Note */}
            <div className="mt-8 pt-6 border-t border-zinc-900 hidden sm:flex items-center justify-between text-xs text-zinc-500">
              <span>Hover or click any solution category to inspect details</span>
              <Link
                href="#contact"
                className="text-[#EE7130] hover:text-[#ff8547] font-semibold flex items-center gap-1 transition-colors"
              >
                Request Custom Solution Design <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Column: Editorial Image & Details Stage (Desktop/Tablet) */}
          <div className="lg:col-span-6 relative flex flex-col">
            <div className="relative w-full h-[400px] sm:h-[480px] lg:h-full min-h-[420px] rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl group">
              
              {/* Dynamic Image with Smooth Transition */}
              <Image
                key={current.image}
                src={current.image}
                alt={current.title}
                fill
                priority
                className="object-cover object-center transition-all duration-700 ease-out group-hover:scale-105"
              />

              {/* Dark Gradient Overlay for Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              {/* Top Pill Overlay */}
              <div className="absolute top-5 left-5 z-20">
                <span className="px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white text-xs font-mono tracking-wider">
                  {current.number} // {current.title}
                </span>
              </div>

              {/* Bottom Content Card Inside Stage */}
              <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 z-20 bg-gradient-to-t from-black/95 via-black/80 to-transparent">
                <h4 className="text-2xl font-bold text-white mb-2">
                  {current.title}
                </h4>
                <p className="text-zinc-300 text-sm leading-relaxed mb-5 max-w-lg">
                  {current.description}
                </p>

                {/* Feature Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {current.features.map((feat, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-zinc-900/90 border border-zinc-800 text-zinc-300 text-xs font-medium"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#EE7130]" />
                      {feat}
                    </span>
                  ))}
                </div>

                {/* Action Link */}
                <Link
                  href={current.href}
                  className="inline-flex items-center gap-2 bg-[#EE7130] hover:bg-[#ff8547] text-white font-semibold text-sm px-6 py-2.5 rounded-lg transition-all duration-200 shadow-lg shadow-[#EE7130]/20 hover:scale-[1.02] active:scale-95"
                >
                  Consult an Engineer
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
