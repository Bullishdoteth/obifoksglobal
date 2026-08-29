import type { Metadata } from "next";
import ProjectsClientView from "@/components/projects/projects-client-view";

export const metadata: Metadata = {
  title: "Commercial & Industrial Solar Projects | Obifoks Global",
  description:
    "Explore real-world commercial solar microgrids, fueling station backup systems, and factory power installations across Owerri, Enugu, Port Harcourt, and Nigeria.",
  keywords: [
    "Solar installations Nigeria",
    "Commercial solar projects Owerri",
    "Fueling station solar backup",
    "Industrial solar water bottling plant",
    "Solar microgrid portfolio Nigeria",
    "Obifoks Global projects",
  ],
  openGraph: {
    title: "Solar Installation Projects & Engineering Portfolio | Obifoks Global",
    description:
      "See how Obifoks Global powers water bottling facilities, petroleum retail stations, and commercial complexes with Tier-1 solar systems in Nigeria.",
    url: "https://obifoksglobal.com/projects",
    siteName: "Obifoks Global & Felicity Nig. Ltd.",
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Obifoks Global",
    description:
      "Explore commercial and industrial solar microgrids installed by Obifoks Global across Nigeria.",
  },
  alternates: {
    canonical: "https://obifoksglobal.com/projects",
  },
};

export default function ProjectsPage() {
  return <ProjectsClientView />;
}
