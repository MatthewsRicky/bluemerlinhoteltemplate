import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import type { Room } from "@/data/rooms";
import RoomAmenities from "./RoomAmenities";
import RoomGallery from "./RoomGallery";

type RoomDetailsProps = {
  room: Room;
};

export default function RoomDetails({ room }: RoomDetailsProps) {
  return (
    <>
      <section className="overflow-hidden bg-[#f6f1e8] pt-32 sm:pt-40 lg:pt-44">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
          <Reveal y={30}>
            <Link
              href="/rooms"
              className="text-[9px] font-medium uppercase tracking-[0.22em] text-[#082f49]/50 transition-colors hover:text-[#082f49]"
            >
              ← Back to rooms
            </Link>
          </Reveal>

          <div className="mt-10 grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:items-end lg:gap-20">
            <Reveal y={30}>
              <div className="pb-3">
                <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#b99a62]">
                  {room.location}
                </p>

                <h1 className="mt-5 font-display text-6xl leading-[0.82] text-[#082f49] sm:text-7xl lg:text-8xl">
                  {room.name}
                </h1>

                <p className="mt-7 max-w-md text-sm leading-8 text-[#1d2529]/60 sm:text-base">
                  {room.description}
                </p>

                <Link
                  href="/book"
                  className="mt-8 inline-flex bg-[#082f49] px-6 py-4 text-[10px] font-medium uppercase tracking-[0.2em] text-[#f6f1e8] transition-colors hover:bg-[#0f4c5c]"
                >
                  Enquire about this room
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.1} y={35}>
              <div className="relative aspect-[4/3] overflow-hidden bg-[#fffdf9]">
                <Image
                  src={room.featuredImage}
                  alt={room.name}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 70vw"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-[#fffdf9] py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <Reveal y={30}>
              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#b99a62]">
                  At a glance
                </p>

                <h2 className="mt-5 font-display text-5xl leading-[0.88] text-[#082f49] sm:text-6xl">
                  Everything
                  <br />
                  you need.
                </h2>

                <div className="mt-8 space-y-4 border-t border-[#082f49]/15 pt-6">
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.2em] text-[#b99a62]">
                      Capacity
                    </p>
                    <p className="mt-2 text-sm text-[#082f49]">
                      {room.capacity}
                    </p>
                  </div>

                  <div>
                    <p className="text-[9px] uppercase tracking-[0.2em] text-[#b99a62]">
                      Beds
                    </p>
                    <p className="mt-2 text-sm text-[#082f49]">{room.beds}</p>
                  </div>

                  <div>
                    <p className="text-[9px] uppercase tracking-[0.2em] text-[#b99a62]">
                      Setting
                    </p>
                    <p className="mt-2 text-sm text-[#082f49]">
                      {room.location}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1} y={30}>
              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#b99a62]">
                  Room amenities
                </p>

                <div className="mt-6">
                  <RoomAmenities amenities={room.amenities} />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {room.gallery.length > 1 && (
        <section className="overflow-hidden bg-[#f6f1e8] py-24 sm:py-32 lg:py-40">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
            <Reveal>
              <div className="mb-12">
                <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#b99a62]">
                  Gallery
                </p>

                <h2 className="mt-5 font-display text-5xl leading-none text-[#082f49] sm:text-6xl">
                  See the space.
                </h2>
              </div>
            </Reveal>

            <RoomGallery images={room.gallery} roomName={room.name} />
          </div>
        </section>
      )}

      <section className="overflow-hidden bg-[#082f49] py-24 text-[#f6f1e8] sm:py-32 lg:py-40">
        <div className="mx-auto max-w-[1000px] px-5 text-center sm:px-8 lg:px-10">
          <Reveal y={30}>
            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#d8c3a5]">
              Plan your stay
            </p>

            <h2 className="mt-5 font-display text-6xl leading-[0.85] sm:text-7xl">
              Ready for Diani?
            </h2>

            <p className="mx-auto mt-7 max-w-lg text-sm leading-8 text-white/60 sm:text-base">
              Tell us when you'd like to visit and our reservations team can
              help you plan your stay.
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
    </>
  );
}
