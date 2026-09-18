import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { waterActivities } from "@/data/experiences";

export default function WaterActivities() {
  return (
    <section className="overflow-hidden bg-[#fffdf9] py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:items-start lg:gap-20">
          <Reveal y={30}>
            <div className="lg:sticky lg:top-32">
              <SectionHeading
                eyebrow="On the water"
                title="Let the ocean set the pace."
                description="The Indian Ocean is part of everyday life at Blue Marlin. Spend your time on the water, beneath it, or simply watching it move with the tide."
              />
            </div>
          </Reveal>

          <div>
            <Reveal delay={0.08} y={30}>
              <div className="relative aspect-[4/3] overflow-hidden bg-[#f6f1e8]">
                <Image
                  src="/images/gallery/blue-marlin-gallery-02.avif"
                  alt="Water activities along the Diani coast"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-[1.02]"
                  sizes="(max-width: 1024px) 100vw, 70vw"
                />
              </div>
            </Reveal>

            <div className="mt-10 border-t border-[#082f49]/15">
              {waterActivities.map((experience, index) => (
                <Reveal key={experience.title} delay={index * 0.04} y={20}>
                  <div className="group border-b border-[#082f49]/10 py-6 sm:py-7">
                    <div className="grid gap-3 sm:grid-cols-[60px_0.8fr_1.2fr] sm:items-start sm:gap-8">
                      <span className="text-[9px] uppercase tracking-[0.2em] text-[#b99a62]">
                        0{index + 1}
                      </span>

                      <h3 className="font-display text-3xl leading-none text-[#082f49] transition-transform duration-300 group-hover:translate-x-1 sm:text-4xl">
                        {experience.title}
                      </h3>

                      <p className="max-w-md text-sm leading-7 text-[#1d2529]/55">
                        {experience.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
