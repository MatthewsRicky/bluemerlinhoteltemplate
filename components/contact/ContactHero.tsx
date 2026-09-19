import Reveal from "@/components/ui/Reveal";

export default function ContactHero() {
  return (
    <section className="bg-[#082f49] pb-20 pt-40 text-[#f6f1e8] sm:pb-24 sm:pt-48">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
        <Reveal y={30}>
          <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#d8c3a5]">
            Get in touch
          </p>
        </Reveal>

        <Reveal delay={0.08} y={35}>
          <h1 className="mt-5 max-w-5xl font-display text-6xl leading-[0.82] tracking-tight sm:text-8xl lg:text-[8.5rem]">
            We'd love
            <br />
            to hear from you.
          </h1>
        </Reveal>

        <Reveal delay={0.16} y={25}>
          <p className="mt-7 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
            Questions about staying with us, weddings, dining or experiences
            around Diani? Get in touch with the Blue Marlin team.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
