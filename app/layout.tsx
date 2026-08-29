import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ConsentBanner from "@/components/consentBanner";
import { CartProvider } from "@/context/cart-context";
import CartSidebar from "@/components/shop/cart";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://obifoksglobal.com"),
  title: {
    default: "Obifoks Global & Felicity Nig. Ltd | Solar Panels, Lithium Batteries & Energy Solutions Owerri",
    template: "%s | Obifoks Global",
  },
  description:
    "Official distributor of genuine Felicity solar equipment in Owerri, Imo State. Shop Tier-1 monocrystalline solar panels, LiFePO4 lithium batteries, hybrid inverters, CCTV cameras, and solar street lights with warranty.",
  keywords: [
    "Solar panels Owerri",
    "Felicity Solar Imo State",
    "Lithium battery Owerri",
    "LiFePO4 battery Nigeria",
    "Hybrid solar inverter Owerri",
    "Solar power company Owerri",
    "CCTV surveillance cameras Owerri",
    "Solar street lights Nigeria",
    "Obifoks Global & Felicity Nig Ltd",
    "Solar installation Imo State",
  ],
  authors: [{ name: "Obifoks Global & Felicity Nig. Ltd." }],
  creator: "Obifoks Global",
  publisher: "Obifoks Global & Felicity Nig. Ltd.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Obifoks Global | Solar Energy, Lithium Storage & Security Infrastructure",
    description:
      "Powering Nigeria with reliable solar energy. Genuine Felicity solar panels, LiFePO4 batteries, inverters, and professional engineering in Owerri, Imo State.",
    url: "https://obifoksglobal.com",
    siteName: "Obifoks Global & Felicity Nig. Ltd.",
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Obifoks Global | Solar Panels & Lithium Batteries in Owerri",
    description:
      "Shop genuine Felicity solar panels, LiFePO4 batteries, and hybrid inverters with direct factory warranty.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <CartProvider>
          {children}
          <CartSidebar />
        </CartProvider>
        <ConsentBanner />
      </body>
    </html>
  );
}
