import type { Metadata } from "next";
import SolutionDetailView from "@/components/solutions/solution-detail-view";
import { SOLUTIONS_DATA } from "@/lib/solutions-data";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Commercial Solar Systems & Fueling Station Backup | Obifoks Global",
  description:
    "Heavy-duty commercial solar installations for offices, petroleum fueling stations, hotels, and plazas in Owerri, Imo State and Nigeria.",
  keywords: [
    "Commercial solar systems Owerri",
    "Fueling station solar backup Nigeria",
    "Plaza solar power Imo State",
    "Commercial hybrid solar inverter",
    "Obifoks Global commercial solar",
  ],
  openGraph: {
    title: "Commercial Solar Power & Business Battery Systems | Obifoks Global",
    description:
      "Drastically cut diesel generator costs for your commercial enterprise with 3-phase hybrid solar power systems in Nigeria.",
    url: "https://obifoksglobal.com/solutions/commercial-solar",
    siteName: "Obifoks Global & Felicity Nig. Ltd.",
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Commercial Solar Systems | Obifoks Global",
    description:
      "Reliable commercial solar and lithium battery storage systems engineered for businesses across Nigeria.",
  },
  alternates: {
    canonical: "https://obifoksglobal.com/solutions/commercial-solar",
  },
};

export default function CommercialSolarPage() {
  const solution = SOLUTIONS_DATA.find((s) => s.slug === "commercial-solar");
  if (!solution) return notFound();

  return <SolutionDetailView solution={solution} />;
}
