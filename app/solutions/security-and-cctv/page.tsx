import type { Metadata } from "next";
import SolutionDetailView from "@/components/solutions/solution-detail-view";
import { SOLUTIONS_DATA } from "@/lib/solutions-data";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Solar CCTV Cameras & Security Surveillance | Obifoks Global Owerri",
  description:
    "Off-grid solar powered IP CCTV camera systems, 4G smart PTZ cameras, solar security poles, and continuous remote monitoring in Owerri, Imo State.",
  keywords: [
    "Solar CCTV installation Owerri",
    "Off grid solar IP cameras Imo State",
    "4G PTZ security cameras Nigeria",
    "Solar security pole installation",
    "Obifoks Global security CCTV",
  ],
  openGraph: {
    title: "Solar Powered CCTV & Industrial Security Systems | Obifoks Global",
    description:
      "Uninterrupted 24/7 security monitoring powered by dedicated solar backup for estates, commercial plazas, and fueling stations.",
    url: "https://obifoksglobal.com/solutions/security-and-cctv",
    siteName: "Obifoks Global & Felicity Nig. Ltd.",
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solar Powered CCTV Security Systems | Obifoks Global",
    description:
      "24/7 solar CCTV security systems with remote mobile viewing and night vision in Owerri, Imo State.",
  },
  alternates: {
    canonical: "https://obifoksglobal.com/solutions/security-and-cctv",
  },
};

export default function SecurityAndCCTVPage() {
  const solution = SOLUTIONS_DATA.find((s) => s.slug === "security-and-cctv");
  if (!solution) return notFound();

  return <SolutionDetailView solution={solution} />;
}
