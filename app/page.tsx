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
