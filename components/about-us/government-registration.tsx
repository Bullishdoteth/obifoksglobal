import { FileCheck, ShieldCheck, MapPin, Building, CheckCircle2, Award } from "lucide-react";

export default function GovernmentRegistration() {
  return (
    <section id="registration" className="py-16 sm:py-24 bg-zinc-50/70 text-zinc-900 border-b border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col items-start max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-orange-100/80 border border-orange-200 text-[#EE7130] text-xs font-bold uppercase tracking-wider mb-3">
            <FileCheck className="w-3.5 h-3.5" />
            <span>Government Registration &amp; Legal Credentials</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B1528] tracking-tight">
            Corporate Affairs Commission (CAC) Details
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base mt-3 leading-relaxed">
            Obifoks Global &amp; Felicity Nig. Ltd. operates as a fully compliant, incorporated legal entity under the laws of the Federal Republic of Nigeria.
          </p>
        </div>

        {/* Corporate Credentials Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Legal Entity Spec Card */}
          <div className="lg:col-span-7 bg-white border border-zinc-200/90 shadow-sm rounded-2xl p-6 sm:p-8 space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-[0.03] pointer-events-none">
              <Building className="w-48 h-48 text-[#0B1528]" />
            </div>

            <div className="flex items-center justify-between pb-6 border-b border-zinc-100">
              <div>
                <span className="text-xs uppercase tracking-wider font-bold text-zinc-400">Legal Entity Name</span>
                <h3 className="text-xl sm:text-2xl font-black text-[#0B1528] mt-1">
                  OBIFOKS GLOBAL &amp; FELICITY NIG. LTD.
                </h3>
              </div>
              <span className="shrink-0 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                Active Entity
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-1">
                <span className="text-xs text-zinc-400 uppercase tracking-wider font-medium">Registration Status</span>
                <p className="text-sm sm:text-base font-semibold text-zinc-800">
                  Incorporated Limited Liability Company (CAMA)
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-xs text-zinc-400 uppercase tracking-wider font-medium">Federal Jurisdiction</span>
                <p className="text-sm sm:text-base font-semibold text-zinc-800">
                  Federal Republic of Nigeria
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-xs text-zinc-400 uppercase tracking-wider font-medium">Tax Compliance (FIRS)</span>
                <p className="text-sm sm:text-base font-semibold text-zinc-800">
                  Fully Verified Taxpayer (TIN Compliant)
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-xs text-zinc-400 uppercase tracking-wider font-medium">Primary Industry</span>
                <p className="text-sm sm:text-base font-semibold text-zinc-800">
                  Renewable Energy &amp; Electrical Engineering
                </p>
              </div>
            </div>

            {/* Address Block */}
            <div className="pt-4 border-t border-zinc-100">
              <span className="text-xs text-zinc-400 uppercase tracking-wider font-medium block mb-2">
                Registered Corporate Headquarters
              </span>
              <div className="flex items-start gap-3 text-sm text-zinc-700 bg-zinc-50 p-4 rounded-xl border border-zinc-200/80">
                <MapPin className="w-5 h-5 text-[#EE7130] shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <p className="font-bold text-[#0B1528]">No. 6 Wetheral Road</p>
                  <p className="text-zinc-600">Opposite Polaris Bank, Government Roundabout</p>
                  <p className="text-zinc-600">Owerri, Imo State, Nigeria</p>
                </div>
              </div>
            </div>
          </div>

          {/* Compliance & Regulatory Standards Side Grid */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-xs uppercase tracking-wider font-bold text-zinc-400 mb-2">
              Regulatory Standards &amp; Safety Compliance
            </h4>

            {/* Compliance Item 1 */}
            <div className="bg-white border border-zinc-200/80 shadow-xs p-5 rounded-xl flex items-start gap-4">
              <div className="p-2.5 rounded-lg bg-orange-50 text-[#EE7130] border border-orange-100 shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h5 className="text-sm sm:text-base font-bold text-[#0B1528]">SON Equipment Certification</h5>
                <p className="text-xs text-zinc-600 mt-1 leading-relaxed">
                  All solar panels, lithium iron phosphate (LiFePO4) batteries, and hybrid inverters meet Standards Organisation of Nigeria import quality benchmarks.
                </p>
              </div>
            </div>

            {/* Compliance Item 2 */}
            <div className="bg-white border border-zinc-200/80 shadow-xs p-5 rounded-xl flex items-start gap-4">
              <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-600 border border-emerald-100 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h5 className="text-sm sm:text-base font-bold text-[#0B1528]">NEMSA Electrical Safety Standards</h5>
                <p className="text-xs text-zinc-600 mt-1 leading-relaxed">
                  Electrical wiring, earthing protection, and surge suppression systems adhere strictly to Nigerian Electricity Management Services Agency safety codes.
                </p>
              </div>
            </div>

            {/* Compliance Item 3 */}
            <div className="bg-white border border-zinc-200/80 shadow-xs p-5 rounded-xl flex items-start gap-4">
              <div className="p-2.5 rounded-lg bg-blue-50 text-blue-600 border border-blue-100 shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h5 className="text-sm sm:text-base font-bold text-[#0B1528]">Direct Authorized Felicity Partner</h5>
                <p className="text-xs text-zinc-600 mt-1 leading-relaxed">
                  Official distributor and service representative for Felicity Solar products in Imo State, backing every installation with genuine factory warranties.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
