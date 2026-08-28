import Link from "next/link";
import { ArrowRight, ShieldCheck, Zap, PhoneCall } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative py-20 sm:py-28 lg:py-32 bg-black text-white border-t border-b border-zinc-900 overflow-hidden">
      
      {/* Background Radial Gradient Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-900/60 via-black to-black pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
          
          {/* Top Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-semibold uppercase tracking-widest">
            <Zap className="w-3.5 h-3.5 text-emerald-400" />
            <span>START YOUR SOLAR JOURNEY TODAY</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1]">
            Ready to take control of your power?
          </h2>

          {/* Subtitle */}
          <p className="text-zinc-400 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-normal">
            Whether you need a residential solar system, business backup power, industrial energy infrastructure, or certified accessories, we&apos;re here to assist.
          </p>

          {/* Action Buttons */}
          <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full">
            <Link
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#378222] hover:bg-[#2b661a] text-white font-bold text-sm px-8 py-4 transition-all duration-200 shadow-xl shadow-emerald-950/40 hover:scale-[1.02] active:scale-95 group"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <a
              href="https://wa.me/2349064566983"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm px-8 py-4 transition-all duration-200 shadow-xl shadow-green-950/40 hover:scale-[1.02] active:scale-95 group"
            >
              <svg
                className="w-4.5 h-4.5 fill-current text-white shrink-0"
                viewBox="0 0 24 24"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.155 4.218 4.298-1.127zm10.702-6.52c-.22-.11-1.306-.644-1.508-.718-.202-.074-.349-.11-.497.11-.147.219-.572.718-.701.865-.129.147-.258.165-.478.055-.22-.11-.929-.342-1.769-1.091-.654-.583-1.095-1.303-1.224-1.523-.129-.22-.014-.339.096-.448.099-.099.22-.258.33-.386.109-.129.146-.22.22-.366.074-.147.037-.275-.018-.386-.055-.11-.497-1.2-.681-1.642-.18-.431-.363-.372-.497-.379-.127-.007-.273-.008-.419-.008-.147 0-.386.055-.588.275-.202.22-.772.754-.772 1.838 0 1.085.79 2.133.901 2.28.11.147 1.555 2.374 3.768 3.328.526.227.937.363 1.258.465.529.168 1.01.144 1.391.087.424-.063 1.306-.534 1.49-.1.049.183.992.385 1.029.183.037.312.055.44.037.129-.018.147-.11.22-.22.11-.11.22-.22.33-.386z" />
              </svg>
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Key Value Guarantee Points */}
          <div className="pt-8 sm:pt-10 border-t border-zinc-900 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-semibold text-zinc-400">
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Certified Engineers
            </span>
            <span className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-emerald-400" />
              24/7 Power Support
            </span>
            <span className="flex items-center gap-2">
              <PhoneCall className="w-4 h-4 text-emerald-400" />
              Fast Direct Response
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
