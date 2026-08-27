"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function ConsentBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie_consent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#0a0f18] text-white py-4 px-6 sm:px-10 lg:px-16 border-t border-zinc-800/60 shadow-2xl transition-all animate-in fade-in slide-in-from-bottom-5 duration-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 text-xs sm:text-sm text-zinc-300">
        <p className="leading-relaxed text-center md:text-left flex-1">
          We use cookies to improve your experience, analyse traffic, and serve personalised ads via Google AdSense. By clicking &quot;Accept&quot;, you consent to our use of cookies.{" "}
          <Link href="/privacy" className="text-[#ff5500] hover:underline underline-offset-2 font-medium">
            Learn more
          </Link>
          .
        </p>

        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={handleDecline}
            className="px-6 py-2 rounded-full border border-zinc-700 bg-transparent text-white text-xs sm:text-sm font-medium hover:bg-zinc-800/60 hover:border-zinc-500 transition-all cursor-pointer"
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="px-7 py-2 rounded-full bg-[#ff5500] text-white text-xs sm:text-sm font-medium hover:bg-[#e04b00] transition-colors shadow-sm cursor-pointer"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
