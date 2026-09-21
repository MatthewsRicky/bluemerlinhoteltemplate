import type { Metadata } from "next";
import DiningHero from "@/components/dining/DiningHero";
import DiningExperience from "@/components/dining/DiningExperience";
import MenuHighlight from "@/components/dining/MenuHighlight";
import DiningCTA from "@/components/dining/DiningCTA";

export const metadata: Metadata = {
  title: "Beachfront Dining in Diani Beach",
  description:
    "Enjoy seafood, coastal flavours and relaxed beachfront dining at Blue Marlin Beach Restaurant beside the Indian Ocean in Diani Beach.",
  alternates: {
    canonical: "/dining",
  },
};

export default function DiningPage() {
  return (
    <main>
      <DiningHero />
      <DiningExperience />
      <MenuHighlight />
      <DiningCTA />
    </main>
  );
}
