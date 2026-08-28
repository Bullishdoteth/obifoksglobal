import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ConsentBanner from "@/components/consentBanner";
import { CartProvider } from "@/context/cart-context";
import CartSidebar from "@/components/shop/cart";
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <CartProvider>
          {children}
          <CartSidebar />
        </CartProvider>
        <ConsentBanner />
      </body>
    </html>
  );
}
