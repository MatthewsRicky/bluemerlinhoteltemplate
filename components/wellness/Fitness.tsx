import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

export default function Fitness() {
  return (
    <section className="overflow-hidden bg-[#fffdf9] py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-center lg:gap-20">
          <Reveal y={30}>
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#b99a62]">
                Movement
              </p>

              <h2 className="mt-5 font-display text-5xl leading-[0.88] text-[#082f49] sm:text-6xl lg:text-7xl">
                Keep your
                <br />
                rhythm.
              </h2>

              <p className="mt-7 max-w-md text-sm leading-8 text-[#1d2529]/60 sm:text-base">
                For guests who like to stay active, the hotel offers a fitness
                space where movement can remain part of your routine while
                you're away.
              </p>

              <div className="mt-9 border-t border-[#082f49]/15 pt-6">
                <p className="text-[9px] uppercase tracking-[0.2em] text-[#b99a62]">
                  Fitness centre
                </p>

                <p className="mt-3 text-sm leading-7 text-[#1d2529]/55">
                  Start the morning with a workout, then step outside into the
                  coastal air.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} y={30}>
            <div className="relative aspect-[4/3] overflow-hidden bg-[#f6f1e8]">
              <Image
                src="/images/wellness/blue-marlin-gym.jpg"
                alt="Fitness centre at Blue Marlin Beach Hotel"
                fill
                className="object-cover transition-transform duration-700 hover:scale-[1.02]"
                sizes="(max-width: 1024px) 100vw, 70vw"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
