import Header from "@/components/landing/header";
import PageHeader from "@/components/page-header";
import ContactUs from "@/components/landing/contact-us";
import Footer from "@/components/landing/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us & Owerri Showroom Address | Obifoks Global",
  description:
    "Visit our corporate showroom at No. 6 Wetheral Road, Owerri, Imo State or contact our solar engineers via WhatsApp/Phone for custom solar quote consultations.",
  keywords: [
    "Contact Obifoks Global",
    "Obifoks Global address Owerri",
    "Solar store Wetheral Road Owerri",
    "Felicity solar showroom Imo State",
    "Request solar quote Owerri",
    "Obifoks Global phone number",
  ],
  openGraph: {
    title: "Contact Obifoks Global & Felicity Nig. Ltd. | Owerri Showroom",
    description:
      "Get in touch with our solar engineering team at No. 6 Wetheral Road, Owerri for custom solar installation quotes and warranty support.",
    url: "https://obifoksglobal.com/contact",
    siteName: "Obifoks Global & Felicity Nig. Ltd.",
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Obifoks Global & Felicity Nig. Ltd.",
    description:
      "Visit our showroom in Owerri or request a custom solar and battery sizing quote online.",
  },
  alternates: {
    canonical: "https://obifoksglobal.com/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white flex flex-col selection:bg-zinc-900 selection:text-white">
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
