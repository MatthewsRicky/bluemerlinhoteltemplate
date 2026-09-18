import type { Metadata } from "next";
import WellnessHero from "@/components/wellness/WellnessHero";
import Spa from "@/components/wellness/Spa";
import Fitness from "@/components/wellness/Fitness";
import Yoga from "@/components/wellness/Yoga";
import WellnessCTA from "@/components/wellness/WellnessCTA";

export const metadata: Metadata = {
  title: "Wellness",
  description:
    "Slow down at Blue Marlin Beach Hotel with spa treatments, massage, aromatherapy, fitness and yoga in Diani Beach.",
};

export default function WellnessPage() {
  return (
    <main>
      <WellnessHero />
      <Spa />
      <Fitness />
      <Yoga />
      <WellnessCTA />
    </main>
  );
}
