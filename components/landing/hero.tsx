import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="hero" className="relative w-full min-h-[85vh] sm:min-h-[90vh] flex flex-col justify-center py-20 sm:py-28 bg-zinc-950 overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/hero.jpg"
          alt="Solar System Installation on Roof"
          fill
          sizes="100vw"
          priority
          className="object-cover object-center scale-105"
        />
        {/* Dark Tint Overlay for Crisp White Contrast */}
        <div className="absolute inset-0 bg-black/60 bg-gradient-to-r from-black/80 via-black/55 to-black/30" />
      </div>

      {/* Hero Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full py-8 sm:py-12">
        <div className="max-w-4xl text-left">
          
          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.08] mb-6 sm:mb-8 drop-shadow-md">
            Reliable Solar Energy Solutions
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-zinc-200 font-normal leading-relaxed max-w-3xl mb-8 sm:mb-10 drop-shadow">
            We specialize in solar system installations, sales of panels, inverter and battery systems, solar maintenance, and affordable solar accessories, delivering clean energy across Nigeria
          </p>

          {/* Action Buttons Container */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center bg-[#378222] hover:bg-[#2b661a] text-white font-semibold text-sm sm:text-base px-8 py-3.5 rounded-lg border border-white/20 shadow-xl transition-all duration-200 hover:scale-[1.02] active:scale-95 text-center"
            >
              Get a Quote
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm sm:text-base px-8 py-3.5 rounded-lg border border-white/20 backdrop-blur-sm shadow-xl transition-all duration-200 hover:scale-[1.02] active:scale-95 group text-center"
            >
              <span>View Products</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
