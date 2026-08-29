import type { Metadata } from "next";
import SolutionDetailView from "@/components/solutions/solution-detail-view";
import { SOLUTIONS_DATA } from "@/lib/solutions-data";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Solar Street Lights & Outdoor Floodlights | Obifoks Global Owerri",
  description:
    "All-in-one integrated and split solar street lights, heavy-duty LED floodlights, and automatic dusk-to-dawn perimeter lighting for estates and highways in Nigeria.",
  keywords: [
    "Solar street lights Owerri",
    "All in one solar street light Nigeria",
    "Felicity solar floodlight Imo State",
    "Estate solar street lighting installation",
    "Obifoks Global solar lighting",
  ],
  openGraph: {
    title: "Solar Street Lights & Outdoor Floodlights | Obifoks Global",
    description:
      "Autonomous dusk-to-dawn solar street lighting with high-lumen LEDs and LiFePO4 batteries for commercial compounds and residential estates.",
    url: "https://obifoksglobal.com/solutions/solar-lighting",
    siteName: "Obifoks Global & Felicity Nig. Ltd.",
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solar Street Lights & Outdoor Floodlights | Obifoks Global",
    description:
      "High-brightness Felicity solar street lights and floodlights for estates, roads, and commercial properties.",
  },
  alternates: {
    canonical: "https://obifoksglobal.com/solutions/solar-lighting",
  },
};

export default function SolarLightingPage() {
  const solution = SOLUTIONS_DATA.find((s) => s.slug === "solar-lighting");
  if (!solution) return notFound();

  return <SolutionDetailView solution={solution} />;
}
