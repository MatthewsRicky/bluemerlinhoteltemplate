import { notFound } from "next/navigation";
import { rooms, getRoomBySlug } from "@/data/rooms";
import RoomDetails from "@/components/rooms/RoomDetails";
import RoomGallery from "@/components/rooms/RoomGallery";

type RoomPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return rooms.map((room) => ({
    slug: room.slug,
  }));
}

export default async function RoomPage({ params }: RoomPageProps) {
  const { slug } = await params;

  const room = getRoomBySlug(slug);

  if (!room) {
    notFound();
  }

  return (
    <main>
      <RoomDetails room={room} />
      <RoomGallery images={room.gallery} roomName={room.name} />
    </main>
  );
}
