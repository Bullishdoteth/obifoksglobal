import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: BreadcrumbItem[];
  bgImage?: string;
}

export default function PageHeader({
  title,
  subtitle,
  breadcrumbs = [
    { label: "Home", href: "/" },
    { label: title },
  ],
}: PageHeaderProps) {
  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-black text-white overflow-hidden border-b border-zinc-900 flex items-center justify-center">
      
      {/* Background Decorative Radial Gradient Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-900/50 via-black to-black pointer-events-none" />

      {/* Centered Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center">
        
        {/* Breadcrumb Navigation */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav 
            aria-label="Breadcrumb"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-zinc-300 bg-zinc-900 border border-zinc-800 px-4 py-1.5 rounded-full mb-6 shadow-sm"
          >
            {breadcrumbs.map((item, index) => {
              const isLast = index === breadcrumbs.length - 1;
              return (
                <div key={item.label} className="flex items-center gap-2">
                  {index > 0 && (
                    <ChevronRight className="w-3.5 h-3.5 text-zinc-500 stroke-[2.5]" />
                  )}
                  {item.href && !isLast ? (
                    <Link
                      href={item.href}
                      className="hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-white font-bold">{item.label}</span>
                  )}
                </div>
              );
            })}
          </nav>
        )}

        {/* Centered Main Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-tight">
          {title}
        </h1>

        {/* Decorative Centered Accent Divider Line */}
        <div className="w-16 h-1 bg-[#378222] rounded-full my-4 shadow-sm" />

        {/* Subtitle */}
        {subtitle && (
          <p className="text-zinc-400 text-sm sm:text-base md:text-lg max-w-2xl font-normal leading-relaxed text-center">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
