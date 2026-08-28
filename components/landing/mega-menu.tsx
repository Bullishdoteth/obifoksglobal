"use client";

import Link from "next/link";
import { ArrowRight, PhoneCall } from "lucide-react";
import { SOLUTIONS_DATA, SolutionItem } from "@/lib/solutions-data";

interface MegaMenuProps {
  onClose: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export default function MegaMenu({ onClose, onMouseEnter, onMouseLeave }: MegaMenuProps) {
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
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
            onClick={onClose}
            className="text-xs font-bold text-[#378222] hover:text-[#2b661a] flex items-center gap-1.5 transition-colors group/link"
          >
            <span>View All Solutions Overview</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Mega Menu Full-Width Grid (9 Cols Cards + 3 Cols Side Banner) */}
        <div className="grid grid-cols-12 gap-6 items-stretch">
          
          {/* 6 Solution Cards in a spacious 3x2 Grid (9 cols) */}
          <div className="col-span-9 grid grid-cols-3 gap-4">
            {SOLUTIONS_DATA.map((sol: SolutionItem) => (
              <Link
                key={sol.id}
                href={`/solutions/${sol.slug}`}
                onClick={onClose}
                className="group p-4 border border-zinc-200/80 bg-zinc-50/70 hover:bg-white transition-all duration-200 flex flex-col justify-between"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="text-sm font-bold text-zinc-900 group-hover:text-black transition-colors">
                      {sol.title}
                    </h4>
                    <span className="text-[10px] font-bold px-2 py-0.5 bg-zinc-10 text-zinc-200 rounded-full group-hover:text-white group-hover:bg-[#378222] transition-colors shrink-0">
                      {sol.badge}
                    </span>
                  </div>

                  <p className="text-xs text-zinc-600 line-clamp-2 leading-relaxed">
                    {sol.shortDesc}
                  </p>
                </div>

                <div className="mt-3 pt-2.5 border-t border-zinc-200/60 flex items-center justify-between text-[11px] font-semibold text-zinc-500 group-hover:text-zinc-900 transition-colors">
                  <span>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#378222]" />
                </div>
              </Link>
            ))}
          </div>

          {/* Featured Callout Side Banner (3 cols) */}
          <div className="col-span-3 bg-gradient-to-br from-zinc-900 via-zinc-950 to-[#0e2a18] text-white border border-zinc-800 rounded-xl p-5 flex flex-col justify-between relative overflow-hidden shadow-xl">
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#EE7130]/20 rounded-full blur-2xl pointer-events-none" />
            
            <div className="space-y-3 relative z-10">
              <span className="inline-block px-2.5 py-1 bg-[#459628]/20 border border-[#459628]/30 rounded-full text-[10px] font-bold text-[#459628] uppercase tracking-wide">
                Free Energy Audit
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
                onClick={onClose}
                className="w-full py-2.5 px-3 bg-[#459628] hover:bg-[#387a20] text-white text-xs font-bold rounded-lg text-center transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#459628]/20"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>WhatsApp Engineer</span>
              </a>

              <Link
                href="#contact"
                onClick={onClose}
                className="w-full py-2.5 px-3 bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-bold rounded-lg text-center transition-all flex items-center justify-center gap-1.5 border border-white/10"
              >
                <span>Contact Us</span>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
