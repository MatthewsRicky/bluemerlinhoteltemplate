import type { Metadata } from "next";
import GalleryHero from "@/components/gallery/GalleryHero";
import GalleryGrid from "@/components/gallery/GalleryGrid";

export const metadata: Metadata = {
  title: "Hotel & Beach Gallery",
  description:
    "Explore Blue Marlin Beach Hotel, its rooms, tropical surroundings, beachfront setting and life along the Diani coast.",
  alternates: {
    canonical: "/gallery",
  },
};

export default function GalleryPage() {
  return (
    <main>
      <GalleryHero />
      <GalleryGrid />
    </main>
  );
}
