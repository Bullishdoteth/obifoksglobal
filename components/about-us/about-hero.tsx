import Link from "next/link";
import { ShieldCheck, Award, Zap, Building2, ArrowRight } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative bg-white text-zinc-900 py-16 sm:py-24 border-b border-zinc-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="max-w-3xl space-y-6">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-black text-white text-xs font-semibold tracking-wider uppercase">
            <ShieldCheck className="w-3.5 h-3.5 text-[#EE7130]" />
            <span>Official Corporate Profile</span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-zinc-950 tracking-tight leading-[1.1]">
            Powering Nigeria with Reliable Renewable Energy
          </h1>

          {/* Description */}
          <p className="text-zinc-600 text-base sm:text-lg md:text-xl leading-relaxed font-normal">
            Obifoks Global &amp; Felicity Nig. Ltd. is a fully registered indigenous energy and engineering solutions company headquartered in Owerri, Imo State. We specialize in precision solar microgrid engineering, lithium energy storage, and industrial security systems.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="#registration"
              className="inline-flex items-center gap-2 px-7 py-4 bg-[#378222] hover:bg-[#2b661a] text-white font-bold text-xs sm:text-sm transition-colors shadow-md"
            >
              <span>Government Registration</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-4 bg-zinc-100 hover:bg-zinc-200 border border-zinc-200 text-zinc-900 font-bold text-xs sm:text-sm transition-colors"
            >
              <span>Contact Executive Team</span>
            </Link>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-16 pt-12 border-t border-zinc-200">
          <div className="p-6 bg-zinc-50 border border-zinc-200">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs uppercase font-bold tracking-wider text-zinc-400">Experience</span>
              <div className="p-2 bg-black text-white">
                <Award className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-black text-zinc-950">10+ Years</div>
            <p className="text-xs text-zinc-500 font-medium mt-1">In Power &amp; Renewable Systems</p>
          </div>

          <div className="p-6 bg-zinc-50 border border-zinc-200">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs uppercase font-bold tracking-wider text-zinc-400">Installations</span>
              <div className="p-2 bg-black text-white">
                <Zap className="w-4 h-4 text-[#EE7130]" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-black text-zinc-950">1,500+</div>
            <p className="text-xs text-zinc-500 font-medium mt-1">Residential &amp; Commercial Sites</p>
          </div>

          <div className="p-6 bg-zinc-50 border border-zinc-200">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs uppercase font-bold tracking-wider text-zinc-400">Status</span>
              <div className="p-2 bg-black text-white">
                <Building2 className="w-4 h-4 text-[#EE7130]" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-black text-zinc-950">CAC Entity</div>
            <p className="text-xs text-zinc-500 font-medium mt-1">Federal Republic of Nigeria</p>
          </div>

          <div className="p-6 bg-zinc-50 border border-zinc-200">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs uppercase font-bold tracking-wider text-zinc-400">Support</span>
              <div className="p-2 bg-black text-white">
                <ShieldCheck className="w-4 h-4 text-[#EE7130]" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-black text-zinc-950">24/7 Field</div>
            <p className="text-xs text-zinc-500 font-medium mt-1">After-Sales &amp; Warranty Team</p>
          </div>
        </div>
      </div>
    </section>
  );
}
