import Image from "next/image";
import Link from "next/link";
import type { Room } from "@/data/rooms";

type RoomCardProps = {
  room: Room;
};

export default function RoomCard({ room }: RoomCardProps) {
  return (
    <Link href={`/rooms/${room.slug}`} className="group block">
      <div className="relative aspect-[4/5] overflow-hidden bg-[#f6f1e8]">
        <Image
          src={room.featuredImage}
          alt={room.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      <div className="border-b border-[#082f49]/10 py-5">
        <div className="flex items-start justify-between gap-5">
          <div>
            <p className="text-[9px] uppercase tracking-[0.22em] text-[#b99a62]">
              {room.location}
            </p>

            <h2 className="mt-3 font-display text-3xl leading-none text-[#082f49]">
              {room.name}
            </h2>

            <p className="mt-3 max-w-lg text-sm leading-7 text-[#1d2529]/55">
              {room.shortDescription}
            </p>
          </div>

          <span className="pt-1 text-[#b99a62] transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </div>
      </div>
    </Link>
  );
}
