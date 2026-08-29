"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Header from "@/components/landing/header";
import PageHeader from "@/components/page-header";
import Footer from "@/components/landing/footer";
import { 
  PROJECTS_DATA, 
  PROJECT_CATEGORIES, 
  ProjectItem 
} from "@/lib/projects-data";
import { 
  Search, 
  X, 
  ArrowRight, 
  MessageSquare, 
  PhoneCall, 
  MapPin, 
  SlidersHorizontal,
  CheckCircle2
} from "lucide-react";

export default function ProjectsClientView() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Filter projects by selected category and search query
  const filteredProjects = useMemo(() => {
    return PROJECTS_DATA.filter((project) => {
      const matchesCategory =
        selectedCategory === "all" || project.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.clientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.batteryCapacity.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.solarPanels.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const getGeneralWhatsAppLink = () => {
    const text = encodeURIComponent(
      "Hello Obifoks Global! I am looking to consult with your engineering team regarding a custom solar and energy storage project for my business."
    );
    return `https://wa.me/2348026640279?text=${text}`;
  };

  return (
    <div className="bg-white text-zinc-900 min-h-screen flex flex-col font-sans selection:bg-zinc-900 selection:text-white">
      {/* Header */}
      <Header />

      <PageHeader
        title="Our Projects"
        subtitle="Explore commercial, industrial, and agricultural solar power deployments across Nigeria."
      />

      {/* Main Content */}
      <main className="flex-1">

        {/* Filter & Search Toolbar */}
        <section className="bg-white sticky top-[65px] z-30 border-b border-zinc-200 shadow-sm py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
            {/* Category Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
              {PROJECT_CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    id={`filter-btn-${cat.id}`}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`whitespace-nowrap px-4 py-2 text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                      isActive
                        ? "bg-black text-white shadow-sm"
                        : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200 hover:text-zinc-900"
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>

            {/* Search Field */}
            <div className="relative min-w-[260px] lg:min-w-[320px]">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" />
              <input
                type="text"
                id="projects-search-input"
                placeholder="Search by client, location, or battery size..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-8 py-2 text-xs sm:text-sm bg-zinc-50 border border-zinc-200 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:bg-white focus:border-zinc-950 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 p-1 cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </section>

        {/* Projects Grid Section */}
        <section className="bg-white py-14 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            {/* Header info */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-zinc-200">
              <div className="text-xs sm:text-sm font-bold text-zinc-500">
                Showing <strong className="text-zinc-950 font-black">{filteredProjects.length}</strong> notable {filteredProjects.length === 1 ? "project" : "projects"}
              </div>

              {(selectedCategory !== "all" || searchQuery !== "") && (
                <button
                  onClick={() => {
                    setSelectedCategory("all");
                    setSearchQuery("");
                  }}
                  className="text-xs font-bold text-[#378222] hover:underline cursor-pointer"
                >
                  Reset filters
                </button>
              )}
            </div>

            {/* Empty Search Result */}
            {filteredProjects.length === 0 ? (
              <div className="text-center py-16 px-4 bg-zinc-50 border border-zinc-200 max-w-lg mx-auto my-8">
                <SlidersHorizontal className="w-10 h-10 mx-auto text-zinc-400 mb-3" />
                <h3 className="text-lg font-bold text-zinc-950 mb-1">No matching projects found</h3>
                <p className="text-xs text-zinc-500 max-w-md mx-auto mb-6 leading-relaxed">
                  Try adjusting your search keywords or switching category filters.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory("all");
                    setSearchQuery("");
                  }}
                  className="px-5 py-2.5 bg-[#378222] hover:bg-[#2b661a] text-white text-xs font-bold transition-colors cursor-pointer"
                >
                  Show All Projects
                </button>
              </div>
            ) : (
              /* Grid of Projects */
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {filteredProjects.map((project) => (
                  <article
                    key={project.id}
                    id={`project-card-${project.id}`}
                    className="bg-white border border-zinc-200 p-6 sm:p-8 flex flex-col justify-between hover:border-zinc-950 transition-all shadow-sm hover:shadow-md group"
                  >
                    <div>
                      {/* Top Badges */}
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <span className="inline-block px-2.5 py-1 text-[10px] font-bold bg-zinc-100 border border-zinc-200 text-zinc-700 uppercase tracking-wider">
                          {project.categoryLabel}
                        </span>

                        <span className="flex items-center gap-1 text-xs font-bold text-zinc-500">
                          <MapPin className="w-3.5 h-3.5 text-[#EE7130]" />
                          {project.location}
                        </span>
                      </div>

                      {/* Title & Client */}
                      <h3 className="text-xl sm:text-2xl font-black text-zinc-950 mb-1 leading-snug group-hover:text-[#EE7130] transition-colors">
                        <Link href={`/projects/${project.slug}`}>
                          {project.clientName}
                        </Link>
                      </h3>
                      <p className="text-xs font-semibold text-zinc-500 mb-4">
                        {project.title}
                      </p>

                      {/* Main Technical Specs Pills */}
                      <div className="flex flex-wrap gap-2 mb-5">
                        <span className="px-3 py-1 bg-zinc-950 text-white text-xs font-bold font-mono">
                          ⚡ {project.batteryCapacity}
                        </span>
                        
                        <span className="px-3 py-1 bg-zinc-100 border border-zinc-200 text-zinc-800 text-xs font-bold">
                          ☀️ {project.solarPanels}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-6">
                        {project.description}
                      </p>

                      {/* Key Highlights List */}
                      <div className="bg-zinc-50 p-4 border border-zinc-200/80 mb-6">
                        <div className="text-xs font-bold text-zinc-950 uppercase tracking-wider mb-2.5">
                          Project Highlights:
                        </div>
                        <ul className="space-y-2">
                          {project.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs text-zinc-700 font-medium">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#EE7130] shrink-0 mt-0.5" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Action Link to Dedicated Page */}
                    <div className="pt-4 border-t border-zinc-100">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="w-full py-3 px-4 bg-black hover:bg-[#2b661a] text-white text-xs font-bold transition-colors flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <span>View Dedicated Project Page</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Commercial Call to Action Banner */}
        <section className="bg-zinc-950 text-white py-16 sm:py-24 border-t border-zinc-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white text-black text-xs font-semibold tracking-wider uppercase">
                Custom Commercial Engineering
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-tight text-white">
                Need a High-Capacity Solar &amp; Battery System for Your Facility?
              </h2>

              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                From factories and water processing facilities to fueling stations, hotels, and agricultural complexes—Obifoks Global designs, supplies, and installs reliable solar systems tailored to your exact energy demands.
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
                  <PhoneCall className="w-4 h-4 text-[#EE7130]" />
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
