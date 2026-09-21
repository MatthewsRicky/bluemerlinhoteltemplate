import Image from "next/image";
import Link from "next/link";
import type { Room } from "@/data/rooms";
import Reveal from "@/components/ui/Reveal";

type RoomCardProps = {
  room: Room;
  index?: number;
};

export default function RoomCard({ room, index = 0 }: RoomCardProps) {
  return (
    <Reveal delay={index * 0.06}>
      <Link href={`/rooms/${room.slug}`} className="group block">
        <div className="relative aspect-[4/3] overflow-hidden bg-[#f6f1e8]">
          <Image
            src={room.featuredImage}
            alt={room.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#082f49]/70 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />

          <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-7">
            <p className="text-[9px] uppercase tracking-[0.22em] text-[#d8c3a5]">
              {room.location}
            </p>

            <h3 className="mt-2 font-display text-3xl sm:text-4xl">
              {room.name}
            </h3>

            <p className="mt-3 max-w-md text-sm leading-6 text-white/70">
              {room.shortDescription}
            </p>

            <span className="mt-5 inline-flex text-[9px] font-medium uppercase tracking-[0.2em] text-white/80 transition-colors group-hover:text-[#d8c3a5]">
              Explore room
            </span>
          </div>
        </div>
      </Link>
    </Reveal>
  );
}
