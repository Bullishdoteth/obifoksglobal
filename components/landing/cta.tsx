import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative py-20 sm:py-28 bg-white overflow-hidden flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full">
        <div className="max-w-4xl w-full mx-auto relative rounded-2xl sm:rounded-3xl overflow-hidden py-10 sm:py-12 px-6 sm:px-12 flex items-center justify-center shadow-2xl border border-zinc-200/40">
        
        {/* Background Image */}
        <Image
          src="/cta-bg.jpg"
          alt="Happy couple enjoying clean solar energy"
          fill
          sizes="(max-width: 1024px) 100vw, 896px"
          priority
          className="object-cover object-center scale-105 filter brightness-90"
        />

        {/* Dark Navy Blue Gradient Overlay matching screenshot */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-[#071630]/80 to-[#030d1d] z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#030d1d]/70 via-transparent to-[#030d1d]/70 z-10" />

        {/* Content Container */}
        <div className="relative z-20 text-center max-w-2xl mx-auto flex flex-col items-center">
          {/* Main Title */}
          <h2 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl tracking-tight leading-tight mb-2 sm:mb-2.5 drop-shadow-md">
            Ready to Take Control of Your Power?
          </h2>

          {/* Subtitle */}
          <p className="text-zinc-200/90 text-xs sm:text-sm font-normal max-w-lg text-center mb-6 sm:mb-7 leading-relaxed drop-shadow">
            Whether you need a home solar system, business backup power, industrial energy infrastructure or simply the right solar accessories, we're ready to help.
          </p>

          {/* Action Buttons Row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-md sm:max-w-none">
            {/* Get a Free Quote Button */}
            <Link
              href="#quote"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-zinc-100 text-zinc-950 font-semibold text-xs sm:text-sm px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl shadow-lg transition-all duration-200 active:scale-95 group"
            >
              <span>Get a Free Quote Now</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5] transition-transform group-hover:translate-x-1" />
            </Link>

            {/* WhatsApp Send a Message Button */}
            <a
              href="https://wa.me/2349138845436"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#52d96a] hover:bg-[#46c75d] text-zinc-950 font-semibold text-xs sm:text-sm px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl shadow-lg transition-all duration-200 active:scale-95 group"
            >
              {/* WhatsApp Icon */}
              <svg
                className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-current text-zinc-950 shrink-0"
                viewBox="0 0 24 24"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.155 4.218 4.298-1.127zm10.702-6.52c-.22-.11-1.306-.644-1.508-.718-.202-.074-.349-.11-.497.11-.147.219-.572.718-.701.865-.129.147-.258.165-.478.055-.22-.11-.929-.342-1.769-1.091-.654-.583-1.095-1.303-1.224-1.523-.129-.22-.014-.339.096-.448.099-.099.22-.258.33-.386.109-.129.146-.22.22-.366.074-.147.037-.275-.018-.386-.055-.11-.497-1.2-.681-1.642-.18-.431-.363-.372-.497-.379-.127-.007-.273-.008-.419-.008-.147 0-.386.055-.588.275-.202.22-.772.754-.772 1.838 0 1.085.79 2.133.901 2.28.11.147 1.555 2.374 3.768 3.328.526.227.937.363 1.258.465.529.168 1.01.144 1.391.087.424-.063 1.306-.534 1.49-.1.049.183.992.385 1.029.183.037.312.055.44.037.129-.018.147-.11.22-.22.11-.11.22-.22.33-.386z" />
              </svg>
              <span>Send a Message</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5] transition-transform group-hover:translate-x-1" />
            </a>
          </div>

        </div>
      </div>
    </div>
  </section>
);
}
