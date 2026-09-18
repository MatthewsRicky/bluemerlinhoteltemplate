import type { Metadata } from "next";
import ExperiencesHero from "@/components/experiences/ExperiencesHero";
import WaterActivities from "@/components/experiences/WaterActivities";
import Excursions from "@/components/experiences/Excursions";
import ExperiencesCTA from "@/components/experiences/ExperiencesCTA";

export const metadata: Metadata = {
  title: "Experiences",
  description:
    "Discover water activities, coastal adventures, excursions and experiences around Diani Beach and Kenya's South Coast.",
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
