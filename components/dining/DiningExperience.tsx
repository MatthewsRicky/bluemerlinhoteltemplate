import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function DiningExperience() {
  return (
    <section className="overflow-hidden bg-[#fffdf9] py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-20">
          <Reveal y={30}>
            <div className="relative aspect-[4/3] overflow-hidden bg-[#f6f1e8]">
              <Image
                src="/images/dining/blue-marlin-restaurant.avif"
                alt="Blue Marlin Beach Restaurant"
                fill
                className="object-cover transition-transform duration-700 hover:scale-[1.02]"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1} y={30}>
            <div>
              <SectionHeading
                eyebrow="Blue Marlin Beach Restaurant"
                title="Where the stay meets the sea."
                description="Just as the ocean shapes the experience of staying at Blue Marlin, it shapes the food. The beachfront restaurant brings together fresh seafood, coastal flavours and a relaxed setting overlooking Diani Beach."
              />

              <div className="mt-10 space-y-7 border-t border-[#082f49]/15 pt-7">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-[#b99a62]">
                    Since 2008
                  </p>

                  <p className="mt-3 text-sm leading-7 text-[#1d2529]/60">
                    Blue Marlin Beach Restaurant has been part of the Diani
                    dining scene since 2008, serving locals and visitors beside
                    the ocean.
                  </p>
                </div>

                <div>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-[#b99a62]">
                    The kitchen
                  </p>

                  <p className="mt-3 text-sm leading-7 text-[#1d2529]/60">
                    The current menu features seafood alongside coastal,
                    Mediterranean and international-inspired dishes, with
                    options ranging from salads and pasta to pizza, grilled
                    seafood and steaks.
                  </p>
                </div>

                <div>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-[#b99a62]">
                    By the water
                  </p>

                  <p className="mt-3 text-sm leading-7 text-[#1d2529]/60">
                    A beachfront setting makes the restaurant a natural part of
                    the Blue Marlin stay, whether you're joining us for a meal,
                    a drink or an evening by the ocean.
                  </p>
                </div>
              </div>

              <a
                href="https://bluemerlintemplate.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-9 inline-flex bg-[#082f49] px-7 py-4 text-[10px] font-medium uppercase tracking-[0.2em] text-[#f6f1e8] transition-colors hover:bg-[#0f4c5c]"
              >
                Explore the Restaurant
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
