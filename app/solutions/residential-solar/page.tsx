import SolutionDetailView from "@/components/solutions/solution-detail-view";
import { SOLUTIONS_DATA } from "@/lib/solutions-data";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Residential Solar Systems | Obifoks Global & Felicity Nig. Ltd.",
  description: "Clean, reliable 24/7 home solar power systems, hybrid inverters, and lithium battery backup for homes in Owerri, Imo State.",
};

export default function ResidentialSolarPage() {
  const solution = SOLUTIONS_DATA.find((s) => s.slug === "residential-solar");
  if (!solution) return notFound();

  return <SolutionDetailView solution={solution} />;
}
