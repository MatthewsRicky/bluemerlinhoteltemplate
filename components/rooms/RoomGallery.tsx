import Image from "next/image";

type RoomGalleryProps = {
  images: string[];
  roomName: string;
};

export default function RoomGallery({ images, roomName }: RoomGalleryProps) {
  if (!images.length) {
    return null;
  }

  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {images.map((image, index) => (
        <div
          key={`${image}-${index}`}
          className={`relative overflow-hidden bg-[#f6f1e8] ${
            index === 0
              ? "aspect-[4/5] sm:row-span-2 sm:aspect-auto"
              : "aspect-[4/3]"
          }`}
        >
          <Image
            src={image}
            alt={`${roomName} — image ${index + 1}`}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 50vw"
          />
        </div>
      ))}
    </div>
  );
}
