import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/landing/header";
import PageHeader from "@/components/page-header";
import Footer from "@/components/landing/footer";
import { 
  PROJECTS_DATA, 
  getProjectBySlug, 
  getAllProjectSlugs 
} from "@/lib/projects-data";
import { 
  ArrowLeft, 
  ArrowRight, 
  MapPin, 
  BatteryCharging, 
  Sun, 
  Zap, 
  CheckCircle2, 
  MessageSquare, 
  PhoneCall, 
  Building2,
  ShieldCheck,
  ChevronRight
} from "lucide-react";

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project Not Found | Obifoks Global" };
  }

  return {
    title: `${project.clientName} Solar Installation | Obifoks Global`,
    description: `Case study & system specifications for ${project.clientName} (${project.batteryCapacity}, ${project.location}). ${project.description}`,
    keywords: [
      `${project.clientName} solar`,
      `Solar installation ${project.location}`,
      project.categoryLabel,
      project.batteryCapacity,
      "Obifoks Global project case study",
    ],
    openGraph: {
      title: `${project.clientName} Solar System Setup | Obifoks Global`,
      description: project.description,
      url: `https://obifoksglobal.com/projects/${project.slug}`,
      siteName: "Obifoks Global & Felicity Nig. Ltd.",
      locale: "en_NG",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.clientName} Solar Installation`,
      description: project.description,
    },
    alternates: {
      canonical: `https://obifoksglobal.com/projects/${project.slug}`,
    },
  };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  // Find index for next/previous project navigation
  const currentIndex = PROJECTS_DATA.findIndex((p) => p.slug === project.slug || p.id === project.id);
  const prevProject = currentIndex > 0 ? PROJECTS_DATA[currentIndex - 1] : null;
  const nextProject = currentIndex < PROJECTS_DATA.length - 1 ? PROJECTS_DATA[currentIndex + 1] : null;

  const getWhatsAppLink = () => {
    const text = encodeURIComponent(
      `Hello Obifoks Global! I am reviewing your project page for *${project.clientName}* (${project.batteryCapacity}, ${project.location}).\n\nI would like to request an engineering consultation and quote for a similar solar setup for my facility in Nigeria.`
    );
    return `https://wa.me/2349064566983?text=${text}`;
  };

  const getGeneralWhatsAppLink = () => {
    const text = encodeURIComponent(
      "Hello Obifoks Global! I am looking to consult with your engineering team regarding a custom solar and energy storage project for my business."
    );
    return `https://wa.me/2349064566983?text=${text}`;
  };

  return (
    <div className="bg-white text-zinc-900 min-h-screen flex flex-col font-sans selection:bg-zinc-900 selection:text-white">
      {/* Navigation Header */}
      <Header />

      {/* Page Header */}
      <PageHeader
        title={project.clientName}
        subtitle={`${project.title} — ${project.location}, ${project.cityState}`}
      />

      {/* Main Content */}
      <main className="flex-1">
        
        {/* Breadcrumb & Navigation Bar */}
        <section className="bg-zinc-50 border-b border-zinc-200 py-3.5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
            <nav className="flex items-center gap-2 text-xs font-semibold text-zinc-500">
              <Link href="/" className="hover:text-zinc-950 transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
              <Link href="/projects" className="hover:text-zinc-950 transition-colors">Projects</Link>
              <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
              <span className="text-zinc-950 font-bold truncate max-w-[200px] sm:max-w-xs">{project.clientName}</span>
            </nav>

            <Link
              href="/projects"
              className="md:inline-flex hidden items-center gap-1.5 text-xs font-bold text-zinc-700 hover:text-zinc-950 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to All Projects</span>
            </Link>
          </div>
        </section>

        {/* Project Technical Details Grid Section */}
        <section className="py-14 sm:py-20 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            
            {/* Header Badge & Main Title */}
            <div className="max-w-4xl space-y-4 mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-black text-white text-xs font-semibold tracking-wider uppercase">
                <span>{project.categoryLabel}</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-zinc-950 tracking-tight leading-tight">
                {project.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm font-bold text-zinc-500 pt-2 border-t border-zinc-100">
                <span className="flex items-center gap-1.5 text-zinc-900">
                  <MapPin className="w-4 h-4 text-emerald-600" />
                  {project.location}, {project.cityState}
                </span>
                <span className="text-zinc-300">•</span>
                <span className="flex items-center gap-1.5 text-zinc-900">
                  <Building2 className="w-4 h-4 text-zinc-600" />
                  Client: {project.clientName}
                </span>
                <span className="text-zinc-300">•</span>
                <span className="flex items-center gap-1.5 text-emerald-700 font-bold">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  100% Fully Operational
                </span>
              </div>
            </div>

            {/* 2-Column Responsive Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              {/* Left Column (5/12): Key Metric Cards & Highlights */}
              <div className="lg:col-span-5 space-y-6">
                
                {/* Metric Summary Boxes */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-zinc-950 text-white p-5 border border-zinc-800 space-y-2">
                    <div className="flex items-center gap-2 text-emerald-400">
                      <BatteryCharging className="w-5 h-5" />
                      <span className="text-xs font-bold uppercase tracking-wider">Battery Storage</span>
                    </div>
                    <div className="text-xl sm:text-2xl font-black font-mono">
                      {project.batteryCapacity}
                    </div>
                    <div className="text-[11px] text-zinc-400 font-medium">
                      High-discharge LiFePO4 rack system
                    </div>
                  </div>

                  <div className="bg-zinc-50 text-zinc-950 p-5 border border-zinc-200 space-y-2">
                    <div className="flex items-center gap-2 text-zinc-700">
                      <Sun className="w-5 h-5 text-amber-500" />
                      <span className="text-xs font-bold uppercase tracking-wider">Solar Array</span>
                    </div>
                    <div className="text-xl sm:text-2xl font-black">
                      {project.solarPanels}
                    </div>
                    <div className="text-[11px] text-zinc-500 font-medium">
                      Tier-1 high efficiency modules
                    </div>
                  </div>
                </div>

                {/* System Type Card */}
                <div className="bg-zinc-50 border border-zinc-200 p-6 space-y-2">
                  <div className="flex items-center gap-2 text-zinc-500 text-xs font-bold uppercase tracking-wider">
                    <Zap className="w-4 h-4 text-emerald-600" />
                    <span>System Architecture</span>
                  </div>
                  <div className="text-base font-extrabold text-zinc-950">
                    {project.systemType}
                  </div>
                </div>

                {/* Project Highlights Card */}
                <div className="bg-white border border-zinc-200 p-6 space-y-4">
                  <h3 className="text-xs font-bold text-zinc-950 uppercase tracking-wider">
                    Key Installation Highlights
                  </h3>
                  <ul className="space-y-3">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="font-medium leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Right Column (7/12): Detailed Specs, Operational Impact & Inquiry Action */}
              <div className="lg:col-span-7 space-y-8">
                
                {/* Overview */}
                <div className="space-y-3">
                  <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                    Project Overview
                  </h3>
                  <p className="text-base text-zinc-700 leading-relaxed font-normal">
                    {project.description}
                  </p>
                </div>

                {/* Technical Specifications Table */}
                <div className="space-y-4">
                  <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                    Technical Specifications
                  </h3>
                  <div className="border border-zinc-200 divide-y divide-zinc-200">
                    {project.technicalSpecs.map((spec, idx) => (
                      <div key={idx} className="flex flex-col sm:flex-row text-xs sm:text-sm py-3 px-4 bg-white odd:bg-zinc-50">
                        <span className="font-semibold text-zinc-600 sm:w-2/5 mb-1 sm:mb-0">
                          {spec.label}
                        </span>
                        <span className="font-bold text-zinc-950 sm:w-3/5">
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Operational Impact Box */}
                <div className="bg-zinc-50 border border-zinc-200 p-6 space-y-2">
                  <h3 className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                    Operational Impact &amp; Value Delivered
                  </h3>
                  <p className="text-sm sm:text-base text-zinc-800 leading-relaxed font-medium">
                    {project.operationalImpact}
                  </p>
                </div>

                {/* Call to Action for Similar Installation */}
                <div className="bg-zinc-950 text-white p-6 sm:p-8 space-y-4 border border-zinc-800">
                  <h3 className="text-lg font-black text-white">
                    Need a Similar Solar System for Your Facility?
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    Our team of certified solar engineers designs custom energy storage and power systems tailored for commercial, industrial, and agricultural operations across Nigeria.
                  </p>
                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <a
                      href={getWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3.5 bg-[#378222] hover:bg-[#2b661a] text-white font-bold text-xs sm:text-sm transition-colors flex items-center justify-center gap-2 shadow-md cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Inquire About Similar Project (WhatsApp)</span>
                    </a>
                  </div>
                </div>

              </div>

            </div>

            {/* Next / Previous Project Navigation */}
            <div className="mt-16 pt-8 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              {prevProject ? (
                <Link
                  href={`/projects/${prevProject.slug}`}
                  className="flex items-center gap-3 p-4 border border-zinc-200 hover:border-zinc-950 text-left transition-all w-full sm:w-auto"
                >
                  <ArrowLeft className="w-5 h-5 text-zinc-600 shrink-0" />
                  <div>
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">Previous Project</span>
                    <span className="text-sm font-bold text-zinc-950">{prevProject.clientName}</span>
                  </div>
                </Link>
              ) : <div />}

              {nextProject ? (
                <Link
                  href={`/projects/${nextProject.slug}`}
                  className="flex items-center gap-3 p-4 border border-zinc-200 hover:border-zinc-950 text-right transition-all w-full sm:w-auto justify-end ml-auto"
                >
                  <div>
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">Next Project</span>
                    <span className="text-sm font-bold text-zinc-950">{nextProject.clientName}</span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-zinc-600 shrink-0" />
                </Link>
              ) : <div />}
            </div>

          </div>
        </section>

        {/* Commercial Call to Action Banner */}
        <section className="py-16 sm:py-20 bg-zinc-950 text-white border-t border-zinc-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white text-black text-xs font-semibold tracking-wider uppercase">
                Custom Commercial Engineering
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-tight text-white">
                Power Your Commercial Enterprise With Zero Interruption.
              </h2>

              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                From factories and water bottling plants to fueling stations, hotels, and agricultural facilities—Obifoks Global designs, supplies, and installs reliable solar systems tailored to your exact energy demands.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4">
                <a
                  href={getGeneralWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-4 bg-[#378222] hover:bg-[#2b661a] text-white font-bold text-xs sm:text-sm transition-colors flex items-center justify-center gap-2 shadow-md cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Request Engineering Consultation (WhatsApp)</span>
                </a>

                <a
                  href="tel:+2348033000000"
                  className="px-7 py-4 bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-xs sm:text-sm border border-zinc-700 transition-colors flex items-center justify-center gap-2"
                >
                  <PhoneCall className="w-4 h-4 text-emerald-400" />
                  <span>Call Owerri Showroom</span>
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
