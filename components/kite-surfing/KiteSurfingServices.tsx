import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { kiteSurfingServices } from "@/data/kite-surfing";

const serviceImages = [
  {
    image: "/images/kitesurfing/kitesurfing-1.avif",
    alt: "Kite surfing lesson at Blue Marlin Beach Hotel",
  },
  {
    image: "/images/kitesurfing/kitesurfing-2.avif",
    alt: "Kite surfing instruction on the Kenyan coast",
  },
  {
    image: "/images/kitesurfing/kitesurfing-3.avif",
    alt: "Kite surfer learning on the Diani coast",
  },
  {
    image: "/images/kitesurfing/kitesurfing-4.avif",
    alt: "Kite surfing equipment available for rental",
  },
];

export default function KiteSurfingServices() {
  return (
    <section
      id="kite-services"
      className="scroll-mt-24 bg-[#f6f1e8] py-20 sm:py-28 lg:py-36"
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#b99a62]">
              Lessons & rentals
            </p>

            <h2 className="mt-4 font-display text-5xl leading-[0.92] tracking-tight text-[#082f49] sm:text-6xl lg:text-7xl">
              Find your level.
              <br />
              Take to the water.
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-[#1d2529]/60 sm:text-base">
              Whether you are learning for the first time, returning to the
              sport or riding independently, H2O Extreme offers instruction and
              equipment support for your time on the water.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 space-y-6 lg:mt-20 lg:space-y-8">
          {kiteSurfingServices.map((service, index) => {
            const image = serviceImages[index];

            return (
              <Reveal key={service.title} delay={index * 0.05}>
                <article className="overflow-hidden bg-[#fffdf9]">
                  <div
                    className={`grid lg:grid-cols-2 ${
                      index % 2 !== 0 ? "lg:[&>div:first-child]:order-2" : ""
                    }`}
                  >
                    {/* Image */}
                    <div className="relative aspect-[4/3] min-h-[280px] bg-[#d8c3a5] lg:aspect-auto lg:min-h-[460px]">
                      <Image
                        src={image.image}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-[1.025]"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex items-center p-8 sm:p-10 lg:p-14 xl:p-16">
                      <div className="max-w-xl">
                        <div className="flex items-start gap-5">
                          <span className="pt-1 text-[10px] font-medium tracking-[0.2em] text-[#b99a62]">
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <div>
                            <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-[#b99a62]">
                              {index === 3
                                ? "Ride independently"
                                : "Kite surfing"}
                            </p>

                            <h3 className="mt-3 font-display text-4xl leading-[0.95] text-[#082f49] sm:text-5xl">
                              {service.title}
                            </h3>

                            <p className="mt-5 text-sm leading-7 text-[#1d2529]/60 sm:text-base">
                              {service.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}