"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/landing/header";
import PageHeader from "@/components/page-header";
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
  X, 
  MessageSquare,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

// Felicitysolar SVG Brand Logo Component matching exact brand styling
function FelicitySolarLogo() {
  return (
    <div className="flex items-center gap-2 select-none">
      <div className="w-7 h-7 rounded-full bg-zinc-950 flex items-center justify-center text-white font-extrabold text-sm shadow-sm border border-zinc-800">
        <span>F</span>
      </div>
      <div className="flex flex-col">
        <div className="flex items-baseline">
          <span className="text-zinc-950 font-black text-sm tracking-tight leading-none">
            elicitysolar
          </span>
          <span className="text-zinc-950 text-[9px] font-semibold ml-0.5 select-none">
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

export default function ProductsClientView() {
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
    return `https://wa.me/2349064566983?text=${text}`;
  };

  return (
    <main className="min-h-screen bg-white text-zinc-900 flex flex-col selection:bg-zinc-900 selection:text-white">
      <Header />

      <PageHeader
        title="Products & Equipment"
        subtitle="Official Felicity Solar equipment catalog, solar panels, LiFePO4 batteries, and inverters."
      />

      {/* Main Catalog Body */}
      <section className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full flex-grow">
        
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
              className="w-full pl-10 pr-4 py-2.5 bg-zinc-50 border border-zinc-200 rounded-xl text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900/30 focus:border-zinc-900 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 text-xs font-semibold cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>

          {/* Results Count Indicator */}
          <div className="flex items-center justify-between md:justify-end gap-4 text-xs font-semibold text-zinc-500">
            <span>
              Showing <strong className="text-zinc-950 font-bold">{filteredProducts.length}</strong> of {PRODUCTS_DATA.length} Products
            </span>
          </div>
        </div>

        {/* Category Pill Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 sm:mb-14 no-scrollbar border-b border-zinc-100">
          {PRODUCT_CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 text-xs font-bold whitespace-nowrap transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? "bg-zinc-950 text-white shadow-md"
                    : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200/80 hover:text-zinc-900"
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Product Cards Grid: 2 cols on mobile, 3 cols on tablet, 4 cols on desktop */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-zinc-50 border border-dashed border-zinc-200 max-w-lg mx-auto my-8 p-8">
            <SlidersHorizontal className="w-10 h-10 text-zinc-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-zinc-950 mb-1">No products found</h3>
            <p className="text-zinc-500 text-xs mb-6">
              We couldn&apos;t find any items matching &quot;{searchQuery}&quot;. Try adjusting your search query or switching categories.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              className="px-5 py-2.5 bg-[#378222] hover:bg-[#2b661a] text-white text-xs font-bold transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 sm:gap-x-6 lg:gap-x-8 gap-y-10 sm:gap-y-14 lg:gap-y-16 w-full">
            {filteredProducts.map((product) => {
              const isAdded = addedItemIds[product.id];

              return (
                <div
                  key={product.id}
                  className="group flex flex-col justify-between items-start text-left transition-all duration-300 w-full"
                >
                  {/* Product Image Container Box */}
                  <div className="w-full h-48 sm:h-56 lg:h-64 relative overflow-hidden bg-[#EBEBEB] border border-zinc-100/80 p-3 flex items-center justify-center transition-all duration-300 group-hover:border-zinc-200">
                    
                    {/* Stock Badge */}
                    <span className="absolute top-2.5 right-2.5 bg-white/90 backdrop-blur-sm text-zinc-800 text-[10px] font-bold px-2 py-0.5 border border-zinc-200 flex items-center gap-1 z-10">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      In Stock
                    </span>

                    {/* Product Image */}
                    <div className="relative w-full h-full transition-transform duration-300 group-hover:scale-105">
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
                  <div className="w-full mt-4 sm:mt-5 flex flex-col items-start flex-grow text-left space-y-2.5 sm:space-y-3">
                    <div className="flex items-center justify-between w-full text-[11px] font-bold">
                      <span className="text-zinc-500 uppercase tracking-wider">
                        {product.categoryName}
                      </span>
                      <span className="font-mono text-zinc-400 text-[10px]">
                        {product.modelCode}
                      </span>
                    </div>

                    <h3 className="text-xs sm:text-sm font-bold text-zinc-800 line-clamp-2 min-h-[2.2rem] sm:min-h-[2.5rem] leading-snug group-hover:text-[#2b661a] transition-colors w-full">
                      {product.name}
                    </h3>

                    {/* Key Specs snippet */}
                    <div className="flex flex-wrap gap-1.5 w-full">
                      {product.keySpecs.slice(0, 2).map((spec, i) => (
                        <span
                          key={i}
                          className="text-[10px] font-medium text-zinc-600 bg-zinc-100 px-2 py-0.5 border border-zinc-200"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => setActiveModalProduct(product)}
                      className="w-full bg-black hover:bg-[#2b661a] text-white text-[11px] sm:text-xs font-bold py-2.5 sm:py-3 px-3 sm:px-4 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer text-center"
                    >
                      View Technical Specs
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Bottom Callout banner with left, right, and bottom spacing */}
        <div className="mt-16 sm:mt-24 mb-6 sm:mb-10 max-w-5xl mx-auto">
          <div className="p-8 sm:p-10 md:p-12 bg-zinc-950 text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 border border-zinc-800">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-[#EE7130] font-extrabold text-[11px] uppercase tracking-widest block">
                Free Energy Sizing &amp; Assessment
              </span>
              <h4 className="text-white font-black text-xl sm:text-2xl tracking-tight">
                Need help sizing your power system?
              </h4>
              <p className="text-zinc-400 text-xs sm:text-sm max-w-xl leading-relaxed">
                Speak with an Obifoks solar engineer for custom load calculations and battery backup recommendations.
              </p>
            </div>
            <Link
              href="/contact"
              className="w-full md:w-auto inline-flex items-center justify-center gap-2.5 hover:bg-[#2b661a] bg-[#378222] text-white font-bold text-xs sm:text-sm px-7 py-4 transition-all duration-200 shrink-0 shadow-md cursor-pointer"
            >
              <span>Consult an Engineer</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Product Technical Specs Modal (2-Column Full Width - Sharp Corners) */}
      {activeModalProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-5xl lg:max-w-6xl max-h-[90vh] bg-white shadow-2xl overflow-hidden flex flex-col border border-zinc-200">
            
            {/* Modal Header */}
            <div className="p-5 sm:p-6 border-b border-zinc-100 flex items-center justify-between bg-zinc-50/50">
              <div className="flex items-center gap-3">
                <FelicitySolarLogo />
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 hidden sm:inline-block border-l border-zinc-200 pl-3">
                  {activeModalProduct.categoryName} Datasheet
                </span>
              </div>

              <button
                onClick={() => setActiveModalProduct(null)}
                className="w-9 h-9 bg-zinc-100 hover:bg-zinc-200 text-zinc-500 hover:text-zinc-900 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Body: 2-Column Grid */}
            <div className="p-6 sm:p-8 overflow-y-auto flex-1">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Column (5/12): Product Image Box & Quick Status Badges */}
                <div className="lg:col-span-5 flex flex-col space-y-4">
                  
                  {/* High-res Image Showcase Box matching #EBEBEB catalog style */}
                  <div className="relative w-full h-72 sm:h-80 lg:h-[360px] bg-[#EBEBEB] border border-zinc-200/80 p-6 flex items-center justify-center overflow-hidden shadow-inner">
                    <Image
                      src={activeModalProduct.image}
                      alt={activeModalProduct.name}
                      fill
                      priority
                      className="object-contain p-4 drop-shadow-md"
                      sizes="(max-width: 1024px) 100vw, 500px"
                    />
                  </div>

                  {/* Stock & Warranty Badges Box */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 bg-zinc-50 border border-zinc-200/80 text-center">
                      <span className="text-[10px] text-zinc-400 uppercase tracking-wider block font-bold mb-0.5">Availability</span>
                      <span className="text-xs font-bold text-[#EE7130] flex items-center justify-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#EE7130]" /> Stock Ready
                      </span>
                    </div>

                    <div className="p-3 bg-zinc-50 border border-zinc-200/80 text-center">
                      <span className="text-[10px] text-zinc-400 uppercase tracking-wider block font-bold mb-0.5">Warranty</span>
                      <span className="text-xs font-bold text-zinc-950 flex items-center justify-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#EE7130]" /> {activeModalProduct.warranty}
                      </span>
                    </div>
                  </div>

                  {/* Model Code Pill */}
                  <div className="p-3 bg-zinc-950 text-white text-center text-xs font-mono font-bold tracking-wider">
                    MODEL: {activeModalProduct.modelCode}
                  </div>

                </div>

                {/* Right Column (7/12): Title, Overview, Technical Specs & Applications */}
                <div className="lg:col-span-7 flex flex-col space-y-6">
                  
                  {/* Category & Title */}
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest block">
                      {activeModalProduct.categoryName}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-black text-zinc-950 tracking-tight leading-tight">
                      {activeModalProduct.name}
                    </h2>
                    <p className="text-zinc-600 text-sm sm:text-base leading-relaxed pt-1">
                      {activeModalProduct.description}
                    </p>
                  </div>

                  {/* Detailed Technical Specifications Table */}
                  <div className="space-y-3">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-2">
                      <SlidersHorizontal className="w-3.5 h-3.5 text-zinc-700" /> Technical Specifications
                    </h3>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {activeModalProduct.detailedSpecs.map((spec, i) => (
                        <div key={i} className="bg-zinc-50 border border-zinc-200/80 p-3">
                          <span className="text-[11px] text-zinc-400 block mb-0.5 font-medium">{spec.label}</span>
                          <span className="text-xs sm:text-sm font-bold text-zinc-950">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Features & Applications */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                    
                    {/* Key Engineering Features */}
                    <div className="space-y-2.5">
                      <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Engineering Features</h4>
                      <div className="space-y-2">
                        {activeModalProduct.features.map((feat, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-zinc-700 bg-zinc-50 p-2.5 border border-zinc-200/60">
                            <Check className="w-3.5 h-3.5 text-[#EE7130] shrink-0" />
                            <span className="font-medium">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Recommended Applications */}
                    <div className="space-y-2.5">
                      <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Recommended Uses</h4>
                      <div className="space-y-2">
                        {activeModalProduct.applications.map((app, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-zinc-700 bg-zinc-50 p-2.5 border border-zinc-200/60">
                            <Zap className="w-3.5 h-3.5 text-[#EE7130] shrink-0" />
                            <span className="font-medium">{app}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>

                </div>

              </div>
            </div>

            {/* Modal Footer Actions */}
            <div className="p-5 sm:p-6 border-t border-zinc-100 bg-zinc-50/80 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-zinc-500 text-center sm:text-left font-medium">
                Showroom Address: No. 6 Wetheral Road, Opposite Polaris Bank, Owerri.
              </div>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={() => {
                    handleAddToCart(activeModalProduct);
                    setActiveModalProduct(null);
                  }}
                  className="flex-1 sm:flex-none px-6 py-3 bg-[#378222] hover:bg-[#2b661a] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4" /> Add to Cart
                </button>
                <a
                  href={getWhatsAppLink(activeModalProduct)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-md transition-all"
                >
                  <MessageSquare className="w-4 h-4" /> Inquire via WhatsApp
                </a>
              </div>
            </div>

          </div>
        </div>
      )}
      <Footer />
    </main>
  );
}
