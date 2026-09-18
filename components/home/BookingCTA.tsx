import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

export default function BookingCTA() {
  return (
    <section className="overflow-hidden bg-[#082f49] py-24 text-[#f6f1e8] sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1200px] px-5 text-center sm:px-8 lg:px-10">
        <Reveal y={30}>
          <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#d8c3a5]">
            Your Diani escape
          </p>

          <h2 className="mx-auto mt-5 max-w-4xl font-display text-6xl leading-[0.85] sm:text-7xl lg:text-8xl">
            Stay a little longer.
          </h2>

          <p className="mx-auto mt-7 max-w-xl text-sm leading-8 text-white/60 sm:text-base">
            Wake up by the ocean, spend the day your way and let the South Coast
            set the pace.
          </p>

          <Link
            href="/book"
            className="mt-9 inline-flex border border-[#d8c3a5] bg-[#d8c3a5] px-7 py-4 text-[10px] font-medium uppercase tracking-[0.2em] text-[#082f49] transition-colors hover:bg-transparent hover:text-[#f6f1e8]"
          >
            Book Your Stay
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
