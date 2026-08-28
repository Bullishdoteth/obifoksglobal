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
    <main className="min-h-screen bg-white text-zinc-900 flex flex-col selection:bg-[#EE7130] selection:text-white">
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
      <section className="relative pt-12 pb-16 md:pt-16 md:pb-20 border-b border-zinc-200/80 bg-gradient-to-b from-zinc-50 via-white to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-3xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-orange-50 text-[#EE7130] border border-orange-200/80">
                  <IconComponent className="w-6 h-6 stroke-[2]" />
                </div>
                <span className="px-3 py-1 bg-orange-50 border border-orange-200/80 rounded-full text-xs font-bold text-[#EE7130] uppercase tracking-wider">
                  {solution.badge}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B1528] tracking-tight leading-tight">
                {solution.title}
              </h1>

              <p className="text-lg sm:text-xl font-semibold text-[#EE7130]">
                {solution.subtitle}
              </p>

              <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
                {solution.fullDesc}
              </p>

              {/* Action buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href={`https://wa.me/2349033333333?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-6 bg-[#459628] hover:bg-[#387a20] text-white text-xs sm:text-sm font-bold rounded-xl transition-all flex items-center gap-2 shadow-md shadow-[#459628]/20"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Request Sizing &amp; Quote on WhatsApp</span>
                </a>
                <Link
                  href="/contact"
                  className="py-3 px-6 bg-zinc-100 hover:bg-zinc-200 text-zinc-800 text-xs sm:text-sm font-bold rounded-xl transition-all border border-zinc-200"
                >
                  Contact Energy Engineers
                </Link>
              </div>
            </div>

            {/* Quick Spec Card */}
            <div className="w-full lg:w-96 bg-white border border-zinc-200/90 rounded-2xl p-6 shadow-xl shadow-zinc-200/40 space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 border-b border-zinc-100 pb-3">
                Key Technical Overview
              </h3>
              <div className="space-y-3">
                {solution.specs.map((spec, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="text-[11px] text-zinc-500 font-medium">{spec.label}</span>
                    <span className="text-sm font-bold text-[#0B1528]">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full space-y-16">
        
        {/* Key Features & System Capabilities */}
        <div>
          <div className="mb-8">
            <span className="text-xs font-bold text-[#EE7130] uppercase tracking-wider">System Advantages</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1528] mt-1">
              Key Features &amp; System Capabilities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {solution.keyFeatures.map((feature, idx) => (
              <div key={idx} className="bg-white border border-zinc-200/80 rounded-xl p-5 flex items-start gap-3.5 shadow-sm hover:border-zinc-300 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-[#459628] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-medium text-zinc-800 leading-snug">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits & Value Proposition */}
        <div className="bg-zinc-50/70 border border-zinc-200/80 rounded-2xl p-8 sm:p-10">
          <div className="mb-8 text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold text-[#459628] uppercase tracking-wider">Proven Returns</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1528] mt-1">
              Why Choose Our {solution.title} Setup?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {solution.benefits.map((benefit, idx) => (
              <div key={idx} className="bg-white border border-zinc-200/80 rounded-xl p-6 space-y-2 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-orange-50 text-[#EE7130] border border-orange-100 flex items-center justify-center font-bold text-sm mb-3">
                  0{idx + 1}
                </div>
                <h3 className="font-bold text-base text-[#0B1528]">{benefit.title}</h3>
                <p className="text-xs text-zinc-600 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Ideal For (Target Audience) */}
        <div>
          <div className="mb-6">
            <span className="text-xs font-bold text-[#EE7130] uppercase tracking-wider">Tailored Applications</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1528] mt-1">
              Who Is This Solution Designed For?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {solution.targetAudience.map((target, idx) => (
              <div key={idx} className="bg-white border border-zinc-200/80 rounded-xl p-4 flex items-center gap-3 shadow-sm">
                <div className="w-2 h-2 rounded-full bg-[#EE7130]" />
                <span className="text-xs font-semibold text-zinc-800">{target}</span>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs Section */}
        {solution.faqs && solution.faqs.length > 0 && (
          <div className="bg-zinc-50/70 border border-zinc-200/80 rounded-2xl p-8">
            <div className="flex items-center gap-2 mb-6">
              <HelpCircle className="w-5 h-5 text-[#EE7130]" />
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#0B1528]">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {solution.faqs.map((faq, idx) => (
                <div key={idx} className="bg-white border border-zinc-200/80 rounded-xl p-5 space-y-2 shadow-sm">
                  <h3 className="text-sm font-bold text-[#0B1528] flex items-center gap-2">
                    <span className="text-[#EE7130]">Q:</span> {faq.question}
                  </h3>
                  <p className="text-xs text-zinc-600 leading-relaxed pl-5">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom CTA Banner */}
        <div className="bg-[#0B1528] text-white border border-zinc-800 rounded-2xl p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="text-xl font-extrabold text-white">
              Ready to deploy {solution.title}?
            </h3>
            <p className="text-xs text-zinc-300 mt-1">
              Obifoks Global engineers are available for site visits, load assessment, and custom design in Owerri &amp; across Nigeria.
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              href="/solutions"
              className="py-2.5 px-4 bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-bold rounded-xl transition-all flex items-center gap-1.5"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Solutions</span>
            </Link>
            <a
              href={`https://wa.me/2349033333333?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-5 bg-[#EE7130] hover:bg-[#d85e1f] text-white text-xs font-bold rounded-xl transition-all shadow-lg shadow-[#EE7130]/20"
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
