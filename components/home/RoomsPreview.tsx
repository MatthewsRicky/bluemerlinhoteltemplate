import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { rooms } from "@/data/rooms";

export default function RoomsPreview() {
  return (
    <section className="overflow-hidden bg-[#fffdf9] py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
        <Reveal>
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Stay with us"
              title="Rooms made for coastal living."
              description="Choose from comfortable sea-view rooms and spacious suites designed for couples, families and longer stays."
            />

            <Link
              href="/rooms"
              className="w-fit shrink-0 border-b border-[#082f49]/25 pb-2 text-[10px] font-medium uppercase tracking-[0.2em] text-[#082f49] transition-colors hover:border-[#082f49]"
            >
              Explore all rooms
            </Link>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rooms.slice(0, 5).map((room, index) => (
            <Reveal key={room.slug} delay={index * 0.07} y={25}>
              <Link href={`/rooms/${room.slug}`} className="group block">
                <div className="relative aspect-[4/5] overflow-hidden bg-[#f6f1e8]">
                  <Image
                    src={room.featuredImage}
                    alt={room.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                <div className="border-b border-[#082f49]/10 py-5">
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <h3 className="font-display text-3xl leading-none text-[#082f49]">
                        {room.name}
                      </h3>

                      <p className="mt-3 max-w-sm text-sm leading-6 text-[#1d2529]/55">
                        {room.shortDescription}
                      </p>
                    </div>

                    <span className="pt-1 text-[#b99a62] transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
