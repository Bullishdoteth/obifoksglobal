"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";

interface ProductModel {
  name: string;
  description: string;
  specs?: string[];
  image: string;
}

interface ProductCategory {
  id: string;
  name: string;
  models: ProductModel[];
}

const productCategories: ProductCategory[] = [
  {
    id: "solar-panels",
    name: "Solar Panels",
    models: [
      {
        name: "Felicity M-175W MONO Solar Panel",
        description:
          "The Felicity M-175W Monocrystalline Solar Panel offers high efficiency, compact design, and reliable performance in all weather. Ideal for homes, streetlights, and mobile systems, it delivers stable 175W output with durable, low-light-friendly cells. Perfect for clean energy setups.",
        specs: ["175W Rated Power", "Monocrystalline Cells", "High Low-Light Efficiency", "IP67 Weatherproof"],
        image: "/assets/products/solar-panels.png",
      },
      {
        name: "Felicity M-450W MONO Panel",
        description:
          "High-capacity 450W monocrystalline solar module crafted for residential roof arrays and commercial power plants. Features half-cell technology to minimize shade losses and maximize daily power yield.",
        specs: ["450W Output Power", "Half-Cut Cell Tech", "Anti-PID Protection", "25-Year Performance Warranty"],
        image: "/assets/products/solar-panels.png",
      },
      {
        name: "Felicity M-550W High-Efficiency MONO Panel",
        description:
          "Ultra-high output 550W solar module optimized for large-scale solar farms and heavy industrial applications. Engineered for maximum wattage output per square meter.",
        specs: ["550W Peak Rating", "Bifacial Energy Gain", "Heavy-Duty Frame", "Extreme Temperature Tolerance"],
        image: "/assets/products/solar-panels.png",
      },
    ],
  },
  {
    id: "batteries",
    name: "Batteries",
    models: [
      {
        name: "Felicity 12.8V 200Ah Lithium LiFePO4 Battery",
        description:
          "High-performance 12.8V 200Ah LiFePO4 battery pack providing deep discharge capability, 6000+ lifecycle durability, and integrated intelligent BMS protection for dependable home energy storage.",
        specs: ["2.56kWh Capacity", "LiFePO4 Chemistry", "6000+ Cycle Life", "Built-in Smart BMS"],
        image: "/assets/products/batteries.png",
      },
      {
        name: "Felicity 48V 100Ah Wall-Mounted Powerwall",
        description:
          "Sleek wall-mounted 5kWh lithium battery storage system with active cell balancing, RS485/CAN communication, and seamless integration with hybrid solar inverters.",
        specs: ["5.12kWh Storage", "Wall-Mount Compact Design", "Parallel Expansion Capable", "LCD Status Screen"],
        image: "/assets/products/batteries.png",
      },
    ],
  },
  {
    id: "street-lights",
    name: "Street lights",
    models: [
      {
        name: "Felicity All-in-One Solar Street Light 100W",
        description:
          "Integrated outdoor solar streetlight combining high-efficiency MPPT charge controller, intelligent radar motion sensor, and ultra-bright LED array for autonomous dusk-to-dawn lighting.",
        specs: ["100W Ultra LED Output", "Radar Motion Detection", "Dusk to Dawn Auto Control", "Rustproof Aluminum Alloy"],
        image: "/assets/products/street-lights.png",
      },
      {
        name: "Felicity Split-Type Solar Street Lamp 200W",
        description:
          "Heavy-duty split solar street light with external high-wattage solar panel, maximizing solar absorption in low-sunlight regions while delivering commercial-grade highway illumination.",
        specs: ["200W High Lumen LED", "Adjustable Angle Mount", "Multi-Night Power Reserve", "IP65 Outdoor Rated"],
        image: "/assets/products/street-lights.png",
      },
    ],
  },
  {
    id: "inverters",
    name: "Inverters",
    models: [
      {
        name: "Felicity IVEM 5KW Hybrid Solar Inverter",
        description:
          "Advanced pure sine wave hybrid inverter with built-in 80A MPPT controller, flexible grid/generator dual inputs, and instant automatic switchover for zero power disruption.",
        specs: ["5000W Pure Sine Wave", "80A MPPT Charge Controller", "Grid & Generator Compatible", "WiFi Remote Monitoring"],
        image: "/assets/products/inverters.png",
      },
      {
        name: "Felicity IVEM 10KW 3-Phase Solar Inverter",
        description:
          "Commercial-grade 10KW 3-phase hybrid inverter designed to run heavy equipment, air conditioning units, and industrial machinery directly from solar and battery banks.",
        specs: ["10,000W 3-Phase Output", "Dual MPPT Channels", "Touchscreen Interface", "Surge Protection Built-in"],
        image: "/assets/products/inverters.png",
      },
    ],
  },
  {
    id: "charge-controllers",
    name: "Charge controllers",
    models: [
      {
        name: "Felicity MPPT 60A Solar Charge Controller",
        description:
          "Maximum Power Point Tracking (MPPT) solar charge controller delivering over 98% conversion efficiency, digital LCD telemetry display, and multi-stage battery protection.",
        specs: ["60A Continuous Current", "98.5% MPPT Efficiency", "Auto 12V/24V/48V Detection", "Overcharge & Short-Circuit Safeguard"],
        image: "/assets/products/charge-controllers.png",
      },
      {
        name: "Felicity MPPT 80A Heavy-Duty Controller",
        description:
          "High-capacity 80A MPPT controller supporting wide PV input voltage range, heat-sink cooling, and precision battery temperature compensation sensor.",
        specs: ["80A Maximum Charge", "Up to 150V PV Input", "Aluminum Heat Sink Chassis", "Programmable Battery Presets"],
        image: "/assets/products/charge-controllers.png",
      },
    ],
  },
  {
    id: "floor-light",
    name: "Floor light",
    models: [
      {
        name: "Felicity Heavy-Duty Solar Flood Light 200W",
        description:
          "IP67 waterproof outdoor solar flood light with heavy-duty aluminum casing, high-lumen optical lenses, wireless remote control, and dedicated high-output solar panel.",
        specs: ["200W High Output Flood", "IP67 Fully Waterproof", "Wireless IR Remote Control", "Reinforced Tempered Glass"],
        image: "/assets/products/floor-light.png",
      },
      {
        name: "Felicity Portable Solar Projector Lamp 150W",
        description:
          "Versatile solar projector lamp equipped with foldable kickstand, emergency power bank output, and adjustable color temperature for job sites and outdoor events.",
        specs: ["150W Portable Flood", "Built-in USB Powerbank", "3 Color Temperature Modes", "5-Year Battery Lifespan"],
        image: "/assets/products/floor-light.png",
      },
    ],
  },
];

// Felicitysolar SVG Brand Logo Component matching exact brand styling
function FelicitySolarLogo() {
  return (
    <div className="flex items-center gap-2.5 select-none">
      <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#EE7130] flex items-center justify-center text-white font-extrabold text-lg sm:text-xl shadow-sm border border-orange-400/30">
        <span>F</span>
      </div>
      <div className="flex flex-col">
        <div className="flex items-baseline">
          <span className="text-[#EE7130] font-black text-lg sm:text-xl tracking-tight leading-none">
            elicitysolar
          </span>
          <span className="text-[#EE7130] text-[10px] font-semibold ml-0.5 select-none">
            ®
          </span>
        </div>
        <span className="text-zinc-400 font-medium text-[9px] sm:text-[10px] tracking-wide leading-tight pt-0.5">
          Make life full of hope
        </span>
      </div>
    </div>
  );
}

export default function Products() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [activeModelIndex, setActiveModelIndex] = useState(0);

  const currentCategory = productCategories[activeCategoryIndex];
  const currentModel =
    currentCategory.models[activeModelIndex] || currentCategory.models[0];

  const handleCategorySelect = (index: number) => {
    setActiveCategoryIndex(index);
    setActiveModelIndex(0);
  };

  return (
    <section id="products" className="scroll-mt-20 py-16 sm:py-24 px-4 sm:px-6 lg:px-12 bg-white border-b border-zinc-100 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <span className="text-[#EE7130] font-medium italic text-base sm:text-lg block mb-2">
            Felicity Solar Products
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B1528] tracking-tight mb-3">
            What do we Offer to you?
          </h2>
          <p className="text-zinc-500 text-sm sm:text-base font-normal leading-relaxed">
            Solar Panels. Batteries. Inverters. All in One Place.
          </p>
        </div>

        {/* Category Navigation Pills */}
        <div className="flex justify-center mb-10 sm:mb-14">
          <div className="bg-[#F3F4F6] p-1.5 rounded-full inline-flex flex-wrap items-center justify-center gap-1 sm:gap-2 max-w-full sm:max-w-4xl border border-zinc-200/60 shadow-inner">
            {productCategories.map((category, idx) => {
              const isActive = activeCategoryIndex === idx;
              return (
                <button
                  key={category.id}
                  onClick={() => handleCategorySelect(idx)}
                  className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? "bg-[#091224] text-white shadow-md shadow-[#091224]/20 scale-100"
                      : "text-zinc-700 hover:text-zinc-950 hover:bg-zinc-200/60"
                  }`}
                >
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Product Showcase Card */}
        <div className="bg-white rounded-3xl border border-zinc-100 shadow-2xl shadow-zinc-200/50 p-6 sm:p-10 lg:p-14 relative overflow-hidden transition-all duration-500">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            {/* Left Column: Brand Logo & Product Image */}
            <div className="lg:col-span-6 flex flex-col justify-between items-start">
              
              {/* Felicity Solar Logo Header */}
              <div className="mb-6 sm:mb-8">
                <FelicitySolarLogo />
              </div>

              {/* Product Image Container */}
              <div className="relative w-full h-[260px] sm:h-[340px] lg:h-[380px] flex items-center justify-center p-4">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-50/30 to-zinc-100/60 rounded-2xl -z-10" />
                <Image
                  src={currentModel.image}
                  alt={currentModel.name}
                  fill
                  priority
                  className="object-contain drop-shadow-2xl transition-all duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Right Column: Product Title, Description, CTA Button & Sub-product Selectors */}
            <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
              
              {/* Product Title */}
              <div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B1528] tracking-tight leading-tight mb-4">
                  {currentModel.name}
                </h3>
                
                {/* Description */}
                <p className="text-zinc-600 text-sm sm:text-base leading-relaxed font-normal">
                  {currentModel.description}
                </p>
              </div>

              {/* Specifications Highlights if present */}
              {currentModel.specs && (
                <div className="grid grid-cols-2 gap-2.5 pt-1">
                  {currentModel.specs.map((spec, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs sm:text-sm font-medium text-zinc-700">
                      <div className="w-4 h-4 rounded-full bg-orange-100 text-[#EE7130] flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* View More Primary Button */}
              <div className="pt-2">
                <a
                  href="#quote"
                  className="inline-flex items-center gap-2.5 bg-[#EE7130] hover:bg-[#d9581c] text-white text-sm sm:text-base font-semibold px-6 py-3 rounded-xl transition-all duration-300 shadow-md shadow-[#EE7130]/30 hover:shadow-lg hover:shadow-[#EE7130]/40 hover:-translate-y-0.5 active:translate-y-0 group"
                >
                  <span>View more</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>

              {/* Interactive Sub-Products List (Models under the category) */}
              {currentCategory.models.length > 1 && (
                <div className="pt-6 border-t border-zinc-100 space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                    Other Models in {currentCategory.name}
                  </span>
                  <div className="flex flex-col gap-2">
                    {currentCategory.models.map((model, idx) => {
                      const isSelected = activeModelIndex === idx;
                      return (
                        <button
                          key={model.name}
                          onClick={() => setActiveModelIndex(idx)}
                          className={`text-left text-sm font-bold transition-all duration-200 py-1.5 px-3 rounded-lg flex items-center justify-between group ${
                            isSelected
                              ? "text-[#0B1528] bg-zinc-100/80 font-extrabold border-l-4 border-[#EE7130]"
                              : "text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50"
                          }`}
                        >
                          <span className="truncate">{model.name}</span>
                          <ArrowRight
                            className={`w-4 h-4 transition-transform shrink-0 ${
                              isSelected
                                ? "text-[#EE7130] translate-x-0 opacity-100"
                                : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                            }`}
                          />
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
