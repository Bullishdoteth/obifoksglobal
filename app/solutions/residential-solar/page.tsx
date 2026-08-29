import type { Metadata } from "next";
import SolutionDetailView from "@/components/solutions/solution-detail-view";
import { SOLUTIONS_DATA } from "@/lib/solutions-data";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Residential Solar Systems & Home Battery Backup | Obifoks Global",
  description:
    "Clean, silent 24/7 home solar power systems, hybrid inverters, and lithium battery backup for homes and duplexes in Owerri, Imo State.",
  keywords: [
    "Residential solar power Owerri",
    "Home solar inverter Imo State",
    "Lithium battery home backup Nigeria",
    "Residential Felicity solar kit",
    "Obifoks Global residential solar",
  ],
  openGraph: {
    title: "Residential Home Solar Systems & Battery Backup | Obifoks Global",
    description:
      "Engineered home solar microgrids providing 24/7 silent electricity for refrigerators, ACs, and home appliances in Owerri.",
    url: "https://obifoksglobal.com/solutions/residential-solar",
    siteName: "Obifoks Global & Felicity Nig. Ltd.",
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Residential Solar Systems | Obifoks Global",
    description:
      "Power your home with 24/7 clean solar energy and long-life Felicity lithium battery storage.",
  },
  alternates: {
    canonical: "https://obifoksglobal.com/solutions/residential-solar",
  },
};

export default function ResidentialSolarPage() {
  const solution = SOLUTIONS_DATA.find((s) => s.slug === "residential-solar");
  if (!solution) return notFound();

  return <SolutionDetailView solution={solution} />;
}
