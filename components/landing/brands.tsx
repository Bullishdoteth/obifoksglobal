import Image from "next/image";

// SVG Logo Component for Maxwell
function MaxwellLogo() {
  return (
    <div className="flex items-center gap-2.5 select-none">
      <svg className="w-8 h-8 text-[#ff3b00]" viewBox="0 0 36 36" fill="none">
        <path
          d="M6 28L13 8L18 20L23 8L30 28H24.5L20.5 15.5L18 22.5L15.5 15.5L11.5 28H6Z"
          fill="currentColor"
        />
        <circle cx="18" cy="6" r="2.5" fill="#18181b" />
      </svg>
      <div className="flex flex-col">
        <span className="text-zinc-900 font-extrabold text-base sm:text-lg tracking-wider leading-none">
          MAXWELL
        </span>
        <span className="text-zinc-400 font-bold text-[9px] tracking-widest uppercase">
          ENERGY
        </span>
      </div>
    </div>
  );
}

// SVG Logo Component for Dele Hiesec
function DeleHiesecLogo() {
  return (
    <div className="flex items-center gap-2.5 select-none">
      <svg className="w-8 h-8 text-zinc-900" viewBox="0 0 36 36" fill="none">
        <path
          d="M18 4L30 11V25L18 32L6 25V11L18 4Z"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <path
          d="M14 12H20C22.2 12 23.5 13.3 23.5 15.2C23.5 17.1 22.2 18.4 20 18.4H14V12ZM14 18.4H21C23.2 18.4 24.5 19.7 24.5 21.6C24.5 23.5 23.2 24.8 21 24.8H14V18.4Z"
          fill="#ff3b00"
        />
      </svg>
      <div className="flex flex-col">
        <span className="text-zinc-900 font-extrabold text-sm sm:text-base tracking-wider leading-none">
          DELE HIESEC
        </span>
        <span className="text-zinc-400 font-semibold text-[9px] tracking-widest uppercase">
          INTERNATIONAL
        </span>
      </div>
    </div>
  );
}

// SVG Logo Component for Exalted
function ExaltedLogo() {
  return (
    <div className="flex items-center gap-2.5 select-none">
      <svg className="w-8 h-8 text-[#ff3b00]" viewBox="0 0 36 36" fill="none">
        <path
          d="M18 2L22.5 13.5L34 18L22.5 22.5L18 34L13.5 22.5L2 18L13.5 13.5L18 2Z"
          fill="currentColor"
        />
        <circle cx="18" cy="18" r="4" fill="#ffffff" />
      </svg>
      <div className="flex flex-col">
        <span className="text-zinc-900 font-black text-base sm:text-lg tracking-widest leading-none">
          EXALTED
        </span>
        <span className="text-zinc-400 font-medium text-[9px] tracking-widest uppercase">
          POWER TECH
        </span>
      </div>
    </div>
  );
}

function BrandItems() {
  return (
    <>
      {/* Brand 1: Felicity */}
      <div className="w-56 shrink-0 group relative bg-zinc-50/80 hover:bg-white border border-zinc-200/80 hover:border-zinc-300 rounded-2xl p-6 h-28 flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1">
        <div className="relative w-36 h-14 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300">
          <Image
            src="/assets/brands/felicity.avif"
            alt="Felicity Solar"
            width={140}
            height={50}
            className="object-contain max-h-12 w-auto"
          />
        </div>
      </div>

      {/* Brand 2: CWorth */}
      <div className="w-56 shrink-0 group relative bg-zinc-50/80 hover:bg-white border border-zinc-200/80 hover:border-zinc-300 rounded-2xl p-6 h-28 flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1">
        <div className="relative w-36 h-14 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300">
          <Image
            src="/assets/brands/cworth.png"
            alt="CWORTH"
            width={140}
            height={50}
            className="object-contain max-h-12 w-auto"
          />
        </div>
      </div>

      {/* Brand 3: MAXWELL */}
      <div className="w-56 shrink-0 group relative bg-zinc-50/80 hover:bg-white border border-zinc-200/80 hover:border-zinc-300 rounded-2xl p-6 h-28 flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1">
        <div className="grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100 transition-all duration-300">
          <MaxwellLogo />
        </div>
      </div>

      {/* Brand 4: DELE HIESEC */}
      <div className="w-56 shrink-0 group relative bg-zinc-50/80 hover:bg-white border border-zinc-200/80 hover:border-zinc-300 rounded-2xl p-6 h-28 flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1">
        <div className="grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100 transition-all duration-300">
          <DeleHiesecLogo />
        </div>
      </div>

      {/* Brand 5: EXALTED */}
      <div className="w-56 shrink-0 group relative bg-zinc-50/80 hover:bg-white border border-zinc-200/80 hover:border-zinc-300 rounded-2xl p-6 h-28 flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1">
        <div className="grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100 transition-all duration-300">
          <ExaltedLogo />
        </div>
      </div>
    </>
  );
}

export default function Brands() {
  return (
    <section className="py-16 sm:py-24 bg-white border-y border-zinc-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#ff3b00]" />
            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#ff3b00]">
              TRUSTED PARTNERS
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight mb-3">
            Brands We Work With
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base font-normal leading-relaxed">
            Partnering with global leaders across energy, solar tech, and express logistics to ensure peak quality and reliability.
          </p>
        </div>

        {/* Mobile View: Static Responsive Grid */}
        <div className="grid md:hidden grid-cols-2 gap-4 items-center">
          <BrandItems />
        </div>

        {/* Desktop View: Infinite Marquee with Pause on Hover */}
        <div className="hidden md:block relative w-full overflow-hidden py-4">
          {/* Left & Right Edge Fades for Seamless Look */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

          {/* Marquee Track */}
          <div className="animate-marquee flex items-center gap-6 lg:gap-8 hover:[animation-play-state:paused]">
            <BrandItems />
            <BrandItems />
            <BrandItems />
          </div>
        </div>
      </div>
    </section>
  );
}
