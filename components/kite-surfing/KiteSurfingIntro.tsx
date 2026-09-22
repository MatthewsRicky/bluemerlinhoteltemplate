import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

export default function KiteSurfingIntro() {
  return (
    <section className="bg-[#fffdf9] py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden bg-[#d8c3a5]">
              <Image
                src="/images/experiences/kite-surfing.avif"
                alt="Kite surfer riding along the Diani coast"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="max-w-2xl">
              <div className="flex flex-col justify-items-start items-center gap-2">
                <Image
                  src="/images/kitesurfing/h2oextreme-logo.avif"
                  width={180}
                  height={20}
                  alt="h20 extreme logo"
                />
                <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#b99a62]">
                  H2O Extreme
                </p>
              </div>

              <h2 className="mt-4 font-display text-5xl leading-[0.92] tracking-tight text-[#082f49] sm:text-6xl lg:text-7xl">
                Learn, ride and explore the coast.
              </h2>

              <div className="mt-7 space-y-5 text-sm leading-7 text-[#1d2529]/65 sm:text-base">
                <p>
                  Blue Marlin Beach Hotel hosts H2O Extreme, an established
                  kiteboarding school operating on Kenya&apos;s south coast.
                </p>

                <p>
                  Whether you are stepping onto a board for the first time,
                  returning to the sport or looking for focused individual
                  coaching, the centre offers instruction for different levels
                  of experience.
                </p>

                <p>
                  Courses include the necessary safety gear and kite equipment,
                  with instruction delivered according to IKO standards.
                </p>
              </div>

              <div className="mt-9 border-l border-[#b99a62] pl-5">
                <p className="text-sm leading-7 text-[#082f49]">
                  Beginner-friendly water and wind conditions make the coast a
                  natural setting for learning and progressing on the water.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
