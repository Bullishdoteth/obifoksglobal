import SolutionDetailView from "@/components/solutions/solution-detail-view";
import { SOLUTIONS_DATA } from "@/lib/solutions-data";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Solar Outdoor & Street Lighting | Obifoks Global & Felicity Nig. Ltd.",
  description: "All-in-one and split solar street lights, floodlights, and autonomous perimeter illumination for estates, roads, and compounds.",
};

export default function SolarLightingPage() {
  const solution = SOLUTIONS_DATA.find((s) => s.slug === "solar-lighting");
  if (!solution) return notFound();

  return <SolutionDetailView solution={solution} />;
}
