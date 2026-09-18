import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

export default function WellnessCTA() {
  return (
    <section className="overflow-hidden bg-[#d8c3a5] py-28 text-[#082f49] sm:py-36 lg:py-44">
      <div className="mx-auto max-w-[1000px] px-5 text-center sm:px-8 lg:px-10">
        <Reveal y={30}>
          <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#082f49]/60">
            Your time
          </p>

          <h2 className="mt-5 font-display text-6xl leading-[0.85] sm:text-7xl lg:text-8xl">
            Leave with a
            <br />
            little more calm.
          </h2>

          <p className="mx-auto mt-7 max-w-xl text-sm leading-8 text-[#082f49]/65 sm:text-base">
            Make space for rest, movement and the simple pleasure of having
            nowhere else to be.
          </p>

          <Link
            href="/book"
            className="mt-9 inline-flex bg-[#082f49] px-7 py-4 text-[10px] font-medium uppercase tracking-[0.2em] text-[#f6f1e8] transition-colors hover:bg-[#0f4c5c]"
          >
            Plan Your Stay
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
