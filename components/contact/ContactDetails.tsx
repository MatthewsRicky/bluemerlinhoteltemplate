import { Mail, MapPin, Phone } from "lucide-react";
import { hotelContact } from "@/data/contact";

export default function ContactDetails() {
  return (
    <div>
      <div className="grid gap-8 sm:grid-cols-2">
        <div className="border-t border-[#082f49]/15 pt-5">
          <MapPin className="h-5 w-5 text-[#b99a62]" />

          <p className="mt-5 text-[9px] uppercase tracking-[0.2em] text-[#082f49]/55">
            Address
          </p>

          <p className="mt-2 text-sm leading-7 text-[#1d2529]/70">
            {hotelContact.address}
          </p>
        </div>

        <div className="border-t border-[#082f49]/15 pt-5">
          <Mail className="h-5 w-5 text-[#b99a62]" />

          <p className="mt-5 text-[9px] uppercase tracking-[0.2em] text-[#082f49]/55">
            Email
          </p>

          <a
            href={`mailto:${hotelContact.email}`}
            className="mt-2 block break-words text-sm leading-7 text-[#1d2529]/70 hover:text-[#082f49]"
          >
            {hotelContact.email}
          </a>
        </div>

        <div className="border-t border-[#082f49]/15 pt-5">
          <Phone className="h-5 w-5 text-[#b99a62]" />

          <p className="mt-5 text-[9px] uppercase tracking-[0.2em] text-[#082f49]/55">
            Phone
          </p>

          <a
            href={`tel:${hotelContact.phone.replace(/\s/g, "")}`}
            className="mt-2 block text-sm leading-7 text-[#1d2529]/70 hover:text-[#082f49]"
          >
            {hotelContact.phone}
          </a>
        </div>

        <div className="border-t border-[#082f49]/15 pt-5">
          <p className="text-[9px] uppercase tracking-[0.2em] text-[#b99a62]">
            Diani Beach
          </p>

          <p className="mt-3 font-display text-3xl text-[#082f49]">
            Indian Ocean
          </p>

          <p className="mt-2 text-sm leading-6 text-[#1d2529]/60">
            A beachfront base for exploring the Kenyan coast.
          </p>
        </div>
      </div>

      <div className="mt-12 overflow-hidden bg-[#082f49]">
        <iframe
          title="Blue Marlin Beach Hotel location"
          src={`https://www.google.com/maps?q=${encodeURIComponent(
            hotelContact.mapQuery,
          )}&output=embed`}
          className="h-[320px] w-full border-0 grayscale"
          loading="lazy"
        />
      </div>
    </div>
  );
}
