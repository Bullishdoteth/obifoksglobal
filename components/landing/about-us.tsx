"use client";

import { useState } from "react";
import Image from "next/image";
import { 
  UserCheck, 
  ShieldCheck, 
  FileCheck, 
  CheckCircle2, 
  Award,
  Maximize2,
  X 
} from "lucide-react";

export default function AboutUs() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="about-us" className="scroll-mt-20 py-20 sm:py-28 bg-white text-zinc-900 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-12 sm:space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-black text-white text-xs font-extrabold uppercase tracking-widest">
            <UserCheck className="w-3.5 h-3.5 text-white" />
            <span>ABOUT US</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-zinc-950 tracking-tight leading-tight">
            Engineered for reliability. Built on integrity.
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
            Obifoks Global &amp; Felicity Nig. Ltd. is Owerri&apos;s trusted renewable energy engineering provider. We supply genuine Tier-1 solar panels, long-life LiFePO4 batteries, and hybrid inverters backed by authentic manufacturer warranties.
          </p>
        </div>

        {/* 2-Column Core Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Founder & Vision (7/12) */}
          <div className="lg:col-span-7 bg-zinc-50 border border-zinc-200 p-6 sm:p-8 md:p-10 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-black text-white rounded-full flex items-center justify-center font-black text-xl shrink-0">
                  OG
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-black text-zinc-950 tracking-tight">
                    Obinna Nwachukwu
                  </h3>
                  <p className="text-[#EE7130] text-xs font-bold uppercase tracking-wider">
                    Founder &amp; Managing Director
                  </p>
                </div>
              </div>

              <blockquote className="text-sm sm:text-base font-medium text-zinc-800 leading-relaxed italic border-l-4 border-[#EE7130] pl-4">
                &ldquo;Nigerian homes and commercial enterprises deserve genuine, dependable electricity without deceptive capacity ratings or fragile equipment. At Obifoks Global, we back every installation with verified engineering standards and direct factory warranties.&rdquo;
              </blockquote>
            </div>

            {/* Key Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-zinc-200">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#EE7130] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-zinc-950 uppercase tracking-wider">100% Genuine Equipment</h4>
                  <p className="text-xs text-zinc-600 mt-0.5">Laboratory tested Tier-1 panels &amp; LiFePO4 lithium batteries.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#EE7130] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-zinc-950 uppercase tracking-wider">Direct Warranty Support</h4>
                  <p className="text-xs text-zinc-600 mt-0.5">Authorized Felicity Solar representative in Imo State.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: CAC Certificate & Verification Card (5/12) */}
          <div className="lg:col-span-5 bg-zinc-950 text-white p-6 sm:p-8 flex flex-col justify-between space-y-6 border border-zinc-800 shadow-xl">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
                <div className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-[#EE7130]" />
                  <span className="text-xs uppercase tracking-wider font-extrabold text-zinc-300">
                    CAC REGISTRATION
                  </span>
                </div>
                <span className="text-[10px] font-mono font-bold bg-[#EE7130]/20 text-[#EE7130] px-2.5 py-1 rounded-md border border-[#EE7130]/30">
                  RC NO. 7711574
                </span>
              </div>

              <div>
                <h4 className="text-base font-black text-white">
                  OBIFOKS GLOBAL &amp; FELICITY NIG. LTD.
                </h4>
                <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                  Incorporated legal entity registered under the Companies and Allied Matters Act (CAMA 2020) of Nigeria.
                </p>
              </div>

              {/* CAC Certificate Preview Image */}
              <div 
                onClick={() => setIsModalOpen(true)}
                className="relative w-full h-48 sm:h-56 bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 cursor-pointer group"
              >
                <Image
                  src="/assets/about/cac.jpg"
                  alt="CAC Certificate of Incorporation"
                  fill
                  sizes="(max-width: 1024px) 100vw, 400px"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5 text-white font-bold text-xs">
                  <Maximize2 className="w-4 h-4 text-[#EE7130]" />
                  <span>View High-Res Certificate</span>
                </div>
              </div>
            </div>

            {/* Regulatory Compliance Badges */}
            <div className="pt-4 border-t border-zinc-800 flex items-center justify-between text-[11px] text-zinc-400 font-medium">
              <span className="flex items-center gap-1">
                <Award className="w-3.5 h-3.5 text-[#EE7130]" /> SON Quality
              </span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#EE7130]" /> NEMSA Certified
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#EE7130]" /> FIRS Tax Compliant
              </span>
            </div>
          </div>

        </div>

      </div>

      {/* Certificate Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative max-w-3xl w-full max-h-[90vh] bg-white border border-zinc-200 p-4 sm:p-6 shadow-2xl flex flex-col">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-zinc-200">
              <div>
                <h3 className="text-sm font-bold text-zinc-950">CAC Certificate of Incorporation</h3>
                <p className="text-xs text-zinc-500 font-mono">RC NO. 7711574 — OBIFOKS GLOBAL &amp; FELICITY NIG. LTD.</p>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 bg-zinc-100 hover:bg-zinc-200 text-zinc-700 transition-colors cursor-pointer rounded-lg"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="relative w-full flex-1 min-h-[420px] bg-zinc-100 border border-zinc-200 p-2 overflow-auto">
              <Image
                src="/assets/about/cac.jpg"
                alt="CAC Certificate of Incorporation"
                fill
                priority
                className="object-contain"
                sizes="(max-width: 1200px) 100vw, 800px"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
