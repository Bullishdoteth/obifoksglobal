import type { Metadata } from "next";
import ProductsClientView from "@/components/products/products-client-view";

export const metadata: Metadata = {
  title: "Solar Products & Felicity Equipment Catalog | Obifoks Global Owerri",
  description:
    "Explore genuine Felicity solar panels, LiFePO4 lithium batteries, hybrid inverters, CCTV cameras, and solar street lights with factory warranty in Owerri, Imo State.",
  keywords: [
    "Solar panels Owerri",
    "Felicity Solar Imo State",
    "Lithium battery Owerri",
    "LiFePO4 battery Nigeria",
    "Hybrid solar inverter Owerri",
    "CCTV surveillance cameras Owerri",
    "Solar street lights Nigeria",
    "Obifoks Global products",
  ],
  openGraph: {
    title: "Products Catalog | Obifoks Global Owerri",
    description:
      "Shop Tier-1 solar panels, long-life LiFePO4 lithium batteries, hybrid inverters, and CCTV security systems at Obifoks Global & Felicity Nig. Ltd.",
    url: "https://obifoksglobal.com/products",
    siteName: "Obifoks Global & Felicity Nig. Ltd.",
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solar Products & Felicity Equipment Catalog | Obifoks Global",
    description:
      "Explore genuine Felicity solar panels, LiFePO4 batteries, and inverters with warranty at Obifoks Global in Owerri.",
  },
  alternates: {
    canonical: "https://obifoksglobal.com/products",
  },
};

export default function ProductsPage() {
  return <ProductsClientView />;
}
