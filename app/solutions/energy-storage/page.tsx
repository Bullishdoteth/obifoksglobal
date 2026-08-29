import type { Metadata } from "next";
import SolutionDetailView from "@/components/solutions/solution-detail-view";
import { SOLUTIONS_DATA } from "@/lib/solutions-data";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Lithium LiFePO4 Energy Storage Systems | Obifoks Global Owerri",
  description:
    "Next-gen Felicity LiFePO4 lithium battery banks, wall & rack mount energy storage solutions with smart BMS for homes and commercial facilities.",
  keywords: [
    "Felicity lithium battery Owerri",
    "LiFePO4 battery storage Nigeria",
    "Wall-mounted lithium battery",
    "High voltage solar battery rack",
    "Obifoks Global lithium storage",
  ],
  openGraph: {
    title: "Lithium LiFePO4 Energy Storage Systems | Obifoks Global",
    description:
      "Long-cycle Felicity lithium iron phosphate batteries engineered for 6,000+ deep discharge cycles in Nigeria.",
    url: "https://obifoksglobal.com/solutions/energy-storage",
    siteName: "Obifoks Global & Felicity Nig. Ltd.",
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lithium LiFePO4 Energy Storage Systems | Obifoks Global",
    description:
      "High-reliability Felicity LiFePO4 lithium battery banks with smart BMS for residential and commercial solar setups.",
  },
  alternates: {
    canonical: "https://obifoksglobal.com/solutions/energy-storage",
  },
};

export default function EnergyStoragePage() {
  const solution = SOLUTIONS_DATA.find((s) => s.slug === "energy-storage");
  if (!solution) return notFound();

  return <SolutionDetailView solution={solution} />;
}
