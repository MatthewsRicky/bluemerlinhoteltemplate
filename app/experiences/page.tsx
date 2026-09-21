import type { Metadata } from "next";
import ExperiencesHero from "@/components/experiences/ExperiencesHero";
import WaterActivities from "@/components/experiences/WaterActivities";
import Excursions from "@/components/experiences/Excursions";
import ExperiencesCTA from "@/components/experiences/ExperiencesCTA";

export const metadata: Metadata = {
  title: "Diani Beach Experiences & Activities",
  description:
    "Discover water sports, diving, snorkelling, dhow excursions and coastal adventures around Diani Beach from Blue Marlin Beach Hotel.",
  alternates: {
    canonical: "/experiences",
  },
};
export default function ExperiencesPage() {
  return (
    <main>
      <ExperiencesHero />
      <WaterActivities />
      <Excursions />
      <ExperiencesCTA />
    </main>
  );
}
