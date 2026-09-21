import type { Metadata } from "next";

import RoomsHero from "@/components/rooms/RoomsHero";
import RoomGrid from "@/components/rooms/RoomGrid";

export const metadata: Metadata = {
  title: "Rooms & Suites in Diani Beach",
  description:
    "Explore rooms and suites at Blue Marlin Beach Hotel in Diani Beach, including sea-view rooms, family accommodation, a private-pool family suite and Beach Suite.",
  alternates: {
    canonical: "/rooms",
  },
};

export default function RoomsPage() {
  return (
    <main>
      <RoomsHero />
      <RoomGrid />
    </main>
  );
}
