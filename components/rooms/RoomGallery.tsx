import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

type RoomGalleryProps = {
  images: string[];
  roomName: string;
};

export default function RoomGallery({ images, roomName }: RoomGalleryProps) {
  if (!images.length) {
    return null;
  }

  return (
    <section className="bg-[#fffdf9] py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
        <Reveal>
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#b99a62]">
                Explore the room
              </p>

              <h2 className="mt-4 font-display text-4xl leading-none text-[#082f49] sm:text-5xl lg:text-6xl">
                See more of your stay.
              </h2>
            </div>

            <p className="hidden max-w-xs text-right text-sm leading-6 text-[#1d2529]/50 sm:block">
              Explore the room, its details and the spaces around it.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <Reveal key={image} delay={Math.min(index * 0.025, 0.25)}>
              <div
                className={`relative overflow-hidden bg-[#f6f1e8] ${
                  index === 0
                    ? "aspect-[4/3] sm:col-span-2 sm:row-span-2 sm:aspect-auto"
                    : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={image}
                  alt={`${roomName} — gallery image ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-[1.025]"
                  sizes={
                    index === 0
                      ? "(max-width: 640px) 100vw, (max-width: 1024px) 66vw, 66vw"
                      : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  }
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
