import Header from "@/components/landing/header";
import AboutHero from "@/components/about-us/about-hero";
import GovernmentRegistration from "@/components/about-us/government-registration";
import ManagementFounder from "@/components/about-us/management-founder";
import TeamSection from "@/components/about-us/team-section";
import CompanyValues from "@/components/about-us/company-values";
import ContactUs from "@/components/landing/contact-us";
import Footer from "@/components/landing/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Obifoks Global & Felicity Nig. Ltd.",
  description:
    "Learn about Obifoks Global & Felicity Nig. Ltd., our CAC government registration details, Executive Founder, technical team, and commitment to reliable solar energy in Owerri, Imo State.",
};

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white flex flex-col selection:bg-[#EE7130] selection:text-white">
      <Header />
      <AboutHero />
      <GovernmentRegistration />
      <ManagementFounder />
      <TeamSection />
      <CompanyValues />
      <ContactUs />
      <Footer />
    </main>
  );
}
