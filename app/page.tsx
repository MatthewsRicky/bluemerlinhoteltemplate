import type { Metadata } from "next";

import Hero from "@/components/home/Hero";
import Intro from "@/components/home/Intro";
import RoomsPreview from "@/components/home/RoomsPreview";
import BeachExperience from "@/components/home/BeachExperience";
import ExperiencesPreview from "@/components/home/ExperiencesPreview";
import DiningPreview from "@/components/home/DiningPreview";
import WellnessPreview from "@/components/home/WellnessPreview";
import WeddingsPreview from "@/components/home/WeddingsPreview";
import GalleryPreview from "@/components/home/GalleryPreview";
import BookingCTA from "@/components/home/BookingCTA";

export const metadata: Metadata = {
  title: "Boutique Beachfront Hotel in Diani Beach, Kenya",
  description:
    "Stay beside the Indian Ocean at Blue Marlin Beach Hotel in Diani Beach, Kenya. Explore ocean-view rooms, coastal experiences, wellness, dining and beachfront weddings.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Intro />
      <RoomsPreview />
      <BeachExperience />
      <ExperiencesPreview />
      <DiningPreview />
      <WellnessPreview />
      <WeddingsPreview />
      <GalleryPreview />
      <BookingCTA />
    </main>
  );
}
