"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, BatteryCharging, Sun, Zap, CheckCircle, X } from "lucide-react";

interface ProjectItem {
  id: string;
  slug: string;
  name: string;
  category: string;
  location: string;
  battery: string;
  panels: string;
  image: string;
  featured?: boolean;
  summary: string;
  specs: { label: string; value: string }[];
  impact: string[];
}

const projectsData: ProjectItem[] = [
  {
    id: "foks-water",
    slug: "foks-water-company-irete-owerri",
    name: "FOKS WATER COMPANY",
    category: "Commercial Industrial Water Bottling Facility",
    location: "Irete, Owerri",
    battery: "100kWh Battery System",
    panels: "100 Solar Panels",
    image: "/assets/projects/foks-water.png",
    featured: true,
    summary: "Heavy-duty off-grid commercial power deployment for industrial water purification, high-wattage bottling lines, and refrigeration.",
    specs: [
      { label: "System Size", value: "100kW 3-Phase Commercial Solar Setup" },
      { label: "Battery Bank", value: "100kWh High-Voltage LiFePO4 Rack System" },
      { label: "Solar Array", value: "100 x 580W Tier-1 Mono PERC Panels" },
      { label: "Generator Offset", value: "92% Reduction in Diesel Generator Usage" },
      { label: "Location", value: "Irete Industrial Zone, Owerri, Imo State" },
    ],
    impact: [
      "Zero downtime for continuous water production lines",
      "Over ₦4.5M monthly diesel fuel savings",
      "Automatic seamless grid & generator fallback integration",
    ],
  },
  {
    id: "mrs-fueling",
    slug: "mrs-fuelling-station-owerri",
    name: "MRS Fueling Station",
    category: "24/7 Petroleum Retail Facility",
    location: "Port Harcourt Expressway",
    battery: "15kWh Battery System",
    panels: "18 Solar Panels",
    image: "/assets/projects/mrs-station.png",
    summary: "Uninterrupted energy setup powering fuel dispensing pumps, canopy LED lighting, electronic point of sale, and security monitoring.",
    specs: [
      { label: "System Size", value: "12kW Hybrid Solar Inverter" },
      { label: "Battery Bank", value: "15kWh LiFePO4 Battery Storage" },
      { label: "Solar Array", value: "18 x 550W High-Efficiency Solar Panels" },
      { label: "Location", value: "Port Harcourt Expressway" },
    ],
    impact: [
      "24-hour pump operation without diesel generator noise",
      "Protection against frequent grid voltage surges",
    ],
  },
  {
    id: "mint-fueling",
    slug: "mint-fueling-station-owerri",
    name: "MINT Fueling Station",
    category: "Commercial Fuel & Convenience Hub",
    location: "Aba Road, Enugu",
    battery: "20kWh Battery System",
    panels: "24 Solar Panels",
    image: "/assets/projects/mint-station.png",
    summary: "High-reliability hybrid solar energy system designed for 24/7 retail operation, cold storage marts, and underground pump motors.",
    specs: [
      { label: "System Size", value: "15kW 3-Phase Inverter System" },
      { label: "Battery Bank", value: "20kWh Wall-Mounted Lithium Pack" },
      { label: "Solar Array", value: "24 x 550W Solar Panels" },
      { label: "Location", value: "Aba Road Commercial Corridor, Enugu" },
    ],
    impact: [
      "Powers convenience store refrigeration & dispensing pumps simultaneously",
      "Lowered station maintenance costs by over 70%",
    ],
  },
  {
    id: "gigas-fueling",
    slug: "gigas-fueling-station-owerri",
    name: "GIGAS Fueling Station",
    category: "Heavy Commercial Gas & Fuel Station",
    location: "Onitsha Industrial Zone",
    battery: "15kWh Battery System",
    panels: "20 Solar Panels",
    image: "/assets/projects/gigas-station.png",
    summary: "Dedicated solar backup setup ensuring uninterrupted dispensing pumps, administrative offices, and high-voltage station canopy light arrays.",
    specs: [
      { label: "System Size", value: "12kW Smart Solar Power Hub" },
      { label: "Battery Bank", value: "15kWh Industrial LiFePO4 Rack" },
      { label: "Solar Array", value: "20 x 550W Solar Panels" },
      { label: "Location", value: "Onitsha Industrial Zone, Anambra" },
    ],
    impact: [
      "Eliminated night-time generator running costs",
      "Instant 0ms transfer time during utility grid blackouts",
    ],
  },
];

export default function Projects() {
  const featuredProject = projectsData.find((p) => p.featured) || projectsData[0];
  const secondaryProjects = projectsData.filter((p) => !p.featured);

  return (
    <section id="projects" className="scroll-mt-20 py-20 sm:py-28 bg-black text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white text-black text-xs sm:text-sm font-semibold tracking-wider uppercase mb-4">
            NOTABLE PROJECTS
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            Powering real businesses.
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg mt-3 leading-relaxed">
            Real installations across factories, commercial fueling stations, and production hubs in Nigeria.
          </p>
        </div>

        {/* Featured Main Project (FOKS WATER COMPANY) */}
        <div className="bg-zinc-950 border border-zinc-800 overflow-hidden shadow-2xl transition-all duration-300 hover:border-zinc-700 mb-12 lg:mb-16 group">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            
            {/* Image Column */}
            <div className="lg:col-span-7 relative min-h-[320px] sm:min-h-[420px] lg:min-h-[500px] overflow-hidden bg-zinc-900">
              <Image
                src={featuredProject.image}
                alt={featuredProject.name}
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                priority
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-black opacity-80" />
              
              {/* Badge overlay */}
              <div className="absolute top-4 left-4 z-10 flex flex-wrap gap-2">
                <span className="bg-emerald-500/90 text-white text-xs font-bold px-3 py-1.5 backdrop-blur-md">
                  100% OPERATIONAL
                </span>
              </div>
            </div>

            {/* Info Column */}
            <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-zinc-400 text-sm mb-3">
                  <MapPin className="w-4 h-4 text-zinc-400" />
                  <span className="font-semibold text-zinc-300">{featuredProject.location}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight mb-4 transition-colors">
                  <Link href={`/projects/${featuredProject.slug}`}>
                    {featuredProject.name}
                  </Link>
                </h3>

                <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-6">
                  {featuredProject.summary}
                </p>

                {/* Specs Box */}
                <div className="bg-zinc-900/90 border border-zinc-800 p-4 sm:p-5 mb-8 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white flex items-center justify-center shrink-0">
                      <BatteryCharging className="w-4.5 h-4.5 text-[#378222]" />
                    </div>
                    <div>
                      <span className="text-xs text-zinc-400 uppercase tracking-wider block font-semibold">Battery Storage</span>
                      <span className="text-white font-bold text-base sm:text-lg">{featuredProject.battery}</span>
                    </div>
                  </div>

                  <div className="w-full h-px bg-zinc-800" />

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white flex items-center justify-center shrink-0">
                      <Sun className="w-4.5 h-4.5 text-[#378222]" />
                    </div>
                    <div>
                      <span className="text-xs text-zinc-400 uppercase tracking-wider block font-semibold">Solar Generation</span>
                      <span className="text-white font-bold text-base sm:text-lg">{featuredProject.panels}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* View Project Action */}
              <div>
                <Link
                  href={`/projects/${featuredProject.slug}`}
                  className="inline-flex items-center gap-2 bg-white hover:bg-zinc-100 text-zinc-950 font-bold text-sm px-6 py-3.5 transition-all duration-200 shadow-lg group/btn cursor-pointer"
                >
                  <span>View Full Project Page</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </div>

            </div>

          </div>
        </div>

        {/* Secondary Projects Grid (MRS, MINT, GIGAS) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {secondaryProjects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.slug}`}
              className="bg-zinc-950 border border-zinc-800 hover:border-zinc-700 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Thumbnail Image Header */}
                <div className="relative h-44 w-full overflow-hidden mb-5 bg-zinc-900">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 text-xs font-semibold text-zinc-300 bg-zinc-950/80 px-2.5 py-1 backdrop-blur-sm border border-zinc-800 flex items-center gap-1.5">
                    <MapPin className="w-3 h-3 text-zinc-400" />
                    {project.location}
                  </span>
                </div>

                {/* Title */}
                <h4 className="text-xl font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">
                  {project.name}
                </h4>
                <p className="text-zinc-400 text-xs font-medium mb-4">{project.category}</p>

                {/* Key Spec Badge */}
                <div className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 px-3 py-1.5 text-xs font-semibold text-zinc-200">
                  <Zap className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{project.battery}</span>
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="mt-6 pt-4 border-t border-zinc-900 flex items-center justify-between text-xs font-bold text-zinc-400 group-hover:text-white transition-colors">
                <span>View Project Page</span>
                <ArrowRight className="w-3.5 h-3.5 text-white transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>

      </div>

    </section>
  );
}
