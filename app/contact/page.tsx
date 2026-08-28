import Header from "@/components/landing/header";
import PageHeader from "@/components/page-header";
import ContactUs from "@/components/landing/contact-us";
import Footer from "@/components/landing/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Obifoks Global & Felicity Nig. Ltd.",
  description: "Visit our store at No. 6 Wetheral Road, Owerri or request a custom solar quote from Obifoks Global & Felicity Nig. Ltd.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white flex flex-col selection:bg-[#EE7130] selection:text-white">
      <Header />
      <PageHeader
        title="Contact Us"
        subtitle="Visit our showroom in Owerri or request a custom solar quote online."
      />
      <div>
        <ContactUs />
      </div>
      <Footer />
    </main>
  );
}
