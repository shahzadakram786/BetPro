import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// SEO Optimized Metadata for dealerbetpro.live
export const metadata: Metadata = {
  metadataBase: new URL("https://dealerbetpro.live"),
  title: {
    default: "Betpro Dealer Pakistan | Trusted Bpexch & Betpro ID Provider",
    template: "%s | Dealer Betpro" 
  },
  description: "Official Betpro Dealer in Pakistan. Get your Bpexch and Betpro IDs instantly. 24/7 fast deposits and withdrawals with 100% trust and security.",
  keywords: ["Betpro Dealer", "Betpro ID Pakistan", "Bpexch Dealer", "Online Betting ID Pakistan", "Betpro WhatsApp Number"],
  
  // Open Graph (Facebook, WhatsApp, LinkedIn)
  openGraph: {
    title: "Betpro Dealer Pakistan | Instant IDs & Fast Payouts",
    description: "Connect with the most trusted Betpro dealer. Instant account creation and 24/7 support via WhatsApp.",
    url: "https://dealerbetpro.live",
    siteName: "Dealer Betpro",
    images: [
      {
        url: "/og-image.jpg", // Make sure to put an image named og-image.jpg in your /public folder
        width: 1200,
        height: 630,
        alt: "Dealer Betpro Pakistan",
      },
    ],
    locale: "en_PK",
    type: "website",
  },

  // Twitter (X) Card
  twitter: {
    card: "summary_large_image",
    title: "Betpro Dealer Pakistan",
    description: "Pakistan's #1 Trusted Betpro and Bpexch Dealer.",
    images: ["/og-image.jpg"],
  },

  // Robots/Google Instructions
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}