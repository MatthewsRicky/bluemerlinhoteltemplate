export type WellnessExperience = {
  title: string;
  description: string;
  image: string;
};

export const spaExperiences: WellnessExperience[] = [
  {
    title: "Massage",
    description:
      "Slow down with a restorative massage designed to help you settle into the relaxed rhythm of the coast.",
    image: "/images/wellness/massage.avif",
  },
  {
    title: "Aromatherapy",
    description:
      "A sensory wellness experience combining soothing aromas with time dedicated to rest and relaxation.",
    image: "/images/wellness/aromatherapy.avif",
  },
  {
    title: "Jacuzzi",
    description:
      "Take some time to unwind and enjoy a slower moment between the beach and your next adventure.",
    image: "/images/wellness/jacuzzi.avif",
  },
  {
    title: "Steam Cabin",
    description:
      "A warm, calming space to relax and reset after a day in the sun or on the water.",
    image: "/images/wellness/steam.avif",
  },
];
