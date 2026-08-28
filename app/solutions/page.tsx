import Header from "@/components/landing/header";
import PageHeader from "@/components/page-header";
import Footer from "@/components/landing/footer";
import Link from "next/link";
import { SOLUTIONS_DATA, SolutionItem } from "@/lib/solutions-data";
import { 
  Home, 
  Building2, 
  Factory, 
  BatteryCharging, 
  ShieldCheck, 
  SunMedium, 
  Zap, 
  ArrowRight, 
  CheckCircle2, 
  ShieldAlert, 
  Wrench, 
  Headphones 
} from "lucide-react";

function getSolutionIcon(iconName: string) {
  switch (iconName) {
    case "Home":
      return Home;
    case "Building2":
      return Building2;
    case "Factory":
      return Factory;
    case "BatteryCharging":
      return BatteryCharging;
    case "ShieldCheck":
      return ShieldCheck;
    case "SunMedium":
      return SunMedium;
    default:
      return Zap;
  }
}

export const metadata = {
  title: "Solar & Energy Solutions | Obifoks Global & Felicity Nig. Ltd.",
  description: "Explore Obifoks Global's comprehensive solar & power solutions: Residential, Commercial, Industrial, Energy Storage, Security CCTV, and Solar Street Lighting in Owerri, Imo State.",
};

export default function SolutionsHubPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900 flex flex-col selection:bg-[#EE7130] selection:text-white">
      <Header />
      <PageHeader
        title="Our Energy Solutions"
        subtitle="Comprehensive solar power, lithium energy storage, and industrial security infrastructure."
      />

      {/* Solutions Grid Section */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1528] tracking-tight">
              Our 6 Core Energy Capabilities
            </h2>
            <p className="text-zinc-500 text-xs sm:text-sm mt-1">
              Select a solution to explore system specifications, sizing guides, and technical features.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SOLUTIONS_DATA.map((sol: SolutionItem) => {
            const IconComponent = getSolutionIcon(sol.iconName);
            return (
              <div
                key={sol.id}
                className="group bg-white border border-zinc-200/90 rounded-2xl p-6 hover:border-[#EE7130]/60 hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-orange-50 text-[#EE7130] border border-orange-100 group-hover:bg-[#EE7130] group-hover:text-white transition-colors">
                      <IconComponent className="w-5 h-5 stroke-[2]" />
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 bg-zinc-100 border border-zinc-200/80 text-zinc-700 rounded-full">
                      {sol.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#0B1528] group-hover:text-[#EE7130] transition-colors mb-2">
                    {sol.title}
                  </h3>
                  <p className="text-xs text-zinc-600 leading-relaxed mb-4">
                    {sol.shortDesc}
                  </p>

                  <div className="space-y-2 mb-6 pt-3 border-t border-zinc-100">
                    {sol.keyFeatures.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-zinc-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#459628] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href={`/solutions/${sol.slug}`}
                  className="w-full py-2.5 px-4 bg-[#0B1528] hover:bg-[#EE7130] text-white text-xs font-bold rounded-xl text-center transition-all flex items-center justify-center gap-2 group/btn shadow-sm"
                >
                  <span>Explore {sol.title}</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* Why Obifoks Global Section */}
      <section className="py-16 bg-zinc-50/70 border-y border-zinc-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1528]">
              Why Obifoks Global &amp; Felicity Nig. Ltd?
            </h2>
            <p className="text-zinc-600 text-xs sm:text-sm mt-2">
              We bring technical precision, Tier-1 solar equipment, and responsive local engineering support across Imo State and Nigeria.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 bg-white border border-zinc-200/80 rounded-xl space-y-3 shadow-sm">
              <div className="p-2.5 w-max rounded-lg bg-orange-50 text-[#EE7130] border border-orange-100">
                <Zap className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-[#0B1528]">Tier-1 Components</h4>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Only genuine, high-efficiency solar panels, Felicity LiFePO4 batteries, and heavy-duty inverters.
              </p>
            </div>

            <div className="p-5 bg-white border border-zinc-200/80 rounded-xl space-y-3 shadow-sm">
              <div className="p-2.5 w-max rounded-lg bg-emerald-50 text-[#459628] border border-emerald-100">
                <Wrench className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-[#0B1528]">Expert Sizing &amp; Audit</h4>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Thorough load auditing and surge calculation to guarantee continuous power without system overloads.
              </p>
            </div>

            <div className="p-5 bg-white border border-zinc-200/80 rounded-xl space-y-3 shadow-sm">
              <div className="p-2.5 w-max rounded-lg bg-orange-50 text-[#EE7130] border border-orange-100">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-[#0B1528]">Full Manufacturer Warranty</h4>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Up to 25-year performance warranties on panels and 5+ years on lithium battery installations.
              </p>
            </div>

            <div className="p-5 bg-white border border-zinc-200/80 rounded-xl space-y-3 shadow-sm">
              <div className="p-2.5 w-max rounded-lg bg-emerald-50 text-[#459628] border border-emerald-100">
                <Headphones className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-[#0B1528]">Local Technical Support</h4>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Our Owerri technical office provides fast dispatch, preventive maintenance, and system health monitoring.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Consultation Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full">
        <div className="bg-[#0B1528] text-white border border-zinc-800 rounded-2xl p-8 sm:p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold text-[#EE7130] uppercase tracking-wider">
              Ready to Upgrade Your Energy?
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Get a Customized Solar Sizing &amp; Quote Today
            </h2>
            <p className="text-zinc-300 text-xs sm:text-sm">
              Contact our energy engineers in Owerri to discuss your power load requirements and get an accurate system estimate.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <Link
              href="/contact"
              className="py-3 px-6 bg-[#EE7130] hover:bg-[#d85e1f] text-white text-xs sm:text-sm font-bold rounded-xl text-center transition-all shadow-lg shadow-[#EE7130]/20"
            >
              Contact Us for Quote
            </Link>
            <a
              href="https://wa.me/2349033333333?text=Hello%20Obifoks%20Global,%20I%20want%20a%20solar%20solution%20quote"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-6 bg-[#459628] hover:bg-[#387a20] text-white text-xs sm:text-sm font-bold rounded-xl text-center transition-all shadow-lg shadow-[#459628]/20"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
