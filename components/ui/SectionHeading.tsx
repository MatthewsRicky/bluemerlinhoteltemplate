type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div
      className={`max-w-2xl ${centered ? "mx-auto text-center" : "text-left"}`}
    >
      {eyebrow && (
        <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.28em] text-[#b99a62]">
          {eyebrow}
        </p>
      )}

      <h2 className="font-display text-4xl leading-[0.95] tracking-tight text-[#082f49] sm:text-5xl lg:text-6xl">
        {title}
      </h2>

      {description && (
        <p className="mt-6 max-w-xl text-sm leading-7 text-[#1d2529]/65 sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}
