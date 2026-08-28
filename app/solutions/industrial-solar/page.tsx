import SolutionDetailView from "@/components/solutions/solution-detail-view";
import { SOLUTIONS_DATA } from "@/lib/solutions-data";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Industrial Solar Microgrids | Obifoks Global & Felicity Nig. Ltd.",
  description: "Megawatt-capacity industrial solar installations and containerized energy storage for factories and manufacturing plants.",
};

export default function IndustrialSolarPage() {
  const solution = SOLUTIONS_DATA.find((s) => s.slug === "industrial-solar");
  if (!solution) return notFound();

  return <SolutionDetailView solution={solution} />;
}
