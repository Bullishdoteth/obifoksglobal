import Header from "@/components/landing/header";
import PageHeader from "@/components/page-header";
import Footer from "@/components/landing/footer";
import Link from "next/link";
import { SolutionItem } from "@/lib/solutions-data";
import { 
  Home, 
  Building2, 
  Factory, 
  BatteryCharging, 
  ShieldCheck, 
  SunMedium, 
  Zap, 
  ArrowLeft, 
  CheckCircle2, 
  PhoneCall, 
  HelpCircle
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

interface Props {
  solution: SolutionItem;
}

export default function SolutionDetailView({ solution }: Props) {
  const IconComponent = getSolutionIcon(solution.iconName);

  const whatsappMessage = encodeURIComponent(
    `Hello Obifoks Global, I am interested in your ${solution.title} solution. I would like to request a consultation and sizing quote.`
  );

  return (
    <main className="min-h-screen bg-white text-zinc-900 flex flex-col selection:bg-zinc-900 selection:text-white">
      <Header />

      <PageHeader
        title={solution.title}
        subtitle={solution.subtitle}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Solutions", href: "/solutions" },
          { label: solution.title },
        ]}
      />

      {/* Hero Section */}
      <section className="relative py-14 sm:py-20 border-b border-zinc-200/80 bg-zinc-50/50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-10">
            
            {/* Left Content */}
            <div className="max-w-3xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-zinc-950 text-white">
                  <IconComponent className="w-5 h-5 stroke-[2]" />
                </div>
                <span className="px-3 py-1 bg-zinc-100 border border-zinc-200 text-xs font-bold text-zinc-700 uppercase tracking-wider">
                  {solution.badge}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-zinc-950 tracking-tight leading-tight">
                {solution.title}
              </h1>

              <p className="text-base sm:text-lg font-bold text-[#378222]">
                {solution.subtitle}
              </p>

              <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
                {solution.fullDesc}
              </p>

              {/* Action buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href={`https://wa.me/2348026640279?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3.5 px-6 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold transition-all flex items-center gap-2 shadow-md"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Request Sizing &amp; Quote on WhatsApp</span>
                </a>
                <Link
                  href="/contact"
                  className="py-3.5 px-6 bg-[#378222] hover:bg-[#2b661a] text-white text-xs sm:text-sm font-bold transition-all cursor-pointer"
                >
                  Contact Energy Engineers
                </Link>
              </div>
            </div>

            {/* Quick Spec Card */}
            <div className="w-full lg:w-96 bg-white border border-zinc-200 p-6 sm:p-8 space-y-4 shadow-sm">
              <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 border-b border-zinc-100 pb-3">
                Key Technical Overview
              </h3>
              <div className="space-y-3">
                {solution.specs.map((spec, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="text-[11px] text-zinc-500 font-medium">{spec.label}</span>
                    <span className="text-sm font-bold text-zinc-950">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full space-y-16 sm:space-y-20">
        
        {/* Key Features & System Capabilities */}
        <div>
          <div className="mb-8 space-y-2">
            <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest block">System Advantages</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-zinc-950 tracking-tight">
              Key Features &amp; System Capabilities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {solution.keyFeatures.map((feature, idx) => (
              <div key={idx} className="bg-white border border-zinc-200 p-5 flex items-start gap-3.5 shadow-sm hover:border-zinc-300 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-[#EE7130] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-medium text-zinc-800 leading-snug">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits & Value Proposition */}
        <div className="bg-zinc-50/70 border border-zinc-200 p-8 sm:p-12">
          <div className="mb-8 text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-[#EE7130] uppercase tracking-widest block">Proven Returns</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-zinc-950 tracking-tight">
              Why Choose Our {solution.title} Setup?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {solution.benefits.map((benefit, idx) => (
              <div key={idx} className="bg-white border border-zinc-200 p-6 space-y-2 shadow-sm">
                <div className="w-8 h-8 bg-zinc-950 text-white flex items-center justify-center font-bold text-xs mb-3">
                  0{idx + 1}
                </div>
                <h3 className="font-bold text-base text-zinc-950">{benefit.title}</h3>
                <p className="text-xs text-zinc-600 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Ideal For (Target Audience) */}
        <div>
          <div className="mb-6 space-y-2">
            <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest block">Tailored Applications</span>
            <h2 className="text-2xl sm:text-3xl font-black text-zinc-950 tracking-tight">
              Who Is This Solution Designed For?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {solution.targetAudience.map((target, idx) => (
              <div key={idx} className="bg-white border border-zinc-200 p-4 flex items-center gap-3 shadow-sm">
                <div className="w-2 h-2 bg-[#378222]" />
                <span className="text-xs font-semibold text-zinc-800">{target}</span>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs Section */}
        {solution.faqs && solution.faqs.length > 0 && (
          <div className="bg-zinc-50/70 border border-zinc-200 p-8 sm:p-12">
            <div className="flex items-center gap-2 mb-6">
              <HelpCircle className="w-5 h-5 text-zinc-700" />
              <h2 className="text-xl sm:text-2xl font-black text-zinc-950 tracking-tight">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {solution.faqs.map((faq, idx) => (
                <div key={idx} className="bg-white border border-zinc-200 p-5 sm:p-6 space-y-2 shadow-sm">
                  <h3 className="text-sm sm:text-base font-bold text-zinc-950 flex items-center gap-2">
                    <span className="text-[#378222]">Q:</span> {faq.question}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed pl-5">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom CTA Banner */}
        <div className="bg-zinc-950 text-white border border-zinc-800 p-8 sm:p-12 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8 shadow-2xl">
          <div className="space-y-1 max-w-xl">
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Ready to deploy {solution.title}?
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Obifoks Global engineers are available for site visits, load assessment, and custom system design in Owerri &amp; across Nigeria.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <Link
              href="/solutions"
              className="py-3.5 px-5 bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Solutions</span>
            </Link>
            <a
              href={`https://wa.me/2348026640279?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3.5 px-6 bg-[#378222] hover:bg-[#2b661a] text-white text-xs font-bold text-center transition-all cursor-pointer"
            >
              Get Sizing Quote
            </a>
          </div>
        </div>

      </section>

      <Footer />
    </main>
  );
}
