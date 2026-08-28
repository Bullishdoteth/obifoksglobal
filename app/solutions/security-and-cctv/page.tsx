import SolutionDetailView from "@/components/solutions/solution-detail-view";
import { SOLUTIONS_DATA } from "@/lib/solutions-data";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Solar CCTV & Security Systems | Obifoks Global & Felicity Nig. Ltd.",
  description: "Off-grid solar powered IP CCTV camera systems, 4G smart PTZ cameras, and continuous remote security monitoring.",
};

export default function SecurityAndCCTVPage() {
  const solution = SOLUTIONS_DATA.find((s) => s.slug === "security-and-cctv");
  if (!solution) return notFound();

  return <SolutionDetailView solution={solution} />;
}
