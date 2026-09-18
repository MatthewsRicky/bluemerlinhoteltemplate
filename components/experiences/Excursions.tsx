import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { excursions } from "@/data/experiences";

export default function Excursions() {
  return (
    <section className="overflow-hidden bg-[#f6f1e8] py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
        <div className="max-w-3xl">
          <Reveal y={30}>
            <SectionHeading
              eyebrow="Go further"
              title="There is more to the coast than the beach."
              description="Diani is a gateway to landscapes, wildlife and cultural experiences that reveal another side of Kenya's South Coast."
            />
          </Reveal>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-2 lg:mt-24 lg:gap-x-12 lg:gap-y-20">
          {excursions.map((experience, index) => (
            <Reveal key={experience.title} delay={index * 0.06} y={25}>
              <article className="group">
                <div className="relative aspect-[4/3] overflow-hidden bg-[#fffdf9]">
                  <Image
                    src={experience.image}
                    alt={experience.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                <div className="pt-6">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <p className="text-[9px] uppercase tracking-[0.2em] text-[#b99a62]">
                        0{index + 1}
                      </p>

                      <h3 className="mt-3 font-display text-3xl leading-none text-[#082f49] sm:text-4xl">
                        {experience.title}
                      </h3>
                    </div>

                    <span className="pt-1 text-lg text-[#b99a62] transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </div>

                  <p className="mt-4 max-w-lg text-sm leading-7 text-[#1d2529]/55">
                    {experience.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
