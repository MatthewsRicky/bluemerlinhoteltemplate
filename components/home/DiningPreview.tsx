import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

export default function DiningPreview() {
  return (
    <section className="overflow-hidden bg-[#fffdf9] py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-end lg:gap-16">
          <Reveal y={30}>
            <div className="relative aspect-[16/10] overflow-hidden bg-[#f6f1e8]">
              <Image
                src="/images/dining/blue-marlin-restaurant.avif"
                alt="Blue Marlin Beach Restaurant by the Indian Ocean"
                fill
                className="object-cover transition-transform duration-700 hover:scale-[1.02]"
                sizes="(max-width: 1024px) 100vw, 70vw"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1} y={30}>
            <div className="max-w-md pb-2">
              <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#b99a62]">
                Dining
              </p>

              <h2 className="mt-5 font-display text-5xl leading-[0.9] text-[#082f49] sm:text-6xl">
                Fresh from
                <br />
                the coast.
              </h2>

              <p className="mt-6 text-sm leading-8 text-[#1d2529]/60 sm:text-base">
                Enjoy seafood, sushi, drinks and relaxed beachfront dining at
                the Blue Marlin Beach Restaurant.
              </p>

              <Link
                href="/dining"
                className="mt-8 inline-flex border-b border-[#082f49]/25 pb-2 text-[10px] font-medium uppercase tracking-[0.2em] text-[#082f49] transition-colors hover:border-[#082f49]"
              >
                Discover Dining
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
