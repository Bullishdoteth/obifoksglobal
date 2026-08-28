"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Header from "@/components/landing/header";
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

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

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

  const getWhatsAppLink = (project: ProjectItem) => {
    const text = encodeURIComponent(
      `Hello Obifoks Global! I am interested in learning more about your solar project setup for *${project.clientName}* (${project.batteryCapacity}, ${project.location}).\n\nI would like to inquire about getting a similar custom design and quote for my facility in Nigeria.`
    );
    return `https://wa.me/2348030000000?text=${text}`;
  };

  const getGeneralWhatsAppLink = () => {
    const text = encodeURIComponent(
      "Hello Obifoks Global! I am looking to consult with your engineering team regarding a custom solar and energy storage project for my business."
    );
    return `https://wa.me/2348030000000?text=${text}`;
  };

  return (
    <div className="bg-white text-zinc-900 min-h-screen flex flex-col font-sans selection:bg-orange-100 selection:text-[#EE7130]">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-white border-b border-zinc-200 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-orange-50 border border-orange-200 text-[#EE7130] text-xs font-bold uppercase tracking-wider mb-4">
                <span>Notable Projects & Field Deployments</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-900 tracking-tight leading-tight mb-6">
                Proven Solar Installations & High-Capacity Battery Energy Storage
              </h1>
              
              <p className="text-base sm:text-lg text-zinc-600 leading-relaxed mb-8">
                Explore our flagship commercial, industrial, and agricultural solar power deployments across Irete, Owerri, and Imo State. Built for heavy factory loads, multi-pump fueling stations, and continuous agricultural uptime.
              </p>

              {/* Quick Stat Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-zinc-200 pt-8">
                <div className="p-4 bg-zinc-50 rounded-lg border border-zinc-200/80">
                  <div className="text-2xl sm:text-3xl font-black text-[#EE7130]">265+ kWh</div>
                  <div className="text-xs font-semibold text-zinc-600 mt-1 uppercase tracking-wide">
                    Battery Storage Deployed
                  </div>
                </div>
                
                <div className="p-4 bg-zinc-50 rounded-lg border border-zinc-200/80">
                  <div className="text-2xl sm:text-3xl font-black text-zinc-900">200+ Panels</div>
                  <div className="text-xs font-semibold text-zinc-600 mt-1 uppercase tracking-wide">
                    High-Wattage Solar Arrays
                  </div>
                </div>

                <div className="p-4 bg-zinc-50 rounded-lg border border-zinc-200/80">
                  <div className="text-2xl sm:text-3xl font-black text-zinc-900">100% Uptime</div>
                  <div className="text-xs font-semibold text-zinc-600 mt-1 uppercase tracking-wide">
                    Mission Critical Reliability
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filter & Search Toolbar */}
        <section className="bg-white sticky top-[65px] z-30 border-b border-zinc-200 shadow-sm py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
            {/* Category Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
              {PROJECT_CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    id={`filter-btn-${cat.id}`}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`whitespace-nowrap px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                      isActive
                        ? "bg-[#EE7130] text-white shadow-sm"
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
                className="w-full pl-9 pr-8 py-2 text-xs sm:text-sm bg-zinc-50 border border-zinc-200 rounded-lg text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:bg-white focus:border-[#EE7130] transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 p-1"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </section>

        {/* Projects Grid Section */}
        <section className="bg-white py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            {/* Header info */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-zinc-200">
              <div className="text-sm font-semibold text-zinc-600">
                Showing <span className="text-zinc-900 font-bold">{filteredProjects.length}</span> notable {filteredProjects.length === 1 ? "project" : "projects"}
              </div>

              {(selectedCategory !== "all" || searchQuery !== "") && (
                <button
                  onClick={() => {
                    setSelectedCategory("all");
                    setSearchQuery("");
                  }}
                  className="text-xs font-medium text-[#EE7130] hover:underline"
                >
                  Reset filters
                </button>
              )}
            </div>

            {/* Empty Search Result */}
            {filteredProjects.length === 0 ? (
              <div className="text-center py-16 px-4 bg-zinc-50 rounded-xl border border-zinc-200">
                <SlidersHorizontal className="w-10 h-10 mx-auto text-zinc-400 mb-3" />
                <h3 className="text-lg font-bold text-zinc-900 mb-1">No matching projects found</h3>
                <p className="text-sm text-zinc-500 max-w-md mx-auto mb-6">
                  Try adjusting your search keywords or switching category filters.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory("all");
                    setSearchQuery("");
                  }}
                  className="px-4 py-2 bg-[#EE7130] text-white text-xs font-bold rounded-lg hover:bg-orange-600 transition-colors"
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
                    className="bg-white border border-zinc-200 rounded-xl p-6 sm:p-8 flex flex-col justify-between hover:border-zinc-300 transition-all shadow-sm hover:shadow-md"
                  >
                    <div>
                      {/* Top Badges */}
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <span className="inline-block px-2.5 py-1 text-[11px] font-bold rounded bg-zinc-100 text-zinc-700 uppercase tracking-wider">
                          {project.categoryLabel}
                        </span>

                        <span className="flex items-center gap-1 text-xs font-semibold text-zinc-500">
                          <MapPin className="w-3.5 h-3.5 text-[#EE7130]" />
                          {project.location}
                        </span>
                      </div>

                      {/* Title & Client */}
                      <h2 className="text-xl font-bold text-zinc-900 mb-2 leading-snug">
                        {project.clientName}
                      </h2>
                      <p className="text-xs font-medium text-zinc-500 mb-4">
                        {project.title}
                      </p>

                      {/* Main Technical Specs Pills */}
                      <div className="flex flex-wrap gap-2 mb-5">
                        <span className="px-3 py-1 rounded-md bg-orange-50 border border-orange-200 text-[#EE7130] text-xs font-bold">
                          ⚡ {project.batteryCapacity}
                        </span>
                        
                        <span className="px-3 py-1 rounded-md bg-zinc-100 border border-zinc-200 text-zinc-800 text-xs font-bold">
                          ☀️ {project.solarPanels}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-zinc-600 leading-relaxed mb-6">
                        {project.description}
                      </p>

                      {/* Key Highlights List */}
                      <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200/80 mb-6">
                        <div className="text-xs font-bold text-zinc-900 uppercase tracking-wide mb-2.5">
                          Project Highlights:
                        </div>
                        <ul className="space-y-2">
                          {project.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs text-zinc-700">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#EE7130] shrink-0 mt-0.5" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-4 border-t border-zinc-100 flex flex-col gap-2.5">
                      <button
                        onClick={() => setActiveModalProject(project)}
                        className="w-full py-2.5 px-4 bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-2"
                      >
                        <span>View Technical Specs & Impact</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                      <a
                        href={getWhatsAppLink(project)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2 px-4 bg-zinc-100 hover:bg-emerald-50 hover:text-emerald-700 border border-zinc-200 hover:border-emerald-300 text-zinc-800 text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-2"
                      >
                        <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Inquire About Similar Project</span>
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Commercial Call to Action Banner */}
        <section className="bg-zinc-900 text-white py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-orange-500/20 text-[#EE7130] text-xs font-bold uppercase tracking-wider mb-4 border border-orange-500/30">
                Custom Commercial & Industrial Engineering
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-tight mb-4 text-white">
                Need a High-Capacity Solar & Battery System for Your Facility?
              </h2>

              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-8">
                From factories and water processing facilities to fueling stations, hotels, and agricultural complexes—Obifoks Global designs, supplies, and installs reliable solar systems tailored to your exact energy demands.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={getGeneralWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 bg-[#EE7130] hover:bg-orange-600 text-white font-bold text-sm rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Request Engineering Consultation (WhatsApp)</span>
                </a>

                <a
                  href="tel:+2348030000000"
                  className="px-6 py-3.5 bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-sm rounded-lg border border-zinc-700 transition-colors flex items-center justify-center gap-2"
                >
                  <PhoneCall className="w-4 h-4 text-[#EE7130]" />
                  <span>Call Owerri Office</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Technical Detail Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
          <div 
            className="bg-white rounded-2xl border border-zinc-200 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-4 border-b border-zinc-200 mb-6">
              <div>
                <span className="inline-block px-2.5 py-0.5 text-[10px] font-bold rounded bg-orange-100 text-[#EE7130] uppercase tracking-wider mb-2">
                  {activeModalProject.categoryLabel}
                </span>
                <h3 className="text-2xl font-black text-zinc-900">
                  {activeModalProject.clientName}
                </h3>
                <p className="text-xs font-semibold text-zinc-500 flex items-center gap-1 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-[#EE7130]" />
                  {activeModalProject.location}, {activeModalProject.cityState}
                </p>
              </div>

              <button
                onClick={() => setActiveModalProject(null)}
                className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-900 hover:bg-zinc-100 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="space-y-6">
              {/* Overview */}
              <div>
                <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-wider mb-2">
                  Project Overview
                </h4>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  {activeModalProject.description}
                </p>
              </div>

              {/* Technical Specifications Table */}
              <div>
                <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-wider mb-3">
                  Technical Specifications
                </h4>
                <div className="border border-zinc-200 rounded-lg overflow-hidden divide-y divide-zinc-200">
                  {activeModalProject.technicalSpecs.map((spec, idx) => (
                    <div key={idx} className="flex flex-col sm:flex-row text-xs py-2.5 px-4 bg-white odd:bg-zinc-50">
                      <span className="font-bold text-zinc-900 sm:w-1/3 mb-0.5 sm:mb-0">
                        {spec.label}
                      </span>
                      <span className="text-zinc-700 sm:w-2/3">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Operational Impact */}
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <h4 className="text-xs font-bold text-[#EE7130] uppercase tracking-wider mb-1">
                  Operational Impact & Value Delivered
                </h4>
                <p className="text-xs sm:text-sm text-zinc-800 leading-relaxed">
                  {activeModalProject.operationalImpact}
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="pt-6 mt-6 border-t border-zinc-200 flex flex-col sm:flex-row gap-3 items-center justify-end">
              <button
                onClick={() => setActiveModalProject(null)}
                className="w-full sm:w-auto px-4 py-2.5 text-xs font-bold text-zinc-600 hover:text-zinc-900 bg-zinc-100 hover:bg-zinc-200 rounded-lg transition-colors"
              >
                Close
              </button>

              <a
                href={getWhatsAppLink(activeModalProject)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-2.5 bg-[#EE7130] hover:bg-orange-600 text-white text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Inquire About Similar Project</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}
