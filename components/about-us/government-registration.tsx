"use client";

import { useState } from "react";
import Image from "next/image";
import { 
  FileCheck, 
  ShieldCheck, 
  MapPin, 
  Building, 
  CheckCircle2, 
  Award,
  Maximize2,
  X
} from "lucide-react";

export default function GovernmentRegistration() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="registration" className="py-16 sm:py-24 bg-white text-zinc-900 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col items-start max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-black text-white text-xs font-semibold tracking-wider uppercase mb-4">
            <FileCheck className="w-3.5 h-3.5 text-white" />
            <span>Government Registration &amp; Legal Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-zinc-950 tracking-tight">
            Corporate Affairs Commission (CAC) Certification
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base mt-3 leading-relaxed">
            Obifoks Global &amp; Felicity Nig. Ltd. operates as a fully compliant, incorporated legal entity registered under the Companies and Allied Matters Act (CAMA 2020) of the Federal Republic of Nigeria.
          </p>
        </div>

        {/* 2-Column Grid: Image Showcase & Legal Entity Data */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16">
          
          {/* Left Column (5/12): CAC Certificate Image Card */}
          <div className="lg:col-span-5 flex flex-col space-y-3">
            <div 
              onClick={() => setIsModalOpen(true)}
              className="relative w-full h-[460px] bg-zinc-950 border border-zinc-300 p-2 shadow-lg group cursor-pointer overflow-hidden"
            >
              <div className="relative w-full h-full bg-zinc-100 flex items-center justify-center">
                <Image
                  src="/assets/about/cac.jpg"
                  alt="Obifoks Global & Felicity Nig. Ltd. CAC Certificate of Incorporation"
                  fill
                  priority
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 500px"
                />
              </div>

              {/* Hover Zoom Overlay Badge */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-bold text-xs uppercase tracking-wider">
                <Maximize2 className="w-4 h-4 text-[#2b661a]" />
                <span>Click to Expand Certificate</span>
              </div>

              {/* Top Certificate Stamp */}
              <div className="absolute top-4 left-4 bg-black/90 text-white text-[10px] font-mono font-bold px-2.5 py-1 border border-zinc-700 flex items-center gap-1.5 shadow-md">
                <span className="w-2 h-2 rounded-full bg-[#2b661a]"></span>
                <span>RC NO. 7711574</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-zinc-500 font-medium px-1">
              <span>Verified CAC Document</span>
              <button
                onClick={() => setIsModalOpen(true)}
                className="text-xs font-bold text-zinc-900 hover:text-[#2b661a] flex items-center gap-1 cursor-pointer"
              >
                <Maximize2 className="w-3.5 h-3.5 text-[#2b661a]" /> View High-Res
              </button>
            </div>
          </div>

          {/* Right Column (7/12): Main Legal Entity Specs Card */}
          <div className="lg:col-span-7 space-x-6 bg-white border border-zinc-200 p-6 sm:p-8 space-y-6 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-[0.03] pointer-events-none">
              <Building className="w-48 h-48 text-zinc-20" />
            </div>

            {/* Entity Name & Active Status */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-zinc-200">
              <div>
                <span className="text-xs uppercase tracking-wider font-bold text-zinc-400 block mb-1">
                  Legal Entity Name
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-zinc-950 tracking-tight">
                  OBIFOKS GLOBAL &amp; FELICITY NIG. LTD.
                </h3>
              </div>
              <span className="shrink-0 w-fit px-3 py-1.5 bg-[#2b661a]/50 text-[#2b661a] text-xs font-bold flex items-center gap-1.5 uppercase tracking-wider">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#2b661a]" />
                Active Entity
              </span>
            </div>

            {/* Legal Attributes Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-1">
                <span className="text-xs text-zinc-400 uppercase tracking-wider font-semibold">
                  Registration Status
                </span>
                <p className="text-sm sm:text-base font-bold text-zinc-950">
                  Incorporated Limited Liability Company (CAMA)
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-xs text-zinc-400 uppercase tracking-wider font-semibold">
                  Federal Jurisdiction
                </span>
                <p className="text-sm sm:text-base font-bold text-zinc-950">
                  Federal Republic of Nigeria
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-xs text-zinc-400 uppercase tracking-wider font-semibold">
                  Tax Compliance (FIRS)
                </span>
                <p className="text-sm sm:text-base font-bold text-zinc-950">
                  Fully Verified Taxpayer (TIN Compliant)
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-xs text-zinc-400 uppercase tracking-wider font-semibold">
                  Primary Industry
                </span>
                <p className="text-sm sm:text-base font-bold text-zinc-950">
                  Renewable Energy &amp; Electrical Engineering
                </p>
              </div>
            </div>

            {/* Registered Headquarters Address Block */}
            <div className="pt-6 border-t border-zinc-200 space-y-2">
              <span className="text-xs text-zinc-400 uppercase tracking-wider font-semibold block">
                Registered Corporate Headquarters
              </span>
              <div className="flex items-start gap-3.5 text-sm text-zinc-700 bg-zinc-50 p-4 border border-zinc-200">
                <MapPin className="w-5 h-5 text-[#2b661a] shrink-0 mt-0.5" />
                <div className="space-y-0.5 leading-snug">
                  <p className="font-bold text-zinc-950 text-base">No. 6 Wetheral Road</p>
                  <p className="text-zinc-700 text-xs sm:text-sm font-medium">Opposite Polaris Bank, Government Roundabout</p>
                  <p className="text-zinc-600 text-xs sm:text-sm">Owerri, Imo State, Nigeria</p>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Regulatory Standards & Safety Compliance Grid */}
        <div className="space-y-4 pt-4 border-t border-zinc-200">
          <h3 className="text-xs uppercase tracking-wider font-bold text-zinc-400">
            Regulatory Standards &amp; Quality Compliance
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Compliance Item 1 */}
            <div className="bg-zinc-50 border border-zinc-200 p-6 flex flex-col justify-between space-y-3">
              <div className="p-3 bg-black text-white w-fit">
                <Award className="w-5 h-5 text-[#2b661a]" />
              </div>
              <div>
                <h4 className="text-base font-extrabold text-zinc-950 mb-1">SON Equipment Certification</h4>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  All solar panels, lithium iron phosphate (LiFePO4) batteries, and hybrid inverters meet Standards Organisation of Nigeria import quality benchmarks.
                </p>
              </div>
            </div>

            {/* Compliance Item 2 */}
            <div className="bg-zinc-50 border border-zinc-200 p-6 flex flex-col justify-between space-y-3">
              <div className="p-3 bg-black text-white w-fit">
                <ShieldCheck className="w-5 h-5 text-[#2b661a]" />
              </div>
              <div>
                <h4 className="text-base font-extrabold text-zinc-950 mb-1">NEMSA Electrical Safety</h4>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  Electrical wiring, earthing protection, and surge suppression systems adhere strictly to Nigerian Electricity Management Services Agency safety codes.
                </p>
              </div>
            </div>

            {/* Compliance Item 3 */}
            <div className="bg-zinc-50 border border-zinc-200 p-6 flex flex-col justify-between space-y-3">
              <div className="p-3 bg-black text-white w-fit">
                <CheckCircle2 className="w-5 h-5 text-[#2b661a]" />
              </div>
              <div>
                <h4 className="text-base font-extrabold text-zinc-950 mb-1">Authorized Felicity Representative</h4>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  Official distributor and service representative for Felicity Solar products in Imo State, backing every installation with authentic manufacturer warranties.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* High-Res Certificate Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative max-w-4xl w-full max-h-[90vh] bg-white border border-zinc-200 p-4 sm:p-6 shadow-2xl flex flex-col">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-zinc-200">
              <div>
                <h3 className="text-base font-bold text-zinc-950">CAC Certificate of Incorporation</h3>
                <p className="text-xs text-zinc-500 font-mono">RC NO. 7711574 — OBIFOKSGLOBAL &amp; FELICITY NIG LIMITED</p>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 bg-zinc-100 hover:bg-zinc-200 text-zinc-700 hover:text-zinc-950 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="relative w-full flex-1 min-h-[500px] bg-zinc-100 border border-zinc-200 p-2 overflow-auto">
              <Image
                src="/assets/about/cac.jpg"
                alt="CAC Certificate of Incorporation"
                fill
                priority
                className="object-contain"
                sizes="(max-width: 1200px) 100vw, 1000px"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
