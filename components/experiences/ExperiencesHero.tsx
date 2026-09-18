import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

export default function ExperiencesHero() {
  return (
    <section className="relative min-h-[72vh] overflow-hidden bg-[#082f49] text-[#f6f1e8]">
      <Image
        src="/images/experiences/blue-marlin-beach.avif"
        alt="Experiences at Blue Marlin Beach Hotel"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-[#082f49]/35" />

      <div className="absolute inset-0 bg-gradient-to-t from-[#082f49]/90 via-[#082f49]/20 to-[#082f49]/20" />

      <div className="relative z-10 flex min-h-[72vh] items-end">
        <div className="mx-auto w-full max-w-[1400px] px-5 pb-16 sm:px-8 sm:pb-20 lg:px-10 lg:pb-24">
          <Reveal y={30}>
            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#d8c3a5]">
              Beyond your room
            </p>
          </Reveal>

          <Reveal delay={0.08} y={35}>
            <h1 className="mt-5 max-w-5xl font-display text-6xl leading-[0.82] tracking-tight sm:text-8xl lg:text-[8.5rem]">
              Discover
              <br />
              the South Coast.
            </h1>
          </Reveal>

          <Reveal delay={0.16} y={25}>
            <p className="mt-7 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
              From the Indian Ocean to the forests and cultural heritage of the
              coast, Diani offers a different kind of escape.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
