import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-[#082f49] text-white sm:min-h-screen">
      <Image
        src="/images/hero/blue-marlin-hotel-hero.avif"
        alt="Blue Marlin Beach Hotel overlooking Diani Beach"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-[#082f49]/35" />

      <div className="absolute inset-0 bg-gradient-to-t from-[#082f49]/85 via-[#082f49]/15 to-[#082f49]/25" />

      <div className="relative z-10 flex min-h-[92vh] items-end sm:min-h-screen">
        <div className="mx-auto w-full max-w-[1600px] px-5 pb-14 sm:px-8 sm:pb-20 lg:px-10 lg:pb-24">
          <div className="max-w-4xl">
            <Reveal y={30}>
              <p className="text-[10px] font-medium uppercase tracking-[0.32em] text-[#d8c3a5]">
                Diani Beach · Kenya
              </p>
            </Reveal>

            <Reveal delay={0.08} y={35}>
              <h1 className="mt-5 font-display text-6xl leading-[0.82] tracking-tight sm:text-8xl lg:text-[9rem]">
                Stay by the
                <br />
                Indian Ocean.
              </h1>
            </Reveal>

            <Reveal delay={0.16} y={25}>
              <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-8">
                <p className="max-w-md text-sm leading-7 text-white/75 sm:text-base">
                  A boutique beachfront escape where tropical gardens, ocean air
                  and the rhythm of the Kenyan coast come together.
                </p>

                <Link
                  href="/book"
                  className="inline-flex w-fit border border-[#d8c3a5] bg-[#d8c3a5] px-6 py-4 text-[10px] font-medium uppercase tracking-[0.2em] text-[#082f49] transition-colors hover:bg-transparent hover:text-[#f6f1e8]"
                >
                  Book Your Stay
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <div className="absolute bottom-7 right-5 z-10 hidden text-[9px] uppercase tracking-[0.25em] text-white/50 sm:block lg:right-10">
        Blue Marlin Beach Hotel
      </div>
    </section>
  );
}
