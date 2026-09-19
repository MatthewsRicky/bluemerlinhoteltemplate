import Reveal from "@/components/ui/Reveal";

const weddingDetails = [
  {
    number: "01",
    title: "Beachfront setting",
    description:
      "A natural oceanfront backdrop for ceremonies, photographs and celebrations.",
  },
  {
    number: "02",
    title: "Stay together",
    description:
      "Accommodation at the hotel makes it possible for your celebration to extend beyond the ceremony itself.",
  },
  {
    number: "03",
    title: "Dining by the ocean",
    description:
      "The Blue Marlin Beach Restaurant provides a natural setting for meals, drinks and time together.",
  },
  {
    number: "04",
    title: "Make it yours",
    description:
      "Speak with the hotel about your plans, guest numbers and the details that matter most to your celebration.",
  },
];

export default function WeddingDetails() {
  return (
    <section className="overflow-hidden bg-[#f6f1e8] py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
        <Reveal y={30}>
          <div className="max-w-2xl">
            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#b99a62]">
              The experience
            </p>

            <h2 className="mt-5 font-display text-5xl leading-[0.88] text-[#082f49] sm:text-6xl lg:text-7xl">
              Everything in
              <br />
              one place.
            </h2>
          </div>
        </Reveal>

        <div className="mt-16 border-t border-[#082f49]/15 lg:mt-24">
          {weddingDetails.map((item, index) => (
            <Reveal key={item.number} delay={index * 0.06} y={20}>
              <div className="grid gap-5 border-b border-[#082f49]/10 py-8 sm:grid-cols-[80px_0.8fr_1.2fr] sm:items-start sm:gap-10 lg:py-10">
                <span className="text-[9px] uppercase tracking-[0.2em] text-[#b99a62]">
                  {item.number}
                </span>

                <h3 className="font-display text-3xl leading-none text-[#082f49] sm:text-4xl">
                  {item.title}
                </h3>

                <p className="max-w-lg text-sm leading-7 text-[#1d2529]/55">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
