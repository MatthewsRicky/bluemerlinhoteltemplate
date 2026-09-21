import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";

import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HotelStructuredData from "@/components/seo/HotelStructuredData";
import { siteConfig } from "@/data/site";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: "Blue Marlin Beach Hotel | Diani Beach, Kenya",
    template: "%s | Blue Marlin Beach Hotel",
  },

  description: siteConfig.description,

  applicationName: siteConfig.name,

  keywords: [
    "Blue Marlin Beach Hotel",
    "Diani Beach hotel",
    "Diani Beach accommodation",
    "beachfront hotel Diani",
    "hotels in Diani Beach Kenya",
    "Diani Beach Kenya",
    "Kenya coast hotel",
    "Diani beach resort",
    "Diani beach weddings",
    "Diani Beach honeymoon",
    "Diani Beach family accommodation",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Blue Marlin Beach Hotel | Diani Beach, Kenya",
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.images.og,
        width: 1200,
        height: 630,
        alt: "Blue Marlin Beach Hotel in Diani Beach, Kenya",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Blue Marlin Beach Hotel | Diani Beach, Kenya",
    description: siteConfig.description,
    images: [siteConfig.images.og],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${inter.variable} antialiased`}>
        <HotelStructuredData />

        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}
