import Header from "@/components/landing/header";
import PageHeader from "@/components/page-header";
import AboutHero from "@/components/about-us/about-hero";
import GovernmentRegistration from "@/components/about-us/government-registration";
import ManagementFounder from "@/components/about-us/management-founder";
import TeamSection from "@/components/about-us/team-section";
import CompanyValues from "@/components/about-us/company-values";
import ContactUs from "@/components/landing/contact-us";
import Footer from "@/components/landing/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Obifoks Global",
  description:
    "Learn about Obifoks Global & Felicity Nig. Ltd., CAC legal registration credentials, Founder & Managing Director Obinna Nwachukwu, certified engineering team, and commitment to genuine solar energy in Imo State.",
  keywords: [
    "About Obifoks Global",
    "Obifoks Global CAC registration",
    "Felicity Solar distributor Owerri",
    "Obinna Nwachukwu Obifoks",
    "Solar engineers Imo State",
    "Obifoks Global company profile",
  ],
  openGraph: {
    title: "About Obifoks Global & Felicity Nig. Ltd. | Corporate Profile",
    description:
      "Official corporate profile, CAC registration, executive management, and engineering standards of Obifoks Global in Owerri, Imo State.",
    url: "https://obifoksglobal.com/about-us",
    siteName: "Obifoks Global & Felicity Nig. Ltd.",
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Obifoks Global & Felicity Nig. Ltd.",
    description:
      "Learn about our incorporated legal entity, executive management, and engineering team powering Nigeria with reliable solar energy.",
  },
  alternates: {
    canonical: "https://obifoksglobal.com/about-us",
  },
};

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900 flex flex-col selection:bg-zinc-900 selection:text-white">
      <Header />
      <PageHeader
        title="About Us"
        subtitle="Powering Nigeria with Reliable Solar & Renewable Energy Solutions"
      />
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
