import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

export default function BeachExperience() {
  return (
    <section className="relative overflow-hidden bg-[#082f49] text-[#f6f1e8]">
      <div className="relative min-h-[75vh]">
        <Image
          src="/images/hero/blue-marlin-beach.avif"
          alt="Diani Beach beside Blue Marlin Beach Hotel"
          fill
          className="object-cover"
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-[#082f49]/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#082f49]/85 via-[#082f49]/30 to-transparent" />

        <div className="relative z-10 flex min-h-[75vh] items-center">
          <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-10">
            <Reveal y={30}>
              <div className="max-w-xl">
                <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#d8c3a5]">
                  Life by the sea
                </p>

                <h2 className="mt-5 font-display text-6xl leading-[0.85] sm:text-7xl lg:text-8xl">
                  The beach is
                  <br />
                  your front door.
                </h2>

                <p className="mt-7 max-w-md text-sm leading-8 text-white/70 sm:text-base">
                  Step outside and into the easy rhythm of Diani Beach. Swim,
                  walk, explore or simply find a quiet place to watch the Indian
                  Ocean.
                </p>

                <Link
                  href="/experiences"
                  className="mt-8 inline-flex border border-[#d8c3a5] px-6 py-4 text-[10px] font-medium uppercase tracking-[0.2em] text-[#f6f1e8] transition-colors hover:bg-[#d8c3a5] hover:text-[#082f49]"
                >
                  Explore Diani
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
