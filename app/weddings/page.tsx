import type { Metadata } from "next";

import WeddingExperience from "@/components/weddings/WeddingExperience";
import WeddingDetails from "@/components/weddings/WeddingDetails";
import WeddingsCTA from "@/components/weddings/WeddingsCTA";
import WeddingsHero from "@/components/weddings/WeddingsHero";

export const metadata: Metadata = {
  title: "Beach Weddings in Diani Beach",
  description:
    "Celebrate beside the Indian Ocean with a beachfront wedding at Blue Marlin Beach Hotel in Diani Beach, Kenya.",
  alternates: {
    canonical: "/weddings",
  },
};

export default function WeddingsPage() {
  return (
    <main>
      <WeddingsHero />
      <WeddingExperience />
      <WeddingDetails />
      <WeddingsCTA />
    </main>
  );
}
