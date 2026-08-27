import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const stats = [
    { title: "200+", subtitle: "Countries Served" },
    { title: "Weekly", subtitle: "UK Cargo Freights" },
    { title: "DHL & UPS", subtitle: "Express Partners" },
    { title: "Safe & Secure", subtitle: "Every Shipment" },
  ];

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between pt-28 sm:pt-36 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-12 bg-white overflow-hidden">
      {/* Background Delivery Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/hero.jpg"
          alt="Obifoks Global & Felicity"
          fill
          priority
          className="object-cover object-center scale-105 transform"
        />
        {/* Elegant Subtle Dark Overlay for Premium Feel */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/25 to-transparent" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-8 sm:py-12">
        <div className="max-w-6xl">
          {/* Eyebrow Tag */}
          <div className="inline-flex items-center gap-2 mb-4 sm:mb-6">
            <span className="w-2 h-2 rounded-full bg-[#ff3b00] animate-pulse" />
            <span className="text-xs sm:text-sm font-bold tracking-widest text-zinc-300 uppercase">
              LAGOS TO THE WORLD
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.08] mb-6 sm:mb-8">
            Power homes, businesses, and mega projects with a brand you can trust.
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-zinc-300 font-normal leading-relaxed max-w-xl mb-8 sm:mb-10">
            O3 Cargo Express ships from Lagos to over 200 countries with speed, care and reliability you can trust.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-5">
            <Link
              href="#quote"
              className="inline-flex items-center justify-center gap-2.5 bg-[#ff3b00] hover:bg-[#e03400] text-white font-medium text-sm sm:text-base px-6 sm:px-7 py-3.5 sm:py-4 rounded-full transition-all duration-200 shadow-[0_10px_25px_rgba(255,59,0,0.35)] hover:shadow-[0_15px_30px_rgba(255,59,0,0.5)] active:scale-95 group"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5] transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="#services"
              className="inline-flex items-center justify-center gap-2.5 bg-black/35 hover:bg-black/50 border border-white/30 text-white font-medium text-sm sm:text-base px-6 sm:px-7 py-3.5 sm:py-4 rounded-full backdrop-blur-md transition-all duration-200 hover:border-white/60 active:scale-95 group"
            >
              <span>Explore Services</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5] transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* Floating Bottom Stats Card */}
      <div className="relative z-20 max-w-6xl mx-auto w-full mt-8 sm:mt-12">
        <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-9 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] border border-zinc-100">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-zinc-200/70">
            {stats.map((stat, idx) => (
              <div
                key={stat.title}
                className={`${idx !== 0 ? "pt-4 lg:pt-0 lg:pl-8" : ""
                  } flex flex-col justify-center`}
              >
                <div className="flex items-center text-2xl sm:text-3xl lg:text-4xl font-extrabold text-zinc-900 tracking-tight mb-1">
                  <span>{stat.title}</span>
                  <span className="text-[#ff3b00] ml-1 sm:ml-1.5 inline-block select-none">•</span>
                </div>
                <p className="text-xs sm:text-sm font-medium text-zinc-500 tracking-wide">
                  {stat.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
