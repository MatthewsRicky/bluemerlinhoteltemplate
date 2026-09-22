import type { Metadata } from "next";
import KiteSurfingHero from "@/components/kite-surfing/KiteSurfingHero";
import KiteSurfingIntro from "@/components/kite-surfing/KiteSurfingIntro";
import KiteSurfingServices from "@/components/kite-surfing/KiteSurfingServices";
import KiteSurfingBenefits from "@/components/kite-surfing/KiteSurfingBenefits";
import KiteSurfingCTA from "@/components/kite-surfing/KiteSurfingCTA";

export const metadata: Metadata = {
  title: "Kite Surfing in Diani Beach",
  description:
    "Experience kite surfing at Blue Marlin Beach Hotel in Diani Beach with H2O Extreme. Discover lessons, coaching, equipment rental and support for riders.",
  alternates: {
    canonical: "/kite-surfing",
  },
  openGraph: {
    title: "Kite Surfing in Diani Beach | Blue Marlin Beach Hotel",
    description:
      "Discover kite surfing, professional instruction, equipment rental and rider support at Blue Marlin Beach Hotel in Diani Beach.",
    images: [
      {
        url: "/images/experiences/kite-surfing.avif",
        alt: "Kite surfing at Blue Marlin Beach Hotel",
      },
    ],
  },
};

export default function KiteSurfingPage() {
  return (
    <main>
      <KiteSurfingHero />
      <KiteSurfingIntro />
      <KiteSurfingServices />
      <KiteSurfingBenefits />
      <KiteSurfingCTA />
    </main>
  );
}
