"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/landing/header";
import Footer from "@/components/landing/footer";
import { useCart } from "@/context/cart-context";
import { 
  PRODUCT_CATEGORIES, 
  PRODUCTS_DATA, 
  ProductItem 
} from "@/lib/products-data";
import { 
  Search, 
  ShoppingBag, 
  Check, 
  SlidersHorizontal, 
  Zap, 
  ShieldCheck, 
  Truck, 
  Clock, 
  X, 
  PhoneCall, 
  MessageSquare,
  ArrowRight,
  Info,
  ChevronRight,
  CheckCircle2
} from "lucide-react";

// Felicitysolar SVG Brand Logo Component matching exact brand styling
function FelicitySolarLogo() {
  return (
    <div className="flex items-center gap-2 select-none">
      <div className="w-7 h-7 rounded-full bg-[#EE7130] flex items-center justify-center text-white font-extrabold text-sm shadow-sm border border-orange-400/30">
        <span>F</span>
      </div>
      <div className="flex flex-col">
        <div className="flex items-baseline">
          <span className="text-[#EE7130] font-black text-sm tracking-tight leading-none">
            elicitysolar
          </span>
          <span className="text-[#EE7130] text-[9px] font-semibold ml-0.5 select-none">
            ®
          </span>
        </div>
        <span className="text-zinc-400 font-medium text-[8px] tracking-wide leading-tight">
          Make life full of hope
        </span>
      </div>
    </div>
  );
}

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeModalProduct, setActiveModalProduct] = useState<ProductItem | null>(null);
  const [addedItemIds, setAddedItemIds] = useState<Record<string, boolean>>({});
  
  const { addToCart } = useCart();

  // Filter products by category and search query
  const filteredProducts = useMemo(() => {
    return PRODUCTS_DATA.filter((product) => {
      const matchesCategory =
        selectedCategory === "all" || product.categoryId === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.modelCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.keySpecs.some((spec) =>
          spec.toLowerCase().includes(searchQuery.toLowerCase())
        );

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleAddToCart = (product: ProductItem) => {
    addToCart({
      id: product.id,
      name: product.name,
      description: product.description,
      image: product.image,
      specs: product.keySpecs,
      category: product.categoryName,
    });

    setAddedItemIds((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedItemIds((prev) => ({ ...prev, [product.id]: false }));
    }, 2000);
  };

  const getWhatsAppLink = (product: ProductItem) => {
    const text = encodeURIComponent(
      `Hello Obifoks Global! I am interested in inquiring about the following product:\n\n*Product:* ${product.name}\n*Model:* ${product.modelCode}\n*Category:* ${product.categoryName}\n\nPlease provide current pricing, stock availability in Owerri, and delivery details.`
    );
    return `https://wa.me/2348033000000?text=${text}`;
  };

  return (
    <main className="min-h-screen bg-white text-zinc-900 flex flex-col selection:bg-[#EE7130] selection:text-white">
      <Header />

      {/* Page Hero Header Section (White Theme with soft radial accent) */}
      <section className="relative pt-10 pb-12 sm:pt-14 sm:pb-16 bg-gradient-to-b from-orange-50/40 via-white to-white border-b border-zinc-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-semibold text-zinc-500 mb-6">
            <Link href="/" className="hover:text-[#EE7130] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
            <span className="text-[#EE7130] font-bold">Products & Equipment</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-100/80 border border-orange-200 rounded-full text-xs font-bold text-[#EE7130] uppercase tracking-wider mb-4">
                <FelicitySolarLogo />
                <span className="hidden sm:inline text-zinc-400">|</span>
                <span className="hidden sm:inline">Official Authorized Distributor</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B1528] tracking-tight mb-3 leading-tight">
                Felicity Solar Equipment Catalog
              </h1>
              <p className="text-zinc-600 text-sm sm:text-base md:text-lg leading-relaxed">
                Explore our high-efficiency monocrystalline solar panels, LiFePO4 lithium storage batteries, hybrid pure sine wave inverters, MPPT controllers, and commercial solar street lighting.
              </p>
            </div>

            {/* Trust Badges Pill Bar */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:w-96 bg-zinc-50 p-4 rounded-2xl border border-zinc-200/80 shadow-sm">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-orange-50 text-[#EE7130]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#0B1528]">100% Genuine</div>
                  <div className="text-[11px] text-zinc-500">Factory Warranty</div>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-orange-50 text-[#EE7130]">
                  <Truck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#0B1528]">Fast Delivery</div>
                  <div className="text-[11px] text-zinc-500">Imo & Nationwide</div>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-orange-50 text-[#EE7130]">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#0B1528]">6000+ Cycles</div>
                  <div className="text-[11px] text-zinc-500">LiFePO4 Storage</div>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-orange-50 text-[#EE7130]">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#0B1528]">Owerri Showroom</div>
                  <div className="text-[11px] text-zinc-500">Physical Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Catalog Body */}
      <section className="py-10 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full flex-grow">
        
        {/* Search & Filter Control Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          
          {/* Search Box */}
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input
              type="text"
              placeholder="Search panels, batteries, inverters, 5KW..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-zinc-50 border border-zinc-200 rounded-xl text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#EE7130]/30 focus:border-[#EE7130] transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 text-xs"
              >
                Clear
              </button>
            )}
          </div>

          {/* Results Count & Current Filter Indicator */}
          <div className="flex items-center justify-between md:justify-end gap-4 text-xs font-semibold text-zinc-500">
            <span>
              Showing <strong className="text-[#0B1528] font-bold">{filteredProducts.length}</strong> of {PRODUCTS_DATA.length} Products
            </span>
          </div>
        </div>

        {/* Category Pill Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar border-b border-zinc-100">
          {PRODUCT_CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 flex items-center gap-2 ${
                  isActive
                    ? "bg-[#0B1528] text-white shadow-md shadow-zinc-900/10"
                    : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200/80 hover:text-zinc-900"
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-zinc-50 rounded-2xl border border-dashed border-zinc-200 max-w-lg mx-auto my-8 p-8">
            <SlidersHorizontal className="w-10 h-10 text-zinc-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-[#0B1528] mb-1">No products found</h3>
            <p className="text-zinc-500 text-xs mb-6">
              We couldn&apos;t find any items matching &quot;{searchQuery}&quot;. Try adjusting your search query or switching categories.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              className="px-4 py-2 bg-[#EE7130] text-white rounded-xl text-xs font-bold hover:bg-[#d85e1f] transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map((product) => {
              const isAdded = addedItemIds[product.id];

              return (
                <div
                  key={product.id}
                  className="group bg-white rounded-2xl border border-zinc-200/90 hover:border-[#EE7130]/50 hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300 flex flex-col justify-between overflow-hidden relative"
                >
                  {/* Top Card Image & Badges Container */}
                  <div className="relative bg-zinc-50 p-6 flex items-center justify-center h-64 border-b border-zinc-100 group-hover:bg-orange-50/20 transition-colors">
                    
                    {/* Badge */}
                    {product.badge && (
                      <span className="absolute top-3 left-3 bg-[#0B1528] text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm z-10">
                        {product.badge}
                      </span>
                    )}

                    {/* Stock Status Badge */}
                    <span className="absolute top-3 right-3 bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 z-10">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      In Stock
                    </span>

                    {/* Product Image */}
                    <div className="relative w-full h-full max-h-48 transition-transform duration-300 group-hover:scale-105">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain drop-shadow-md"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                  </div>

                  {/* Card Main Info */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Logo and Category */}
                      <div className="flex items-center justify-between mb-2">
                        <FelicitySolarLogo />
                        <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider">
                          {product.categoryName}
                        </span>
                      </div>

                      {/* Product Name */}
                      <h3 className="text-lg font-bold text-[#0B1528] group-hover:text-[#EE7130] transition-colors mb-1 leading-snug">
                        {product.name}
                      </h3>

                      {/* Model Code */}
                      <div className="text-[11px] font-mono text-zinc-500 mb-3">
                        Model: {product.modelCode}
                      </div>

                      {/* Description Snippet */}
                      <p className="text-zinc-600 text-xs line-clamp-2 leading-relaxed mb-4">
                        {product.description}
                      </p>

                      {/* Key Specs Tags */}
                      <div className="grid grid-cols-2 gap-1.5 mb-6">
                        {product.keySpecs.map((spec, i) => (
                          <div
                            key={i}
                            className="bg-zinc-50 border border-zinc-100 text-zinc-700 rounded-lg px-2.5 py-1 text-[11px] font-medium flex items-center gap-1.5"
                          >
                            <span className="w-1 h-1 rounded-full bg-[#EE7130]"></span>
                            <span className="truncate">{spec}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Card Actions */}
                    <div className="pt-4 border-t border-zinc-100 space-y-2">
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={() => handleAddToCart(product)}
                          className={`w-full py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all duration-200 ${
                            isAdded
                              ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20"
                              : "bg-[#EE7130] hover:bg-[#d85e1f] text-white shadow-md shadow-orange-500/20"
                          }`}
                        >
                          {isAdded ? (
                            <>
                              <Check className="w-4 h-4 stroke-[3]" /> Added
                            </>
                          ) : (
                            <>
                              <ShoppingBag className="w-4 h-4" /> Add to Cart
                            </>
                          )}
                        </button>

                        <button
                          onClick={() => setActiveModalProduct(product)}
                          className="w-full py-2.5 bg-zinc-100 hover:bg-zinc-200/80 text-zinc-900 rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-1"
                        >
                          <Info className="w-3.5 h-3.5 text-zinc-600" /> Full Specs
                        </button>
                      </div>

                      {/* Direct WhatsApp Quote Button */}
                      <a
                        href={getWhatsAppLink(product)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/80 text-emerald-800 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                      >
                        <MessageSquare className="w-3.5 h-3.5 text-emerald-600 fill-emerald-600/20" />
                        Inquire Price via WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* Product Quick View Specs Modal */}
      {activeModalProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-zinc-200">
            
            {/* Modal Header */}
            <div className="p-6 border-b border-zinc-100 flex items-start justify-between bg-zinc-50/80">
              <div className="flex items-center gap-3">
                <FelicitySolarLogo />
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#EE7130] block">
                    {activeModalProduct.categoryName} Technical Datasheet
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#0B1528]">
                    {activeModalProduct.name}
                  </h2>
                </div>
              </div>

              <button
                onClick={() => setActiveModalProduct(null)}
                className="p-2 text-zinc-400 hover:text-zinc-900 rounded-full hover:bg-zinc-200/60 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Body Scrollable */}
            <div className="p-6 overflow-y-auto space-y-6 flex-1 text-sm text-zinc-700">
              
              {/* Top Overview Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center bg-orange-50/30 p-5 rounded-2xl border border-orange-100">
                <div className="relative h-44 w-full flex items-center justify-center">
                  <Image
                    src={activeModalProduct.image}
                    alt={activeModalProduct.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="md:col-span-2 space-y-3">
                  <div className="inline-block px-2.5 py-1 bg-[#0B1528] text-white text-[11px] font-bold rounded-lg">
                    Model: {activeModalProduct.modelCode}
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                    {activeModalProduct.description}
                  </p>
                  <div className="flex items-center gap-4 text-xs font-semibold text-zinc-600 pt-1">
                    <span className="flex items-center gap-1 text-emerald-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Stock Ready in Owerri
                    </span>
                    <span className="flex items-center gap-1 text-[#0B1528]">
                      <ShieldCheck className="w-4 h-4 text-[#EE7130]" /> {activeModalProduct.warranty}
                    </span>
                  </div>
                </div>
              </div>

              {/* Detailed Technical Specifications Table */}
              <div>
                <h3 className="text-base font-bold text-[#0B1528] mb-3 flex items-center gap-2">
                  <SlidersHorizontal className="w-4 h-4 text-[#EE7130]" /> Technical Specifications
                </h3>
                <div className="bg-zinc-50 border border-zinc-200 rounded-2xl overflow-hidden divide-y divide-zinc-200/80">
                  {activeModalProduct.detailedSpecs.map((spec, i) => (
                    <div key={i} className="grid grid-cols-2 p-3 text-xs sm:text-sm hover:bg-zinc-100/50 transition-colors">
                      <span className="font-semibold text-zinc-600">{spec.label}</span>
                      <span className="font-bold text-[#0B1528]">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Features & Applications */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-bold text-[#0B1528] mb-2">Key Engineering Features</h4>
                  <ul className="space-y-2">
                    {activeModalProduct.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-zinc-600">
                        <Check className="w-3.5 h-3.5 text-[#EE7130] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0B1528] mb-2">Recommended Applications</h4>
                  <ul className="space-y-2">
                    {activeModalProduct.applications.map((app, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-zinc-600">
                        <Zap className="w-3.5 h-3.5 text-orange-500 shrink-0 mt-0.5" />
                        <span>{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Modal Footer Actions */}
            <div className="p-6 border-t border-zinc-100 bg-zinc-50 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-zinc-500 text-center sm:text-left">
                Need bulk contractor pricing? Visit our showroom at #21 Etekuru Road, Owerri.
              </div>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={() => {
                    handleAddToCart(activeModalProduct);
                    setActiveModalProduct(null);
                  }}
                  className="flex-1 sm:flex-none px-5 py-2.5 bg-[#EE7130] hover:bg-[#d85e1f] text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-md shadow-orange-500/20 transition-all"
                >
                  <ShoppingBag className="w-4 h-4" /> Add to Cart
                </button>
                <a
                  href={getWhatsAppLink(activeModalProduct)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-md shadow-emerald-600/20 transition-all"
                >
                  <MessageSquare className="w-4 h-4" /> Inquire via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Engineering Support & Wholesale Banner Section (White Theme) */}
      <section className="bg-zinc-50 py-12 sm:py-16 border-t border-zinc-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="bg-[#0B1528] rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="relative z-10 max-w-2xl">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs font-semibold text-[#EE7130] uppercase tracking-wider mb-3">
                <Zap className="w-3.5 h-3.5" /> Professional System Sizing
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-3">
                Need Help Sizing Your Solar System?
              </h2>
              <p className="text-zinc-300 text-xs sm:text-sm md:text-base leading-relaxed">
                Not sure which battery capacity, panel output, or inverter wattage your home or facility requires? Our certified engineers provide free load auditing and custom solar system design.
              </p>
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4">
              <a
                href="https://wa.me/2348033000000?text=Hello%20Obifoks%20Global!%20I%20need%20assistance%20sizing%20my%20solar%20system."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 bg-[#EE7130] hover:bg-[#d85e1f] text-white rounded-xl text-sm font-bold flex items-center justify-center gap-2 shadow-lg shadow-orange-500/25 transition-all"
              >
                <MessageSquare className="w-4.5 h-4.5" /> Request Free Load Sizing
              </a>
              <Link
                href="/contact"
                className="w-full sm:w-auto px-6 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all"
              >
                Visit Store in Owerri
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
