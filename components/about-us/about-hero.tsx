import Link from "next/link";
import { ShieldCheck, Award, Zap, Building2, ArrowRight } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative bg-zinc-950 text-white pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-zinc-900 overflow-hidden">
      {/* Background Subtle Mesh Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="max-w-3xl">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs sm:text-sm font-semibold text-[#EE7130] mb-6">
            <ShieldCheck className="w-4 h-4 text-[#EE7130]" />
            <span>OFFICIAL CORPORATE PROFILE</span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
            Powering Nigeria with <span className="text-[#EE7130]">Reliable</span> Renewable Energy
          </h1>

          {/* Description */}
          <p className="text-zinc-300 text-base sm:text-lg md:text-xl leading-relaxed mb-8 font-normal">
            Obifoks Global &amp; Felicity Nig. Ltd. is a fully registered indigenous energy and engineering solutions company headquartered in Owerri, Imo State. We specialize in precision solar microgrid engineering, lithium energy storage, and industrial security systems.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="#registration"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#EE7130] hover:bg-[#d96224] text-white font-semibold text-sm transition-colors shadow-lg shadow-[#EE7130]/20"
            >
              <span>Government Registration</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-200 font-semibold text-sm transition-colors"
            >
              <span>Contact Executive Team</span>
            </Link>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-16 pt-12 border-t border-zinc-900">
          <div className="p-5 sm:p-6 rounded-xl bg-zinc-900/50 border border-zinc-800/80">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs uppercase font-bold tracking-wider text-zinc-400">Experience</span>
              <Award className="w-5 h-5 text-[#EE7130]" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white">10+ Years</div>
            <p className="text-xs text-zinc-400 mt-1">In Power &amp; Renewable Systems</p>
          </div>

          <div className="p-5 sm:p-6 rounded-xl bg-zinc-900/50 border border-zinc-800/80">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs uppercase font-bold tracking-wider text-zinc-400">Installations</span>
              <Zap className="w-5 h-5 text-[#EE7130]" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white">1,500+</div>
            <p className="text-xs text-zinc-400 mt-1">Residential &amp; Commercial Sites</p>
          </div>

          <div className="p-5 sm:p-6 rounded-xl bg-zinc-900/50 border border-zinc-800/80">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs uppercase font-bold tracking-wider text-zinc-400">Status</span>
              <Building2 className="w-5 h-5 text-[#EE7130]" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white">CAC Entity</div>
            <p className="text-xs text-zinc-400 mt-1">Federal Republic of Nigeria</p>
          </div>

          <div className="p-5 sm:p-6 rounded-xl bg-zinc-900/50 border border-zinc-800/80">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs uppercase font-bold tracking-wider text-zinc-400">Support</span>
              <ShieldCheck className="w-5 h-5 text-[#EE7130]" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white">24/7 Field</div>
            <p className="text-xs text-zinc-400 mt-1">After-Sales &amp; Warranty Team</p>
          </div>
        </div>
      </div>
    </section>
  );
}
