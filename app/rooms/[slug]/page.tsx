import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getRoomBySlug, rooms } from "@/data/rooms";
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

export async function generateMetadata({
  params,
}: RoomPageProps): Promise<Metadata> {
  const { slug } = await params;

  const room = getRoomBySlug(slug);

  if (!room) {
    return {};
  }

  return {
    title: `${room.name} | Rooms & Suites`,
    description: room.shortDescription,

    alternates: {
      canonical: `/rooms/${room.slug}`,
    },

    openGraph: {
      title: `${room.name} | Blue Marlin Beach Hotel`,
      description: room.shortDescription,
      type: "website",
      images: [
        {
          url: room.featuredImage,
          alt: room.name,
        },
      ],
    },
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

      <RoomGallery images={room.gallery} roomName={room.name} />
    </main>
  );
}
