"use client";

import { ShieldCheck, Wrench, Compass, Headphones, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

interface FeatureRow {
  number: string;
  title: string;
  description: string;
  icon: typeof ShieldCheck;
  highlight: string;
}

const features: FeatureRow[] = [
  {
    number: "01",
    title: "Quality Products",
    description: "Carefully selected equipment for reliable performance. Tier-1 grade panels, A-grade LiFePO4 batteries, and heavy-duty hybrid inverters.",
    icon: ShieldCheck,
    highlight: "100% Genuine & Warranted",
  },
  {
    number: "02",
    title: "Professional Installation",
    description: "Proper installation by our engineering team. Clean wiring, strict safety compliance, surge protection, and optimal solar array tilt.",
    icon: Wrench,
    highlight: "Certified Solar Engineers",
  },
  {
    number: "03",
    title: "Expert Guidance",
    description: "The right system for your actual energy requirements. We conduct load assessments to eliminate overspending or underpowered setups.",
    icon: Compass,
    highlight: "Custom Load Calculations",
  },
  {
    number: "04",
    title: "After-Sales Support",
    description: "Maintenance and technical support after installation. Rapid site visits, remote battery telemetry monitoring, and prompt warranty response.",
    icon: Headphones,
    highlight: "Dedicated Support Helpline",
  },
];

export default function WhyObifoks() {
  return (
    <section id="why-obifoks" className="py-20 sm:py-28 lg:py-32 bg-white text-zinc-900 relative overflow-hidden border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Section Header Badge & Main Statement */}
        <div className="max-w-4xl space-y-4 sm:space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-black text-white text-xs sm:text-sm font-semibold tracking-wider uppercase">
            <span>Why Obifoks</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-zinc-950 tracking-tight leading-[1.1]">
            MORE THAN A SOLAR DEALER
          </h2>

          <p className="text-zinc-700 text-lg sm:text-xl md:text-2xl font-medium leading-relaxed max-w-3xl">
            We don&apos;t just sell equipment. <br className="hidden sm:inline" />
            <span className="text-[#EE7130] font-bold">We help you keep it working.</span>
          </p>
        </div>

        {/* Divider Line */}
        <div className="w-full h-px bg-zinc-200/80 my-12 sm:my-16" />

        {/* Large Numbered Rows */}
        <div className="flex flex-col divide-y divide-zinc-200/80 border-y border-zinc-200/80">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.number}
                className="py-8 sm:py-10 flex flex-col md:flex-row md:items-center justify-between gap-6 sm:gap-10"
              >
                {/* Left side: Number + Title */}
                <div className="flex items-start sm:items-center gap-6 sm:gap-8 min-w-[300px]">
                  <span className="font-mono text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-400 shrink-0 tracking-tight">
                    {item.number}
                  </span>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2.5">
                      <Icon className="w-5 h-5 text-zinc-700 shrink-0" />
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-zinc-950">
                        {item.title}
                      </h3>
                    </div>
                    <span className="inline-block text-xs font-semibold text-zinc-600 bg-zinc-100 px-3 py-1 rounded-md border border-zinc-200">
                      {item.highlight}
                    </span>
                  </div>
                </div>

                {/* Right side: Description */}
                <div className="md:w-1/2">
                  <p className="text-zinc-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout banner */}
        <div className="mt-14 sm:mt-20 p-8 sm:p-10 bg-zinc-950 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="text-white font-bold text-base sm:text-xl">Need help sizing your power system?</h4>
            <p className="text-zinc-400 text-xs sm:text-sm">Speak with an Obifoks solar engineer for a free energy assessment.</p>
          </div>
          <Link
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 hover:bg-[#2b661a] bg-[#378222] text-white font-semibold text-sm px-6 py-3.5 transition-all duration-200 shrink-0 shadow-md"
          >
            <span>Consult an Engineer</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
