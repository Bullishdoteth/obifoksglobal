import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Solar Power & Energy Storage Solutions | Obifoks Global",
  description:
    "Explore Obifoks Global's 6 core energy solutions: Residential Solar, Commercial Solar, Industrial Solar, LiFePO4 Energy Storage, Security CCTV Systems, and Solar Street Lighting in Owerri, Imo State.",
  keywords: [
    "Residential solar solutions Owerri",
    "Commercial solar systems Imo State",
    "Industrial solar microgrid Nigeria",
    "Lithium energy storage solutions",
    "CCTV security surveillance Owerri",
    "Solar street lighting solutions",
    "Obifoks Global solutions",
  ],
  openGraph: {
    title: "Solar Energy & Infrastructure Solutions | Obifoks Global Owerri",
    description:
      "Precision solar microgrid engineering, lithium energy storage, and industrial security systems across South-East Nigeria.",
    url: "https://obifoksglobal.com/solutions",
    siteName: "Obifoks Global & Felicity Nig. Ltd.",
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solar & Energy Solutions | Obifoks Global",
    description:
      "Explore 6 core solar power and energy storage solutions tailored for homes, businesses, and industrial complexes.",
  },
  alternates: {
    canonical: "https://obifoksglobal.com/solutions",
  },
};

export default function SolutionsHubPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900 flex flex-col selection:bg-zinc-900 selection:text-white">
      <Header />
      <PageHeader
        title="Our Energy Solutions"
        subtitle="Comprehensive solar power, lithium energy storage, and industrial security infrastructure."
      />

      {/* Solutions Grid Section */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full flex-grow">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-black text-white text-xs font-semibold tracking-wider uppercase">
            <span>Solutions Catalog</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-zinc-950 tracking-tight leading-tight">
            6 Core Energy Capabilities
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
            Select a solution to explore detailed system specifications, sizing guides, and engineering capabilities.
          </p>
        </div>

        {/* 6 Solutions Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SOLUTIONS_DATA.map((sol: SolutionItem) => {
            const IconComponent = getSolutionIcon(sol.iconName);
            return (
              <div
                key={sol.id}
                className="group bg-white border border-zinc-200 p-6 sm:p-8 hover:border-zinc-950 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 bg-zinc-950 text-white flex items-center justify-center">
                      <IconComponent className="w-5 h-5 stroke-[2]" />
                    </div>
                    <span className="text-[10px] font-bold px-2.5 py-1 bg-zinc-100 border border-zinc-200 text-zinc-700 uppercase tracking-wider">
                      {sol.badge}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-zinc-950 group-hover:text-[#2b661a] transition-colors mb-3 leading-snug">
                    {sol.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-6">
                    {sol.shortDesc}
                  </p>

                  <div className="space-y-2.5 mb-8 pt-4 border-t border-zinc-100">
                    {sol.keyFeatures.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href={`/solutions/${sol.slug}`}
                  className="w-full py-3 px-4 bg-black hover:bg-[#2b661a] text-white text-xs font-bold text-center transition-all flex items-center justify-center gap-2 group/btn cursor-pointer"
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
      <section className="py-20 sm:py-28 bg-zinc-50/70 border-y border-zinc-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="max-w-3xl space-y-3 mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-black text-white text-xs font-semibold tracking-wider uppercase">
              <span>Why Partner With Us</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-zinc-950 tracking-tight leading-tight">
              Obifoks Global &amp; Felicity Solar
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
              We bring engineering precision, Tier-1 solar equipment, and responsive local technical support across Imo State and Nigeria.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-white border border-zinc-200 space-y-3">
              <div className="p-3 w-max bg-zinc-950 text-white">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-zinc-950">Tier-1 Components</h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Only genuine, high-efficiency solar panels, Felicity LiFePO4 batteries, and heavy-duty hybrid inverters.
              </p>
            </div>

            <div className="p-6 bg-white border border-zinc-200 space-y-3">
              <div className="p-3 w-max bg-zinc-950 text-white">
                <Wrench className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-zinc-950">Expert Sizing &amp; Audit</h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Thorough load auditing and surge calculation to guarantee continuous power without system overloads.
              </p>
            </div>

            <div className="p-6 bg-white border border-zinc-200 space-y-3">
              <div className="p-3 w-max bg-zinc-950 text-white">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-zinc-950">Manufacturer Warranty</h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Up to 25-year performance warranties on panels and 5+ years on lithium battery installations.
              </p>
            </div>

            <div className="p-6 bg-white border border-zinc-200 space-y-3">
              <div className="p-3 w-max bg-zinc-950 text-white">
                <Headphones className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-zinc-950">Local Technical Support</h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Our Owerri technical office provides fast dispatch, preventive maintenance, and system health monitoring.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Consultation Section */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full">
        <div className="bg-zinc-950 text-white border border-zinc-800 p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 shadow-2xl">
          <div className="max-w-2xl space-y-2 text-center md:text-left">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block">
              Ready to Upgrade Your Energy?
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
              Get a Customized Solar Sizing &amp; Quote Today
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
              Contact our energy engineers in Owerri to discuss your power load requirements and get an accurate system estimate.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <Link
              href="/contact"
              className="py-3.5 px-6 bg-[#378222] hover:bg-[#2b661a] text-white text-xs sm:text-sm font-bold text-center transition-all cursor-pointer"
            >
              Contact Us for Quote
            </Link>
            <a
              href="https://wa.me/2348026640279?text=Hello%20Obifoks%20Global,%20I%20want%20a%20solar%20solution%20quote"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3.5 px-6 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold text-center transition-all"
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
