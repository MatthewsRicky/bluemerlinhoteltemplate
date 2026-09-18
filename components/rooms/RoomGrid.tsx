import Reveal from "@/components/ui/Reveal";
import RoomCard from "./RoomCard";
import { rooms } from "@/data/rooms";

export default function RoomGrid() {
  return (
    <section className="overflow-hidden bg-[#f6f1e8] py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
        <div className="grid gap-x-8 gap-y-16 md:grid-cols-2 lg:gap-x-10 lg:gap-y-20">
          {rooms.map((room, index) => (
            <Reveal key={room.slug} delay={index * 0.06} y={25}>
              <RoomCard room={room} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
