import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

const images = [
  {
    src: "/images/gallery/blue-marlin-gallery-05.avif",
    alt: "Blue Marlin Beach Hotel",
  },
  {
    src: "/images/gallery/blue-marlin-gallery-02.avif",
    alt: "Blue Marlin Beach Hotel",
  },
  {
    src: "/images/gallery/blue-marlin-gallery-03.avif",
    alt: "Blue Marlin Beach Hotel",
  },
  {
    src: "/images/gallery/blue-marlin-gallery-04.avif",
    alt: "Blue Marlin Beach Hotel",
  },
];

export default function GalleryPreview() {
  return (
    <section className="overflow-hidden bg-[#f6f1e8] py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
        <Reveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#b99a62]">
                The gallery
              </p>

              <h2 className="mt-5 font-display text-5xl leading-[0.9] text-[#082f49] sm:text-6xl">
                A little taste
                <br />
                of Diani.
              </h2>
            </div>

            <Link
              href="/gallery"
              className="w-fit border-b border-[#082f49]/25 pb-2 text-[10px] font-medium uppercase tracking-[0.2em] text-[#082f49]"
            >
              View gallery
            </Link>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4 lg:gap-6">
          {images.map((image, index) => (
            <Reveal key={image.src} delay={index * 0.05} y={20}>
              <Link href="/gallery" className="group block">
                <div className="relative aspect-[3/4] overflow-hidden bg-[#fffdf9]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    sizes="(max-width: 640px) 50vw, 25vw"
                  />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
