import { Quote, UserCheck, Shield, Check } from "lucide-react";

export default function ManagementFounder() {
  return (
    <section className="py-16 sm:py-24 bg-white text-zinc-900 border-b border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col items-start max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-orange-100/80 border border-orange-200 text-[#EE7130] text-xs font-bold uppercase tracking-wider mb-3">
            <UserCheck className="w-3.5 h-3.5" />
            <span>Executive Leadership</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B1528] tracking-tight">
            Founder &amp; Executive Management
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base mt-3 leading-relaxed">
            Obifoks Global &amp; Felicity Nig. Ltd. was built on a foundation of unyielding engineering integrity, executive foresight, and direct accountability to our customers.
          </p>
        </div>

        {/* Founder Spotlight Card */}
        <div className="bg-zinc-50/80 border border-zinc-200/90 rounded-2xl p-6 sm:p-10 lg:p-12 shadow-sm relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Founder Initials / Executive Badge Frame */}
            <div className="lg:col-span-4 flex flex-col items-center text-center p-8 bg-white rounded-2xl border border-zinc-200 shadow-sm relative">
              {/* Profile Monogram Avatar */}
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-[#EE7130] text-white flex items-center justify-center font-black text-3xl sm:text-4xl shadow-md mb-6 border-4 border-white">
                OG
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-[#0B1528] tracking-tight">
                Obinna Nwachukwu
              </h3>
              <p className="text-[#EE7130] text-xs sm:text-sm font-bold uppercase tracking-wider mt-1">
                Founder &amp; Managing Director
              </p>
              <p className="text-zinc-500 text-xs mt-1">
                Obifoks Global &amp; Felicity Nig. Ltd.
              </p>

              <div className="w-full border-t border-zinc-100 my-5" />

              <div className="flex flex-col space-y-2 w-full text-left text-xs text-zinc-700">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#EE7130] shrink-0" />
                  <span>10+ Years Power Systems Engineering</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#EE7130] shrink-0" />
                  <span>Certified Solar Microgrid Architect</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#EE7130] shrink-0" />
                  <span>Executive Operations Lead</span>
                </div>
              </div>
            </div>

            {/* Right: Executive Statement & Vision */}
            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center gap-3">
                <Quote className="w-8 h-8 text-[#EE7130] shrink-0" />
                <span className="text-xs uppercase tracking-widest font-bold text-zinc-400">
                  Founder&apos;s Statement &amp; Vision
                </span>
              </div>

              <blockquote className="text-base sm:text-lg md:text-xl font-medium text-zinc-800 leading-relaxed italic border-l-4 border-[#EE7130] pl-4 sm:pl-6">
                &ldquo;Our vision at Obifoks Global was born out of necessity: Nigerian homes and commercial enterprises deserve genuine, dependable electricity without deceptive capacity ratings or fragile equipment. When you choose Obifoks Global, you are placing your trust in verified engineering standards, authentic direct factory components, and an after-sales engineering team that remains by your side long after installation.&rdquo;
              </blockquote>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-xl bg-white border border-zinc-200/80 shadow-xs">
                  <div className="flex items-center gap-2 text-[#EE7130] font-bold text-sm mb-1">
                    <Shield className="w-4 h-4" />
                    <span>Zero Substandard Compromise</span>
                  </div>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    We strictly refuse grey-market components or inflated panel wattages. Every single solar component is laboratory tested and authentic.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-zinc-200/80 shadow-xs">
                  <div className="flex items-center gap-2 text-emerald-600 font-bold text-sm mb-1">
                    <UserCheck className="w-4 h-4" />
                    <span>Direct Accountability</span>
                  </div>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    Our management team stays directly accessible to clients, ensuring rapid resolution for warranty claims and routine servicing.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
