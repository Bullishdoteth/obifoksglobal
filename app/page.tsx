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