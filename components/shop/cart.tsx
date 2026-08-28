"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react";
import { useCart } from "@/context/cart-context";

// Custom WhatsApp Icon SVG Component
function WhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.461c-1.826 0-3.572-.489-5.1-1.415l-.366-.222-3.791.994.101-3.693-.24-.382a9.789 9.789 0 0 1-1.503-5.243c0-5.417 4.408-9.825 9.825-9.825 2.624 0 5.09 1.023 6.946 2.879s2.879 4.322 2.879 6.946c0 5.418-4.408 9.826-9.825 9.826m0-21.6c-6.52 0-11.825 5.305-11.825 11.825 0 2.088.543 4.128 1.574 5.922L0 24l6.196-1.625A11.77 11.77 0 0 0 12.051 24c6.52 0 11.825-5.305 11.825-11.825 0-6.52-5.305-11.825-11.825-11.825" />
    </svg>
  );
}

export default function CartSidebar() {
  const { items, isOpen, closeCart, removeFromCart, updateQuantity, clearCart, totalItems } =
    useCart();
  const sidebarRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeCart();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeCart]);

  // Lock body scroll when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  // Construct WhatsApp order message link
  const phoneNumbers = "2349064566983"; // Obifoks Global primary contact
  const messageHeader = `Hello Obifoks Global 👋,\n\nI would like to order the following item(s) from your website:\n\n`;
  const itemsText = items
    .map(
      (item, idx) =>
        `${idx + 1}. *${item.name}*\n   Quantity: ${item.quantity}${
          item.category ? ` (${item.category})` : ""
        }`
    )
    .join("\n\n");
  const messageFooter = `\n\nPlease confirm availability, pricing, and delivery options for my location. Thank you!`;

  const fullMessage = `${messageHeader}${itemsText}${messageFooter}`;
  const whatsappUrl = `https://wa.me/${phoneNumbers}?text=${encodeURIComponent(fullMessage)}`;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden select-none">
      {/* Backdrop overlay */}
      <div
        className="fixed inset-0 bg-black/65 backdrop-blur-xs transition-opacity duration-300 animate-in fade-in"
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Slide-over Panel Container */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div
          ref={sidebarRef}
          className="w-screen max-w-md bg-white text-zinc-900 shadow-2xl flex flex-col justify-between transition-transform duration-300 ease-in-out border-l border-zinc-200"
          role="dialog"
          aria-modal="true"
          aria-label="Shopping Cart"
        >
          {/* 1. Header Section */}
          <div className="p-5 sm:p-6 bg-white border-b border-zinc-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div>
                <h2 className="text-lg sm:text-xl font-extrabold text-[#0B1528] tracking-tight">
                  Cart
                </h2>
                <p className="text-xs text-zinc-500 font-medium">
                  {totalItems} {totalItems === 1 ? "item" : "items"} selected
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {items.length > 0 && (
                <button
                  onClick={clearCart}
                  className="text-xs text-zinc-400 hover:text-red-600 font-semibold transition-colors px-2 py-1 rounded-md hover:bg-zinc-100"
                  title="Clear all items"
                >
                  Clear all
                </button>
              )}
              <button
                onClick={closeCart}
                className="p-2 text-zinc-400 hover:text-zinc-900 hover:bg-zinc-100 rounded-full transition-colors focus:outline-none"
                aria-label="Close cart"
              >
                <X className="w-5 h-5 stroke-[2.5]" />
              </button>
            </div>
          </div>

          {/* 2. Cart Content / Items List */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4 bg-zinc-50/50">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 px-4 space-y-4">
                <div className="w-20 h-20 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-400 mb-2">
                  <ShoppingBag className="w-10 h-10 stroke-[1.5]" />
                </div>
                <h3 className="text-lg font-bold text-zinc-800">Your cart is empty</h3>
                <p className="text-xs sm:text-sm text-zinc-500 max-w-xs leading-relaxed">
                  Explore our premium solar panels, batteries, inverters, and lighting products to request a quote.
                </p>
                <button
                  onClick={() => {
                    closeCart();
                    const elem = document.getElementById("products");
                    if (elem) {
                      elem.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="mt-4 inline-flex items-center gap-2 bg-[#0B1528] hover:bg-zinc-800 text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-xl transition-all shadow-sm"
                >
                  <span>Explore Products</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl p-4 border border-zinc-200/80 shadow-sm flex items-start gap-4 transition-all hover:border-zinc-300"
                >
                  {/* Thumbnail */}
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-zinc-100 p-2 shrink-0 border border-zinc-100 flex items-center justify-center">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-contain p-1"
                    />
                  </div>

                  {/* Details & Actions */}
                  <div className="flex-1 min-w-0 space-y-1.5">
                    {item.category && (
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#EE7130]">
                        {item.category}
                      </span>
                    )}
                    <h4 className="text-xs sm:text-sm font-bold text-zinc-900 leading-snug line-clamp-2">
                      {item.name}
                    </h4>

                    {item.specs && item.specs.length > 0 && (
                      <p className="text-[11px] text-zinc-500 font-medium truncate">
                        {item.specs.join(" • ")}
                      </p>
                    )}

                    {/* Quantity Controls */}
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center border border-zinc-200 rounded-lg bg-zinc-50">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="p-1.5 text-zinc-600 hover:text-zinc-950 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5 stroke-[2.5]" />
                        </button>
                        <span className="px-3 text-xs font-bold text-zinc-900">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="p-1.5 text-zinc-600 hover:text-zinc-950 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
                        </button>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-1.5 text-zinc-400 hover:text-red-600 transition-colors rounded-md"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* 3. Footer / Bottom Section (Fixed white bg footer) */}
          <div className="p-5 sm:p-6 bg-white border-t border-zinc-200 space-y-4 shadow-lg">
            {/* Info Summary */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs sm:text-sm">
                <span className="text-zinc-500 font-medium">Selected Items</span>
                <span className="font-bold text-zinc-900">{totalItems} units</span>
              </div>
              <div className="flex items-center justify-between text-xs sm:text-sm">
                <span className="text-zinc-500 font-medium">Ordering Process</span>
                <span className="font-semibold text-emerald-600 text-xs">Direct WhatsApp Inquiry</span>
              </div>
            </div>

            {/* Purchase on WhatsApp Button */}
            {items.length > 0 ? (
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20ba5a] active:bg-[#1da851] text-white font-extrabold text-sm sm:text-base py-3.5 px-6 rounded-2xl transition-all duration-200 shadow-md shadow-[#25D366]/30 hover:shadow-lg hover:shadow-[#25D366]/40 hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                <WhatsAppIcon className="w-5 h-5 fill-current shrink-0" />
                <span>Purchase on WhatsApp</span>
              </a>
            ) : (
              <button
                disabled
                className="w-full inline-flex items-center justify-center gap-3 bg-zinc-200 text-zinc-400 font-bold text-sm py-3.5 px-6 rounded-2xl cursor-not-allowed text-center"
              >
                <WhatsAppIcon className="w-5 h-5 fill-current shrink-0" />
                <span>Purchase on WhatsApp</span>
              </button>
            )}

            <p className="text-[11px] text-zinc-400 text-center font-normal leading-tight">
              Clicking will open WhatsApp with your item list pre-filled to message our sales team instantly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
