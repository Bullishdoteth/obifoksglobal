import type { Metadata } from "next";
import Hero from "@/components/landing/hero";
import Header from "@/components/landing/header";
import ProductCatalog from "@/components/landing/product-catalog";
import EnergySolutions from "@/components/landing/energy-solutions";
import WhyObifoks from "@/components/landing/why-obifoks";
import Projects from "@/components/landing/projects";
import Brands from "@/components/landing/brands";
import CTA from "@/components/landing/cta";
import ContactUs from "@/components/landing/contact-us";
import Footer from "@/components/landing/footer";

export const metadata: Metadata = {
  title: "Solar Panels, Lithium Batteries & Energy Storage Owerri | Obifoks Global",
  description:
    "Obifoks Global & Felicity Nig. Ltd. is Owerri's trusted solar engineering provider. Shop genuine Felicity solar equipment, LiFePO4 batteries, hybrid inverters, and commercial solar installations.",
  keywords: [
    "Solar panels Owerri",
    "Felicity Solar Imo State",
    "Lithium battery Owerri",
    "Solar inverter installation Nigeria",
    "Commercial solar Owerri",
    "Obifoks Global & Felicity Nig Ltd",
  ],
  openGraph: {
    title: "Obifoks Global | Premium Solar Energy & Felicity Equipment Owerri",
    description:
      "Reliable solar power solutions, lithium battery storage, and commercial solar microgrids in Owerri, Imo State.",
    url: "https://obifoksglobal.com",
    siteName: "Obifoks Global & Felicity Nig. Ltd.",
    locale: "en_NG",
    type: "website",
  },
  alternates: {
    canonical: "https://obifoksglobal.com",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white flex flex-col selection:bg-[#EE7130] selection:text-white">
      <Header />
      <Hero />
      <ProductCatalog />
      <EnergySolutions />
      <WhyObifoks />
      <Projects />
      <Brands />
      <CTA />
      <ContactUs />
      <Footer />
    </main>
  );
}