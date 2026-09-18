import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { spaExperiences } from "@/data/wellness";

export default function Spa() {
  return (
    <section className="overflow-hidden bg-[#f6f1e8] py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-20">
          <Reveal y={30}>
            <div className="relative aspect-[4/5] overflow-hidden bg-[#fffdf9]">
              <Image
                src="/images/wellness/blue-marlin-spa.jpg"
                alt="Spa and relaxation at Blue Marlin Beach Hotel"
                fill
                className="object-cover transition-transform duration-700 hover:scale-[1.02]"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </div>
          </Reveal>

          <div>
            <Reveal delay={0.08} y={30}>
              <SectionHeading
                eyebrow="Spa & relaxation"
                title="Make room for stillness."
                description="After a day beside the ocean, take time to slow down. Blue Marlin's wellness offering creates space for simple rituals of rest and restoration."
              />
            </Reveal>

            <div className="mt-10 border-t border-[#082f49]/15">
              {spaExperiences.map((experience, index) => (
                <Reveal
                  key={experience.title}
                  delay={0.12 + index * 0.05}
                  y={20}
                >
                  <div className="border-b border-[#082f49]/10 py-6">
                    <div className="flex items-start gap-5">
                      <span className="pt-1 text-[9px] uppercase tracking-[0.2em] text-[#b99a62]">
                        0{index + 1}
                      </span>

                      <div>
                        <h3 className="font-display text-3xl leading-none text-[#082f49]">
                          {experience.title}
                        </h3>

                        <p className="mt-3 text-sm leading-7 text-[#1d2529]/55">
                          {experience.description}
                        </p>
                      </div>
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
