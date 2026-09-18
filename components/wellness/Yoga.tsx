import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

export default function Yoga() {
  return (
    <section className="overflow-hidden bg-[#082f49] text-[#f6f1e8]">
      <div className="grid lg:grid-cols-2">
        <Reveal y={30}>
          <div className="relative min-h-[500px] lg:min-h-[720px]">
            <Image
              src="/images/wellness/blue-marlin-wellness.avif"
              alt="Yoga by the coast at Blue Marlin Beach Hotel"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />

            <div className="absolute inset-0 bg-[#082f49]/10" />
          </div>
        </Reveal>

        <div className="flex items-center">
          <div className="px-5 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-32 xl:px-24">
            <Reveal delay={0.1} y={30}>
              <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#d8c3a5]">
                Yoga
              </p>

              <h2 className="mt-5 max-w-lg font-display text-5xl leading-[0.88] sm:text-6xl lg:text-7xl">
                Start slowly.
                <br />
                Breathe deeply.
              </h2>

              <p className="mt-7 max-w-lg text-sm leading-8 text-white/60 sm:text-base">
                Begin the day with movement and stillness. Private or group yoga
                sessions offer a chance to reconnect with yourself while
                surrounded by the atmosphere of the coast.
              </p>

              <div className="mt-10 grid gap-5 border-t border-white/15 pt-6 sm:grid-cols-2">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-[#d8c3a5]">
                    Private
                  </p>

                  <p className="mt-2 text-sm text-white/65">
                    Personal yoga sessions.
                  </p>
                </div>

                <div>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-[#d8c3a5]">
                    Group
                  </p>

                  <p className="mt-2 text-sm text-white/65">
                    Shared sessions for guests.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
