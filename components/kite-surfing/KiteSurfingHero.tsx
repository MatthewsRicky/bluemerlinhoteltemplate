import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

const HOTEL_BOOKING_URL = "/book";

export default function KiteSurfingHero() {
  return (
    <section className="relative min-h-[82vh] overflow-hidden bg-[#082f49]">
      <div className="absolute inset-0">
        <Image
          src="/images/kitesurfing/kitesurfing-hero.avif"
          alt="Kite surfing on the Kenyan coast near Blue Marlin Beach Hotel"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-[#082f49]/35" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#082f49] via-[#082f49]/25 to-transparent" />
      </div>

      <div className="relative z-10 flex min-h-[82vh] items-end">
        <div className="mx-auto w-full max-w-[1400px] px-5 pb-16 sm:px-8 sm:pb-20 lg:px-10 lg:pb-24">
          <Reveal>
            <div className="max-w-4xl">
              <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.3em] text-[#d8c3a5]">
                Blue Marlin Beach Hotel
              </p>

              <h1 className="font-display text-6xl leading-[0.86] tracking-tight text-[#fffdf9] sm:text-7xl lg:text-9xl">
                Ride the
                <br />
                Indian Ocean.
              </h1>

              <p className="mt-7 max-w-xl text-sm leading-7 text-[#fffdf9]/75 sm:text-base">
                Discover kite surfing from our beachfront location on the Kenyan
                coast, with professional instruction, equipment and support from
                H2O Extreme.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={HOTEL_BOOKING_URL}
                  className="bg-[#f6f1e8] px-7 py-4 text-center text-[10px] font-medium uppercase tracking-[0.2em] text-[#082f49] transition-colors hover:bg-[#d8c3a5]"
                >
                  Plan Your Stay
                </Link>

                <Link
                  href="#kite-services"
                  className="border border-[#fffdf9]/30 px-7 py-4 text-center text-[10px] font-medium uppercase tracking-[0.2em] text-[#fffdf9] transition-colors hover:bg-[#fffdf9]/10"
                >
                  Explore Kite Surfing
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
