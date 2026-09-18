import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

export default function Intro() {
  return (
    <section className="overflow-hidden bg-[#f6f1e8] py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-24">
          <Reveal y={30}>
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#b99a62]">
                Welcome to Blue Marlin
              </p>

              <h2 className="mt-5 font-display text-5xl leading-[0.9] text-[#082f49] sm:text-6xl lg:text-7xl">
                A slower
                <br />
                way to stay.
              </h2>

              <p className="mt-7 max-w-md text-sm leading-8 text-[#1d2529]/60 sm:text-base">
                On the shores of Diani Beach, Blue Marlin brings together
                comfortable accommodation, beachfront dining and the simple
                pleasures of life on Kenya's South Coast.
              </p>

              <a
                href="/about"
                className="mt-8 inline-flex border-b border-[#082f49]/30 pb-2 text-[10px] font-medium uppercase tracking-[0.2em] text-[#082f49] transition-colors hover:border-[#082f49] hover:text-[#0f4c5c]"
              >
                Discover Our Story
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1} y={35}>
            <div className="relative aspect-[4/5] overflow-hidden bg-[#fffdf9] sm:aspect-[5/4]">
              <Image
                src="/images/hero/blue-marlin-about-hero.avif"
                alt="Blue Marlin Beach Hotel tropical surroundings in Diani Beach"
                fill
                className="object-cover transition-transform duration-700 hover:scale-[1.02]"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
