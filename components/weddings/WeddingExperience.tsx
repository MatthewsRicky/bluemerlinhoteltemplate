import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function WeddingExperience() {
  return (
    <section className="overflow-hidden bg-[#fffdf9] py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
          <Reveal y={30}>
            <div>
              <SectionHeading
                eyebrow="Your celebration"
                title="A wedding shaped by the coast."
                description="Exchange vows beside the Indian Ocean, celebrate with the people closest to you and let the natural beauty of Diani become part of the occasion."
              />

              <div className="mt-10 space-y-6 border-t border-[#082f49]/15 pt-7">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-[#b99a62]">
                    The setting
                  </p>

                  <p className="mt-3 text-sm leading-7 text-[#1d2529]/60">
                    From the beach and ocean views to the hotel's tropical
                    surroundings, the setting provides a naturally memorable
                    backdrop for your celebration.
                  </p>
                </div>

                <div>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-[#b99a62]">
                    Your guests
                  </p>

                  <p className="mt-3 text-sm leading-7 text-[#1d2529]/60">
                    With accommodation on site, your wedding can become more
                    than a single day — giving friends and family the
                    opportunity to enjoy Diani together.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} y={30}>
            <div className="relative aspect-[4/5] overflow-hidden bg-[#f6f1e8]">
              <Image
                src="/images/weddings/wedding-beach.avif"
                alt="Wedding celebration beside the ocean at Blue Marlin Beach Hotel"
                fill
                className="object-cover transition-transform duration-700 hover:scale-[1.02]"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
