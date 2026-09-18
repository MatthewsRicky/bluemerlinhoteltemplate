import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const experiences = [
  {
    title: "On the water",
    description:
      "Kite surfing, diving, snorkelling, boat excursions and fishing along the South Coast.",
    image: "/images/gallery/gallery-1.avif",
  },
  {
    title: "Explore the coast",
    description:
      "Discover the landscapes, culture and wildlife surrounding Diani and the Kenyan coast.",
    image: "/images/experiences/explore.avif",
  },
  {
    title: "Slow days",
    description:
      "Beach walks, warm water and unhurried afternoons with nowhere else to be.",
    image: "/images/experiences/blue-marlin-beach.avif",
  },
];

export default function ExperiencesPreview() {
  return (
    <section className="overflow-hidden bg-[#f6f1e8] py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
        <Reveal>
          <SectionHeading
            eyebrow="Experience Diani"
            title="More than a place to stay."
            description="From ocean adventures to excursions along the South Coast, make your stay as active or as relaxed as you want it to be."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3 lg:gap-8">
          {experiences.map((experience, index) => (
            <Reveal key={experience.title} delay={index * 0.07} y={25}>
              <Link href="/experiences" className="group block">
                <div className="relative aspect-[4/5] overflow-hidden bg-[#fffdf9]">
                  <Image
                    src={experience.image}
                    alt={experience.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>

                <div className="pt-5">
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <h3 className="font-display text-3xl leading-none text-[#082f49]">
                        {experience.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-[#1d2529]/55">
                        {experience.description}
                      </p>
                    </div>

                    <span className="pt-1 text-[#b99a62] transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
