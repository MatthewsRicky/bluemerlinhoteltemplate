import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { galleryImages } from "@/data/gallery";

export default function GalleryGrid() {
  return (
    <section className="overflow-hidden bg-[#f6f1e8] py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-12 lg:gap-6">
          {galleryImages.map((image, index) => {
            const layouts = [
              "col-span-2 lg:col-span-7 lg:row-span-2",
              "col-span-1 lg:col-span-5",
              "col-span-1 lg:col-span-5",
              "col-span-2 lg:col-span-5",
              "col-span-1 lg:col-span-4",
              "col-span-1 lg:col-span-4",
              "col-span-1 lg:col-span-4",
              "col-span-1 lg:col-span-4",
            ];

            return (
              <Reveal
                key={`${image.src}-${index}`}
                delay={index * 0.04}
                y={20}
                className={layouts[index] ?? "col-span-1"}
              >
                <div
                  className={`relative overflow-hidden bg-[#fffdf9] ${
                    index === 0
                      ? "aspect-[4/5] lg:h-full lg:min-h-[700px]"
                      : index === 3
                        ? "aspect-[16/10]"
                        : "aspect-[4/3]"
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                    sizes={
                      index === 0
                        ? "(max-width: 1024px) 100vw, 60vw"
                        : "(max-width: 1024px) 50vw, 40vw"
                    }
                  />

                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/45 to-transparent p-5 pt-16">
                    <p className="text-[9px] uppercase tracking-[0.22em] text-white/75">
                      {image.category}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
