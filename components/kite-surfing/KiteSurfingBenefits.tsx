import Reveal from "@/components/ui/Reveal";
import { kiteSurfingDetails } from "@/data/kite-surfing";

export default function KiteSurfingBenefits() {
  return (
    <section className="bg-[#082f49] py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
        <Reveal>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#b99a62]">
                Included in the experience
              </p>

              <h2 className="mt-4 font-display text-5xl leading-[0.92] tracking-tight text-[#fffdf9] sm:text-6xl">
                More time on the water.
              </h2>

              <p className="mt-6 max-w-md text-sm leading-7 text-[#fffdf9]/60">
                Stay at Blue Marlin and keep the ocean close. From lessons and
                equipment to practical support for independent riders, the
                centre is designed around time spent enjoying the water.
              </p>
            </div>

            <div className="grid border-t border-[#fffdf9]/15 sm:grid-cols-2">
              {kiteSurfingDetails.map((detail, index) => (
                <div
                  key={detail.label}
                  className="border-b border-[#fffdf9]/15 py-7 sm:px-7"
                >
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#b99a62]">
                    {detail.label}
                  </p>

                  <p className="mt-3 font-display text-2xl text-[#fffdf9] sm:text-3xl">
                    {detail.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
