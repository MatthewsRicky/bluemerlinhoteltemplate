import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

export default function WeddingsPreview() {
  return (
    <section className="overflow-hidden bg-[#fffdf9] py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
        <Reveal y={30}>
          <div className="relative overflow-hidden bg-[#082f49] text-[#f6f1e8]">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
              <div className="relative min-h-[500px]">
                <Image
                  src="/images/weddings/blue-marlin-wedding.avif"
                  alt="Beach wedding at Blue Marlin Beach Hotel"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </div>

              <div className="flex items-center px-7 py-14 sm:px-10 lg:px-14">
                <div className="max-w-md">
                  <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#d8c3a5]">
                    Weddings by the sea
                  </p>

                  <h2 className="mt-5 font-display text-5xl leading-[0.88] sm:text-6xl">
                    Say yes
                    <br />
                    by the ocean.
                  </h2>

                  <p className="mt-7 text-sm leading-8 text-white/65">
                    Celebrate surrounded by sand, sea and the warm atmosphere of
                    Diani Beach.
                  </p>

                  <Link
                    href="/weddings"
                    className="mt-8 inline-flex border border-[#d8c3a5] px-6 py-4 text-[10px] font-medium uppercase tracking-[0.2em] text-[#f6f1e8] transition-colors hover:bg-[#d8c3a5] hover:text-[#082f49]"
                  >
                    Explore Weddings
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
