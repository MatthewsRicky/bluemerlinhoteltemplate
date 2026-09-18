import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

export default function WellnessPreview() {
  return (
    <section className="overflow-hidden bg-[#d8c3a5] py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-center lg:gap-20">
          <Reveal y={30}>
            <div className="max-w-md">
              <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#082f49]/60">
                Wellness
              </p>

              <h2 className="mt-5 font-display text-5xl leading-[0.88] text-[#082f49] sm:text-6xl lg:text-7xl">
                Make room
                <br />
                to breathe.
              </h2>

              <p className="mt-7 text-sm leading-8 text-[#082f49]/65 sm:text-base">
                Ease into slower days with massage, spa treatments, yoga and
                spaces designed for rest and renewal.
              </p>

              <Link
                href="/wellness"
                className="mt-8 inline-flex border border-[#082f49] px-6 py-4 text-[10px] font-medium uppercase tracking-[0.2em] text-[#082f49] transition-colors hover:bg-[#082f49] hover:text-[#f6f1e8]"
              >
                Explore Wellness
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.1} y={35}>
            <div className="relative aspect-[5/4] overflow-hidden bg-[#f6f1e8]">
              <Image
                src="/images/wellness/blue-marlin-wellness.avif"
                alt="Wellness at Blue Marlin Beach Hotel"
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
