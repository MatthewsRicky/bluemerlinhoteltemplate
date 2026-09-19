import type { Metadata } from "next";
import RoomsHero from "@/components/rooms/RoomsHero";
import RoomGrid from "@/components/rooms/RoomGrid";
import BookingForm from "@/components/booking/BookingForm";

export const metadata: Metadata = {
  title: "Rooms & Suites",
  description:
    "Explore rooms and suites at Blue Marlin Beach Hotel in Diani Beach, Kenya.",
};

export default function RoomsPage() {
  return (
    <main>
      <RoomsHero />
      <RoomGrid />
      <BookingForm />
    </main>
  );
}
