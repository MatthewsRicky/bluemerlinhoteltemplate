import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { rooms, getRoomBySlug } from "@/data/rooms";
import RoomDetails from "@/components/rooms/RoomDetails";

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

export async function generateMetadata({
  params,
}: RoomPageProps): Promise<Metadata> {
  const { slug } = await params;
  const room = getRoomBySlug(slug);

  if (!room) {
    return {};
  }

  return {
    title: room.name,
    description: room.shortDescription,
  };
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
    </main>
  );
}
