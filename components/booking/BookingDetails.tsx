import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { hotelContact } from "@/data/contact";

export default function BookingDetails() {
  return (
    <div className="space-y-10">
      <div>
        <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#b99a62]">
          Plan your stay
        </p>

        <h2 className="mt-4 max-w-lg font-display text-5xl leading-[0.95] text-[#082f49] sm:text-6xl">
          Tell us when you would like to be here.
        </h2>

        <p className="mt-6 max-w-md text-sm leading-7 text-[#1d2529]/65">
          Send a booking request and the reservations team can confirm
          availability and help you plan your stay at Blue Marlin Beach Hotel.
        </p>
      </div>

      <div className="space-y-6 border-t border-[#082f49]/15 pt-7">
        <div className="flex gap-4">
          <MapPin className="mt-1 h-5 w-5 shrink-0 text-[#b99a62]" />

          <div>
            <p className="text-[9px] uppercase tracking-[0.2em] text-[#082f49]/60">
              Find us
            </p>

            <p className="mt-2 text-sm leading-6 text-[#1d2529]/70">
              {hotelContact.address}
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <Mail className="mt-1 h-5 w-5 shrink-0 text-[#b99a62]" />

          <div>
            <p className="text-[9px] uppercase tracking-[0.2em] text-[#082f49]/60">
              Reservations
            </p>

            <a
              href={`mailto:${hotelContact.email}`}
              className="mt-2 block break-words text-sm text-[#1d2529]/70 transition-colors hover:text-[#082f49]"
            >
              {hotelContact.email}
            </a>
          </div>
        </div>

        <div className="flex gap-4">
          <Phone className="mt-1 h-5 w-5 shrink-0 text-[#b99a62]" />

          <div>
            <p className="text-[9px] uppercase tracking-[0.2em] text-[#082f49]/60">
              Call us
            </p>

            <a
              href={`tel:${hotelContact.phone.replace(/\s/g, "")}`}
              className="mt-2 block text-sm text-[#1d2529]/70 transition-colors hover:text-[#082f49]"
            >
              {hotelContact.phone}
            </a>
          </div>
        </div>
      </div>

      <Link
        href="/contact"
        className="inline-flex border border-[#082f49]/20 px-6 py-4 text-[10px] font-medium uppercase tracking-[0.2em] text-[#082f49] transition-colors hover:bg-[#082f49] hover:text-[#f6f1e8]"
      >
        Contact the Hotel
      </Link>
    </div>
  );
}
