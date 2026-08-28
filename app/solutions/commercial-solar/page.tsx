import SolutionDetailView from "@/components/solutions/solution-detail-view";
import { SOLUTIONS_DATA } from "@/lib/solutions-data";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Commercial Solar Power | Obifoks Global & Felicity Nig. Ltd.",
  description: "High-efficiency commercial solar installations for offices, plazas, and businesses in Owerri, Imo State.",
};

export default function CommercialSolarPage() {
  const solution = SOLUTIONS_DATA.find((s) => s.slug === "commercial-solar");
  if (!solution) return notFound();

  return <SolutionDetailView solution={solution} />;
}
