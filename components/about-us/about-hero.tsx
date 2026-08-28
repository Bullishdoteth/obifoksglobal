import Link from "next/link";
import { ShieldCheck, Award, Zap, Building2, ArrowRight } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative bg-gradient-to-b from-orange-50/40 via-white to-white text-zinc-900 pt-12 pb-16 lg:pt-16 lg:pb-20 border-b border-zinc-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="max-w-3xl">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100/80 border border-orange-200 text-xs sm:text-sm font-bold text-[#EE7130] mb-6">
            <ShieldCheck className="w-4 h-4 text-[#EE7130]" />
            <span>OFFICIAL CORPORATE PROFILE</span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0B1528] tracking-tight leading-[1.1] mb-6">
            Powering Nigeria with <span className="text-[#EE7130]">Reliable</span> Renewable Energy
          </h1>

          {/* Description */}
          <p className="text-zinc-600 text-base sm:text-lg md:text-xl leading-relaxed mb-8 font-normal">
            Obifoks Global &amp; Felicity Nig. Ltd. is a fully registered indigenous energy and engineering solutions company headquartered in Owerri, Imo State. We specialize in precision solar microgrid engineering, lithium energy storage, and industrial security systems.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="#registration"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#EE7130] hover:bg-[#d96224] text-white font-bold text-sm transition-all shadow-md shadow-orange-500/20"
            >
              <span>Government Registration</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-100 hover:bg-zinc-200 border border-zinc-200 text-zinc-900 font-bold text-sm transition-colors"
            >
              <span>Contact Executive Team</span>
            </Link>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-16 pt-12 border-t border-zinc-200/80">
          <div className="p-5 sm:p-6 rounded-2xl bg-zinc-50 border border-zinc-200/80 shadow-xs">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs uppercase font-bold tracking-wider text-zinc-400">Experience</span>
              <div className="p-2 rounded-lg bg-orange-50 text-[#EE7130]">
                <Award className="w-5 h-5" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#0B1528]">10+ Years</div>
            <p className="text-xs text-zinc-500 mt-1">In Power &amp; Renewable Systems</p>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-zinc-50 border border-zinc-200/80 shadow-xs">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs uppercase font-bold tracking-wider text-zinc-400">Installations</span>
              <div className="p-2 rounded-lg bg-orange-50 text-[#EE7130]">
                <Zap className="w-5 h-5" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#0B1528]">1,500+</div>
            <p className="text-xs text-zinc-500 mt-1">Residential &amp; Commercial Sites</p>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-zinc-50 border border-zinc-200/80 shadow-xs">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs uppercase font-bold tracking-wider text-zinc-400">Status</span>
              <div className="p-2 rounded-lg bg-orange-50 text-[#EE7130]">
                <Building2 className="w-5 h-5" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#0B1528]">CAC Entity</div>
            <p className="text-xs text-zinc-500 mt-1">Federal Republic of Nigeria</p>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-zinc-50 border border-zinc-200/80 shadow-xs">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs uppercase font-bold tracking-wider text-zinc-400">Support</span>
              <div className="p-2 rounded-lg bg-orange-50 text-[#EE7130]">
                <ShieldCheck className="w-5 h-5" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#0B1528]">24/7 Field</div>
            <p className="text-xs text-zinc-500 mt-1">After-Sales &amp; Warranty Team</p>
          </div>
        </div>
      </div>
    </section>
  );
}
