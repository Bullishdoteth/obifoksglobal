import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[85vh] sm:min-h-[90vh] flex flex-col justify-center py-20 sm:py-28 bg-zinc-950 overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/hero.jpg"
          alt="Solar System Installation on Roof"
          fill
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
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.08] mb-6 sm:mb-8 drop-shadow-md">
            Reliable Solar Energy Solutions for Homes &amp; Businesses in Nigeria
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-zinc-200 font-normal leading-relaxed max-w-3xl mb-8 sm:mb-10 drop-shadow">
            We specialize in solar system installations, sales of panels, inverter and battery systems, solar maintenance, and affordable solar accessories, delivering clean energy across Nigeria
          </p>

          {/* Contact Us Action Button */}
          <div>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center bg-[#EE7130] hover:bg-[#378222] text-white font-medium sm:font-semibold text-sm sm:text-base px-7 py-3 rounded-lg border border-white/20 shadow-xl transition-all duration-200 hover:scale-[1.02] active:scale-95"
            >
              Get a Quote
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
