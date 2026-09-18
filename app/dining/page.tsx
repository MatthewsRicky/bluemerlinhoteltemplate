import type { Metadata } from "next";
import DiningHero from "@/components/dining/DiningHero";
import DiningExperience from "@/components/dining/DiningExperience";
import MenuHighlight from "@/components/dining/MenuHighlight";
import DiningCTA from "@/components/dining/DiningCTA";

export const metadata: Metadata = {
  title: "Dining",
  description:
    "Dine beside the Indian Ocean at Blue Marlin Beach Restaurant in Diani, with fresh seafood, coastal flavours and a relaxed beachfront setting.",
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
