import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ConsentBanner from "@/components/consentBanner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Obifoks Global & Felicity Nig. Ltd",
  description: "Shop reliable solar panels, lithium batteries, inverters, CCTV, street lights and energy accessories from Obifoks Global in Owerri, Imo State. Professional service and affordable energy solutions.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <ConsentBanner />
      </body>
    </html>
  );
}

