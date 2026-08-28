import { Quote, UserCheck, Shield, Check } from "lucide-react";

export default function ManagementFounder() {
  return (
    <section className="py-16 sm:py-24 bg-zinc-950 text-white border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col items-start max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#EE7130]/10 border border-[#EE7130]/30 text-[#EE7130] text-xs font-bold uppercase tracking-wider mb-3">
            <UserCheck className="w-3.5 h-3.5" />
            <span>Executive Leadership</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Founder &amp; Executive Management
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-3 leading-relaxed">
            Obifoks Global &amp; Felicity Nig. Ltd. was built on a foundation of unyielding engineering integrity, executive foresight, and direct accountability to our customers.
          </p>
        </div>

        {/* Founder Spotlight Card */}
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 sm:p-10 lg:p-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Founder Initials / Executive Badge Frame */}
            <div className="lg:col-span-4 flex flex-col items-center text-center p-8 bg-zinc-950/80 rounded-xl border border-zinc-800 relative">
              {/* Profile Monogram Avatar */}
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-[#EE7130] to-orange-800 text-white flex items-center justify-center font-black text-3xl sm:text-4xl shadow-xl shadow-[#EE7130]/20 mb-6 border-4 border-zinc-900">
                OG
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                Obinna Nwachukwu
              </h3>
              <p className="text-[#EE7130] text-xs sm:text-sm font-bold uppercase tracking-wider mt-1">
                Founder &amp; Managing Director
              </p>
              <p className="text-zinc-400 text-xs mt-2">
                Obifoks Global &amp; Felicity Nig. Ltd.
              </p>

              <div className="w-full border-t border-zinc-800 my-5" />

              <div className="flex flex-col space-y-2 w-full text-left text-xs text-zinc-300">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#EE7130]" />
                  <span>10+ Years Power Systems Engineering</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#EE7130]" />
                  <span>Certified Solar Microgrid Architect</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#EE7130]" />
                  <span>Executive Operations Lead</span>
                </div>
              </div>
            </div>

            {/* Right: Executive Statement & Vision */}
            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center gap-3">
                <Quote className="w-8 h-8 text-[#EE7130]/60 shrink-0" />
                <span className="text-xs uppercase tracking-widest font-bold text-zinc-400">
                  Founder&apos;s Statement &amp; Vision
                </span>
              </div>

              <blockquote className="text-base sm:text-lg md:text-xl font-medium text-zinc-200 leading-relaxed italic border-l-2 border-[#EE7130] pl-4 sm:pl-6">
                &ldquo;Our vision at Obifoks Global was born out of necessity: Nigerian homes and commercial enterprises deserve genuine, dependable electricity without deceptive capacity ratings or fragile equipment. When you choose Obifoks Global, you are placing your trust in verified engineering standards, authentic direct factory components, and an after-sales engineering team that remains by your side long after installation.&rdquo;
              </blockquote>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-xl bg-zinc-950/60 border border-zinc-800/80">
                  <div className="flex items-center gap-2 text-[#EE7130] font-bold text-sm mb-1">
                    <Shield className="w-4 h-4" />
                    <span>Zero Substandard Compromise</span>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    We strictly refuse grey-market components or inflated panel wattages. Every single solar component is laboratory tested and authentic.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-zinc-950/60 border border-zinc-800/80">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm mb-1">
                    <UserCheck className="w-4 h-4" />
                    <span>Direct Accountability</span>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed">
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
