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
            className="text-xs font-bold text-black flex items-center gap-1.5 transition-colors group/link"
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
          <div className="col-span-3 bg-gradient-to-br from-zinc-900 via-zinc-950 to-[#0e2a18] text-white border border-zinc-800 p-5 flex flex-col justify-between relative overflow-hidden shadow-xl">
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#EE7130]/20 rounded-full blur-2xl pointer-events-none" />
            
            <div className="space-y-4 relative z-10">
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
                {/* WhatsApp Icon */}
              <svg
                className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-current text-white shrink-0"
                viewBox="0 0 24 24"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.155 4.218 4.298-1.127zm10.702-6.52c-.22-.11-1.306-.644-1.508-.718-.202-.074-.349-.11-.497.11-.147.219-.572.718-.701.865-.129.147-.258.165-.478.055-.22-.11-.929-.342-1.769-1.091-.654-.583-1.095-1.303-1.224-1.523-.129-.22-.014-.339.096-.448.099-.099.22-.258.33-.386.109-.129.146-.22.22-.366.074-.147.037-.275-.018-.386-.055-.11-.497-1.2-.681-1.642-.18-.431-.363-.372-.497-.379-.127-.007-.273-.008-.419-.008-.147 0-.386.055-.588.275-.202.22-.772.754-.772 1.838 0 1.085.79 2.133.901 2.28.11.147 1.555 2.374 3.768 3.328.526.227.937.363 1.258.465.529.168 1.01.144 1.391.087.424-.063 1.306-.534 1.49-.1.049.183.992.385 1.029.183.037.312.055.44.037.129-.018.147-.11.22-.22.11-.11.22-.22.33-.386z" />
              </svg>
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
