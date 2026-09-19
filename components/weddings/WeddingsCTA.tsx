import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

export default function WeddingsCTA() {
  return (
    <section className="overflow-hidden bg-[#082f49] py-28 text-[#f6f1e8] sm:py-36 lg:py-44">
      <div className="mx-auto max-w-[1000px] px-5 text-center sm:px-8 lg:px-10">
        <Reveal y={30}>
          <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#d8c3a5]">
            Begin planning
          </p>

          <h2 className="mt-5 font-display text-6xl leading-[0.85] sm:text-7xl lg:text-8xl">
            Your day.
            <br />
            Your coast.
          </h2>

          <p className="mx-auto mt-7 max-w-xl text-sm leading-8 text-white/60 sm:text-base">
            Tell us about your celebration and our team can help you explore
            what is possible at Blue Marlin.
          </p>

          <Link
            href="/contact"
            className="mt-9 inline-flex border border-[#d8c3a5] bg-[#d8c3a5] px-7 py-4 text-[10px] font-medium uppercase tracking-[0.2em] text-[#082f49] transition-colors hover:bg-transparent hover:text-[#f6f1e8]"
          >
            Enquire About Your Wedding
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
