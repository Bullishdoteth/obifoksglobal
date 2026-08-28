import Image from "next/image";
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
  bgImage = "/subheader-bg.jpg",
}: PageHeaderProps) {
  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-zinc-950 text-white overflow-hidden border-b border-zinc-900 flex items-center justify-center">
      {/* Background Image with Priority Loading */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImage}
          alt={title}
          fill
          sizes="100vw"
          priority
          className="object-cover object-center filter brightness-[0.45] contrast-[1.1]"
        />
        {/* Dark Gradient Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-zinc-950/80" />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
      </div>

      {/* Centered Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center">
        
        {/* Breadcrumb Navigation */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav 
            aria-label="Breadcrumb"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-zinc-300 bg-zinc-900/80 border border-zinc-800/90 backdrop-blur-md px-4 py-1.5 rounded-full mb-6 shadow-md"
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
                      className="hover:text-[#EE7130] transition-colors"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-[#EE7130] font-bold">{item.label}</span>
                  )}
                </div>
              );
            })}
          </nav>
        )}

        {/* Centered Main Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight uppercase leading-tight drop-shadow-md">
          {title}
        </h1>

        {/* Decorative Centered Accent Divider Line */}
        <div className="w-16 h-1 bg-[#EE7130] rounded-full my-4 shadow-sm" />

        {/* Subtitle */}
        {subtitle && (
          <p className="text-zinc-300 text-sm sm:text-base md:text-lg max-w-2xl font-normal leading-relaxed text-center">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
