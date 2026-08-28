import SolutionDetailView from "@/components/solutions/solution-detail-view";
import { SOLUTIONS_DATA } from "@/lib/solutions-data";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Lithium Energy Storage Systems | Obifoks Global & Felicity Nig. Ltd.",
  description: "Next-gen LiFePO4 lithium battery banks, wall & rack mount storage solutions with smart BMS for homes and commercial use.",
};

export default function EnergyStoragePage() {
  const solution = SOLUTIONS_DATA.find((s) => s.slug === "energy-storage");
  if (!solution) return notFound();

  return <SolutionDetailView solution={solution} />;
}
