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
    <section id="why-obifoks" className="py-20 sm:py-28 bg-white text-zinc-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Section Header Badge & Main Statement */}
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-black border border-[#EE7130]/30 text-white text-xs sm:text-sm font-semibold tracking-wider uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            Why Obifoks
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-zinc-950 tracking-tight leading-[1.1] mb-6">
            MORE THAN A SOLAR DEALER
          </h2>

          <p className="text-zinc-700 text-lg sm:text-xl md:text-2xl font-medium leading-relaxed max-w-3xl">
            We don&apos;t just sell equipment. <br className="hidden sm:inline" />
            <span className="text-[#378222] font-bold">We help you keep it working.</span>
          </p>
        </div>

        {/* Divider Line */}
        <div className="w-full h-px bg-zinc-200 my-10 sm:my-14" />

        {/* Large Numbered Rows */}
        <div className="flex flex-col divide-y divide-zinc-200 border-y border-zinc-200">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.number}
                className="group py-8 sm:py-10 px-2 sm:px-6 transition-all duration-300 hover:bg-zinc-50/80 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-6 sm:gap-8"
              >
                {/* Left side: Number + Title */}
                <div className="flex items-start sm:items-center gap-6 sm:gap-8 min-w-[320px]">
                  <span className="font-mono text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#EE7130] shrink-0 tracking-tight">
                    {item.number}
                  </span>
                  <div>
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <Icon className="w-5 h-5 text-[#EE7130] opacity-80 group-hover:opacity-100 transition-opacity" />
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-zinc-950 group-hover:text-[#EE7130] transition-colors">
                        {item.title}
                      </h3>
                    </div>
                    <span className="inline-block text-xs font-semibold text-zinc-700 bg-zinc-100 group-hover:bg-zinc-200/80 px-2.5 py-1 rounded-md border border-zinc-200 transition-colors">
                      {item.highlight}
                    </span>
                  </div>
                </div>

                {/* Right side: Description + Arrow Indicator */}
                <div className="flex items-center justify-between md:justify-end gap-6 md:w-1/2">
                  <p className="text-zinc-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl">
                    {item.description}
                  </p>
                  <div className="hidden lg:flex w-10 h-10 rounded-full border border-zinc-200 group-hover:border-[#EE7130] items-center justify-center shrink-0 transition-colors group-hover:bg-[#EE7130]/10">
                    <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:text-[#EE7130] transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout banner */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-8 bg-zinc-900 text-white border border-zinc-800 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div>
              <h4 className="text-white font-bold text-base sm:text-lg">Need help sizing your power system?</h4>
              <p className="text-zinc-400 text-xs sm:text-sm">Speak with an Obifoks solar engineer for a free energy assessment.</p>
            </div>
          </div>
          <Link
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 hover:bg-[#2b661a] bg-[#378222] text-white font-semibold text-sm px-6 py-3 transition-all duration-200 shrink-0"
          >
            <span>Consult an Engineer</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
