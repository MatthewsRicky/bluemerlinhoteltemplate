import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

const highlights = [
  {
    title: "Fresh Seafood",
    description:
      "Fish, prawns, calamari, octopus and lobster feature prominently across the current menu.",
  },
  {
    title: "Coastal Flavours",
    description:
      "Discover dishes such as Swahili fish alongside flavours inspired by the Kenyan coast.",
  },
  {
    title: "From Land & Garden",
    description:
      "The menu also includes salads, pasta, pizza, burgers, steak and other choices.",
  },
];

export default function MenuHighlight() {
  return (
    <section className="overflow-hidden bg-[#f6f1e8] py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:items-start lg:gap-20">
          <Reveal y={30}>
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#b99a62]">
                From the menu
              </p>

              <h2 className="mt-5 font-display text-5xl leading-[0.88] text-[#082f49] sm:text-6xl lg:text-7xl">
                Something
                <br />
                for every table.
              </h2>

              <p className="mt-7 max-w-md text-sm leading-8 text-[#1d2529]/60">
                Seafood is at the heart of the experience, but the menu offers
                plenty of choice for different tastes and occasions.
              </p>
            </div>
          </Reveal>

          <div className="border-t border-[#082f49]/15">
            {highlights.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.06} y={20}>
                <div className="grid gap-4 border-b border-[#082f49]/10 py-7 sm:grid-cols-[70px_0.7fr_1.3fr] sm:gap-8">
                  <span className="text-[9px] uppercase tracking-[0.2em] text-[#b99a62]">
                    0{index + 1}
                  </span>

                  <h3 className="font-display text-3xl leading-none text-[#082f49] sm:text-4xl">
                    {item.title}
                  </h3>

                  <p className="max-w-lg text-sm leading-7 text-[#1d2529]/55">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
