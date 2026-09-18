import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

export default function DiningCTA() {
  return (
    <section className="relative overflow-hidden bg-[#082f49] py-28 text-[#f6f1e8] sm:py-36 lg:py-44">
      <Image
        src="/images/dining/blue-marlin-restaurant.jpg"
        alt=""
        fill
        className="object-cover opacity-35"
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-[#082f49]/70" />

      <div className="relative z-10 mx-auto max-w-[1000px] px-5 text-center sm:px-8 lg:px-10">
        <Reveal y={30}>
          <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#d8c3a5]">
            Blue Marlin Beach Restaurant
          </p>

          <h2 className="mt-5 font-display text-6xl leading-[0.85] sm:text-7xl lg:text-8xl">
            Dinner by
            <br />
            the ocean.
          </h2>

          <p className="mx-auto mt-7 max-w-xl text-sm leading-8 text-white/60 sm:text-base">
            Explore the full menu, discover the restaurant and request a table
            directly through the dedicated restaurant website.
          </p>

          <a
            href="https://www.bluemarlinbeachrestaurant.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex border border-[#d8c3a5] bg-[#d8c3a5] px-7 py-4 text-[10px] font-medium uppercase tracking-[0.2em] text-[#082f49] transition-colors hover:bg-transparent hover:text-[#f6f1e8]"
          >
            Visit Blue Marlin Restaurant
          </a>
        </Reveal>
      </div>
    </section>
  );
}
