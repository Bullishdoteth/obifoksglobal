"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, BatteryCharging, Sun, Zap, CheckCircle, X, ExternalLink } from "lucide-react";

interface ProjectItem {
  id: string;
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
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const featuredProject = projectsData.find((p) => p.featured) || projectsData[0];
  const secondaryProjects = projectsData.filter((p) => !p.featured);

  return (
    <section id="projects" className="scroll-mt-20 py-20 sm:py-28 bg-black text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white text-black text-xs sm:text-sm font-semibold tracking-wider uppercase mb-4">
            <span className="w-2 h-2 rounded-full bg-[#378222]" />
            SELECTED PROJECTS
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
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
                <span className="bg-[#EE7130] text-white text-xs font-bold px-3 py-1.5 shadow-lg">
                  FEATURED INSTALLATION
                </span>
                <span className="bg-emerald-500/90 text-white text-xs font-bold px-3 py-1.5 backdrop-blur-md">
                  100% OPERATIONAL
                </span>
              </div>
            </div>

            {/* Info Column */}
            <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-zinc-400 text-sm mb-3">
                  <MapPin className="w-4 h-4 text-[#EE7130]" />
                  <span className="font-semibold text-zinc-300">{featuredProject.location}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4 group-hover:text-[#EE7130] transition-colors">
                  {featuredProject.name}
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
                    <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shrink-0">
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
                <button
                  onClick={() => setSelectedProject(featuredProject)}
                  className="inline-flex items-center gap-2 bg-white hover:bg-zinc-100 text-zinc-950 font-bold text-sm px-6 py-3.5 transition-all duration-200 shadow-lg active:scale-95 group/btn"
                >
                  <span>View Project Details</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* Secondary Projects Grid (MRS, MINT, GIGAS) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {secondaryProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="bg-zinc-950 border border-zinc-800 hover:border-[#EE7130]/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Thumbnail Image Header */}
                <div className="relative h-44 w-full rounded-xl overflow-hidden mb-5 bg-zinc-900">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 text-xs font-semibold text-zinc-300 bg-zinc-950/80 px-2.5 py-1 rounded-md backdrop-blur-sm border border-zinc-800 flex items-center gap-1.5">
                    <MapPin className="w-3 h-3 text-[#EE7130]" />
                    {project.location}
                  </span>
                </div>

                {/* Title */}
                <h4 className="text-xl font-bold text-white group-hover:text-[#EE7130] transition-colors mb-1">
                  {project.name}
                </h4>
                <p className="text-zinc-400 text-xs font-medium mb-4">{project.category}</p>

                {/* Key Spec Badge */}
                <div className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-lg text-xs font-semibold text-zinc-200">
                  <Zap className="w-3.5 h-3.5 text-[#EE7130]" />
                  <span>{project.battery}</span>
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="mt-6 pt-4 border-t border-zinc-900 flex items-center justify-between text-xs font-bold text-zinc-400 group-hover:text-white transition-colors">
                <span>Explore Specs</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#EE7130] transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Interactive Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white flex items-center justify-center transition-colors z-20"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden mb-6 bg-zinc-900">
              <Image
                src={selectedProject.image}
                alt={selectedProject.name}
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 z-10">
                <span className="bg-[#EE7130] text-white text-xs font-bold px-3 py-1 rounded-full mb-2 inline-block">
                  INSTALLED BY OBIFOKS
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">{selectedProject.name}</h3>
                <p className="text-zinc-300 text-xs sm:text-sm flex items-center gap-1.5 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-[#EE7130]" />
                  {selectedProject.location}
                </p>
              </div>
            </div>

            {/* Summary */}
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6">
              {selectedProject.summary}
            </p>

            {/* Specifications Grid */}
            <div className="mb-6">
              <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-3">System Specifications</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {selectedProject.specs.map((spec, i) => (
                  <div key={i} className="bg-zinc-900/80 border border-zinc-800 p-3.5 rounded-xl">
                    <span className="text-xs text-zinc-400 block mb-0.5">{spec.label}</span>
                    <span className="text-white text-sm font-bold">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Impact Points */}
            <div className="mb-8">
              <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-3">Key Project Outcomes</h4>
              <div className="space-y-2">
                {selectedProject.impact.map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-sm text-zinc-200 bg-zinc-900/40 p-2.5 rounded-lg border border-zinc-900">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA in Modal */}
            <div className="pt-4 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-zinc-400">
                Want a similar power setup for your business?
              </div>
              <Link
                href="#contact"
                onClick={() => setSelectedProject(null)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#EE7130] hover:bg-[#d96224] text-white font-bold text-sm px-6 py-3 rounded-xl transition-all"
              >
                <span>Request Project Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
