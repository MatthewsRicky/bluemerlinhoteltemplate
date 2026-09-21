import type { Metadata } from "next";
import BookingForm from "@/components/booking/BookingForm";
import BookingDetails from "@/components/booking/BookingDetails";

export const metadata: Metadata = {
  title: "Book Your Stay in Diani Beach",
  description:
    "Send a booking request to Blue Marlin Beach Hotel and plan your stay beside the Indian Ocean in Diani Beach, Kenya.",
  alternates: {
    canonical: "/book",
  },
};

export default function BookPage() {
  return (
    <main className="bg-[#f6f1e8]">
      <section className="bg-[#082f49] pb-20 pt-40 text-[#f6f1e8] sm:pb-24 sm:pt-48">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
          <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#d8c3a5]">
            Blue Marlin Beach Hotel
          </p>

          <h1 className="mt-5 max-w-5xl font-display text-6xl leading-[0.82] tracking-tight sm:text-8xl lg:text-[8.5rem]">
            Your stay
            <br />
            starts here.
          </h1>

          <p className="mt-7 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
            Tell us what you are looking for and our reservations team
            will help you plan your time in Diani Beach.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-28 lg:py-36">
        <div className="mx-auto grid max-w-[1400px] gap-14 px-5 sm:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24 lg:px-10">
          <BookingDetails />

          <div className="bg-[#082f49]/[0.04] p-2 sm:p-3">
            <BookingForm />
          </div>
        </div>
      </section>
    </main>
  );
}