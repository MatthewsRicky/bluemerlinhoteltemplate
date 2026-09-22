import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

export default function KiteSurfingCTA() {
  return (
    <section className="bg-[#d8c3a5] py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#082f49]/60">
            Make it part of your stay
          </p>

          <h2 className="mt-5 font-display text-5xl leading-[0.9] tracking-tight text-[#082f49] sm:text-6xl lg:text-8xl">
            Wake up.
            <br />
            Catch the wind.
          </h2>

          <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-[#082f49]/65 sm:text-base">
            Stay beside the ocean and build your Diani experience around the
            water.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/book"
              className="bg-[#082f49] px-7 py-4 text-[10px] font-medium uppercase tracking-[0.2em] text-[#f6f1e8] transition-colors hover:bg-[#0f4c5c]"
            >
              Book Your Stay
            </Link>

            <Link
              href="/experiences"
              className="border border-[#082f49]/25 px-7 py-4 text-[10px] font-medium uppercase tracking-[0.2em] text-[#082f49] transition-colors hover:bg-[#082f49] hover:text-[#f6f1e8]"
            >
              More Experiences
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
