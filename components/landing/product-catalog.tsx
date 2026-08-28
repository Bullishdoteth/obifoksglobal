"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShoppingBag, Info, X, Check, MessageSquare } from "lucide-react";
import { useCart } from "@/context/cart-context";

interface CatalogProduct {
  id: string;
  name: string;
  price: string;
  image: string;
  category: string;
  description: string;
  specs: string[];
}

const TOP_SELLING_PRODUCTS: CatalogProduct[] = [
  {
    id: "thai-u2c1000",
    name: "Thai-U2C1000 Portable Lithium Battery",
    price: "₦331,950",
    image: "/assets/products/batteries.png",
    category: "Batteries",
    description: "Compact high-performance 1kWh portable lithium power station engineered for mobile backup, emergency power, outdoor activities, and solar charging.",
    specs: ["1000Wh Capacity", "LiFePO4 Chemistry", "Pure Sine Wave AC Output", "Fast Solar Charging Input"],
  },
  {
    id: "ivem-10kw-offgrid",
    name: "IVEM Series 10KW Off-Grid Solar Inverter",
    price: "₦1,290,160",
    image: "/assets/products/inverters.png",
    category: "Hybrid Inverters",
    description: "Heavy-duty 10,000W off-grid pure sine wave inverter with dual MPPT controllers for commercial buildings, heavy appliances, and off-grid facilities.",
    specs: ["10,000W Output Power", "Dual MPPT Channels", "48V DC Battery System", "LCD Digital Telemetry"],
  },
  {
    id: "felicity-tower-lithium",
    name: "Felicity Lithium Battery (Tower Type) Capacity: 5.12kWh per module (Stackable for higher capacity)",
    price: "₦1,487,230",
    image: "/assets/products/batteries.png",
    category: "Batteries",
    description: "Modular stackable 5.12kWh LiFePO4 battery module with integrated BMS, high discharge rate, and seamless parallel capability for scalable home & industrial power storage.",
    specs: ["5.12kWh Per Module", "Grade-A LiFePO4 Cells", "6000+ Cycle Life", "CAN/RS485 Smart BMS"],
  },
  {
    id: "felicity-mono-550w-catalog",
    name: "Felicity Solar 550W Monocrystalline Solar Panel",
    price: "₦151,570",
    image: "/assets/products/solar-panels.png",
    category: "Solar Panels",
    description: "High-yield 550W monocrystalline PV panel designed with half-cell and bifacial technology for maximum solar harvest in residential and commercial installations.",
    specs: ["550W Peak Power", "Monocrystalline Tech", "High Temp Efficiency", "25-Yr Performance Warranty"],
  },
  {
    id: "felicity-mono-450w-catalog",
    name: "Felicity Solar 450W Monocrystalline Solar Panel",
    price: "₦139,360",
    image: "/assets/products/solar-panels.png",
    category: "Solar Panels",
    description: "Reliable 450W monocrystalline solar module featuring low-light optimization and heavy-duty weatherproofing for homes and businesses across Nigeria.",
    specs: ["450W Output Rating", "Half-Cut Cell Tech", "Anti-PID Protection", "IP67 Weatherproof"],
  },
  {
    id: "felicity-street-120w",
    name: "Felicity FL-120W All-In-One Solar Street Light",
    price: "₦310,693",
    image: "/assets/products/street-lights.png",
    category: "Street Lights",
    description: "Autonomous commercial 120W solar LED streetlight with microwave radar motion detection, high-lumen Bridgelux LED chipsets, and long-life LiFePO4 storage battery.",
    specs: ["120W Ultra LED Output", "Microwave Motion Radar", "Auto Dusk to Dawn", "Rustproof Aluminum Body"],
  },
  {
    id: "felicity-street-60w",
    name: "Felicity FL-60W All-In-One Solar Street Light",
    price: "₦78,220",
    image: "/assets/products/street-lights.png",
    category: "Street Lights",
    description: "All-in-one solar street light engineered for estate roads, residential pathways, compound perimeters, and park illumination.",
    specs: ["60W Bright LED Output", "Integrated Solar & Battery", "Zero Electricity Cost", "IP65 Outdoor Waterproof"],
  },
  {
    id: "felicity-street-80w",
    name: "Felicity FL-80W All-In-One Solar Street Light",
    price: "₦144,500",
    image: "/assets/products/street-lights.png",
    category: "Street Lights",
    description: "High-efficacy 80W integrated solar LED luminaire combining automated dimming sensor technology and durable weatherproof aluminum construction.",
    specs: ["80W High Lumen LED", "Smart Power Management", "Fast Solar Charge", "Multi-Night Reserve"],
  },
];

export default function ProductCatalog() {
  const [selectedProduct, setSelectedProduct] = useState<CatalogProduct | null>(null);
  const [addedItemIds, setAddedItemIds] = useState<Record<string, boolean>>({});
  const { addToCart } = useCart();

  const handleAddToCart = (product: CatalogProduct) => {
    addToCart({
      id: product.id,
      name: product.name,
      description: product.description,
      image: product.image,
      specs: product.specs,
      category: product.category,
    });

    setAddedItemIds((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedItemIds((prev) => ({ ...prev, [product.id]: false }));
    }, 2000);
  };

  const getWhatsAppLink = (product: CatalogProduct) => {
    const text = encodeURIComponent(
      `Hello Obifoks Global! I want to inquire about purchasing:\n\n*Product:* ${product.name}\n*Price:* ${product.price}\n*Category:* ${product.category}\n\nPlease confirm availability and delivery options.`
    );
    return `https://wa.me/2348033000000?text=${text}`;
  };

  return (
    <section id="products" className="scroll-mt-20 min-h-screen flex flex-col justify-center pt-28 sm:pt-36 lg:pt-44 pb-24 sm:pb-32 lg:pb-40 bg-white border-b border-zinc-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full">
        
        {/* Section Header with Top Subtitle & See All Products Link */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-14">
          <div>
            <span className="text-[#EE7130] font-semibold text-sm sm:text-base block mb-1">
              Our Products
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B1528] tracking-tight mb-2">
              Top Selling Products
            </h2>
            <p className="text-zinc-500 text-xs sm:text-sm md:text-base font-normal max-w-2xl">
              Discover our best-performing solar solutions — trusted by thousands of homes and businesses across Nigeria.
            </p>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-[#EE7130] hover:text-[#d85e1f] font-bold text-sm sm:text-base transition-colors shrink-0 group"
          >
            <span>See all products</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 8 Products Grid: 2 cols on mobile, 3 cols on tablet, 4 cols on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-6 lg:gap-8">
          {TOP_SELLING_PRODUCTS.map((product) => {
            const isAdded = addedItemIds[product.id];

            return (
              <div
                key={product.id}
                className="group flex flex-col justify-between items-center text-center transition-all duration-300"
              >
                {/* Product Image Container Box */}
                <div className="w-full bg-[#F1F3F6] rounded-xl sm:rounded-2xl p-3 sm:p-6 h-48 sm:h-64 lg:h-72 flex items-center justify-center relative overflow-hidden border border-zinc-200/50 group-hover:border-orange-300/70 group-hover:shadow-lg group-hover:shadow-orange-500/5 transition-all duration-300">
                  <div className="relative w-full h-full max-h-40 sm:max-h-52 transition-transform duration-300 group-hover:scale-105">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain drop-shadow-md"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                  </div>
                </div>

                {/* Product Info below card image */}
                <div className="w-full mt-3 sm:mt-4 flex flex-col items-center flex-grow">
                  <h3 className="text-xs sm:text-sm font-bold text-zinc-800 text-center line-clamp-2 min-h-[2.2rem] sm:min-h-[2.5rem] px-1 mb-1 sm:mb-1.5 leading-snug group-hover:text-[#EE7130] transition-colors">
                    {product.name}
                  </h3>

                  <span className="text-sm sm:text-base lg:text-lg font-extrabold text-[#0B1528] mb-2.5 sm:mb-3">
                    {product.price}
                  </span>

                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="w-full max-w-[130px] sm:max-w-[160px] bg-[#EE7130] hover:bg-[#d85e1f] text-white text-[11px] sm:text-xs font-bold py-2 sm:py-2.5 px-3 sm:px-4 rounded-lg sm:rounded-xl shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
                  >
                    View Details
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Products Bottom Action Button */}
        <div className="mt-14 sm:mt-16 text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#EE7130] hover:bg-[#d85e1f] text-white rounded-xl text-sm font-bold shadow-lg shadow-orange-500/20 hover:shadow-orange-500/35 transition-all duration-300 group"
          >
            <span>View All Products</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-zinc-200">
            
            {/* Modal Header */}
            <div className="p-6 border-b border-zinc-100 flex items-start justify-between bg-zinc-50/80">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#EE7130] block mb-0.5">
                  {selectedProduct.category}
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#0B1528]">
                  {selectedProduct.name}
                </h2>
              </div>

              <button
                onClick={() => setSelectedProduct(null)}
                className="p-2 text-zinc-400 hover:text-zinc-900 rounded-full hover:bg-zinc-200/60 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center bg-[#F1F3F6] p-4 rounded-2xl border border-zinc-200/60">
                <div className="relative h-48 w-full">
                  <Image
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="space-y-3">
                  <div className="text-2xl font-black text-[#0B1528]">
                    {selectedProduct.price}
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                    {selectedProduct.description}
                  </p>
                </div>
              </div>

              {/* Specs */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
                  Key Specifications
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {selectedProduct.specs.map((spec, idx) => (
                    <div
                      key={idx}
                      className="bg-zinc-50 border border-zinc-200/70 rounded-xl p-2.5 text-xs font-medium text-zinc-700 flex items-center gap-2"
                    >
                      <Check className="w-3.5 h-3.5 text-[#EE7130] shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="p-6 border-t border-zinc-100 bg-zinc-50/80 flex items-center gap-3">
              <button
                onClick={() => handleAddToCart(selectedProduct)}
                className={`flex-1 py-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                  addedItemIds[selectedProduct.id]
                    ? "bg-emerald-600 text-white"
                    : "bg-[#0B1528] hover:bg-[#13223f] text-white"
                }`}
              >
                {addedItemIds[selectedProduct.id] ? (
                  <>
                    <Check className="w-4 h-4 stroke-[3]" /> Added to Cart
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" /> Add to Cart
                  </>
                )}
              </button>

              <a
                href={getWhatsAppLink(selectedProduct)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-md transition-all"
              >
                <MessageSquare className="w-4 h-4" /> Inquire via WhatsApp
              </a>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
