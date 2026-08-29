import type { Metadata } from "next";
import SolutionDetailView from "@/components/solutions/solution-detail-view";
import { SOLUTIONS_DATA } from "@/lib/solutions-data";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Industrial Solar Microgrids & Factory Power | Obifoks Global",
  description:
    "Megawatt-capacity industrial solar microgrid installations, high-voltage LiFePO4 battery banks, and zero-downtime factory power in Nigeria.",
  keywords: [
    "Industrial solar microgrid Nigeria",
    "Factory solar power system Owerri",
    "Water bottling plant solar installation",
    "Megawatt industrial solar storage",
    "Obifoks Global industrial solar",
  ],
  openGraph: {
    title: "Industrial Solar Microgrids & Factory Power Solutions | Obifoks Global",
    description:
      "Eliminate daytime generator costs for factories, extrusion plants, and water bottling complexes across Nigeria.",
    url: "https://obifoksglobal.com/solutions/industrial-solar",
    siteName: "Obifoks Global & Felicity Nig. Ltd.",
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Industrial Solar Microgrids | Obifoks Global",
    description:
      "Heavy-duty industrial solar power installations and high-voltage lithium battery systems.",
  },
  alternates: {
    canonical: "https://obifoksglobal.com/solutions/industrial-solar",
  },
};

export default function IndustrialSolarPage() {
  const solution = SOLUTIONS_DATA.find((s) => s.slug === "industrial-solar");
  if (!solution) return notFound();

  return <SolutionDetailView solution={solution} />;
}
