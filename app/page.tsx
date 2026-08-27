import Header from "@/components/landing/header";
import Hero from "@/components/landing/hero";
import Brands from "@/components/landing/brands";
import Products from "@/components/landing/products";
import CTA from "@/components/landing/cta";
import Footer from "@/components/landing/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white flex flex-col selection:bg-[#ff3b00] selection:text-white">
      <Header />
      <Hero />
      <Brands />
      <Products />
      <CTA />
      <Footer />
    </main>
  );
}